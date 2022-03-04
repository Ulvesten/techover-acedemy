const input = document.getElementById('input')
const button = document.querySelectorAll('.btn')
const tipProcent = document.getElementById('tipProcent');
const error = document.getElementById('error')
const people = document.getElementById('people')
const totalTotal = document.querySelectorAll('.tipTotal')
const reset = document.querySelector('.resetBtn')

let billTotal = 0;
let peopleTotal = 1;
let tipTotal = 0.15;

input.addEventListener('input',validateBill);

function validateBill(){
    if(input.value.includes(',')){
        input.value.replace(',','.')
    }
    billTotal = parseFloat(input.value);
    calculate()
    console.log(billTotal)
}

tipProcent.addEventListener('input',tipCustomTotal);
people.addEventListener('input',setPeopleTotal)
reset.addEventListener('click',handleReset);





button.forEach(btn => {
    btn.addEventListener('click',handleClick)
});



function handleClick(event){
    button.forEach(btn => {
        btn.classList.remove('active')
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipTotal = parseFloat(btn.innerHTML)/100
             console.log(tipTotal)
        }
    })
    tipProcent.value=''
    calculate()
}

function tipCustomTotal(){
    tipTotal = parseFloat(tipProcent.value/100)
    button.forEach(btn => {
        btn.classList.remove('active');
    })
    if(tipProcent.value !== 0){
         calculate();
         
    }
    console.log(tipTotal)
}

function setPeopleTotal(){
    peopleTotal = parseFloat(people.value)
    console.log(peopleTotal)
    calculate() 
}

function calculate() {
    if(peopleTotal >= 1 ) {
        let tip = billTotal * tipTotal / peopleTotal;
        let totalAmount = billTotal * (tipTotal + 1) / peopleTotal;

        totalTotal[0].innerHTML = '$' + tip.toFixed(2);
        totalTotal[1].innerHTML = '$' + totalAmount.toFixed(2);
    }
}

function handleReset(){
    input.value = 0.0;
    validateBill()

    button[2].click();
    people.value = 1;
    setPeopleTotal()
}