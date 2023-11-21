## Demo 2

### Description
In demo 2, we will demonstrate a simple use of `props`.

![Demo 2](demo_2.png)

### Codes
Below is the element in the HTML:
```html
<div id="app">
  <blog-post post-title="hello!"></blog-post>
</div>
```

Below is how we can create this element by Vue.
```js
Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<span>{{ postTitle }}</span>'
})

const myApp = new Vue({
    el: '#app'
})
```

### Explanation

#### Common Vue Keywords:
- **Component**: Same as before, a component is a reusable and self-contained unit that encapsulates a specific piece of functionality or UI.

- **Data**: In Vue, `props` is a way for a parent component to pass data to its child components.

    - In this example, the `blog-post` component has a prop named 'postTitle'. The `blog-post` component expects to receive this prop from its parent, namely, `myApp` in this case. In other words, the parent component (`myApp`) can pass data to the child component (`blog-post`) using props.

- **Props**: Props allows a parent component to pass data down to its child components. This is essential in building modular and reusable components. Imagine a scenario where you have a blog post component, and you want to reuse it with different titles in different parts of your application. Props provide a mechanism for customizing the behavior and appearance of a component without modifying its internal logic.

#### Naming Convention for Props
In Vue, the recommended convention is to use camelCase for prop names within the component definition (`props: ['postTitle']`).

However, when passing props names in HTML, you use kebab-case (`post-title`).

Vue automatically converts kebab-case to camel Case.

This conversion is necessary because HTML is case-insensitive, while JavaScript (including Vue component definitions) is case-sensitive. While they appear different in syntax, `post-title` in HTML and `postTitle` in the Vue component are referring to the same prop.

#### How our example works

- **`Vue.component('blog-post', {...})`**: This line registers a global component named 'blog-post'. This component has a prop named 'postTitle', which is used to pass data into the component.

- **`<blog-post post-title='hello!'></blog-post>`**: In the HTML, `<blog-post>` is a custom element and provide a prop named 'post-title' with the value "hello!". Note that `post-title` in HTML becomes `postTitle` in the Vue component, but they are referring to the same prop.

- **`props: ['postTitle']`**: In the component definition, the 'blog-post' component declares that it expects a prop called 'postTitle'. The data passed in ("hello!") from the parent will be available inside the component as `this.postTitle`.

- **`template: '<span>{{ postTitle }}</span>`**: The template defines how the component should render. In this case, it is a `<span>` element displaying the value of the 'postTitle' prop.

#### Summary
The 'blog-post' component receives data through the 'postTitle' prop. The parent Vue instance is responsible for providing this data.
