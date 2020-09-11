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
    } else if(orientation == Direction.VERTICAL) {
        clearanceVectors = new Array(columns);
        for(let i = 0; i < columns; i++) {
            clearanceVectors[i] = new Array(rows);
        }
    } else {
        throw new Error("orientation " + orientation + " is not a valid orientation");
    }
    let matrixOrientation = orientation;

    this.addObstacle = function(coordinate) {
        if(typeof(coordinate) != 'object') throw new TypeError("coordinate type" + typeof(coordinate) + "must be object");
        if(coordinate.constructor.name != Coordinate.name) throw new TypeError("coordinate class" + coordinatse.constructor.name + " must be " + Coordinate.name);
        if(matrixOrientation == Direction.HORIZONTAL) {
            return addObstacle(coordinate.row, coordinate.column);
        } else if(matrixOrientation == Direction.VERTICAL) {
            return addObstacle(coordinate.column, coordinate.row);
        } else {
            throw new Error("matrixOrientation " + matrixOrientation + " must be Direction.HORIZONTAL (0) or Direction.VERTICAL (1)");
        }
    }

    let addObstacle = function(vectorNo, vectorPos) {
        if(isValidArrayIndex(vectorNo,clearanceVectors.length)) {
            if(isValidArrayIndex(vectorPos, clearanceVectors[vectorNo].length)) {
                if(clearanceVectors[vectorNo][vectorPos] != 0) {
                    clearanceVectors[vectorNo][vectorPos] = 0;
                    return true;
                } else {
                    return false;
                }
            } else {
                throw new Error("vectorPos " + vectorPos + " is not a valid array index for clearanceVectors[" + vectorNo + "] " + clearanceVectors[vectorNo]);
            }
        } else {
            throw new Error("vectorNo " + vectorNo + " is not a valid array index for clearanceVectors " + clearanceVectors);
        }
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
        } else {
            throw new Error("vectorNo " + vectorNo + " is not a valid array index for clearanceVectors " + clearanceVectors);
        }
    }

    this.getVector = function (vectorNo) {
        if (isValidArrayIndex(vectorNo,clearanceVectors.length)) {
            updateVector(vectorNo);
            return clearanceVectors[vectorNo].slice();
        } else {
            throw new Error("vectorNo " + vectorNo + " is not a valid array index for clearanceVectors " + clearanceVectors);
        }
    }
}