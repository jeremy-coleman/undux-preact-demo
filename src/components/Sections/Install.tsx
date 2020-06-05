import { Fragment, h } from 'preact';
import InstallRxJS4 from './markdown/InstallRxJS4.md';
import InstallRxJS5 from './markdown/InstallRxJS5.md';
import InstallRxJS6 from './markdown/InstallRxJS6.md';
import { PolyglotCode } from './parts/PolyglotCode';
import { SectionSubheading } from './parts/SectionSubheading';

export function Install() {
  return <Fragment>
    <p>Undux is compatible with RxJS versions 4 and up. If you're not sure which version to use, use 6 (the latest version).</p>
    <SectionSubheading href='install/rx6'>Using RxJS 6 (recommended)</SectionSubheading>
    <PolyglotCode code={InstallRxJS6} filename='' />
    <SectionSubheading href='install/rx5'>Using RxJS 5 (legacy)</SectionSubheading>
    <PolyglotCode code={InstallRxJS5} filename='' />
    <SectionSubheading href='install/rx4'>Using RxJS 4 (legacy)</SectionSubheading>
    <PolyglotCode code={InstallRxJS4} filename='' />
  </Fragment>
}
