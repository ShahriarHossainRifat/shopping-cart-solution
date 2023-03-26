document.getElementById("btn-case-plus").addEventListener("click", function(){
    const caseQuantity = updateNumber("case-number-field", true)
    const caseTotalPrice = updatePrice(caseQuantity, 59, "case-price")
    const subtotal = subtotalPrice("phone-price", "case-price", "subtotal")
    const tax = taxPrice(subtotal, "tax")
    const total = totalPrice(subtotal, tax, "total")
})

document.getElementById("btn-case-minus").addEventListener("click", function(){
    const caseQuantity = updateNumber("case-number-field", false)
    const caseTotalPrice = updatePrice(caseQuantity, 59, "case-price")
    const subtotal = subtotalPrice("phone-price", "case-price", "subtotal")
    const tax = taxPrice(subtotal, "tax")
    const total = totalPrice(subtotal, tax, "total")
})