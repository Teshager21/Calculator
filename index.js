let num1,num2, operator,restart=false;
let display='';
const add =( num1,num2)=>{
       return num1+num2;
}
const subtract =( num1,num2)=>{
    return num1-num2;
}
const multiply =( num1,num2)=>{
    return num1*num2;
}
const divide =( num1,num2)=>{
    return num1/num2;
}

const operate=(num1,num2,operator)=>{
switch(operator){
    case '+':
         return add(num1,num2);
    case '-':
    return subtract(num1,num2);
    case '*':
        return multiply(num1,num2);
    case '/':
        return divide(num1,num2);
    default:
        return;
}
}

let numKeys=document.querySelectorAll('.numKey');
let actionKeys=document.querySelectorAll('.actionKey');
let screen =document.querySelector('.screen');

const readKeyClick=(e)=>{
    let lastChar= display.toString().slice(-1)
    if(e.target.className==='actionKey' && lastChar.match(/[/ +*-/ /]/)){
        display=display.slice(0,-1)+e.target.textContent;
    }
    
     if(restart===true && e.target.className==='numKey') {
        display=''
        screen.textContent=display;
        restart=false;
     }
     if(restart===true && e.target.className==='actionKey') {
        restart=false;
     }
    if(e.target.className==='actionKey'){
    if(display.toString().match(/[/ +*-/ /]/) && display.toString().split(/[/ +*-/ /]/).length>1){
    evaluate();
    
    }
       operator=e.target.textContent;
      }
     if(!lastChar.match(/[/ +*-/ /]/)&&e.target.className==='actionKey'||e.target.className==='numKey' ) {
        display= display + e.target.textContent;
     }

  screen.textContent=display;
}


for(el of numKeys){
    el.addEventListener('click',readKeyClick); 
}

for(el of actionKeys){
    el.addEventListener('click',readKeyClick); 
}

document.querySelector('.clearKey').addEventListener('click',()=>{
    display='';   
    screen.textContent=display;})

const evaluate=()=>{
   
    let entries=display.toString().split(/[/ +*-/ /]/);
    if(display[0]==='-'){
        num1=parseInt(entries[1])*-1
        num2=parseInt(entries[2]);
    }else{
        num1=parseInt(entries[0]);
        num2=parseInt(entries[1]);
    }
    if(num1&&num2){
        display=operate(num1,num2,operator);
    }
    else{
        if(entries[0]!==''){
            display=display.toString().slice(0,-1);
        }    
       
    }
    screen.textContent=display;
}

document.querySelector('.equalsKey').addEventListener('click',()=>{
    if(display.toString().match(/[/ +*-/ /]/)){
        evaluate(); 
        restart=true;
    }
    })

