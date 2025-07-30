function getDetails() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "") {
        errorMessage.textContent = "Invalid UserName";
    } else if (password === "") {
        errorMessage.textContent = "Invalid Password";
    } else {
        errorMessage.textContent="";
    }
}

function handleSubmit(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        console.log("Form Submitted");
    }
}
