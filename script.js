
const drawContainer = document.querySelector('.drawContainer');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
resetButton.addEventListener('click', () => resetBoard(heightWidth));
rainbowButton.addEventListener('click', () => rainbowBoard(heightWidth));


//Set the default number of row and columns to "heighWidth"
let heightWidth = 64;

createDisplay(heightWidth);
giveColorChangeProperty('rgb(0, 0, 0)');

//Create a function that makes the grid to draw on.
function createDisplay(heightWidth) {
    //Start a loop: Create "heightWidth" number of rows, (Start a loop: fill each column with "heightWidth" columns.))
    let rCounter = 0;
    while (rCounter < heightWidth) {
        const row = document.createElement('div');
        //Give each row a class to adjust its CSS properties
        row.setAttribute('class', 'row');
        drawContainer.appendChild(row);

        rCounter++;
    } 
    //creates a number of divs in each row element equal to heightWidth
    const rows = document.querySelectorAll('.row');
    rows.forEach((div) => {
        for (let cCounter = 0; cCounter < heightWidth; cCounter++){
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            div.appendChild(column);
        };
    });

}

//Applies a hover event listener to a selection of divs with a given class
//name which changes the div's color.
function giveColorChangeProperty (color){
    const columns = document.querySelectorAll('.column');
    columns.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = color;
        });
    });
}



//removes all of the .row elements and the .column with them.
function eraseBoard() {
    const disposal = document.querySelectorAll('.row');
    disposal.forEach((div) => div.remove());
}

//removes the .row elements, and then repopulates with new ones.
function resetBoard(heightWidth) {
    eraseBoard();
    createDisplay(heightWidth);
    giveColorChangeProperty('black');
}

function rainbowBoard(heightWidth) {
    eraseBoard();
    createDisplay(heightWidth);
    giveRainbowProperty();
}

function giveRainbowProperty() {
    function random(inputNumberVariable) {
        return Math.floor(Math.random()*inputNumberVariable);
    }
 
   
    const columns = document.querySelectorAll('.column');
    columns.forEach((div) => {
        let R = random(255);
        let G = random(255);
        let B = random(255);
        let color = ("rgb(" + R + ", " + B + ", " + G + ")");
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = color;
        });
    });
}



