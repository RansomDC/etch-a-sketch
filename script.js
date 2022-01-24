
const drawContainer = document.querySelector('.drawContainer');

//Set the default number of row and columns to "density"
let heightWidth = 64;


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

    //Here is some test code for changing colors of the divs.
    const pixels = document.querySelectorAll('.column');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
        });
    });


}