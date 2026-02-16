function validateForm(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;

    let error = "";

    // Name validation
    if(name == ""){
        error = "Name cannot be empty";
    }

    // Age validation
    else if(age < 1 || age > 120){
        error = "Enter valid age";
    }

    // Contact validation (10 digits)
    else if(!/^[0-9]{10}$/.test(contact)){
        error = "Enter valid 10-digit contact number";
    }

    // Email validation
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        error = "Enter valid email";
    }

    if(error != ""){
        document.getElementById("errorMsg").innerText = error;
        return false;
    }

    alert("Patient Registered Successfully!");
    return true;
}
