function validateForm() {
    const errors = [];
    const data = {};
    
    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const message = document.getElementById("message");



    if (fullName.value !== "") {
        data.fullname = fullName.value;
    } else {
        errors.push("Full Name is required");
    }


    if (email.value !== "") {
        var emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailvalidation.test(email.value)) {
            data.email = email.value;
        } else {
            errors.push("Invalid Email");
        }
    } else {
        errors.push("Email is required");
    }


    if (message.value !== "") {
        data.message = message.value;
    } else {
        errors.push("Message is required");
    }

    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Data:", data);
        fullName.value = "";
        email.value = "";
        message.value = "";
    }
}  

document.getElementById("submit-button").addEventListener("click", function() {
    validateForm();
});
