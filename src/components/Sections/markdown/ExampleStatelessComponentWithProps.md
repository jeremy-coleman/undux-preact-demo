ts
```ts
import Preact from 'preact'
import Store from './MyStore'

type Props = {
  baz: number
}

function MyComponent({ baz }: Props) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
}

export default MyComponent
```

flow
```js
import Preact from 'preact'
import Store from './MyStore'

type Props = {|
  baz: number
|}

function MyComponent({ baz }: Props) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
}

export default MyComponent
```

es6
```js
import Preact from 'preact'
import Store from './MyStore'

function MyComponent({ baz }) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
})

export default MyComponent
```

es5
```js
var Preact = require('react')
var Store = require('./MyStore')

function MyComponent(props) {
  var store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {props.baz}
  </>
}

module.exports = MyComponent
```
