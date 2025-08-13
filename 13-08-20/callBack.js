function displayResult(sum){
    console.log("Sum : "+sum)
}

function calculator(a1,a2,callBack){
    let sum=a1+a2;
    callBack(sum)
}

calculator(5,10,displayResult)
calculator(25,30,displayResult)