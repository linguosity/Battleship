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

    chooseCoordinates() {

        //loop through each item chcking to make sure the coordinates have not been used prior and the ship fits on the board
        this.destroyer.orientation = 'vertical';
    }

    checkCoordiantes() {
        //check if coordinates are a hit on current board set up, 

        //return hit coordinates
    }
}

const whichOrientation = ['horizontal', 'vertical'];
//dynamically generate the html for each box in the CSS grid

// generate a board randomly for each player
const userBoard = new Board();
const computerBoard = new Board();

// define empty object
const emptySpace = {};

//randomize the board for the computer
userBoard.chooseCoordinates();
console.log(userBoard.battleShips[3]);

// allow the user to manually choose their coordinates in order by ship

// signal to user that they may begin the first round 

// user chooses 5 coordinates to fire at computer

// allow user to reset board and restart game at any time

// [row-start, row-end, column-start, column-end]
// Carrier 
// step 1: randomly choose horizontal or vertical
// randomly choose a starting place between 0 and the x or y minus the ship length (depending on h or v)
// ex carrier 5 spots
// this.carrier.orientation = horizontal // randomly generated
// if (horizontal) 
// {
// this.carrier.x_coordinate = Math.floor(Math.random(10 - length)) // 6
// this.carrier.y_coordinate = random y; // 3
// }

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

//randomly places whichever ship you pass the function within the player's grid
const placeShip = (whichShip) => {
    // 0 = vertical, 1 = horizontal
    let randomOrientation = Math.floor(2*Math.random());
    whichShip.orientation = whichOrientation[randomOrientation];
    console.log(whichShip.orientation);
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
    console.log(whichShip);
}

//testing if the placeShip function is working with real data in terminal only
placeShip(userBoard.battleShips[0]);


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


//place user ship horizontally or vertically using the clicked cell as the starting point
//toggleShip function for user to add battleship to a given cell in their board
const toggleShip = (e) => {
    e.preventDefault();

    console.log(`Row and column are: ${e.target.dataset.row} and ${e.target.dataset.column}`);

    if(userShipChoice.orientation === 'horizontal'){

       e.target.innerHTML = userShipChoice.name;
       e.target.style.backgroundColor = "blue";
       e.target.style.gridColumn = parseInt(e.target.dataset.column, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
       console.log(`setting column to ${e.target.dataset.column} and span to ${userShipChoice.shipLength}`)
       e.target.style.zIndex = '20';
    
    } else {
        e.target.innerHTML = userShipChoice.name;
        e.target.style.backgroundColor = "blue";
       e.target.style.gridRow = parseInt(e.target.dataset.row, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
       console.log(`setting column to ${e.target.dataset.column} and span to ${userShipChoice.shipLength}`)
       e.target.style.zIndex = '20';

    }
    
}

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

        //add event listener to each to "attack"
        gridCells.addEventListener("click", toggleShip);
    }
}

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

//allow user to queu up shipChoice
const assignShip = (evt) => {
    evt.preventDefault();

    //save name of ship choice
    let shipID = evt.target.dataset.name;

    //hold the choice of ship temporarily in a variable
    userShipChoice = userBoard.battleShips[shipID];
    console.log(userShipChoice.shipLength);

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

