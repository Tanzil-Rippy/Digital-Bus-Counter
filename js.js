// btn click to open other tab
const swichBtn =document.getElementById('banner-btn');
const mainBody = document.getElementById('main-body');
swichBtn.addEventListener('click',function(){
    if(mainBody.style.display === 'none'){
        mainBody.style.display ='block';
    }
})
