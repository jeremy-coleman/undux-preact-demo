ts
```ts
import Preact from 'preact'
import Store, { StoreProps } from './MyStore'

class MyComponent extends Preact.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
}

export default Store.withStore(MyComponent)
```

flow
```js
import type { StoreProps } from './MyStore'
import Preact from 'preact'
import Store from './MyStore'

class MyComponent extends Preact.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
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
      Bar: {this.props.store.get('bar').join(', ')}
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

var MyComponent = createReactClass({
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```