document.addEventListener('DOMContentLoaded', function () {
     console.log("DOM fully loaded and parsed");
    const form = document.getElementById('contactForm');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submission initiated ")


        const status = document.getElementById("my-form-status");
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const bodyMessage = `Name: ${fullName}<br> Email: ${email} <br> Message: ${message}`;

        console.log(bodyMessage);
        fetch(e.target.action, {
            method: form.method,
            body: bodyMessage,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                console.log("sent");
                form.reset()
            } else {
                console.log("messedup")
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }

        


    });



})
    

