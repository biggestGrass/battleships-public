function GameStateFactory(columns, rows){
    let clearanceMatrix = [new ClearanceMatrix(columns, rows, Direction.HORIZONTAL), new ClearanceMatrix(columns, rows, Direction.VERTICAL)];
    let shipPlacer = new ShipPlacer(columns, rows);
    let livesRemaining = 0;

    function convertVectorCandidatesToCoordinates(vectorNo, vectorCandidates, orientation) {
        let candidateCoordinates = [];
        for(let vectorCandidate = 0; vectorCandidate < vectorCandidates.length; vectorCandidate++) {
            if(orientation == Direction.HORIZONTAL) {
                candidateCoordinates.push(new Coordinate(vectorCandidates[vectorCandidate], vectorNo));
            }
            else if(orientation == Direction.VERTICAL) {
                candidateCoordinates.push(new Coordinate(vectorNo, vectorCandidates[vectorCandidate]));
            }
            else throw new TypeError("orientation " + orientation + " must be equivalent to 0 or 1");
        }
        return candidateCoordinates;
    }

    function tryPlaceShipRandomlyWithOrientation(size, orientation) {
        if(size < 1) throw new RangeError("size" + size + "must be an integer greater than 0");
        if(orientation != Direction.VERTICAL && orientation != Direction.HORIZONTAL) throw new TypeError("orientation " + orientation + " must be equivalent to 0 or 1");

        let coordinates = [];
        
        for(let vectorNo = 0; vectorNo < 10; vectorNo++) {
            let vectorCandidates = getIndicesGreaterThanValue(clearanceMatrix[orientation].getVector(vectorNo), size);
            coordinates = coordinates.concat(convertVectorCandidatesToCoordinates(vectorNo, vectorCandidates, orientation));
        }
        if(coordinates.length == 0) return false;

        let randomCoordinate = coordinates[Math.floor(Math.random()*coordinates.length)];
        coordinates = shipPlacer.tryPlaceShip(size, orientation, randomCoordinate);
        if(coordinates.length == 0) return false;

        for(let shipPart = 0; shipPart<coordinates.length; shipPart++) {
            if(!clearanceMatrix[Direction.HORIZONTAL].addObstacle(coordinates[shipPart])) return false;
            if(!clearanceMatrix[Direction.VERTICAL].addObstacle(coordinates[shipPart])) return false;
        }
        livesRemaining += size;
        return true;
    }
    
    this.tryPlaceShipRandomly = function(size) {
        if(Math.floor(Math.random()*2)) {
            if (tryPlaceShipRandomlyWithOrientation(size, Direction.HORIZONTAL)) return true;
            else if (tryPlaceShipRandomlyWithOrientation(size, Direction.VERTICAL)) return true;
        } else {
            if (tryPlaceShipRandomlyWithOrientation(size, Direction.VERTICAL)) return true;
            else if (tryPlaceShipRandomlyWithOrientation(size, Direction.HORIZONTAL)) return true;
        }
        console.log("Unable to place ship of size " + size);
        return false;
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