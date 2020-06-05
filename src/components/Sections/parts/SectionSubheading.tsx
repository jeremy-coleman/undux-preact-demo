import { FunctionalComponent, h } from 'preact';
import './SectionSubheading.css';
type Props = {
  href: string
}

export let SectionSubheading: FunctionalComponent<Props> = ({ children, href }) =>
  <h2 className='SectionSubheading'>
    <a href={'#' + href} id={href}>{children}</a>
  </h2>
