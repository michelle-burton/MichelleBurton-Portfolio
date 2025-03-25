document.addEventListener('DOMContentLoaded', function () {
     console.log("DOM fully loaded and parsed");
    const form = document.getElementById('contactForm');

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Form submission initiated ")

        //  if (!checkInputs()) {
        //     return; // Stop form submission if inputs are not valid
        // }

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const bodyMessage = `Name: ${fullName}<br> Email: ${email} <br> Message: ${message}`;

        console.log(bodyMessage);

        
        //https://smtpjs.com/
        Email.send({
            Host: "s1.maildns.net ",
            Username: "Add User",
            Password: "Add Key",
            To: 'msmichelleburton@yahoo.com',
            From: "msmichelleburton@yahoo.com",
            Subject: "Cyan Dream Creations 02",
            Body: bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message Sent Successfully!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Message Failed to Send!",
                        icon: "error"
                    })
                }
            }
        );
    });


    // sendEmail();
    function checkInputs() {
        const items = document.querySelectorAll('.item')
        let allValid = true;

        for (const item of items) {
            if (item.value === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                allValid = false;
            } else {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
        }
          return allValid;
    }
})
    

