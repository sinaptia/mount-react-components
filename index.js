import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

export function mountComponent (selector, Component) {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(selector)

    elements.forEach(element => {
      const props = JSON.parse(element.getAttribute('data-props'))

      ReactDOM.render(
        <Suspense fallback='loading...'>
          <Component {...props} />
        </Suspense>,
        element
      )
    })
  })
}
