ts
```ts
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default MyApp
```

flow
```js
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default MyApp
```

es6
```js
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default MyApp
```

es5
```js
var createReactClass = require('create-react-class')
var Preact = require('react')
var MyComponent = require('./MyComponent')
var Store = require('./MyStore')

var MyApp = createReactClass({
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
})

module.exports = MyApp
```