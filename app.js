import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
