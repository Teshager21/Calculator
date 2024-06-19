let num1,num2, operator;
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
    console.log(e.target.className);
    // if(e.target.className==='actionKey'){
    //     // console.log(e.target.textContent);
    //     num1=parseInt(display)
    //     console.log('the first number is: ',num1);
    //   }
  display= display + e.target.textContent;
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

    document.querySelector('.equalsKey').addEventListener('click',()=>{
        console.log(display) 
         let entries=display.split(/[/ +*-/ /]/);
         console.log(entries);
        screen.textContent=display;})
