import * as Preact from 'preact';
import { h, render } from 'preact';
import { App } from './components/App/App';
import registerServiceWorker from './services/registerServiceWorker';

//@ts-ignore
window.React = Preact
//@ts-ignore
window.h = h

render(<App />,document.getElementById('root'))
//registerServiceWorker()

if(module["hot"])module["hot"].accept()