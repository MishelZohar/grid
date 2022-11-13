const contain = document.querySelector('.container');

function makeGrid(rows, cols){
  contain.style.setProperty('--grid-rows', rows);
  contain.style.setProperty('--grid-cols', cols);

  for(let i = 0; i < rows * cols; i++){
    let cell = document.createElement('div');
    cell.innerText = i + 1;
    contain.appendChild(cell).className = 'item';
  }
  console.log(rows);
}

function changeColor(e){
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  console.log(e.target.className);
  if (e.target.className === "item"){
    e.target.style.backgroundColor = randomColor;
  }
}



const div = document.querySelector('div');


div.addEventListener('mouseover', changeColor);




let rows = 16;
let cols = 16;

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  rows = window.prompt("Please enter rows");
  cols = window.prompt("Please enter cols");
  if (cols === 100 || rows === 100){
    alert("Please enter a number that lower than 100");
  }
  else{
    contain.textContent = "";
    makeGrid(rows, cols);
  }

});

makeGrid(rows, cols);