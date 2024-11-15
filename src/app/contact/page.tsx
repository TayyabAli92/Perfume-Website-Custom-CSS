import "../../style/contact.css"

export default function Contact() {
    return (
        <div className="container">
            <div className="box">
            <h1 className="heading">Contact Us</h1>
            <p>If you have any questions or inquiries, feel free to reach out to us using the form below.</p>
            <div className="form-item">
            <form className="contactForm">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    
                ></textarea>
                
                <button type="submit">Send Message</button>
            </form>
            </div>
            </div>
        </div>
    );
};

