const balance = document.getElementById('balance')
const incAmount = document.getElementById('inc-amt');
const expAmount = document.getElementById('exp-amt');

const historyList = document.getElementById('list');

const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = [];


form.addEventListener('submit',function(e){
    e.preventDefault();

    const transactionText = text.value;
    const transactionAmount = Number(amount.value);
    
    const transaction = {
        id: Date.now(),
        text:transactionText,
        amount:transactionAmount
    }

    transactions.push(transaction);
    const item = document.createElement('li');

    if(transactionAmount>0){
        item.classList.add('plus');
    }else{
        item.classList.add('minus');
    }

    item.innerHTML = `${transactionText} <span>${transactionAmount<0? '-': '+'}${Math.abs(transactionAmount)}</span> <button class="delete-btn">X</button>`

    historyList.appendChild(item);

    text.value = '';
    amount.value = '';


    updateValues();
})

function updateValues(){
    const amounts = transactions.map((transaction) => transaction.amount);

    const totalBalance = amounts.reduce((acc,value) => (acc+value),0);
    const income = amounts.filter((value) => value>0);
    const expense = amounts.filter((value) => value<0);

    const totalImcome = income.reduce((acc,val) =>(acc+val),0);
    const totalExpense = expense.reduce((acc,val) =>(acc+val),0);

    balance.innerText = totalBalance;
    incAmount.innerText = totalImcome;
    expAmount.innerText = totalExpense;
}
