/*
GameStateFactory produces GameStates
playField field of GameState is a 2d matrix.
playField field of GameState must consist of only positive integers (including 0)
livesRemaining must be equal to the number of non-zero values in playField
unless an element's value is either 1 or 0, the element must be adjacent to another element with the same value
*/

class GameState {
    constructor(_playField,_lives) {
        this.playField = _playField;
        this.livesRemaining = _lives;
        this.hitField = new Array(100).fill(false);
        this.lastEvent = "Battleships";
    }
}

function GameStateFactory(columns, rows){
    let playField = new Array(columns);
    let livesRemaining = 0;
    for(let column = 0; column < columns; column++) {
        playField[column] = new Array(rows).fill(0);
    }
    let clearanceMatrix = [new ClearanceMatrix(columns,rows,Direction.HORIZONTAL),new ClearanceMatrix(columns,rows,Direction.VERTICAL)];
    let lives = 0;
    function getCandidatesInRow(row, size) {
        let candidates = [];
        let vector = clearanceMatrix[Direction.HORIZONTAL].getVector(row);
        for(let column = 0; column < vector.length; column++) {
            if(vector[column] >= size) {
                candidates.push({column: column, row: row});
            }
        }
        return candidates;
    }
    function getCandidatesInColumn(column, size) {
        let candidates = [];
        let vector = clearanceMatrix[Direction.VERTICAL].getVector(column);
        for(let row = 0; row < vector.length; row++) {
            if(vector[row] >= size) {
                candidates.push({column: column, row: row});
            }
        }
        return candidates;
    }
    this.tryPlaceShipRandomlyWithOrientation = function(size,orientation) {
        let candidates = [];
        if(orientation == Direction.HORIZONTAL) {
            for(let row = 0; row < rows; row++) {
                let test = getCandidatesInRow(row, size);
                candidates = candidates.concat(getCandidatesInRow(row, size));
            }
        } else if(orientation == Direction.VERTICAL) {
            for(let column = 0; column < columns; column++) {
                candidates = candidates.concat(getCandidatesInColumn(column, size));
            }
        } else {
            return false;
        }
        if(candidates.length>0) {
            let position = candidates[Math.floor(Math.random()*candidates.length)];
            placeShip(size,orientation,position);
            return true;
        } else {
            return false;
        }
    }
    this.tryPlaceShipRandomly = function(size) {
        if (Math.floor(Math.random()*2)) {
            if (this.tryPlaceShipRandomlyWithOrientation(size,Direction.HORIZONTAL)) return true;
            else return this.tryPlaceShipRandomlyWithOrientation(size,Direction.VERTICAL);
        } else {
             if (this.tryPlaceShipRandomlyWithOrientation(size,Direction.VERTICAL)) return true;
            else return this.tryPlaceShipRandomlyWithOrientation(size,Direction.HORIZONTAL);
        }
    }
    function placeShip(size,orientation,position) {
        if(orientation == Direction.HORIZONTAL) {
            for(let column = 0; column < size; column++) {
                playField[position.column-column][position.row] = size;
                clearanceMatrix[Direction.HORIZONTAL].addObstacle(position.column-column,position.row);
                clearanceMatrix[Direction.VERTICAL].addObstacle(position.column-column,position.row);
            }
        } else if (orientation == Direction.VERTICAL) {
            for(let row = 0; row < size; row++) {
                playField[position.column][position.row-row] = size;
                clearanceMatrix[Direction.HORIZONTAL].addObstacle(position.column,position.row-row);
                clearanceMatrix[Direction.VERTICAL].addObstacle(position.column,position.row-row);
            }
        } else {
            throw new Error();
        }
        livesRemaining += size;
    }
    this.getInitialGameState = function() {
        let finalPlayField = [];
        for(let i = 0; i < playField.length; i++) {
            finalPlayField = finalPlayField.concat(playField[i])
        }
        return new GameState(finalPlayField,livesRemaining);
    }
}