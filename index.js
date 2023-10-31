import React from 'react'
import { createRoot } from 'react-dom/client'

export function mountComponents (components) {
  const roots = document.querySelectorAll('[data-component]')

  Array.from(roots).forEach(root => {
    const container = createRoot(root)
    const props = JSON.parse(root.dataset.props || '{}')
    const Component = components[root.dataset.component]

    if (!Component) throw new Error(`Missing component. Found a root element with "data-component=${root.dataset.component}", but the component is missing from the list`)

    container.render(<Component {...props} />)
  })
}
