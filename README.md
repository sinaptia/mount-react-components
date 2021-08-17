# Mount React Component

This component was born from the need to be able to mount react components inside HTML views using Ruby on Rails (although it should be able to be used in any other web-framework), providing a simple way to render the react component on the view passing different parameters and recieving them on the component through `props`.
## Usage

Define an element to mount the component into in your server-side rendered html, specifying the component name on `data-component`. You can use the `data-props` attribute to send props coming out directly of your server-side rendered html.

```erb
<div
  data-component="MyReactComponent"
  data-props="<%={
    employees: Employee.all
}.to_json %>">
</div>
```

Then, in your `application.js` (in case you're using Rails), import the `mountComponents` function and call it sending the list of components as defined on this example.

```javascript
import { mountComponents } from 'mount-react-components'
import MyReactComponent from './components/MyReactComponent'

const components = {
  MyReactComponent: MyReactComponent
}

mountComponents(components)
```

**Tip**: For components that need [Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) you should wrap your main component and then add the wrapper on the components list.
