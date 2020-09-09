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
        this.addObstacle = function(coordinate) {
            return addObstacle(coordinate.row, coordinate.column);
        }
    } else if(orientation == Direction.VERTICAL) {
        clearanceVectors = new Array(columns);
        for(let i = 0; i < columns; i++) {
            clearanceVectors[i] = new Array(rows);
        }
        this.addObstacle = function(coordinate) {
            return addObstacle(coordinate.column, coordinate.row);
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