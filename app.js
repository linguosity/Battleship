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
                image_url: '',
                isSunk: false,
                damage: 0,
            },
            this.battleship = {
                name: 'battleship',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 4,
                image_url: '',
                isSunk: false,
                damage: 0,
            
            },
            this.submarine = {
                name: 'submarine',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 3,
                image_url: '',
                isSunk: false,
                damage: 0,
            },
            this.destroyer = {
                name: 'destroyer',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 2,
                image_url: '',
                isSunk: false,
                damage: 0,
            
            },
            this.cruiser = {
                name: 'cruiser',
                orientation: '',
                x_coordinate: [], // 0 - 9 (limited by size depending on orientation)
                y_coordinate: [], // 0 - 9
                shipLength: 3,
                image_url: '',
                isSunk: false,
                damage: 0,
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

//create fire button to add event listener
let fireButton = document.querySelector('#fire-button');
const gameNews = document.querySelector('#announcements');
const deployButton = document.querySelector('#deploy-forces');
const defendButton = document.querySelector('#defend-forces');
const graveYard = document.querySelector('graveYard');

//create array of shipChoices the user chooses
let shipsChosen = [];

// define whose turn it is
let usersTurn = true;

//create array of sets of computerBombCoordinates

const createRandomBombSet = () => {
    let computerBombSet = []

    // choose random spot on the grid
    for (let i=0; i<5; i++){
        let random_x = Math.floor(11*Math.random());
        let random_y = Math.floor(11*Math.random());

        computerBombSet.push([random_x, random_y]);
    }

    return computerBombSet;
    
}

//allow user to queu up shipChoice
const assignShip = (evt) => {

    evt.preventDefault();

    //save name of ship choice
    let shipID = evt.target.dataset.name;

    //hold the choice of ship temporarily in a variable
    userShipChoice = userBoard.battleShips[shipID];

    //if array already contains ship, delete from array
    if(shipsChosen.includes(evt.target.dataset.shipName)) {
        shipsChosen.splice(shipsChosen.indexOf(evt.target.dataset.shipName), 1);
    }
    
    shipsChosen.push(evt.target.dataset.shipName);

    if(shipsChosen.length === 5) {
        deployButton.addEventListener("click", deployForces);
        
    }
    
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

const deployForces = (e) => {
    carrierDiv.style.visibility = "hidden";
    battleshipDiv.style.visibility = "hidden";
    submarineDiv.style.visibility = "hidden";
    destroyerDiv.style.visibility = "hidden";
    cruiserDiv.style.visibility = "hidden";

    //function that leads to next 
}

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
    //console.log(shipLocation);
}

placeShip(computerBoard.battleShips[0]);
placeShip(computerBoard.battleShips[1]);
placeShip(computerBoard.battleShips[2]);
placeShip(computerBoard.battleShips[3]);
placeShip(computerBoard.battleShips[4]);

//console.log("this is the computer's board ", computerBoard);

//array of coordinates to pass to checkHit 
let playerGuess = [];

// pass checkHit function the coordinates in question (e.g. "5, 2") to see if there's a ship occupying the space??
const checkHit = (playerGuess, randomShipLength, isHorizontal) => {

    //count number of hits to display to user
    let hitCount= 0; 

    for(let i=0; i < userBoard.battleShips.length; i++) {
      
        for(let m=0; m < userBoard.battleShips[i].shipLength; m++) {
            
            if(playerGuess[0] === userBoard.battleShips[i].y_coordinate[m] && playerGuess[1] === userBoard.battleShips[i].x_coordinate[m]){
                //gameNews.innerHTML = gameNews.innerHTML + `You hit the ${userBoard.battleShips[i].name} at ${userBoard.battleShips[i].y_coordinate[m]},${userBoard.battleShips[i].x_coordinate[m]} ."`; // check x and y coordinates, they appear to be backwards
                hitCount++;
                gameNews.innerHTML = hitCount;

                successfulHit = true;
                usersTurn = true;
                
            } // 0,4 0,3 0,2 0,1 0,0 == x-4,y-0 
            
        }
    }
    
    return successfulHit;

}

//clear computer grid of bombs by iterating over each child div
const clearComputerGrid = () => {
    //console.log("clear computer grid");
    let userGridDiv = document.querySelector('#computer-grid');
    let cellArray = userGridDiv.querySelectorAll('div');
    cellArray.forEach((cell) => {
    
            cell.innerHTML = cell.dataset.column;
        
    })
}

//clear user grid by iterating over each child div to delete
const clearUserGrid = () => {
    //console.log("clear user grid");
    let userGridDiv = document.querySelector('#user-grid');
    let cellArray = userGridDiv.querySelectorAll('div');
    cellArray.forEach((cell) => {
        //console.log(`${shipsChosen[shipsChosen.length-1]} and ${cell.innerHTML}`) 
        if(shipsChosen[shipsChosen.length-1] === cell.innerHTML) 
        {
            //console.log(shipsChosen[shipsChosen.length-1]);
            cell.style.gridRow = parseInt(cell.dataset.row, 10) + 1 + ` / span 1`;
            cell.style.gridColumn = parseInt(cell.dataset.column, 10) + 1 + ` / span 1`;
            cell.style.backgroundImage = '';
            cell.innerHTML = cell.dataset.column;
            cell.style.zIndex=0;
        }
    })
}

//check if grid cells already have a ship placed

const placeHorizontal = (e) => {
        
        e.target.innerHTML = userShipChoice.name;
        e.target.style.backgroundColor = "transparent";
        //change the horizontal span of cell to match length of ship across cells
        e.target.style.gridColumn = parseInt(e.target.dataset.column, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
        //console.log(`setting column to ${e.target.dataset.column} and span to ${userShipChoice.shipLength}`)
        e.target.style.zIndex = '20';
        //add horizontal ship images
        e.target.style.backgroundImage = `url('source/${userShipChoice.name}.png')`;
        e.target.style.backgroundSize = 'cover';
        e.target.style.maxWidth = '';

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
            userShipLocation[e.target.dataset.row][parseInt(e.target.dataset.column, 10) + i] = userShipChoice.name;
            userShipChoice.y_coordinate.push(parseInt(e.target.dataset.column, 10));
            userShipChoice.x_coordinate.push(parseInt(e.target.dataset.row, 10) + i);
        }
}

const placeVertical = (e) => {

    e.target.innerHTML = userShipChoice.name;
    e.target.style.backgroundColor = "transparent";
    //change the vertical span of cell to match length of ship across cells
    e.target.style.gridRow = parseInt(e.target.dataset.row, 10) + 1 + ` / span ${userShipChoice.shipLength}`;
    e.target.style.zIndex = '20';
    // add ship vertical ship images
    e.target.style.backgroundImage = `url('source/${userShipChoice.name}-vertical.png')`;
    e.target.style.backgroundSize = 'contain';
    e.target.style.backgroundRepeat = 'no-repeat'
    e.target.style.backgroundPosition = 'left';
    e.target.style.maxWidth = '33px';

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

        playerGuess.push(e.target.dataset.column, e.target.dataset.row);

        if(userShipChoice.orientation === '' || userShipChoice.orientation === 'vertical'){
            
            //checkHit(playerGuess, userShipChoice.length);
            //if(!doesShipBlockHorizontalPlacement()) {
            placeHorizontal(e);
            //}

        } else {
            
            //if(!doesShipBlockVerticalPlacement()) {
            placeVertical(e);
            //}
        }
        
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

// allow computer to take a turn bombing
const computersTurn = () => {
    clearComputerGrid();
    detonateBombs(userBoard, createRandomBombSet());
}

//create array that tracks the placement of bombs and only allows 5, if more than 5 it deletes the last one
let bombSet = [];

const detonateBombs = (whichBoard, bombSet) => {
    
    let successfulHit = false;

    console.log(`It's user's turn: ${usersTurn} and the bomb coordinates are: ${bombSet}`);
    
    let hitCount = 0;

    for(let i=0; i < whichBoard.battleShips.length; i++) {
      
        for(let m=0; m < whichBoard.battleShips[i].shipLength; m++) {
            
            for(let n=0; n < bombSet.length; n++) {
                if(bombSet[n][0] === whichBoard.battleShips[i].y_coordinate[m] && bombSet[n][1] === whichBoard.battleShips[i].x_coordinate[m]){
                    //gameNews.innerHTML = `You hit the ${whichBoard.battleShips[i].name} at ${whichBoard.battleShips[i].y_coordinate[m]},${whichBoard.battleShips[i].x_coordinate[m]} ."`; // check x and y coordinates, they appear to be backwards
                    successfulHit = true;
                    hitCount++; 
                    whichBoard.battleShips[i].damage++;
                    if(whichBoard.battleShips[i].damage === whichBoard.battleShips[i].shipLength){
                        whichBoard.battleShips[i].isSunk = true;
                    }
                    //console.log("Which ship:", whichBoard.battleShips[i].name);
                    //console.log("it's x: ", whichBoard.battleShips[i].x_coordinate);
                    //console.log("it's y: ", whichBoard.battleShips[i].y_coordinate);
                    //console.log("bomb coordinates: ", bombSet[n][0], ",", bombSet[n][1]);

                    
                } // 0,4 0,3 0,2 0,1 0,0 == x-4,y-0 
            }
        }
    }
    clearComputerGrid();

    if(successfulHit===true && usersTurn === true) {
        gameNews.innerHTML = `"Direct Hit! Enemy Battleship was hit ${hitCount} Times! Attack again!"`;
        usersTurn=true;
    } else if(successfulHit === false && usersTurn === true){
        gameNews.innerHTML = `Sorry no hit! Press 'defend' to defend your fleet.`;
        usersTurn = false;
        
        defendButton.addEventListener("click", computersTurn);
        //document.addEventListener("keypress", computersTurn);
    } else if (successfulHit === true && usersTurn === false) {
        gameNews.innerHTML = `Computer damaged your fleet ${hitCount} times! Press 'defend' to defend your fleet.`;
        usersTurn=false;
    } else if (successfulHit === false && usersTurn === false) {
        gameNews.innerHTML = `Computer's shot missed! Your turn again, Captain!`;
        usersTurn = true;
    }
    console.log(`It's user's turn: ${usersTurn}`);

    bombSet = [];

    //check to see if computer's ships are all sunk, if so declare the winner
    if(checkWinner(whichBoard)) {
        if(usersTurn=true) {
            gameNews.innerHTML = "Congratulations you won!";
        }
        else {
            gameNews.innerHTML = "Sorry captain you lost!";
        }
        
    }
}

const bombCells = (e) => {
    let computerGridDiv = document.querySelector('#computer-grid');
    let cellArray = computerGridDiv.querySelectorAll('div');

    gameNews.innerHTML = 'Press fire when 5 bombs are placed';
    console.log(bombSet);
    if(bombSet.length <= 4) {
        bombSet.push([parseInt(e.target.dataset.row, 10), parseInt(e.target.dataset.column, 10)]);
        e.target.innerHTML = `<img class="grid-bombs" src="/source/bomb.png">`;
        
    } 
    
    if(bombSet.length === 5){
        /*let firstBomb = parseInt(bombSet[0][0]*10, 10) + parseInt(bombSet[0][1], 10);
        cellArray[firstBomb].innerHTML = bombSet[0][1];
        bombSet.shift();
        bombSet.push([parseInt(e.target.dataset.row, 10), parseInt(e.target.dataset.column, 10)])
        e.target.innerHTML = `<img class="grid-bombs" src="/source/bomb.png">`;*/

        //add event listener to "fire" button to call detonate function
        //detonateBombs(bombSet);
        let parent = document.querySelector('#control-panel');
        fireButton.parentNode.removeChild(fireButton);

        fireButton = fireButton.cloneNode(true);
        
        fireButton.addEventListener("click", () => detonateBombs(computerBoard, bombSet));
        parent.prepend(fireButton);
        console.log("hello");
    }
}

const writeComputerGridHMTL = () => {

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

            gridCells.addEventListener("click", bombCells);
            //add event listener to each to "attack"
        }
    }

}

writeComputerGridHMTL();

//console.log(shipLocation);



// signal to user that they may begin the first round 

// user chooses 5 coordinates to fire at computer

// allow user to reset board and restart game at any time

// add event listener to "fire" button to check to see if there's a hit


// while loop that alternates between user and computer turns

const checkWinner = (board) => {

    return board.battleShips.every(ship=>ship.isSunk);
}



