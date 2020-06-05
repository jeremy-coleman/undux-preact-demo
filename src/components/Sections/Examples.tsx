import { Fragment, h } from 'preact';
import ExampleApp from './markdown/ExampleApp.md';
import ExampleComponent from './markdown/ExampleComponent.md';
import ExampleComponentWithDerivedState from './markdown/ExampleComponentWithDerivedState.md';
import ExampleComponentWithNamespacedState from './markdown/ExampleComponentWithNamespacedState.md';
import ExampleComponentWithPropsApp from './markdown/ExampleComponentWithPropsApp.md';
import ExampleEffectsWithDerivedState from './markdown/ExampleEffectsWithDerivedState.md';
import ExampleEffectsWithNamespacedState from './markdown/ExampleEffectsWithNamespacedState.md';
import ExampleStatefulComponentWithProps from './markdown/ExampleStatefulComponentWithProps.md';
import ExampleStatelessComponentWithProps from './markdown/ExampleStatelessComponentWithProps.md';
import ExampleStore from './markdown/ExampleStore.md';
import ExampleStoreWithDerivedState from './markdown/ExampleStoreWithDerivedState.md';
import ExampleStoreWithNamespacedState from './markdown/ExampleStoreWithNamespacedState.md';
import { SectionSubheading } from './parts/SectionSubheading';
import { TabbedPolyglotCode } from './parts/TabbedPolyglotCode';

export function Examples() {
  return <Fragment>
    <SectionSubheading href='examples/basic-usage'>Basic usage</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleComponent, filename: 'MyComponent'},
      {code: ExampleApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
    <SectionSubheading href='examples/stateless-component-with-props'>Stateless Preact component with extra props</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleStatelessComponentWithProps, filename: 'MyComponent'},
      {code: ExampleComponentWithPropsApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
    <SectionSubheading href='examples/class-component-with-props'>React class component with extra props</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleStatefulComponentWithProps, filename: 'MyComponent'},
      {code: ExampleComponentWithPropsApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
    <SectionSubheading href='examples/derived-state'>Derived state</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleComponentWithDerivedState, filename: 'MyComponent'},
      {code: ExampleApp, filename: 'MyApp'},
      {code: ExampleStoreWithDerivedState, filename: 'MyStore'},
      {code: ExampleEffectsWithDerivedState, filename: 'MyEffects'}
    ]} />
    <SectionSubheading href='examples/namespaced-state'>Namespaced state</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleComponentWithNamespacedState, filename: 'MyComponent'},
      {code: ExampleApp, filename: 'MyApp'},
      {code: ExampleStoreWithNamespacedState, filename: 'MyStore'},
      {code: ExampleEffectsWithNamespacedState, filename: 'MyEffects'}
    ]} />
  </Fragment>
}
