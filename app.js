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
                orientation: 'horizontal',
                x_coordinate: '', // 0 - 9 (limited by size depending on orientation)
                y_coordinate: '', // 0 - 9
                image_url: ''
            },
            this.battleship = {
                orientation: 'horizontal',
                x_coordinate: '', // 0 - 9 (limited by size depending on orientation)
                y_coordinate: '', // 0 - 9
                image_url: ''
            },
            this.submarine = {
                orientation: 'horizontal',
                x_coordinate: '', // 0 - 9 (limited by size depending on orientation)
                y_coordinate: '', // 0 - 9
                image_url: ''
            },
            this.destroyer = {
                orientation: 'horizontal',
                x_coordinate: '', // 0 - 9 (limited by size depending on orientation)
                y_coordinate: '', // 0 - 9
                image_url: ''
            },
            this.cruiser = {
                orientation: 'horizontal',
                x_coordinate: '', // 0 - 9 (limited by size depending on orientation)
                y_coordinate: '', // 0 - 9
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

//dynamically generate the html for each box in the CSS grid

// generate a board randomly for each player
const userBoard = new Board();
const computerBoard = new Board();

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

// save in 2d array
// shipLocation = [
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false]
// [false, true,  true,  true,  true,  true,  false, false, false, false] // y = 3 (- 1)
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false] 
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false]
// [false, false, false, false, false, false, false, false, false, false]
//]

// choose /y/ first then depending on horizontal or vertical loop through the length