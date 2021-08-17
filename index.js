import React from 'react'
import ReactDOM from 'react-dom'

export function mountComponents (components) {
  document.addEventListener('DOMContentLoaded', () => {
    const roots = document.querySelectorAll('[data-component]')

    Array.from(roots).forEach((root) => {
      const props = JSON.parse(root.dataset.props)
      const Component = components[root.dataset.component]

      ReactDOM.render(
        <Component {...props} />,
        root
      )
    })
  })
}
