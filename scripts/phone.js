document.getElementById("btn-phone-plus").addEventListener("click", function(){
    const phoneQuantity = updateNumber("phone-number-field", true)
    const phoneTotalPrice = updatePrice(phoneQuantity, 1219, "phone-price")
    const subtotal = subtotalPrice("phone-price", "case-price", "subtotal")
    const tax = taxPrice(subtotal, "tax")
    const total = totalPrice(subtotal, tax, "total")
})

document.getElementById("btn-phone-minus").addEventListener("click", function(){
    const phoneQuantity = updateNumber("phone-number-field", false)
    const phoneTotalPrice = updatePrice(phoneQuantity, 1219, "phone-price")
    const subtotal = subtotalPrice("phone-price", "case-price", "subtotal")
    const tax = taxPrice(subtotal, "tax")
    const total = totalPrice(subtotal, tax, "total")
})