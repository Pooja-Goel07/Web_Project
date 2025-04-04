
function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    
    emailjs.send("service_ykcmice", "template_pa2dfqg", params)
    .then(function(response) {
        alert("Email Sent Successfully!");
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
}
