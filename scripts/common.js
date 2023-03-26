function updateNumber(numberInputField, increase){
    const numberInput = document.getElementById(numberInputField)
    const numberInputValueString = numberInput.value
    const numberInputValue = parseFloat(numberInputValueString)
    let newNumber

    if(increase === true){
        newNumber = numberInputValue + 1
    }
    else{
        newNumber = numberInputValue - 1
    }

    numberInput.value = newNumber

    return newNumber
}

function updatePrice(quantity, singlePrice, indicatedPrice){
    const priceValueElement = document.getElementById(indicatedPrice)

    newPrice = quantity * singlePrice

    priceValueElement.innerText = newPrice

    return newPrice
}