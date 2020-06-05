import { Subscription } from 'rxjs'
import { createStore, Effects, Store, StoreDefinition, StoreSnapshot } from './store'
import { Diff, getDisplayName } from './utils'
import {h, ComponentType, FunctionalComponent, Component, createContext, JSX} from 'preact'
import { useContext } from 'preact/hooks';

export type Connect<State extends object> = {
  Container: ComponentType<ContainerProps<State>>
  useStore(): Store<State>
  withStore: <Props extends { store: Store<State> }>(
    Component: ComponentType<Props>
  ) => ComponentType<Diff<Props, { store: Store<State> }>>
}

export type ContainerProps<State extends object> = {
  effects?: Effects<State>
  initialState?: State
}

export function createConnectedStore<State extends object>(
  initialState: State,
  effects?: Effects<State>
): Connect<State> {
  let Context = createContext({ __MISSING_PROVIDER__: true } as any)

  type ContainerState = {
    storeSnapshot: StoreSnapshot<State>
  }

  class Container extends Component<
    ContainerProps<State>,
    ContainerState
  > {
    subscription: Subscription
    storeDefinition: StoreDefinition<State>
    constructor(props: ContainerProps<State>) {
      super(props)

      // Create store definition from initial state
      let state = props.initialState || initialState
      this.storeDefinition = createStore(state)

      // Apply effects?
      let fx = props.effects || effects
      if (fx) {
        fx(this.storeDefinition)
      }

      this.state = {
        storeSnapshot: this.storeDefinition.getCurrentSnapshot()
      }

      this.subscription = this.storeDefinition.onAll().subscribe(() =>
        this.setState({
          storeSnapshot: this.storeDefinition.getCurrentSnapshot()
        })
      )
    }
    componentWillUnmount() {
      this.subscription.unsubscribe()
      // Let the state get GC'd.
      // TODO: Find a more elegant way to do this.
      ; (this.storeDefinition as any).storeSnapshot = null
      ; (this as any).storeDefinition = null
    }
    render() {
      return (
        <Context.Provider value={this.state.storeSnapshot}>
          {this.props.children}
        </Context.Provider>
      )
    }
  }

  type P = 
  {
    children: (store: StoreSnapshot<State>) => JSX.Element
    displayName: string
  }
  
  let Consumer = (props:P) => (
    <Context.Consumer>
      {store => {
        if (!isInitialized(store)) {
          throw Error(
            `[Undux] Component "${
              props.displayName
            }" does not seem to be nested in an Undux <Container>. To fix this error, be sure to render the component in the <Container>...</Container> component that you got back from calling createConnectedStore().`
          )
        }
        return props.children(store)
      }}
    </Context.Consumer>
  )

  function withStore<
    Props extends { store: Store<State> },
    PropsWithoutStore = Diff<Props, { store: Store<State> }>
  >(
    Component: ComponentType<Props>
  ): ComponentType<PropsWithoutStore> {
    let displayName = getDisplayName(Component as any)
    let f: FunctionalComponent<PropsWithoutStore> = props => (
      <Consumer displayName={displayName}>
        {storeSnapshot => <Component store={storeSnapshot} {...props as any} />}
      </Consumer>
    )
    f.displayName = `withStore(${displayName})`
    return f
  }

  return {
    Container,
    useStore() {
      return useContext(Context)
    },
    withStore
  }
}

function isInitialized<State extends object>(
  store: StoreSnapshot<State> | { __MISSING_PROVIDER__: true }
) {
  return !('__MISSING_PROVIDER__' in store)
}