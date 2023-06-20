




const cellElements = document.querySelectorAll('[data-cell]');
const xMarks = document.querySelectorAll('.board-cell-x');
const oMarks = document.querySelectorAll('.board-cell-o');
const boardSvg = document.querySelectorAll('.cell-icons');

const reloadBtn = document.querySelector('.reload-svg')

let circleTurn = true;
let lastPlayer = null;

function handleClick(e) {
  const cell = e.target;

  // Check if the last move was made by the same player
  if (lastPlayer === circleTurn) {
    return;
  }

  const currentClass = circleTurn ? 'board-cell-o' : 'board-cell-x';
  placeMark(cell, currentClass);

//   swapTurns();
circleTurn = !circleTurn;
}


function placeMark(cell, currentClass) {
  // Add the current player's class to the clicked cell
  cell.classList.add(currentClass);

  // Display the corresponding mark element on the clicked cell
  if (currentClass === 'board-cell-x') {
    xMarks.forEach((xMark) => {
      if (xMark.parentElement === cell) {
        xMark.style.display = 'block';
      } else {
        xMark.style.display = 'none';
      }
    });
    oMarks.forEach((oMark) => {
      oMark.style.display = 'none';
    });
  } else {
    oMarks.forEach((oMark) => {
      if (oMark.parentElement === cell) {
        oMark.style.display = 'block';
      } else {
        oMark.style.display = 'none';
      }
    });
    xMarks.forEach((xMark) => {
      xMark.style.display = 'none';
    });
  }

   circleTurn = !circleTurn;
}

// function swapTurns() {
//   circleTurn = !circleTurn;
// }

// Hide the xMark and oMark elements by default
boardSvg.forEach((boardSvg) => {
    boardSvg.style.display = 'none';
});

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick);
});


// Resetting Game 

reloadBtn.addEventListener('click', ()=> {
  boardSvg.forEach(svgElement => {
    svgElement.style.display = 'none';
  });
  circleTurn = true;
  lastPlayer = null;
})


console.log(boardSvg)