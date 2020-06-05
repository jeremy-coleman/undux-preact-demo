ts
```ts
import Preact from 'preact'
import Store, {StoreProps} from './MyStore'

type Props = StoreProps & {
  baz: number
}

class MyComponent extends Preact.Component<Props> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
}

export default Store.withStore(MyComponent)
```

flow
```js
import Preact from 'preact'
import type { StoreProps } from './MyStore'
import Store from './MyStore'

type Props = {|
  ...StoreProps,
  baz: number
|}

class MyComponent extends Preact.Component<Props> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es6
```js
import Preact from 'preact'
import Store from './MyStore'

class MyComponent extends Preact.Component {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es5
```js
var createReactClass = require('create-react-class')
var Preact = require('react')
var Store = require('./MyStore')

var Component = createReactClass({
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```
