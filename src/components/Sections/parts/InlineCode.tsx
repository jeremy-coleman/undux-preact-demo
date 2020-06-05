import { FunctionalComponent, h } from 'preact';
import './InlineCode.css';

export const InlineCode: FunctionalComponent = props =>
  <code className='InlineCode'>{props.children}</code>
