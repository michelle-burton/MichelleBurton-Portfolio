import { useState } from "react";



export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    return (
        <main className="page-container">
            <h1>Contact</h1>
        </main>
    )
}

