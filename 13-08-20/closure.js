function myCounter(){
    let cnt=0;
    return function(){
        cnt+=1;
        return cnt;
    }
}

const f1=myCounter()

function myFunction(){
    document.getElementById("demo").textContent=f1();
}
console.log(f1())