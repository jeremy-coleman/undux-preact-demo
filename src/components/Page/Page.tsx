import { h, VNode } from 'preact';
import { Menu } from 'preact-feather';
import { ROUTES } from '../../constants';
import { useStore } from '../../services/store';
import { LanguageToggler } from './LanguageToggler';
import { MainSection } from './MainSection';
import { PageHeading } from './PageHeading';
import { SideNav } from '../SideNav/SideNav';
import './Page.css';

export function Page(props: {children: VNode}) {
  let store = useStore()
  function toggleMenu() {
    store.set('isMenuOpen')(!store.get('isMenuOpen'))
  }
  return (
    <div className='Page'>
      <button className='ToggleNav' onClick={toggleMenu}>
        <Menu />
      </button>
      <div className='PageTitle'>
        <PageHeading
          text={ROUTES.find(_ => _[0] === store.get('route')[0])![1]}
        />
        <LanguageToggler />
      </div>
      <SideNav />
      <MainSection>{props.children}</MainSection>
    </div>
  )
}
