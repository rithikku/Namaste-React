import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id: "parent">
 *      <div id: "child1">
 *          <h1>Welcome</h1>
 *          <h2>Welcome</h2>
 *      </div>
 *      <div id: "child2">
 *          <h1>Welcome</h1>
 *          <h2>Welcome</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "child1"},
        [React.createElement("h1", {id: "heading"}, "Welcome to React!"),
            React.createElement("h2", {id: "heading"}, "Welcome to React!!")
        ]),
        React.createElement("div", {id: "child2"},
        [React.createElement("h1", {id: "heading"}, "Welcome to React!"),
            React.createElement("h2", {id: "heading"}, "Welcome to React!!")
        ]),
    ]);

// JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render method is converting into object putting