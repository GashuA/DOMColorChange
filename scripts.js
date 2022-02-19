
var h1 = document.querySelector('h1')
h1.innerText = addRandomColor();

function addRandomColor(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
var buttons = document.querySelectorAll('button')
for(let button of buttons){
  button.addEventListener('click', colorize);
}

var h2s = document.querySelectorAll('h2')
for(let h2 of h2s)
{
  h2.addEventListener('click', colorize)
}

function colorize() {  
  this.style.backgroundColor = addRandomColor();
  this.style.color = addRandomColor()

  h1.innerText = this.style.backgroundColor = addRandomColor();
}

// Inout text and h2 display
const input = document.querySelector('#myInput');
const h3 = document.querySelector('#h1Title')

input.addEventListener('input', function (e) {  
  h3.innerText = input.value
  h3.textContent = remove();
})


