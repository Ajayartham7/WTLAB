function register(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('errorMessage');
    if(username === "" || password === "" || email === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required!";
    }
}