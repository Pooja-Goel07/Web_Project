
function sendMail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    
    //Auto-reply to user
    emailjs.send("service_ykcmice", "template_pa2dfqg", params)
    .then(function(response) {
        alert("Email Sent Successfully!, Check mail to Confirm😊");
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });

    //email from user to admin.
    emailjs.send("service_ykcmice", "template_pu0xbww", params)
    .then(function(response) {
        console.log("Email sent to admin successfully!", response);
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });


    const { jsPDF } = window.jspdf;

    // Generate PDF
    const pdf = new jsPDF();
    pdf.setFontSize(18);
    pdf.text("Form Submission Receipt", 20, 20);

    pdf.setFontSize(12);
    pdf.text(`Name: ${params.name}`, 20, 40);
    pdf.text(`Email: ${params.email}`, 20, 50);
    pdf.text(`Subject: ${params.subject}`, 20, 60);
    pdf.text(`Message: ${params.message}`, 20, 70);
    pdf.text(`Date: ${new Date().toLocaleString()}`, 20, 80);

    // Save the PDF
    pdf.save("form_submission.pdf");

    alert("PDF downloaded successfully!");
}
