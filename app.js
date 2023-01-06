//   ADDING FUNCTIONALITY TO THE SLIDER

const slider = document.getElementById('range-slider');
const selector = document.getElementById('selector');
const progressBar = document.getElementById('progressBar');

slider.oninput = function(){
    selector.style.left = this.value + '%'; 
    progressBar.style.width = this.value + '%'; 
}