
# Miscellaneous
- CDN
- Cross Origin
- NPX vs NPM

# Parcel
- Dev Build
- Local Server
- HMR(Hot module replacement)
- File Watching algorithm written in c++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
- dev: npx parcel index.html
- prod: npx parcel build index.html

# React createElement

when we do React.createElement, it creates an object but when we render that to DOM, it becomes HTML element

# JSX

JSX is a HTML or XML like syntax
JSX is transpiled before it reaches the JS Engine by parcel (Babel)
JSX => React.createElement => ReactElemet(JS object) => HTML Element(render)

# React element

```
const heading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

Rendering:
root.render(heading);
```

# React component
- Class Based Component - OLD
- Functional Component - NEW

# Functional Component

Functional Component is normal JS function which returns some JSX

```
const HeadingComponenet = () => (
  <div>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
)

Rendering:
root.render(<HeadingComponenet/>);

```

- <b>Component composition</b>: Attaching one component with the other

```
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);


const HeadingComponenet = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponenet/>);
```

- Using curly braces, you can inject any JS code

- Example of calling functional componenet

```
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);


const HeadingComponenet = () => (
  <div id="container">
    {Title()}
    <Title/>
    <Title></Title>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponenet/>);
```
