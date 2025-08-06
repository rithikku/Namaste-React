import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML - like or XML - like Syntax

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel 

// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// React Element
const Heading = (<h1 id="heading">
    Namaste React Using JSX
    </h1>
);

// React Functional Component = Normal JS Function
const TitleComponent = () => {
    return (
        <div id="container">
            <h1 id="heading">Title Component!</h1>
        </div>
    )
}

// Component Composition 
const HeadingComponent = () => {
    return (
        <div id="container">
            {Heading}
            <TitleComponent/>
            <h2 id="heading">{100 + 200}</h2>
            <h1 id="heading">Namaste React Functional Component!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);