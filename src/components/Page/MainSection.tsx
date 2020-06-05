
import { h, VNode } from 'preact';

import { useStore } from '../../services/store';
import './MainSection.css';
import { useRef, useEffect } from 'preact/hooks';

export function MainSection(props: {children: VNode}) {
  let div = useRef<HTMLElement>(null)
  let store = useStore()
  useEffect(() => {
    let sub = store.on('route').subscribe(([toproute, subroute]) => {
      if (subroute) {
        let e = document.getElementById(toproute + '/' + subroute)
        if (e) {
          e.scrollIntoView()
        }
        return
      }
      if (!div.current) {
        return
      }
      div.current.scrollTop = 0
    })
    return () => sub.unsubscribe()
  }, [div])
  return <section className='MainSection' ref={div}>
    {props.children}
  </section>
}
