import { h } from 'preact';
import { Hash, Sun, Zap } from 'preact-feather';
import { Logo } from '../Logo/Logo';

import '../Code/Code.css';
import './Header.css';
import './SplashInstallInfo.css';
import './SplashNav.css';
import './SplashPage.css';


export function Header() {
  return <header className='Header'>
    <Logo />
    <h2>Dead simple state management for PreactJS</h2>
  </header>
}



function SplashInstallInfo() {
  return <span className='Code SplashInstallInfo'>
    <span className='CodeBlock'>
      <input
        onClick={(e: any) => e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)}
        readOnly={true}
        value='npm install undux rxjs'
      />
    </span>
  </span>
}


function SplashNav() {
  return <nav className='SplashNav'>
    <ul>
      <li><a href='#quick-start'><Zap className='Icon' size={36} />Quick Start</a></li>
      <li><a href='#api'><Hash className='Icon' size={36} />API</a></li>
      <li><a href='#examples'><Sun className='Icon' size={36} />Examples & Usage</a></li>
    </ul>
  </nav>
}


export function SplashPage() {
  return <div className='SplashPage'>
    <Header />
    <div className='About'>
      <h3>Undux is a simple & typesafe alternative to <a href='https://facebook.github.io/flux/'>Flux</a> and <a href='https://redux.js.org/'>Redux</a>. Use it to manage state and data for PreactJS applications of all sizes.</h3>
    </div>
    <SplashInstallInfo />
    <SplashNav />
  </div>
}
