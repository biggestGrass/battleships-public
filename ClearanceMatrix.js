/*
clearance matrix
constructor should accept positive integers only, should throw exception on invalid arguments
should be able to place obstacle at given column and row
obstacle placement function should return false if an invalid coordinate is given
obstacle placement function should return false if an obstacle already exists at the location
obstacle placement function should return true otherwise
must return vector v
each term in v must be an integer
each term in v must NOT be less than 0
each term in v must be one of two values:
    1 greater than the preceding element's value (for the first element, the value of the preceding element is considered to be 0)
    0
each term in v must NOT be greater than the length of v

clearance matrix
constructor takes columns, rows and orientation
creates a list of vectors which represent columns/rows depending on orientation
each vector element describes the largest ship that can be placed at that position with the given orientation
vectors can be accessed by passing the number of a row/column
*/
const Test = {};

Test.checkIfArray = function(valueToCheck) {
    return Array.isArray(valueToCheck);
}

Test.checkIfElementsInArrayAreGreaterThanLength = function(array, length) {
    for(let i = 0; i < array.length; i++) {
        if(array[i]> length) return false;
    }
    return true;
}

Test.checkIfElementsInArrayAreNotLessThanZero = function(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i]<0) return false;
    }
    return true;
}

Test.checkIfElementsInArrayAreIncreasingOrZero = function(array) {
    let previousValue = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] != 0) {
            if(array[i] != previousValue+1) return false;
            else previousValue = array[i];
        } else {
            previousValue = 0;
        }
    }
    return true;
}

function isValidArrayIndex(index,arrayLength) {
    if(Number.isSafeInteger(index)) {
        if(index >= 0 && index <= arrayLength) return true;
    }
    return false;
}

const Direction = {
    HORIZONTAL: 0,
    VERTICAL: 1
}

function ClearanceMatrix(columns, rows, orientation){
    let clearanceVectors;
    if(!Number.isSafeInteger(rows) || rows < 1) throw new Error("" + rows + " is not a valid rows value");
    if(!Number.isSafeInteger(columns) || columns < 1) throw new Error("" + columns + " is not a valid rows value");
    if(orientation==Direction.HORIZONTAL) {
        clearanceVectors = new Array(rows);
        for(let i = 0; i < rows; i++) {
            clearanceVectors[i] = new Array(columns);
        }
        this.addObstacle = function(column, row) {
            if(Number.isSafeInteger(row) && Number.isSafeInteger(column)) {
                if(row >= 0 && row < clearanceVectors.length) {
                    if(column >= 0 && column < clearanceVectors[row].length) {
                        if(clearanceVectors[row][column]!=0) {
                            clearanceVectors[row][column] = 0;
                            return true;
                        }
                    }
                }
            }
        }
    } else if(orientation == Direction.VERTICAL) {
        clearanceVectors = new Array(columns);
        for(let i = 0; i < columns; i++) {
            clearanceVectors[i] = new Array(rows);
        }
        this.addObstacle = function(column, row) {
            if(Number.isSafeInteger(row) && Number.isSafeInteger(column)) {
                if(column >= 0 && column < clearanceVectors.length) {
                    if(row >= 0 && row < clearanceVectors[column].length) {
                        if(clearanceVectors[column][row]!=0) {
                            clearanceVectors[column][row] = 0;
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    } else {
        throw new Error(""+orientation+" is not a valid orientation value.");
    }
    let updateVector = function (vectorNumber) {
        if (isValidArrayIndex(vectorNumber,clearanceVectors.length)) {
            let clearance = 1;
            for (let i = 0; i < clearanceVectors[vectorNumber].length; i++) {
                if (clearanceVectors[vectorNumber][i] == 0) {
                    clearance = 1;
                } else {
                    clearanceVectors[vectorNumber][i] = clearance;
                    clearance++;
                }
            }
            return true;
        } else {
            return false;
        }
    }
    this.getVector = function (vectorNumber) {
        if (isValidArrayIndex(vectorNumber,clearanceVectors.length)) {
            updateVector(vectorNumber);
            return clearanceVectors[vectorNumber];
        } else {
            return null;
        }
    }
}

Test.checkIfClearanceMatrixConstructorFailsOnBadInput = function(columns, rows, orientation) {
    try {
        new ClearanceMatrix(columns, rows, orientation);
    }
    catch(error) {
        return true;
    }
    return false;
}
