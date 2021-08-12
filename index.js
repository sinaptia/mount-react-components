import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

export function mountComponent (id, Component) {
  document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById(id)
    if (div) {
      const props = JSON.parse(div.getAttribute('data-props'))
      ReactDOM.render(
        <Suspense fallback='loading...'>
          <Component {...props} />
        </Suspense>,
        div
      )
    }
  })
}
