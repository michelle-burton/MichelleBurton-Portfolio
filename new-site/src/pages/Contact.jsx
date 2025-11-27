import { useState } from "react";



export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    // TODO: later: send form data to backend or email service
    console.log("Form Submitted:", formData);
    setStatus("Message sent! (Demo mode)");
    setFormData({ name: "", email: "", message: "" });
  }


    return (
        <main className="contact-container">
            <h1>Contact me</h1>

            <form
                action="https://formsubmit.co/20cb355fa98a9b4571f25a9473538753 "
                method="POST"
                className="contact-form">
                <input type="hidden" name="_subject" value="Portfolio Contact Form" />
                 {/* redirect back to your site after submit */}
                <input
                    type="hidden"
                    name="_next"
                    value="https://www.michelle-burton.com/"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-floating mb-3">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        />
                        <label htmlFor="name">Name</label>
                    </div>

                <div className="form-floating mb-3">
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    <label htmlFor="email">Email</label>
                </div>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me how I can help you..."
                    rows="5"
                    className="form-control"
                    style={{ height: "150px" }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
                {status && (
                <p className={`status ${status.includes("sent") ? "success" : "error"}`}>
                    {status}
                </p>
)}

            </form>
        </main>
    )
}

