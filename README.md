1/21/2022
Starting a project to make an "etch-a-sketch" that draws when you hover your mouse over the pixels provided. Here are the requirements of the project:

1. Create a webpage with a 16x16 grid
2. Create the divs using JavaScript
3. Set up a "hover" effect so that the grid divs change color when your mouse passes over them. leaving a trail through the grid (where the trail is made up of "pixels" that are your divs)
4. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid.
    a. The new grid should be generated int he same total space as before (e.g. 960px wide) so that you've got a new sketch pad.
    b. The limit for size should be 100 "pixels"
5. Optional:
    a. Make is so that instead of chaning color from black to white (for example), have each pass through with the mouse change it to a completely random RGB value.
    b. Also have it simply add 10% of opacity to the block. so that 10 passes makes the square completely black


    Here's some pseudocode that I wrote to start with:

    1. Set the default number of columns and rows to "density"
    2. (Start a loop: Create "density" number of columbs, (Start a loop: fill each column with "density" rows.) )
        - Give each column a class which gives it the CSS style Display:flex (So that the rows are actually next to each other
        - Give each row div a class so that it can be selected with querySelectorAll, and then have a function to change it's color applied to it.
