function handlePayment(event){
    event.preventDefault()
    const cardNumber=document.getElementById("cardNumber")
    const expiryDate=document.getElementById("expiryDate")
    const cvv=document.getElementById("cvv")
    if(cardNumber.value==="" || expiryDate.value==="" || cvv.value===""){
        errorMessage.textContent="All fields are required!"
    }else{
        console.log("Payment Successful")
        cardNumber.value="";
        expiryDate.value="";
        cvv.value="";
        errorMessage.textContent=""
    }
}