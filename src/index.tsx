import 'preact/devtools'
import { h, render } from 'preact';
import { App } from './components/App/App';


render(<App />,document.getElementById('root'))

//import registerServiceWorker from './services/registerServiceWorker';
//registerServiceWorker()

if(module["hot"])module["hot"].accept()