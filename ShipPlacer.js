/*

ShipPlacer:columns
columns < 0 throw exception
columns is not number throws exception
columns is not integer throws exception

ShipPlacer:rows
rows < 0 throw exception
rows is not number throws exception
rows is not integer throws exception

placeShipRandomly: positions
positions must be an array
elements of positions must be objects with fields 

*/

function ShipPlacer(columns, rows) {
    let playField = new Array(columns);
    for(let column = 0; column < columns; column++) {
        playField[column] = new Array(rows).fill(0);
    }

    this.placeShipRandomly = function(size, orientation, positions) {
        let pos = positions[Math.floor(Math.random()*positions.length)];
        return this.placeShip(size, orientation, pos);
    }
    this.placeShip = function(size, orientation, pos) {
        let tempPlayField = playField.slice();
        let shipCoordinates = [];
        if(orientation== Direction.HORIZONTAL) {
            for(let column = 0; column < size; column++) {
                if(tempPlayField[pos.column-column][pos.row] == 0) {
                    tempPlayField[pos.column-column][pos.row] = size;
                    shipCoordinates.push({column:pos.column-column,row:pos.row});
                } else {
                    console.log("collision error")
                    return [];
                }
            }
        } else if(orientation == Direction.VERTICAL) {
            for(let row = 0; row < size; row++) {
                if(tempPlayField[pos.column][pos.row-row] == 0) {
                    tempPlayField[pos.column][pos.row-row] = size;
                    shipCoordinates.push({column:pos.column,row:pos.row-row});
                } else {
                    console.log("collision error")
                    return [];
                }
            }
        } else {
            return [];
        }
        playField = tempPlayField;
        return shipCoordinates;
    }
    this.getPlayField = function() {
        return playField.slice();
    } 
}

class Coordinate{
    constructor(column, row) {
        this.column = column;
        this.row = row;
    }
}

function getCoordinatesFromVectorCandidates(vectorNo, vectorCandidates, orientation) {
    let candidateCoordinates = [];
    if(orientation == Direction.HORIZONTAL) {
        for(let vectorCandidate = 0; vectorCandidate < vectorCandidates.length; vectorCandidate++) {
            candidateCoordinates.push(new Coordinate(vectorCandidates[vectorCandidate], vectorNo));
        }
    } else if(orientation == Direction.VERTICAL) {
        for(let vectorCandidate = 0; vectorCandidate < vectorCandidates.length; vectorCandidate++) {
            candidateCoordinates.push(new Coordinate(vectorNo, vectorCandidates[vectorCandidate]));
        }
    }
    return candidateCoordinates;
}

/*
let hMatrix = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
let vMatrix = new ClearanceMatrix(10,10,Direction.VERTICAL);
let candidates = [];
for(let i = 0; i < 10; i++) {
    candidates = candidates.concat(getCoordinatesFromVectorCandidates(i,
        ClearanceDetector.getCandidates(vMatrix.getVector(i), 5),
        Direction.VERTICAL)
    );
}
let testPlacer = new ShipPlacer(10,10);
testPlacer.placeShipRandomly(5, Direction.HORIZONTAL, candidates);
let playFieldResult = testPlacer.getPlayField();
let print = "";
for(let i = 0; i < 10; i++) {
    print+= "" + playFieldResult[i].toString() + '\n';
}
console.log(print);*/