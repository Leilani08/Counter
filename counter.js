let num1=0;

let countValue=document.getElementById('count');


function decrease(){
    num1 -= 1;
    countValue.innerText=num1;
}

function reset(){
    num1 = 0;
    countValue.innerText=num1;
}

function increase(){
    num1 += 1;
    countValue.innerText=num1;
}