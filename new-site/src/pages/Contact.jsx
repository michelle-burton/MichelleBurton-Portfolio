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
            </form>
        </main>
    )
}

