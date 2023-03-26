function subtotalPrice(phoneTotalPriceID, caseTotalPriceID, subtotalID) {

    function getTextElementValue(elementID) {
        const element = document.getElementById(elementID)
        const elementValueString = element.innerText
        const elementValue = parseFloat(elementValueString)
        return elementValue
    }

    function setTextElementValue(elementID, newValue){
        const element = document.getElementById(elementID)
        element.innerText = newValue
    }

    const phoneTotal = getTextElementValue(phoneTotalPriceID)
    const caseTotal = getTextElementValue(caseTotalPriceID)

    const subtotal = phoneTotal + caseTotal

    setTextElementValue(subtotalID, subtotal)

    return subtotal
}

function taxPrice(subtotal, taxID){
    const taxElement = document.getElementById(taxID)
    const taxAmount = subtotal * 0.15
    taxElement.innerText = taxAmount

    return taxAmount
}

function totalPrice(subtotal, tax, totalPriceID){
    const totalPriceElement = document.getElementById(totalPriceID)
    const totalPrice = subtotal + tax
    totalPriceElement.innerText = totalPrice
    
    return totalPrice
}