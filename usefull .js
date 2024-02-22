
let count = 1
let count2 = 1
let count3 = 1
let count4 = 1
let count5 = 1
let count6 = 1
let count7 = 1
let count8 = 1
let seatCount = 0
// function cuponPlay(){
//     let inpputCupon =Document.getElementById('cupon-input')
// let cupon15 = inpputCupon.value;
// if(cupon15 = 'qqq'){
    
// console.log(cupon15)
// }
// }

// let inpputCupon =Document.getElementById('cupon-input')
// const cupon15 = inpputCupon.value;
// console.log(cupon15)
// function no 1
function seatBtnAction() {

    if (count == 1) {
        count = 0
       seatCount = seatCount +1
        SetBackGroundColorById('A1')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-1').innerText = 'A1'
        document.getElementById('economy-1').innerText = 'Economy'
        document.getElementById('ticket-price-1').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)

        
    //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)

    } else {
        count = 1
        seatCount = seatCount -1
        removeBackgroundColorById('A1')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-1').innerText = ''
        document.getElementById('economy-1').innerText = ''
        document.getElementById('ticket-price-1').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)

              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 2
function seatBtnAction2() {

    if (count2 == 1) {
        count2 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('A2')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-2').innerText = 'A2'
        document.getElementById('economy-2').innerText = 'Economy'
        document.getElementById('ticket-price-2').innerText = '550'
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice + 550
              setTextElementValueById('total-price', totalPrice)
             //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
              
    } else {
        count2 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('A2')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-2').innerText = ''
        document.getElementById('economy-2').innerText = ''
        document.getElementById('ticket-price-2').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 3
function seatBtnAction3() {

    if (count3 == 1) {
        count3 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('A3')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-3').innerText = 'A3'
        document.getElementById('economy-3').innerText = 'Economy'
        document.getElementById('ticket-price-3').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count3 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('A3')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-3').innerText = ''
        document.getElementById('economy-3').innerText = ''
        document.getElementById('ticket-price-3').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 4
function seatBtnAction4() {

    if (count4 == 1) {
        count4 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('A4')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-4').innerText = 'A4'
        document.getElementById('economy-4').innerText = 'Economy'
        document.getElementById('ticket-price-4').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count4 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('A4')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-4').innerText = ''
        document.getElementById('economy-4').innerText = ''
        document.getElementById('ticket-price-4').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 5 B1
function seatBtnAction5() {

    if (count5 == 1) {
        count5 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('B1')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-5').innerText = 'B1'
        document.getElementById('economy-5').innerText = 'Economy'
        document.getElementById('ticket-price-5').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count5 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('B1')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-5').innerText = ''
        document.getElementById('economy-5').innerText = ''
        document.getElementById('ticket-price-5').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 6 b2
function seatBtnAction6() {

    if (count6 == 1) {
        count6 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('B2')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-6').innerText = 'B2'
        document.getElementById('economy-6').innerText = 'Economy'
        document.getElementById('ticket-price-6').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count = 1
        seatCount = seatCount -1
        removeBackgroundColorById('B2')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-6').innerText = ''
        document.getElementById('economy-6').innerText = ''
        document.getElementById('ticket-price-6').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 7
function seatBtnAction7() {

    if (count7 == 1) {
        count7 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('B3')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-7').innerText = 'B3'
        document.getElementById('economy-7').innerText = 'Economy'
        document.getElementById('ticket-price-7').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count7 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('B3')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-7').innerText = ''
        document.getElementById('economy-7').innerText = ''
        document.getElementById('ticket-price-7').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// function no 8
function seatBtnAction8() {

    if (count8 == 1) {
        count8 = 0
        seatCount = seatCount +1
        SetBackGroundColorById('B4')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft - 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked + 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-8').innerText = 'B4'
        document.getElementById('economy-8').innerText = 'Economy'
        document.getElementById('ticket-price-8').innerText = '550'
        // price update
        let totalPrice = getTextElementValueById('total-price')
        totalPrice = totalPrice + 550
        setTextElementValueById('total-price', totalPrice)
        //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    } else {
        count8 = 1
        seatCount = seatCount -1
        removeBackgroundColorById('B4')
        // seat left
        let seatLeft = getTextElementValueById('ticket-seat-left')
        seatLeft = seatLeft + 1
        setTextElementValueById('ticket-seat-left', seatLeft)
        // booked seat
        let seatBooked = getTextElementValueById('ticket-added')
        seatBooked = seatBooked - 1
        setTextElementValueById('ticket-added', seatBooked)
        // booked seat details
        document.getElementById('booked-seat-8').innerText = ''
        document.getElementById('economy-8').innerText = ''
        document.getElementById('ticket-price-8').innerText = ''
              // price update
              let totalPrice = getTextElementValueById('total-price')
              totalPrice = totalPrice - 550
              setTextElementValueById('total-price', totalPrice)
              //   grand total update
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal
    setTextElementValueById('grand-total',grandtotal)
    }
}
// GRAND TOTAL
document.getElementById("apply-btn").addEventListener("click", function() {
    let totalPrice = getTextElementValueById('total-price')
    let inputValue = document.getElementById("cupon-input").value;
   if(inputValue === 'NEW15'){
    //   grand total update
    hideElementById('cupon-div')
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal*0.85
    setTextElementValueById('grand-total',grandtotal)
   }else if(inputValue === 'Couple 20'){
    //   grand total update
    hideElementById('cupon-div')
    setTextElementValueById('grand-total',totalPrice)
    let grandtotal = getTextElementValueById('grand-total')
    grandtotal =grandtotal*0.8
    setTextElementValueById('grand-total',grandtotal)
   }
    else{
        alert('INVALID CUPON')
    }
});