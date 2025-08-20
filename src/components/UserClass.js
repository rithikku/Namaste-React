import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // DUMMY DATA 1ST
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Default",
                avatar_url: "https//dummy-photo",
            }
        };
    }

    // API CALL 2ND
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rithikku");

        const json = await data.json();

        // UPDATE DUMMY DATA 3RD
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    render () {
        const {name, location, avatar_url, login} = this.state.userInfo;
        return (
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h4>UserId: {login}</h4>
            <h3>Location: {location}</h3>
        </div>
        );
    }
}

export default UserClass;