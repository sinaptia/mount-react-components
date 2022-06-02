import React from 'react'
import { createRoot } from 'react-dom/client';

export function mountComponents (components) {
  document.addEventListener('DOMContentLoaded', () => {
    const roots = document.querySelectorAll('[data-component]')

    Array.from(roots).forEach(root => {
      const container = createRoot(root);
      const props = JSON.parse(root.dataset.props || '{}')
      const Component = components[root.dataset.component]

      container.render(<Component {...props} />);
    })
  })
}
