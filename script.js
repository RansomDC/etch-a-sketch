
const drawContainer = document.querySelector('.drawContainer');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
const shadeButton = document.querySelector('.shade')
resetButton.addEventListener('click', () => resetBoard(heightWidth));
rainbowButton.addEventListener('click', () => rainbowBoard(heightWidth));
shadeButton.addEventListener('click', () => shadeBoard(heightWidth));


//Set the default number of row and columns to "heighWidth"
let heightWidth = 16;

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

//resets the board, and gives it the rainbowBoard property
function rainbowBoard(heightWidth) {
    eraseBoard();
    createDisplay(heightWidth);
    giveRainbowProperty();
}

//resets the board, and gives it the shadeBoard property
function shadeBoard(heightWidth) {
    eraseBoard();
    createDisplay(heightWidth);
    giveShadeProperty();
}

//Gives each div the hover property which will select a random color for the div
//change to when hovered over.
function giveRainbowProperty() {
    //chooses a random number below the input Number variable
    function random(inputNumberVariable) {
        return Math.floor(Math.random()*inputNumberVariable);
    }
 
    const columns = document.querySelectorAll('.column');
    columns.forEach((div) => {
        let R = random(255);
        let G = random(255);
        let B = random(255);
        let color = ("rgb(" + R + ", " + G + ", " + B + ")");
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = color;
        });
    });
}


//Creates a function that adds 10% opacity to a div when it is hovered over.
//increasing the opacity each time it is hovered.
function giveShadeProperty() {
    const opacityChange = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 1)"];
    const columns = document.querySelectorAll('.column');
    columns.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            
            if (window.getComputedStyle(e.target).backgroundColor === opacityChange[0]) {
                e.target.style.background = opacityChange[1];
            } else if (window.getComputedStyle(e.target).backgroundColor === opacityChange[1]) {
                e.target.style.background = opacityChange[2];
            } else if (window.getComputedStyle(e.target).backgroundColor === opacityChange[2]) {
                e.target.style.background = opacityChange[3];
            } else if (window.getComputedStyle(e.target).backgroundColor === opacityChange[3]) {
                e.target.style.background = opacityChange[4];
            } else if (window.getComputedStyle(e.target).backgroundColor === opacityChange[4]) {
                e.target.style.background = opacityChange[5];
            } else;

            //console.log(window.getComputedStyle(e.target).backgroundColor);

        });
    });

}


//if (opacity < 1) {
//    color = ("rgb(0, 0, 0, " + opacity + ")");
//    opacity += 0.2;
//    e.target.style.background = color;
//}


//function giveShadeProperty() {
//    let opacity = 0.1;
//    const columns = document.querySelectorAll('.column');
//    columns.forEach((div) => {
//        let color = ("rgb(0, 0, 0, " + opacity + ")");
//        div.addEventListener('mouseover', function(e) {
//            e.target.style.background = color;
//            opacity += 0.1;
//            giveShadeProperty();
//        });
//    });
//
//}
