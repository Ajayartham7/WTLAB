let d1=document.getElementById('d1')
let input=document.getElementById('input')

function overFn(){
    d1.textContent="You can't catch me"
}

function outFn(){
    d1.textContent="Catch Me"
}

function enterFn(){
    input.value="Mouse Entered"
}

function leaveFn(){
    input.value="Mouse is Outside"
}

function clickFn(){
    d1.textContent="Button Clicked"
}
