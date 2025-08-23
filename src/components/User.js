import { useEffect, useState } from "react";

const User = (props) => {
    const { name, location } = props;

    const [count, setCount] = useState(0);

    useEffect(() => {
        getUserInfo();
    })

    // API CALL
    async function getUserInfo() {
        const data = await fetch("https://api.github.com/users/rithikku");

        const json = await data.json();
    }

    return (
        <div className="user-card">
            <h2>Count = {count}</h2>

            <button style={{ width: "120px", height: "25px",margin: "10px" }} onClick={() => {
                setCount(count + 1);
            }}>Count Increase</button>

            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @rihtikkumar</h4>
        </div>
    )
}

export default User;