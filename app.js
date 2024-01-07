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