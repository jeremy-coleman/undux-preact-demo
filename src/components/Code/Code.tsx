import { FunctionalComponent, h } from 'preact';
import './Code.css';

export let Code: FunctionalComponent = props =>
  <div className='Code'>
    <span className='CodeBlock'>{props.children}</span>
  </div>
