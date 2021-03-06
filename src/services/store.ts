import { createConnectedStore, Effects, Store as StoreType, withLogger } from 'undux'
import { Language, Route } from '../datatypes'
import { withEffects } from './effects'
import { withHashSync } from './hashSync'

type State = {
  isMenuOpen: boolean
  language: Language
  route: [Route] | [Route, string]
}

let initialState: State = {
  isMenuOpen: false,
  language: 'TypeScript',
  route: ['']
}

let initialStateFromLocalStorage = localStorage.getItem('undux-store')

if (initialStateFromLocalStorage) {
  initialState = {
    ...initialState,
    ...JSON.parse(initialStateFromLocalStorage)
  }
}

export let {Container, useStore} = createConnectedStore(
  initialState,
  s => withLogger(withHashSync(withEffects(s)))
)

export type Store = StoreType<State>

export type StoreEffects = Effects<State>
