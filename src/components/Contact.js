const Contact = () => {
    return (
        <div className="contact-div">
            <h2>Contact Us Page</h2>
            <form>
                <input type="text" className="contact-name" placeholder="Name"></input>
                <input type="text" className="contact-message" placeholder="Message"></input>
                <button className="contact-button">Submit</button>
            </form>
        </div>
    )
}

export default Contact;