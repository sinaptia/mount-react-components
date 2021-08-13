# Mount React Component

This component was born from the need to be able to mount react components inside HTML views using Ruby on Rails, providing a simple way to render the react component on the view passing different parameters and recieving them on the component through `props`
## Usage

Define an element to mount the component into in your server-side rendered html, specifying either an `#id` or a `.class`. You can use the `data-props` attribute to send props coming out directly of your server-side rendered html.

```erb
<div
  id="my-react-component"
  data-props="<%={
    employees: Employee.all
}.to_json %>">
</div>
```

Then, in your `application.js` (in case you're using Rails), import the `mountComponent` function and call it with 2 arguments: the selector (defined above) and the React component that you want to place in the element defined.

```javascript
import { mountComponent } from 'mount-react-component'
import MyReactComponent from './components/MyReactComponent'

mountComponent('#my-react-component', MyReactComponent)
```

**Tip**: you probably want to use `#id` for rendering a component in a single element, and a `.class` for rendering a component in multiple elements, even probably with different props.
