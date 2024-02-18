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
