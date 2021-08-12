# Mount React Component

This component was born from the need to be able to mount react components inside HTML views using Ruby on Rails, providing a simple way to render the react component on the view passing different parameters and recieving them on the component through `props`
## Usage
#### Set the `id` that will be used to search the HTML tag, this is the place where the react component is going to be mounted.
The `data-props` attribute allows you to send the parameters to the component.
<br>

```erb
<div
  id="my-react-component"
  data-props="<%={
    employees: Employee.all
}.to_json %>">
</div>
```

mounting the react component on the view is simple as doing this on your `application.js` file:
```javascript
import { mountComponent } from 'mount-react-component'
import MyReactComponent from './components/MyReactComponent'

mountComponent('my-react-component', MyReactComponent)
```
