1/21/2022

# Overview
This project was created as a practice project to build coding experience, especially working with CSS and JavaScript.

It is a simple program for drawing in a HTML grid by changing the colors of the divs that make up said grid. 

### How to use this program  
Simply move your mouse over the square in the center of the page. There are several different options for changing the color. The default is simply to change the color from white/gray to black. Another options is to change a hovered box to a random color when it is hovered over for the first time. Last is to add 20% opacity of the color black to the box every time.  
This last option was easily the most difficult to code and took some time. Here is a clip of the code I used for that process for quick reference.


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

