function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value
    const amountValue = parseFloat(inputAmountText)

    // clear input field
    inputField.value = ''
    return amountValue
}

function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId)
    const totalFieldText = totalField.innerText
    const previousTotal = parseFloat(totalFieldText)

    totalField.innerText = previousTotal + amount
}

function getCurrentBalance(){
    const balenceTotal = document.getElementById('balance-total')
    const balenceTotalText = balenceTotal.innerText
    const previousBalenceTotal = parseFloat(balenceTotalText)
    return previousBalenceTotal
}
function updateBalance(amount, isAddition){
    const balenceTotal = document.getElementById('balance-total')
    const previousBalenceTotal = getCurrentBalance()
    if(isAddition){
        balenceTotal.innerText = previousBalenceTotal + amount
    }
    else{
        balenceTotal.innerText = previousBalenceTotal - amount
    }
}


document.getElementById('deposit-button').addEventListener('click', 
function(){ 

    // deposite 
    const depositAmount = getInputValue('deposit-input')
    if(depositAmount>0 && Number(depositAmount)){
        // get current deposite
        updateTotalField('deposit-total', depositAmount)

        // update balence total
        updateBalance(depositAmount, true)
    }
    
    

})

// handel withdraw button
document.getElementById('withdraw-button').addEventListener('click', 
function(){

    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        // update withdraw total
        updateTotalField('withdraw-total', withdrawAmount)
        // update balence total
        updateBalance(withdrawAmount, false)
    }
    if(withdrawAmount>currentBalance){
        alert('Your Withdraw Amount is getter then Balance')
    }

})
