
const drawContainer = document.querySelector('.drawContainer');

//Set the default number of row and columns to "density"
let heightWidth = 64;


//Create a function that makes the drawing display
function createDisplay(heightWidth) {
    

//Start a loop: Create "heightWidth" number of rows, (Start a loop: fill each column with "heightWidth" columns.))
let rCounter = 0;
while (rCounter < heightWidth) {
    const row = document.createElement('div');
    //Give each column a class which gives it the CSS style Display:flex
    row.setAttribute('class', 'row');
    drawContainer.appendChild(row);

    rCounter++;
} 

const rows = document.querySelectorAll('.row');
    rows.forEach((div) => {
        for (let cCounter = 0; cCounter < heightWidth; cCounter++){
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            div.appendChild(column);
        };
    });

}


     //So that the columns are actually next to each other

    //    - Give each column div a class so that it can be selected with querySelectorAll, and then have a function to change it's color applied to it.
