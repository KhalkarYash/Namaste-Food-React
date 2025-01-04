import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React!🚀"),
    React.createElement("h2", {}, "- YK"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "React Practice"),
    React.createElement("h2", {}, "Igniting the app🚀"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
