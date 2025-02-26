# Mock React Router Components Folder

The components were adapted in large part from [Nick Coughlin's](https://github.com/ncoughlin) original implementation. The original blogpost can be found [here](https://ncoughlin.com/posts/react-navigation-without-react-router/).

### Routes

```TSX
<Routes>
  <Route path="/" element={<Home />} />
<Routes>
```

The `<Routes/>` component is a container for all the routes in the application. It is meant to mimic React Router as best as possible, this component is meant to take in `<Route>`'s and render them.

### Route

```TSX
<Route path="/" element={<Home />} />
```

The `<Route/>` component is a container for a single route in the application. It takes in a path and an element to render when that path is matched.

| Property  | Type      | Description                                               |
| --------- | --------- | --------------------------------------------------------- |
| `path`    | string    | The URL path which will be matched to the element.        |
| `element` | ReactNode | The element/component to render when the path is matched. |

### Link

```TSX
<Navbar>
  <Link to="/">Home</Link>
  <Link to="/about" cn={styles.linkStyling}>About</Link>
</Navbar>
```

The `<Link/>` component is a container to create a custom anchor tag. It takes in a path to the destination.

| Property       | Type                     | Description                                       |
| -------------- | ------------------------ | ------------------------------------------------- |
| `to`           | string                   | The path which the anchor tag will link to.       |
| `cn`(optional) | CSSModuleClasses[string] | The SCSS style module to apply to the anchor tag. |
