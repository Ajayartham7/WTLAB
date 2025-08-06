function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    
    if (username.value === "" || password.value === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        console.log("Form Submitted");
        errorMessage.textContent="";
        username.value="";
        password.value="";
    }
}