1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between Component and PureComponent is that PureComponent implements a shouldComponentUpdate() method that performs a shallow comparison of the current and next props and state. If the props and state are the same, the component will not update. This is a performance optimization, and it is not recommended to rely on it to “prevent” a re-render, as this can lead to bugs.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Context is a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Using context, we can avoid passing props through intermediate elements.

ShouldComponentUpdate is a lifecycle method that is invoked before rendering when new props or state are being received. This method is not called for the initial render or when forceUpdate is used. The default implementation of this method returns true, leaving React to perform the update. If you are sure that the component doesn’t need to update, you can return false to skip the update but it is not recommended because it might break your app if you are not careful is better use PureComponent instead.

3. Describe 3 ways to pass information from a component to its PARENT.

- Using props

- Using context

- Using a callback function

4. Give 2 ways to prevent components from re-rendering.

- Using PureComponent

- Using React.memo

5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group a list of children without adding extra nodes to the DOM like tags and any HTML elememnts. It is a common pattern in React to use a wrapper element to group multiple elements.

6. Give 3 examples of the HOC pattern.

- WithRouter

- WithStyles

- WithTheme

7. what's the difference in handling exceptions in promises, callbacks and async...await.

The difference is that in promises we use .catch() and in async...await we use try...catch.

- Promises: .catch()

- Callbacks: try...catch

- Async...await: try...catch

8. How many arguments does setState take and why is it async.

setState takes two arguments, the first one is the state object and the second one is a callback function. setState is async because it is not guaranteed that the state will be updated immediately after calling setState.

9. List the steps needed to migrate a Class to Function Component.

- Remove the constructor and the state if you don’t need them.

- Remove the render method and move the content to the body of the component function (the return statement

10. List a few ways styles can be used with components.

- Inline styles

- CSS stylesheets

- CSS-in-JS

- Styled Components

- CSS Modules

11. How to render an HTML string coming from the server.

- Using dangerouslySetInnerHTML
