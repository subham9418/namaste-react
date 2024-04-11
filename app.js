import React from "react";
import ReactDOM from "react-dom/client";

// React element
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React functional component
const HeadingComponenet = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponenet/>);
