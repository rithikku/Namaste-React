import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error">
            <div className="error-container">
                <h1>{err.status}</h1>
                <p className="oops">Something Went Wrong Page {err.statusText}</p>
                <p className="message">{err.error.message}</p>
            </div>
        </div>
    )
}

export default Error;
