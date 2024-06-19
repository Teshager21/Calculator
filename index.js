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

let actionKeys=document.querySelectorAll('.numKey');

let screen =document.querySelector('.screen');
const readKeyClick=(e)=>{
  display= display + e.target.textContent;
  screen.textContent=display;

}

// actionKeys.forEach(element => {
//     element.addEventListener('click',()=>numKeyClick);
// });

for(el of actionKeys){
    el.addEventListener('click',readKeyClick); 
}
console.log(operate(3,1,'/'));