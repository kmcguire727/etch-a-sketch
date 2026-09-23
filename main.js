// Dimensions of an individual grid square in pixels
const GRID_DIMS = 16;

// Object variable decs
const container = document.querySelector(".container");
const button = document.querySelector("button");

// Calculate the number of squares that will be needed to cover the etch-a-sketch
let viewportArea = container.clientHeight * container.clientWidth;
let numOfSquares = Math.round(viewportArea / (GRID_DIMS**2));

// Create the grid for the etch-a-sketch 
function createAppendDivs(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        container.appendChild(square);
    }
}

createAppendDivs(numOfSquares);

// Use event bubbling to only require a single container EventListener that triggers, finds the target square, and colors it via a new class
container.addEventListener('mouseover', (event) => {
  if (event.target.className === "grid-square") {
        event.target.classList.add('hover');
    }
});

// Listen for a button click and "reset" the grid by just removing that class that was added
button.addEventListener('click', (event) => {
    const coloredSquares = document.querySelectorAll('.hover')
    coloredSquares.forEach((coloredSquare) => {
        coloredSquare.classList.remove('hover');
    });
});

