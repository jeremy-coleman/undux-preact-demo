/* eslint-disable jsx-a11y/anchor-is-valid */
import { h } from 'preact';
import { ExternalLink as _ExternalLink, Github } from 'preact-feather';
import { ROUTES } from '../../constants';
import { useStore } from '../../services/store';
import { Logo } from '../Logo/Logo';
import './SideNav.css';

let ExternalLink: any = _ExternalLink

export function SideNav() {
  let store = useStore()
  return <nav className={'SideNav' + (store.get('isMenuOpen') ? ' -Open' : '')}>
    <a href="#" onClick={() => store.set('route')([''])}>
      <Logo />
    </a>
    <ul>
      {ROUTES.map(([route, text, subroutes]) =>
        <li key={route}>
          <a
            className={route === store.get('route')[0] && (!store.get('route')[1] || !subroutes.length) ? '-Active' : ''}
            href={'#' + route}
          >{text}</a>
          <ul>
            {subroutes.map(([subroute, subtext, deprecated]) => {
              let isActive = store.get('route')[1]
                && route === store.get('route')[0]
                && subroute === store.get('route')[1]
              return <li key={subroute}>
                <a
                  className={(isActive ? '-Active' : '') + (deprecated ? ' -Deprecated' : '')}
                  href={'#' + route + '/' + subroute}
                >
                  {subtext}
                </a>
              </li>
            })}
          </ul>
        </li>
      )}
      <li><a href='https://github.com/bcherny/undux'><Github />Github<ExternalLink className='Right' /></a></li>
    </ul>
  </nav>
}
