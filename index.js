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


const readActionKey=(e)=>{
    restart=false;
if(e.target.className==='actionKey'){
//when the previous input is an operator
    //replacing the pervious operator with another one
    // console.log('first',display);
    let lastChar= display.toString().slice(-1)
    if( lastChar.match(/[/ +*-/ /]/)){
        display=display.slice(0,-1)+e.target.textContent;
    }

//when the previous input is not operator
 //No operator chaining- append input to display
 if(!lastChar.match(/[/ +*-/ /]/)) {
    // console.log('second',display);
    display= display + e.target.textContent;
    // console.log('third',display);
    //Chaining-evaluate first two numbers before going to the next operation 
 displayCleaned=display.toString().trim().split(/[/*+-]/).filter(el=>el!=='').join();
//  console.log('cleaned',display,displayCleaned,displayCleaned.split(/[,]/).length);
 if(display.toString().match(/[/ +*-//]/) && displayCleaned.split(/[,]/).length>1){
    evaluate();
    display= display + e.target.textContent;
    // console.log('fourth after evaluation',display);
    
}

 }

 
// capture the last operator input
 operator=e.target.textContent;
}
}
const readNumKey=(e)=>{
    if(e.target.className==='numKey'){
        //resetting when number key is pressed after result 
        if(restart===true) {
            display=''
            restart=false;
         }
         else if(!(e.target.textContent==='.' && display.slice(-1)==='.')){
        //append input to display on restart=false
            display= display + e.target.textContent;
         }
        }
    
}
const readKeyClick=(e)=>{
    readActionKey(e);
    readNumKey(e);
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
    console.log(display);
    let entries;
        entries=display.toString().trim().split(/[/*+-]/);
    console.log('entries',entries);
    if(display[0]==='-'){
        num1=parseFloat(entries[1])*-1
        num2=parseFloat(entries[2]);
    }else{
        num1=parseFloat(entries[0]);
        num2=parseFloat(entries[1]);
        console.log(num1,num2);
    }
    if(true){
        display=operate(num1,num2,operator);
        console.log('beeen here......');
    }
    else{
        if(entries[0]!==''){
            // display=display.toString().slice(0,-1);
            // display=display.toString().slice(0,-1);
        }    
       
    }
    screen.textContent=display;
}

document.querySelector('.equalsKey').addEventListener('click',()=>{
    if(display.toString().match(/[/ +*-/ /]/)&&!display.toString().slice(-1).match(/[/ +*-/ /]/)){
        evaluate(); 
        restart=true;
    }
    })
document.querySelector('.backKey').addEventListener('click',()=>{
    display=display.toString().slice(0,-1);
    screen.textContent=display;
})

