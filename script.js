const buttonNum = Array.from(document.querySelectorAll('#buttonsnum'));
const operator = Array.from(document.querySelectorAll('#buttonsop'));
const decimal = document.querySelector('#buttonsdec');
const equal = document.querySelector("#buttonseq");
const expDisplay = document.getElementById('expression');
const allClear = document.getElementById('buttonsAC');
const finalDisplay = document.getElementById('finalResult');
console.log(operator);

equal.addEventListener('click',operation);
allClear.addEventListener('click',clear);
// buttonNum[0].addEventListener('click',displayInExp);


buttonNum.map( button =>{
    button.addEventListener('click',(e) => {
        NumClicked = e.target.innerHTML;
        expDisplay.innerHTML += NumClicked
        console.log(NumClicked);
        console.log(expDisplay);
    })
})



operator.map( opbutton =>{
    opbutton.addEventListener('click',(e) => {
        opClicked = e.target.innerHTML;
        expDisplay.innerHTML += opClicked;
        console.log(opClicked);
    })
})

function clear(){
    expDisplay.innerHTML='';
    finalDisplay.innerHTML= '';
}

 

function operation() {
        var number1 = Number(expDisplay.innerHTML.substr(0,expDisplay.innerHTML.indexOf(opClicked)));
        var number2 = Number(expDisplay.innerHTML.split(opClicked).pop());
        
    
switch(opClicked){
    case '+':
        finalDisplay.innerText = number1+number2
    break;
    case '-':
        finalDisplay.innerText = number1-number2
    break;
    case '*':
        finalDisplay.innerText = number1*number2
    break;
    case '/':
        finalDisplay.innerText = number1/number2
    break;
    case '%':
        finalDisplay.innerText = (number1/number2)*100;
    break;
}
}
