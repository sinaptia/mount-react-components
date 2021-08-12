# Mount react component

## Why?

Due to different limitations working with the Ruby on Rails frontend tools, I have chosen to use small react components to perform tasks in a more dynamic way.

The first approach for mounting the react component on html views was:
```javascript
  document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('element-id-for-component')
    if (div) {
      const props = JSON.parse(div.getAttribute('data-props'))
      ReactDOM.render(
        <Component {...props} />,
        div
      )
    }
  })
```

When using these components, i realized that i was repeating this code, so i've applied a small refactoring that allowed me to generate a function whose parameters are: id of the html tag that will mount the component and component in question.

As time went by, with our teammates we realized that we were using that code in different projects, so we decided that it would be a good idea to create a library and share it. And that's how "mount-react-component" is born.

## Usage

You only need to use these attributes: `id` and `data-props` inside a `<div>` tag. For example:

```erb
<div
  id="my-react-component"
  data-props="<%={
    employees: Employee.all
}.to_json %>">
</div>
```

then, mounting the react component on the view is simple as doing this on your `application.js` file:

```javascript
import { mountComponent } from 'mount-react-component'
import MyReactComponent from './components/MyReactComponent'

mountComponent('my-react-component', MyReactComponent)
```

