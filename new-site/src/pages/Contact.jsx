import { useState } from "react";



export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    function handleChange(e) { }

    return (
        <main className="contact-container">
            <h1>Contact me</h1>

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </form>
        </main>
    )
}

