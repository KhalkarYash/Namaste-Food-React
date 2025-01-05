import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namaste React!🚀"),
//     React.createElement("h2", {}, "- YK"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "React Practice"),
//     React.createElement("h2", {}, "Igniting the app🚀"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Element

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// // JSX is not HTML in JS, JSX has HTML-like or XML-like syntax
// // JSX =>Bable transpiles it to => React.createElement => JS Object => HTMLElement(render)

// const jsxHeading = <h1 id="heading" className="root">Namaste React using JSX🚀</h1>;
// // for multiple line jsx
// // const jsxHeading = (
// //   <h1 id="heading" className="root">
// //     Namaste React using JSX🚀
// //   </h1>);

const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX!🚀
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX!🚀
  </h1>
);

// console.log(heading);
// console.log(jsxHeading);

// React Components
// Class Based Component - OLD
// Functional Component - NEW

// React Function Component

// const HeadingComponent = () => (
//   return <h1>Namaste React Functional Component</h1>
// )

// Component Composition

const number = 10000;

const HeadingComponent = () => (
  <div>
    {number}
    <br />
    {100 + 2837 - 423 + 32}
    {Title()}
    <Title />
    <Title></Title>
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
