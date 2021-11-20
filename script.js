let btn1=document.getElementById("1"),
btn2=document.getElementById("2"),
btn3=document.getElementById("3"),
btn4=document.getElementById("4"),
btn5=document.getElementById("5"),
btn6=document.getElementById("6"),
btn7=document.getElementById("7"),
modal = document.getElementById("myModal"),
btn8=document.getElementById("8"),
btn9=document.getElementById("9"),
btn0=document.getElementById("0"),
btnDot=document.getElementById("."),
btnPlus=document.getElementById("+"),
btnMinus=document.getElementById("-"),
btnMulti=document.getElementById("*"),
btnDivision=document.getElementById("/"),
btnEqual=document.getElementById("="),
btnDelete=document.getElementById("delete"),
btnClear=document.getElementById("clear"),
btnRoot=document.querySelector("#sqr"),
btnInfo=document.querySelector("#info"),
span = document.querySelector("#close"),
inp=document.querySelectorAll('div')[2],
outputDiv=document.getElementById('output'),
answer,//тут хранится результат вычисления
first='',
second='',
secondSl='',
sign='',
z=0,//чтобы нельзя было два знака
x=0,//чтобы равно только один раз
c=0,//чтобы знак только после числа
dotCount=0,//чтобы нельзя было ставить две точки
result='',
deleteCount=0,//чтобы нельзя было удалить знак
isButtonAllowed=true,//чтобы нельзя было вводить цифры после знака равно
equalCount=0;
function sum(){
    if (z==0&&c!==0&&equalCount===0){
        sign='+';
        dotCount=0;
        z++;
        c=0;
        first=inp.innerText;
        outputDiv.append(first);
        
        inp.innerText='+';
        deleteCount=0;

    }  
    if (equalCount>=1){
        x=0;
        inp.innerText='+';
        isButtonAllowed=true;
        outputDiv.innerText="";
        first=String(answer);
        sign='+';
        dotCount=0;
        z++;
        outputDiv.append(first);
        deleteCount=0;
    }
}
function minus(){
    if (z==0&&c!==0){
        sign='-';
        dotCount=0;
        z++;
        c=0;
        first=inp.innerText;
        outputDiv.append(first);
        inp.innerText='-';
        deleteCount=0;

    } 
    if (equalCount>=1){
        x=0;
        inp.innerText='-';
        isButtonAllowed=true;
        outputDiv.innerText="";
        first=String(answer);
        sign='-';
        dotCount=0;
        z++;
        outputDiv.append(first);
        deleteCount=0;
    }
}
function multi(){
    if (z==0&&c!==0){
        dotCount=0;
        sign='*';
        z++;
        c=0;
        first=inp.innerText;
        outputDiv.append(first);
        inp.innerText='*';
        deleteCount=0;
    } 
    if (equalCount>=1){
        x=0;
        inp.innerText='*';
        isButtonAllowed=true;
        outputDiv.innerText="";
        first=String(answer);
        sign='*';
        dotCount=0;
        z++;
        outputDiv.append(first);
        deleteCount=0;
    }
}
function division(){
    if (z==0&&c!==0){
        sign='/';
        dotCount=0;
        z++;
        c=0;
        first=inp.innerText;
        outputDiv.append(first);
        
        
        inp.innerText='/';
        deleteCount=0;
    } 
    if (equalCount>=1){
        x=0;
        inp.innerText='/';
        isButtonAllowed=true;
        outputDiv.innerText="";
        first=String(answer);
        sign='/';
        dotCount=0;
        z++;
        outputDiv.append(first);
        deleteCount=0;
    }
}
function power(){
    if (z==0&&c!==0){
        sign='^';
        first=inp.innerText;
        outputDiv.append(first);
        inp.innerText='^';
        deleteCount=0;
        z++;
        c=0;}
    if (equalCount>=1){
        x=0;
        inp.innerText='^';
        isButtonAllowed=true;
        outputDiv.innerText="";
        first=String(answer);
        sign='^';
        dotCount=0;
        z++;
        outputDiv.append(first);
        deleteCount=0;
    }
}
function equal(){
    if (x==0&&z>0&&c!==0){
        inp.append('=');
        x++;
        second = inp.innerText;
        
        secondSl=second.slice(1,second.length-1);
        
        outputDiv.append(second);
        inp.innerText='';
        switch(sign){
            case "+":
                answer=(+(first)+(+secondSl));
                inp.append(answer);
            break;
            case "-":
                answer=(+(first)-(+secondSl));
                inp.append(answer);
            break;
            case "*":
                answer=(+(first)*(+secondSl));
                inp.append(answer);
            break;
            case "/":
                answer=(+(first)/(+secondSl)).toFixed(6);
                inp.append(answer);
            break;
            case "^":
                answer=(Math.pow((+first),(+secondSl)));
                inp.append(answer);
            break;

        }
       
        
        deleteCount=0;
        isButtonAllowed=false;
        equalCount++;

        
    } 
}
function addOne(){
    if (isButtonAllowed){
        inp.append(`1`);
        c++;
        deleteCount++;
        
    }
}
function addTwo(){
    if (isButtonAllowed){
        inp.append(`2`);
        c++;
        deleteCount++;
    }
}
function addThree(){
    if (isButtonAllowed){
        inp.append(`3`);
        c++;
        deleteCount++;
    }
}
function addFour(){
    if (isButtonAllowed){
        inp.append(`4`);
        c++;
        deleteCount++;
    }
}
function addFive(){
    if (isButtonAllowed){
        inp.append(`5`);
        c++;
        deleteCount++;
    }
}
function addSix(){
    if (isButtonAllowed){
        inp.append(`6`);
        c++;
        deleteCount++;
    }
}
function addSeven(){
    if (isButtonAllowed){
        inp.append(`7`);
        c++;
        deleteCount++;
    }
}
function addEight(){
    if (isButtonAllowed){
        inp.append(`8`);
        c++;
        deleteCount++;
    }
}
function addNine(){
    if (isButtonAllowed){
        inp.append(`9`);
        c++;
        deleteCount++;
    }
}
function addZero(){
    if (isButtonAllowed){
        if (deleteCount!==0){
            inp.append(`0`);
            c++;
            deleteCount++;
            }
        }
        
}
function addDot(){
    if(dotCount==0){
        inp.append('.');
        c++;
        dotCount++;
        deleteCount++;
    }
}
function clear(){
    inp.innerText='';
    equalCount=0;
    outputDiv.innerText='';
    first='';
    second='';
    secondSl='';
    sign='';
    z=0;//чтобы нельзя было два знака
    x=0;//чтобы равно только один раз
    c=0;//чтобы знак только после числа
    dotCount=0;//чтобы нельзя было ставить две точки
    result='';
    isButtonAllowed=true;
}
function del(){
    if (deleteCount!==0){
        if (inp.innerText.slice(-1)=='.'){
            dotCount=0;
        }
        let inp2=inp.innerText.slice(0,-1);
        console.log(inp2);
        inp.innerText=inp2;
        deleteCount--;
    }
}
btn1.addEventListener("click",addOne);
btn2.addEventListener("click",addTwo);
btn3.addEventListener("click",addThree);
btn4.addEventListener("click",addFour);
btn5.addEventListener("click",addFive);
btn6.addEventListener("click",addSix);
btn7.addEventListener("click",addSeven);
btn8.addEventListener("click",addEight);
btn9.addEventListener("click",addNine);
btn0.addEventListener("click",addZero);
btnDot.addEventListener("click",addDot);
btnPlus.addEventListener("click",sum);
btnMinus.addEventListener("click",minus);

btnMulti.addEventListener("click",multi);

btnDivision.addEventListener("click",division);
btnRoot.addEventListener("click",power);
btnEqual.addEventListener("click",equal);
btnClear.addEventListener('click',clear);
btnDelete.addEventListener('click',del);
document.addEventListener('keydown',(e)=>{
    switch(e.code){
        case "NumpadAdd": sum();
        break;
        case ("Minus"||'NumpadSubtract'): minus();
        break;
        case "NumpadMultiply":multi();
        break;
        case ("Slash"||"NumpadDivide"): division();
        break;
        case "power": power();
        break;
        case "Equal": equal();
        break;
        case ("Digit1"||"Numpad1"): addOne();
        break;
        case ("Digit2"||"Numpad2"): addTwo();
        break;
        case ("Digit3"||"Numpad3"): addThree();
        break;
        case ("Digit4"||"Numpad4"): addFour();
        break;
        case ("Digit5"||"Numpad5"): addFive();
        break;
        
        case ("Digit6"||"Numpad6"): addSix();
        break;
        
        case ("Digit7"||"Numpad7"): addSeven();
        break;
        
        case ("Digit8"||"Numpad8"): addEight();
        break;
        
        case ("Digit9"||"Numpad9"): addNine();
        break;
        case ("Digit0"||"Numpad0"): addZero();
        break;
        
    }
});
btnInfo.addEventListener('click',()=>{
    modal.style.display = "block";
});
span.addEventListener('click',()=>{
   modal.style.display = "none";
      
});

