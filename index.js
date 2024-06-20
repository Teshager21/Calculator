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
//when the previous input is an operator
    //replacing the pervious operator with the new one
    let lastChar= display.toString().slice(-1)
    if( lastChar.match(/[/ +*-/ /]/)){
        display=display.slice(0,-1)+value;
    }

//when the previous input is not operator

 if(!lastChar.match(/[/ +*-/ /]/)) { 
    //Chaining-evaluate first two numbers before going to the next operation 
    displayCleaned=display.toString().trim().split(/[/*+-]/).filter(el=>el!=='').join();
 if(display.toString().match(/[/ +*-//]/) && displayCleaned.split(/[,]/).length>1){
    evaluate();
     
}
display= display + value; 
 }

 
// capture the last operator input
 operator=value;
}
const readNumKey=(value)=>{
     console.log('first: ',display);
        //resetting when number key is pressed after result
        if(restart===true) {
            display=''
            restart=false;
            display= display + value;
         }
        //only one dot for the first entry
        //if there is no operator in display and if it already contains a dot - don't allow any more
        
       else if(!display.toString().match(/[/*+-]/) && display.toString().trim().includes('.')&& value==='.'){
            if(display.slice(-1)==='.'){
            }
            console.log('cant do this')}
            
       else if(display.toString().match(/[/*+-]/) && display.toString().trim().split(/[/*+-]/).filter(el=>el!=='').length>1 && display.toString().trim().split(/[/*+-]/).filter(el=>el!=='')[1].includes('.')&&value==='.'){
                  console.log('too much dots......');
       }

         else if(value==='.' && display.slice(-1)==='.'){
        //append input to display on restart=false
          
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

const handleKeyboardInput=(e)=>{
    console.log(e)
}
document.addEventListener('keydown',(e)=>{
    
     if(/^\d$/.test(e.key) || /[.]/.test(e.key)){
        readNumKey(e.key);
        console.log('reading number:',e.key);
     }
     if(/[/*+-]/.test(e.key)){
        readActionKey(e.key);
     }
    //   //check if the input is a number
    // console.log(/^\d$/.test(e.key));
    // //alphabet
    // console.log(/[A-Z]/i.test(e.key));
    // //operation
    // console.log(/[/*+-]/.test(e.key));
    // //special
    // console.log(/[.=]/.test(e.key));
    // //backspace
    // // console.log(e.keyCode===8)
    // // display=display+e.key;
    screen.textContent=display;
    console.log(e.key);
    // screen.textContent=display;
}); 

