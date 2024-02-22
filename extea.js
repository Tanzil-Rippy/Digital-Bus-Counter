// hide element 
function hideElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}
// show element
function showElementById (elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}
// set bg-color
function SetBackGroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-600');
    
}
// remove Bg Color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-green-600')
}

// re usable function life and score
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const value =parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId,value){
    const element =document.getElementById(elementId)
    element.innerText = value;
}
