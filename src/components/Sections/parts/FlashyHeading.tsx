import { FunctionalComponent, h } from 'preact';
import './FlashyHeading.css';

export let FlashyHeading: FunctionalComponent = ({ children }) =>
  <span className='FlashyHeading'>
    <h3>{children}</h3>
  </span>
