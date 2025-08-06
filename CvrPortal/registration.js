function handleSubmit(event){
    event.preventDefault();
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const confirmPassword=document.getElementById("confirm-password");
    if(username.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
        document.getElementById("error-message").textContent = "All fields are required!";
        document.getElementById("success-message").textContent="";
    }
    else{
        console.log("Registration Successful")
        document.getElementById("success-message").textContent="Registration Successful";
        document.getElementById("error-message").textContent="";
        username.value="";
        password.value="";
        email.value="";
        confirmPassword.value="";
    }
}