// banner btn 
function hideAndShow() {
    hideElementById('header');
    showElementById('mainBody')
}
// seat limit function
let seatCount = 0
function seatLimit (){ 
if(seatCount >4){
    alert("YOU CAN'T BOOK MORE THAN 4 SEAT AT A TIME")   
}
}
// totalPrice = grandTotalPrice
// setTextElementValueById('grand-total',getTextElementValueById('total-price')=getTextElementValueById('total-price')

// let finaltotal =getTextElementValueById('total-price')
// setTextElementValueById('grand-total',finaltotal)
document.getElementById("number-input").addEventListener("input", function() {
    var inputValue = parseInt(document.getElementById("number-input").value);
    var hideBtn = document.getElementById('hidden-btn');
    if (inputValue > 0) {
        hideBtn.style.display = "inline-block"; // Show the button
    } else {
        hideBtn.style.display = "none"; // Hide the button
    }
})
// congrass
function hideAndShow2() {
    let grandtotal = getTextElementValueById('grand-total')
    if(seatCount >4){
        alert('YOU CANT BUY MORE THAN 4 Seat AT A TIME')
    }
else{
    hideElementById('header');
    hideElementById('mainBody');
    showElementById('success')
}
   
}
function hideAndShow3() {
  
    hideElementById('success');
    hideElementById('mainBody');
    showElementById('header')
    location.reload()
}