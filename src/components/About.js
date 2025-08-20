import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
    
    render() {
        return (
            <div className="about-card">
            <h1>About class Section</h1>

            <UserClass name={"Rithik"}/>
        </div>
        )
    }
}

export default About;
