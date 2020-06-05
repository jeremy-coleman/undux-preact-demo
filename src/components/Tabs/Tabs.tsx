/* eslint-disable jsx-a11y/anchor-is-valid */
import { ComponentChildren, h } from 'preact';
import './Tabs.css';

type Props<T extends ComponentChildren> = {
  activeItem: T | null
  getText?(item: T): string
  items: T[]
  onClick(item: T): void
}

export function Tabs<T extends ComponentChildren>(props: Props<T>) {
  return <ul className='Tabs'>
    {props.items.map(_ =>
      <li className={'Tab' + (_ === props.activeItem ? ' -Active' : '')} key={_.toString()}>
        <a href='#' onClick={e => {
          e.preventDefault()
          props.onClick(_)
        }}>{props.getText ? props.getText(_) : _}</a>
      </li>
    )}
  </ul>
}
