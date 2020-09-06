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
    let clearanceMatrix = [new ClearanceMatrix(columns, rows, Direction.HORIZONTAL), new ClearanceMatrix(columns, rows, Direction.VERTICAL)];
    let shipPlacer = new ShipPlacer(columns, rows);
    let livesRemaining = 0;
    this.tryPlaceShipRandomly = function(size) {
        if(Math.floor(Math.random()*2)) {
            if (tryPlaceShipRandomlyWithOrientation(size, Direction.HORIZONTAL)) return true;
            else return tryPlaceShipRandomlyWithOrientation(size, Direction.VERTICAL);
        } else {
            if (tryPlaceShipRandomlyWithOrientation(size, Direction.VERTICAL)) return true;
            else return tryPlaceShipRandomlyWithOrientation(size, Direction.HORIZONTAL);
        }
    }
    tryPlaceShipRandomlyWithOrientation = function(size, orientation) {
        if(size == 0) return false;
        if(orientation != Direction.VERTICAL && orientation != Direction.HORIZONTAL) return false;
        let coordinates = [];
        for(let vector = 0; vector < 10; vector++) {
            coordinates = coordinates.concat(getCoordinatesFromVectorCandidates(vector,
                ClearanceDetector.getCandidates(clearanceMatrix[orientation].getVector(vector), size),
                orientation)
            );
        }
        coordinates = shipPlacer.placeShipRandomly(size, orientation, coordinates);
        if(coordinates.length == 0) return false;
        for(let shipPart = 0; shipPart<coordinates.length; shipPart++) {
            if(!clearanceMatrix[Direction.HORIZONTAL].addObstacle(coordinates[shipPart])) return false;
            if(!clearanceMatrix[Direction.VERTICAL].addObstacle(coordinates[shipPart])) return false;
        }
        livesRemaining += size;
        return true;
    }
    
    this.getInitialGameState = function() {
        let playField = shipPlacer.getPlayField();
        let finalPlayField = [];
        for(let i = 0; i < playField.length; i++) {
            finalPlayField = finalPlayField.concat(playField[i])
        }
        return new GameState(finalPlayField,livesRemaining);
    }
}