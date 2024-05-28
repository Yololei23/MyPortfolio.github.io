function sendMail(){
    let params={
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,
    }
    emailjs.send("service_lwn794c","template_xkzzfjc",params).then(alert("Email Sent!!"))
}