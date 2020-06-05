import { Fragment, h } from 'preact';

import APICreateConnectedStore from './markdown/APICreateConnectedStore.md';
import APICreateConnectedStoreWithEffects from './markdown/APICreateConnectedStoreWithEffects.md';

import APIGet from './markdown/APIGet.md';
import APIOn from './markdown/APIOn.md';
import APISet from './markdown/APISet.md';
import APISetPartialApplication from './markdown/APISetPartialApplication.md';
import EffectsModelUpdate from './markdown/EffectsModelUpdate.md';
import EffectsRxSimple from './markdown/EffectsRxSimple.md';
import InstallRxJS from './markdown/InstallRxJS.md';
import { InlineCode } from './parts/InlineCode';
import { PolyglotCode } from './parts/PolyglotCode';
import { SectionSubheading } from './parts/SectionSubheading';
import APISetStableAcrossRender from './markdown/APISetStableAcrossRender.md'

export function API() {
  return <Fragment>
    <SectionSubheading href='api/createConnectedStore'>
      <InlineCode>createConnectedStore(initialState, [effects])</InlineCode>
    </SectionSubheading>
    <p>Use <InlineCode>createConnectedStore</InlineCode> to create a new type of store with an initial value and, optionally, some effects. Be sure to define a key for each field on your store, even if it's <InlineCode>undefined</InlineCode> at first.</p>
    <PolyglotCode code={APICreateConnectedStore} filename='' />

    <p>Note that <InlineCode>createConnectedStore</InlineCode> doesn't create a store directly. Instead, it returns an object containing the two things you'll need to instantiate and use your store:</p>

    <ul>
      <li><InlineCode>withStore</InlineCode>: A <a href='https://reactjs.org/docs/higher-order-components.html' target='_blank'>Higher Order Preact Component</a> (HOC) that's connected to your store. Use it to wrap your own Preact components to connect them to the store too. The HOC will pass your store into every component you wrap it with as <InlineCode>props.store</InlineCode>. Connected components re-render automatically whenever the store updates.</li>
      <li><InlineCode>Container</InlineCode>: A Preact component that creates a new instance of your store. Put it at the root of your application, so it wraps any <InlineCode>withStore</InlineCode>-wrapped components. For each <InlineCode>{'<Container />'}</InlineCode> you render, Undux will create a new store instance and pass it to each of its descendents that's wrapped in the corresponding <InlineCode>withStore</InlineCode> function.</li>
    </ul>

    <p>To update a field in response to another field changing, use <em>effects</em>:</p>
    <PolyglotCode code={APICreateConnectedStoreWithEffects} filename='' />


    <SectionSubheading href='api/get'><InlineCode>store.get(key)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>get</InlineCode> to read the value of a field on your store.</p>
    <PolyglotCode code={APIGet} filename='' />
    <SectionSubheading href='api/set'><InlineCode>store.set(key)(value)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>set</InlineCode> to write a value to a field on your store.</p>
    <PolyglotCode code={APISet} filename='' />
    <p><InlineCode>set</InlineCode> is auto-curried: call it with just a key, and get back a convenient setter function.</p>
    <PolyglotCode code={APISetPartialApplication} filename='' />
    <p>The function returned from <InlineCode>set</InlineCode> remains stable across re-renders. This means they can be used in a <a href='https://preactjs.com'>Preact Hooks</a> dependencies array.</p>
    <PolyglotCode code={APISetStableAcrossRender} filename='' />
    <SectionSubheading href='api/on'><InlineCode>store.on(key)</InlineCode></SectionSubheading>
    <p>Undux automatically updates your model and re-renders your Preact components for you. To do anything more complex -- like send a network request, or update another field on the store in response to a field changing -- use the <InlineCode>on</InlineCode> API.</p>
    <p>We call anything that's subscribed to a field update with the <InlineCode>on</InlineCode> API an <em>effect</em>. Effects are triggered anytime the field they're subscribed to changes.</p>
    <PolyglotCode code={APIOn} filename='' />
    <p>You can even use an effect to trigger another model update.</p>
    <PolyglotCode code={EffectsModelUpdate} filename='' />
    <p><InlineCode>on</InlineCode> returns a full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>RxJS Observable</a>, so you have fine control over how you Preact to a change. Effects have access to around 100 utility functions that are included with RxJS.</p>
    <PolyglotCode code={EffectsRxSimple} filename='' />
    <p>To keep its footprint small, Undux doesn't include RxJS out of the box. Instead, Undux comes with a minimal shim that lets most peopleuse Undux without having to install additional dependencies. If you do use RxJS operators, you'll need to install RxJS as an additional dependency:</p>
    <PolyglotCode code={InstallRxJS} filename='' />
  </Fragment>
}