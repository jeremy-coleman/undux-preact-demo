ts
```tsx
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

flow
```js
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

es6
```js
import Preact from 'preact'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends Preact.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

es5
```js
var Preact = require('react')
var MyComponent = require('./MyComponent')
var Store = require('./MyStore')

function App() {
  return <Store.Container>
    <MyComponent />
  </Store.Container>
}

module.exports = App
```
