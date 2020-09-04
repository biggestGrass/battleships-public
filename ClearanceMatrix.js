/*
clearance matrix

constructor:columns
columns < 0                     throw excpetion
columns not integer             throw exception

constructor:rows
rows < 0                        throw exception
rows not integer                throw exception

constructor:orientation
orientation != Direction.HORIZONTAL (0) and != Direction.VERTICAL (1) throw exception

getVector:vectorNo
vectorNo is not integer                 throw exception
vectorNo < 0                            throw exception
vectorNo >= clearanceVectors.length     throw exception

addObstacle:column
column is not integer           throw exception
column < 0                      throw exception
column >= constructor:columns   throw exception


addObstacle:row
row is not integer           throw exception
row < 0                      throw exception
row >= constructor:columns   throw exception

addObstacle
true if seeing input for first time
false otherwise

getVector output
output must be an array of length columns if orientation is Direction.HORIZONTAL
                                  rows if orientation is Direction.VERTICAL
every element of output must be an integer
every element of output must be >= 0
every element of output must be: value of the preceding element +1 (in the cast of the first element, the preceding element's value is considered to be 0)
                              or 0

*/

const Direction = {
    HORIZONTAL: 0,
    VERTICAL: 1
}

function ClearanceMatrix(columns, rows, orientation){
    let clearanceVectors;
    if(typeof(columns) !== 'number') throw new TypeError();
    if(typeof(rows) !== 'number') throw new TypeError();
    if(!Number.isSafeInteger(columns) || columns < 0) throw new RangeError();
    if(!Number.isSafeInteger(rows) || rows < 0) throw new RangeError();
    if(orientation==Direction.HORIZONTAL) {
        clearanceVectors = new Array(rows);
        for(let i = 0; i < rows; i++) {
            clearanceVectors[i] = new Array(columns);
        }
        this.addObstacle = function(column, row) {
            return addObstacle(column, row);
        }
    } else if(orientation == Direction.VERTICAL) {
        clearanceVectors = new Array(columns);
        for(let i = 0; i < columns; i++) {
            clearanceVectors[i] = new Array(rows);
        }
        this.addObstacle = function(column, row) {
            return addObstacle(row, column);
        }
    } else {
        if(typeof(orientation) !== 'number') throw new TypeError();
        else throw new RangeError();
    }

    let addObstacle = function(vectorNo, vectorPos) {
        if(Number.isSafeInteger(vectorNo) && Number.isSafeInteger(vectorPos)) {
            if(vectorNo >= 0 && vectorNo < clearanceVectors.length) {
                if(vectorPos >= 0 && vectorPos < clearanceVectors[vectorNo].length) {
                    if(clearanceVectors[vectorNo][vectorPos]!=0) {
                        clearanceVectors[vectorNo][vectorPos] = 0;
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
        return undefined;
    }

    let updateVector = function (vectorNo) {
        if (isValidArrayIndex(vectorNo,clearanceVectors.length)) {
            let clearance = 1;
            for (let i = 0; i < clearanceVectors[vectorNo].length; i++) {
                if (clearanceVectors[vectorNo][i] == 0) {
                    clearance = 1;
                } else {
                    clearanceVectors[vectorNo][i] = clearance;
                    clearance++;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    this.getVector = function (vectorNo) {
        if (isValidArrayIndex(vectorNo,clearanceVectors.length)) {
            updateVector(vectorNo);
            return clearanceVectors[vectorNo].slice();
        } else {
            return undefined;
        }
    }
}


function isValidArrayIndex(index,arrayLength) {
    if(Number.isSafeInteger(index)) {
        if(index >= 0 && index < arrayLength) return true;
    }
    return false;
}