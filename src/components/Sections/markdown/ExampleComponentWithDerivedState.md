ts
```ts
import Preact from 'preact'
import Store, { StoreProps } from './MyStore'

class MyComponent extends Preact.Component<StoreProps> {
  render() {
    return <>
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
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
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
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
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
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
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```