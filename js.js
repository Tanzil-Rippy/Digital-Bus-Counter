// btn click to open other tab
const swichBtn =document.getElementById('banner-btn');
const mainBody = document.getElementById('mainBody');
const headre = document.getElementById('header')
swichBtn.addEventListener('click',function(){
   
    if(mainBody.style.display === 'none'){
        mainBody.style.display ='block';
        headre.style.display = 'none'
    }else {
        mainBody.style.display = 'none';
    }
})

// on click btn and action



const seatAdded = document.getElementById('ticket-added')

const A1 = document.getElementById('A1')

let count =1
const seatLeft = document.getElementById('ticket-seat-left');
// let tseatLeft = seatLeft.innerText;
// let fTSeatLeft = parseInt(tseatLeft)
let nftSeatLeft =40
let selectedSeat = 0
console.log(nftSeatLeft)
function seatBtnAction (){
   


    
    if (count== 1){
        A1.style.backgroundColor = '#1DD100';
        count=0
         nftSeatLeft= nftSeatLeft-1    
         seatLeft.innerText =nftSeatLeft

         selectedSeat  = selectedSeat+1  
        seatAdded.innerText =selectedSeat
        
    }else{
        A1.style.backgroundColor ='#FFFFFF'
        count = 1
        nftSeatLeft=nftSeatLeft +1
        seatLeft.innerText =nftSeatLeft

        selectedSeat  = selectedSeat-1
        seatAdded.innerText = selectedSeat
    }
}
