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


const readActionKey=(value)=>{
   

    restart=false;
    let lastChar= display.toString().slice(-1)
//as first input
if(display===''){
    if(value==="+"){
        screen.textContent=display;
    }else if(display.match(/[/*]/)){
        display=''
        screen.textContent=display;
    }
    else if(value==='-'){
        display=value;
        screen.textContent=display;
    }
}
//when the previous input is an operator
    //replacing the pervious operator with the new one
 
    else if( lastChar.match(/[/*+-]/)){
        display=display.slice(0,-1)+value;
    }

//when the previous input is not operator

else if(!lastChar.match(/[/*+-]/)) { 
    //Chaining-evaluate first two numbers before going to the next operation 
    displayCleaned=display.toString().trim().split(/[/*+-]/).filter(el=>el!=='').join();
 if(display.toString().match(/[/*+-]/) && displayCleaned.split(/[,]/).length>1){
    evaluate();
     
}
display= display + value; 
 }

 
// capture the last operator input
 operator=value;
}
const readNumKey=(value)=>{
        
        const displayHasOperator=()=>{
            return display.toString().match(/[/*+-]/)
        }
        const displayHasDigitPoint=()=>{
            return display.toString().trim().includes('.')
        }
        const numberOfNumbersInDisplay=()=>{
          return  display.toString().trim().split(/[/*+-]/).filter(el=>el!=='').length;  
        }
        const secondNumberHasDigitPoint=()=>{
            return display.toString().trim().split(/[/*+-]/).filter(el=>el!=='')[1].includes('.');
        }
        //resetting when number key is pressed after result
        if(restart===true) {
            display=''
            restart=false;
            display= display + value;
         }
        //only one dot for the first entry
        //if there is no operator in display and if it already contains a dot - don't allow any more
        
       else if(!displayHasOperator() && displayHasDigitPoint()&& value==='.'){
            if(display.slice(-1)==='.'){
            }  } 
       else if(displayHasOperator && numberOfNumbersInDisplay>1 && secondNumberHasDigitPoint&&value==='.'){
       } 
       else if(value==='.' && display.slice(-1)==='.'){
      }else{
            display= display + value;
         }  
    
}
const readKeyClick=(e)=>{
    if(e.target.className==='numKey') readNumKey(e.target.textContent);
    if(e.target.className==='actionKey')readActionKey(e.target.textContent);
    screen.textContent=display;
}


for(el of numKeys){
    el.addEventListener('click',readKeyClick); 
}

for(el of actionKeys){
    el.addEventListener('click',readKeyClick); 
}

const readClearKey=()=>{
    display='';   
    screen.textContent=display;
}

document.querySelector('.clearKey').addEventListener('click',readClearKey)

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
    }
    if(true){
        display=operate(num1,num2,operator);
        console.log('beeen here......');
    }
    else{
        if(entries[0]!==''){
        }    
       
    }
    screen.textContent=display;
}
 const readEqualsKey=()=>{
    if(display.toString().match(/[/*+-]/)&&!display.toString().slice(-1).match(/[/*+-]/)){
        evaluate(); 
        restart=true;
    }
 }
document.querySelector('.equalsKey').addEventListener('click',readEqualsKey)

const readBackspaceKey=()=>{
    display=display.toString().slice(0,-1);
    screen.textContent=display;
}
document.querySelector('.backKey').addEventListener('click',readBackspaceKey)

const handleKeyboardInput=(e)=>{
    console.log(e)
}
document.addEventListener('keydown',(e)=>{
    //numeric inputs
     if(/^\d$/.test(e.key) || /[.]/.test(e.key)){
        readNumKey(e.key);
     }
     //operator inputs
     if(/[/*+-]/.test(e.key)){
        readActionKey(e.key);
     }
     //equals & enter key
     if(/[/=]/.test(e.key)||e.key==="Enter"){
        readEqualsKey();
       
     }
     //backSpace
     if(e.key==='Backspace'){
        readBackspaceKey();
     }
     //delete key
     if(e.key==='Delete'){
        readClearKey();
     }
    screen.textContent=display;
}); 

