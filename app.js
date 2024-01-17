/*Players begin by setting up a set of battleships anywhere horizontally or vertically on a 10x10 grid out of their opponent's view. 
They then take turns trying to sink the opponents battleship by guessing its location on the grid one coordinate at a time. 
(In the Salvo variation each player gives multiple coordinates per turn corresponding to the amount of ships they still have on their board). 
The game notifies the user of how many hits but doesn't reveal specifics (e.g. "3 hits, 1 miss"). 
The player who sinks their opponents entire fleet first wins.
*/

//Class for each ship
class Board {
    constructor(){
        this.battleShips = [
            this.carrier = {
                name: 'carrier',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 5,
                image_url: ''
            },
            this.battleship = {
                name: 'battleship',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 4,
                image_url: ''
            },
            this.submarine = {
                name: 'submarine',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 3,
                image_url: ''
            },
            this.destroyer = {
                name: 'destroyer',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 2,
                image_url: ''
            },
            this.cruiser = {
                name: 'cruiser',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 3,
                image_url: ''
            }
        ]
    }

    /*chooseCoordinates() {

        //loop through each item chcking to make sure the coordinates have not been used prior and the ship fits on the board
        this.destroyer.orientation = 'vertical';
    }

    checkCoordiantes() {
        //check if coordinates are a hit on current board set up, 

        //return hit coordinates
    }*/
}

const whichOrientation = ['horizontal', 'vertical'];
//dynamically generate the html for each box in the CSS grid

// generate a board randomly for each player
const userBoard = new Board();
const computerBoard = new Board();

// define empty object
const emptySpace = {};

//create array of shipChoices the user chooses
let shipsChosen = [];

//allow user to queu up shipChoice
const assignShip = (evt) => {

    //push user's choice to an array to track which ships they've clicked on and presumedly placed & do not repeat ships
   //if(shipsChosen.includes(evt.target.innerHTML) !== true) {
        evt.preventDefault();

        //save name of ship choice
        let shipID = evt.target.dataset.name;

        //hold the choice of ship temporarily in a variable
        userShipChoice = userBoard.battleShips[shipID];
    
        shipsChosen.push(evt.target.innerHTML);

        console.log("These are the ships already chosen: " + shipsChosen);
    //}
    
}

//add event listeners to each ship div in the "harbor"
const carrierDiv = document.getElementById("carrier");
carrierDiv.dataset.name = 0;
const battleshipDiv = document.getElementById("battleship");
battleshipDiv.dataset.name = 1;
const submarineDiv = document.getElementById("submarine");
submarineDiv.dataset.name = 2;
const destroyerDiv = document.getElementById("destroyer");
destroyerDiv.dataset.name = 3;
const cruiserDiv = document.getElementById("cruiser");
cruiserDiv.dataset.name = 4;

carrierDiv.addEventListener("click", assignShip);
battleshipDiv.addEventListener("click", assignShip);
submarineDiv.addEventListener("click", assignShip);
destroyerDiv.addEventListener("click", assignShip);
cruiserDiv.addEventListener("click", assignShip);

let shipLocation = [
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace], 
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
]
console.log(shipLocation);

let userShipLocation = [
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace], 
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
[emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace, emptySpace],
]

//randomly places whichever ship you pass the function within the player's grid (for computer board)
const placeShip = (whichShip) => {
    // 0 = vertical, 1 = horizontal
    let randomOrientation = Math.floor(2*Math.random());
    whichShip.orientation = whichOrientation[randomOrientation];
    //get random ship's length
    let randomShipLength = whichShip.shipLength;

    // choose random spot in the array
    let random_x = Math.floor(11*Math.random());
    let random_y = Math.floor(11*Math.random());
    //console.log(`Original X: ${random_x} and Y: ${random_y}`);

    if(whichShip.orientation === 'horizontal') { //if the ship placement is horizontal loop through single arrays
   
        if(random_x > 10 - randomShipLength) { //if ship goes beyond grid edge horizontally, line it up with the edge
            
            random_x = 10 - randomShipLength;

        }

        for (let i = 0; i < randomShipLength; i++) { //loop through the length of the ship along the horizontal axis to mark its location
            shipLocation[random_y][random_x + i]=whichShip;
            whichShip.x_coordinate.push(random_x + i);
            whichShip.y_coordinate.push(random_y);
        }
    } else { //if the ship placement is vertical loop across arrays
        
        if(random_y > 10 - randomShipLength) {random_y = 10 - randomShipLength;}

        for (let i = 0; i < randomShipLength; i++) {
            shipLocation[random_y + i][random_x] = whichShip;
            whichShip.x_coordinate.push(random_x);
            whichShip.y_coordinate.push(random_y + i);
        }
    
    }
    console.log(shipLocation);
}

placeShip(computerBoard.battleShips[0]);

// pass checkHit function the coordinates in question (e.g. "5, 2") to see if there's a ship occupying the space??
const checkHit = (playerGuess, randomShipLength) => {

    //loop through battleShips array to see if there's already a ship or part of a ship occupying a space
    //use current ship class x & y coordinates after running placeShip to check for obstruction
    for (let i=0; i < randomShipLength; i++) {
        if (playerGuess[0] === userBoard.battleShips.x_coordinate && playerGuess[1] === userBoard.battleShips.y_coordinate) {
            return true;
        } else {
        return false;
        }
    }

}

//clear user grid by iterating over each child div to delete
const clearUserGrid = () => {
    console.log("clear grid");
    let userGridDiv = document.querySelector('#user-grid');
    let cellArray = userGridDiv.querySelectorAll('div');
    cellArray.forEach((cell) => {
        if(shipsChosen[shipsChosen.length-1] === cell.innerHTML) 
        {
            console.log(shipsChosen[shipsChosen.length-1]);
            cell.style.gridRow = parseInt(cell.dataset.row, 10) + 1 + ` / span 1`;
            cell.style.gridColumn = parseInt(cell.dataset.column, 10) + 1 + ` / span 1`;
            cell.style.backgroundColor= 'yellow';
            cell.innerHTML = cell.dataset.column;
            cell.style.zIndex=0;
        }
    })
}

//check if grid cells already have a ship placed

const placeHorizontal = (e) => {
        
        e.target.innerHTML = userShipChoice.name;
        e.target.style.backgroundColor = "blue";
        //change the horizontal span of cell to match length of ship across cells
        e.target.style.gridColumn = parseInt(e.target.dataset.column, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
        console.log(`setting column to ${e.target.dataset.column} and span to ${userShipChoice.shipLength}`)
        e.target.style.zIndex = '20';

        //set orientation to horizontal to follow toggle logic on second click
        userShipChoice.orientation = 'horizontal';

        //"clear" vertical ship placement
        e.target.style.gridRow = parseInt(e.target.dataset.row, 10) + 1 + ` / span 1`;


        //set DOM variable for each cell 'hasShip' to true to set up clear function
        e.target.dataset.hasShip = true;
        e.target.dataset.whichShip = userShipChoice.name;

        //clear x/y coordinates
        userShipChoice.x_coordinate = [];
        userShipChoice.y_coordinate = [];

        //add location to array
        for (let i = 0; i < userShipChoice.shipLength; i++) { //loop through the length of the ship along the horizontal axis to mark its location
            userShipLocation[e.target.dataset.column][parseInt(e.target.dataset.row, 10) + i] = userShipChoice.name;
            userShipChoice.y_coordinate.push(parseInt(e.target.dataset.column, 10));
            userShipChoice.x_coordinate.push(parseInt(e.target.dataset.row, 10) + i);
        }
}

const placeVertical = (e) => {

    e.target.innerHTML = userShipChoice.name;
    e.target.style.backgroundColor = "blue";
    //change the vertical span of cell to match length of ship across cells
    e.target.style.gridRow = parseInt(e.target.dataset.row, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
    e.target.style.zIndex = '20';

    //set orientation to horizontal to follow toggle logic on second click
    userShipChoice.orientation = 'vertical';

    //"clear" vertical ship placement
    e.target.style.gridColumn = parseInt(e.target.dataset.column, 10) + 1 + ` / span 1`;

    //set DOM variable for each cell 'hasShip' to true to set up clear function
    e.target.dataset.hasShip = true;
    e.target.dataset.whichShip = userShipChoice.name;

    //clear x/y coordinates
    userShipChoice.x_coordinate = [];
    userShipChoice.y_coordinate = [];

    //add location to array
    for (let i = 0; i < userShipChoice.shipLength; i++) { //loop through the length of the ship along the horizontal axis to mark its location
        userShipLocation[parseInt(e.target.dataset.column, 10) + i][e.target.dataset.row] = userShipChoice.name;
        userShipChoice.y_coordinate.push(parseInt(e.target.dataset.column, 10) + i);
        userShipChoice.x_coordinate.push(parseInt(e.target.dataset.row, 10));
    }
}

//place user ship horizontally or vertically using the clicked cell as the starting point
//toggleShip function for user to add battleship to a given cell in their board
// if the user is placing the same ship in a different location on the board, erase the previous placement or reset board
const toggleShip = (e) => {

        e.preventDefault();

        clearUserGrid();
    
        console.log("Shipschosen are: " + shipsChosen.includes(userShipChoice.name) + "and userShipChoice.name is:" + userShipChoice.name);

        if(userShipChoice.orientation === '' || userShipChoice.orientation === 'vertical'){
            
            //if(!doesShipBlockHorizontalPlacement()) {
            placeHorizontal(e);
            //}

        } else {
            
            //if(!doesShipBlockVerticalPlacement()) {
            placeVertical(e);
            //}
        }

        console.log(userBoard.battleShips);
        
}

const writeUserGridHTML = () => {
    
    //write a function to generate cells within <div id="user-grid" class "minimal"> using data variables for rows/columns
    for (let i=0; i<10; i++) {
        for (let y=0; y<10; y++) {
            
            let gridCells = document.createElement("div");
            gridCells.innerHTML = y;
            gridCells.style.zIndex = '0';
            gridCells.style.gridRow = `${i+1} / span 1`;
            gridCells.style.gridColumn = `${y+1} / span 1` ;
            document.getElementById("user-grid").appendChild(gridCells);
            gridCells.classList.add(`cell${i}`);
            gridCells.dataset.row = i;
            gridCells.dataset.column = y;
            gridCells.dataset.hasShip = false;
            gridCells.dataset.whichShip = '';

            //add event listener to each to "attack"
            gridCells.addEventListener("click", toggleShip);
        }
    }
    clearUserGrid();
}

writeUserGridHTML();

//write a function to generate cells within <div id="computer-grid" class "minimal"> using data variables for rows/columns
for (let i=0; i<10; i++) {
    for (let y=0; y<10; y++) {
        let gridCells = document.createElement("div");
        gridCells.innerHTML = y;
        gridCells.zIndex = "0";
        document.getElementById("computer-grid").appendChild(gridCells);
        gridCells.classList.add(`cell${i}`);
        gridCells.dataset.row = i;
        gridCells.dataset.column = y;

        //add event listener to each to "attack"
    }
}

//let userShipChoice = {};


// allow the user to manually choose their coordinates in order by ship

// signal to user that they may begin the first round 

// user chooses 5 coordinates to fire at computer

// allow user to reset board and restart game at any time

