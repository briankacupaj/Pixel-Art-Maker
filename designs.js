var table = $('#canvas');
var colorPicker = $('#colorPicker');

/**
The function below creates an event listener that will activate when the user
clicks the 'submit' button to finalize the dimensions of the grid. What will
happen is the inputted width and height will be put into their own respective
variables, and it will activate two other functions which will create the grid,
and will allow the user to change the color of each cell.
*/
document.getElementById('sizePicker').addEventListener('submit', function() {
    // creates variables for each dimension
    var width = document.getElementById("inputHeight").value;
    var height = document.getElementById("inputWidth").value;
    // resets the board
    event.preventDefault();
    $('#canvas').html('');
    // function to create the grid
    makeGrid(height, width);
    // function to color the grid
    colorGrid();
});

/**
The function below will create an event listener to where every time the
user clicks on a cell, it will put whatever color they have selected in the
color picker, into the "color" variable. What will follow is when the event
is recognized, it will change the background color of the cell to whatever
the user has selected.
*/
function colorGrid() {
    document.getElementById('canvas').addEventListener('click', function(event) {
        const colorPicker = document.getElementById('colorPicker');
        event.target.style.backgroundColor = colorPicker.value
    });
};

/**
The function below is a nested for loop which will create the grid row by row.
The first for loop will determine the width of each row, and the other for loop
nested will determine the number of rows.
*/

function makeGrid(height, width) {
    // sets and creates the length of each row
    for(let w = 0; w < width; w++) {
        var row = document.querySelector('#canvas').insertRow(w);
        // determines the number of rows
        for (var h = 0; h < height; h++) {
            var cell = row.insertCell(h);
        }
    }
};
