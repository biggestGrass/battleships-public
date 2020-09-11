function ShipPlacer(columns, rows) {
    if(!Number.isSafeInteger(columns)) throw new TypeError("columns " + columns + " must be an integer");
    if(!Number.isSafeInteger(rows)) throw new TypeError("rows " + rows + " must be an integer");
    if(columns < 1) throw new RangeError("columns " + columns + " must be greater than 0");
    if(rows < 1) throw new RangeError("rows " + rows + " must be greater than 0");
    let playField = new Array(columns);
    for(let column = 0; column < columns; column++) {
        playField[column] = new Array(rows).fill(0);
    }

    this.tryPlaceShip = function(size, orientation, pos) {
        let tempPlayField = playField.slice();
        let shipCoordinates = [];
        if(!Number.isInteger(size)) throw new TypeError("size " + size + "is not an integer");
        if(size < 1) throw new TypeError("size " + size + "must be greater than 0");
        if(typeof(pos) != 'object') throw new TypeError("pos type" + typeof(pos) + "must be object");
        if(pos.constructor.name != Coordinate.name) throw new TypeError("pos class" + pos.constructor.name + "must be " + Coordinate.name);
        if(orientation== Direction.HORIZONTAL) {
            if(size > pos.column + 1) return [];
            for(let column = 0; column < size; column++) {
                if(isValidArrayIndex(pos.column-column, tempPlayField.length)) {
                    if(isValidArrayIndex(pos.row, tempPlayField[pos.column-column].length)) {
                        if(tempPlayField[pos.column-column][pos.row] == 0) {
                            tempPlayField[pos.column-column][pos.row] = size;
                            shipCoordinates.push(new Coordinate(pos.column-column,pos.row));
                        } else {
                            return [];
                        }
                    } else {
                        throw new Error("pos.row " + pos.row + " is not a valid array index for tempPlayField[" + (pos.column-column) + "] " + tempPlayField[pos.column-column].length);
                    }
                } else {
                    throw new Error("pos.column-column " + (pos.column-column) + " is not a valid array index for tempPlayField " + tempPlayField.length);
                }
            }
        } else if(orientation == Direction.VERTICAL) {
            if(size > pos.row + 1) return [];
            for(let row = 0; row < size; row++) {
                if(isValidArrayIndex(pos.column, tempPlayField.length)) {
                    if(isValidArrayIndex(pos.row-row, tempPlayField[pos.column].length)) {
                        if(tempPlayField[pos.column][pos.row-row] == 0) {
                            tempPlayField[pos.column][pos.row-row] = size;
                            shipCoordinates.push(new Coordinate(pos.column,pos.row-row));
                        } else {
                            return [];
                        }
                    } else {
                        throw new Error("pos.row-row " + (pos.row-row) + " is not a valid array index for tempPlayField[" + pos.column + "] " + tempPlayField[pos.column].length);
                    }   
                } else {
                    throw new Error("pos.column" + pos.column + " is not a valid array index for tempPlayField " + tempPlayField.length);
                }
            }
        } else {
            throw new TypeError("orientation " + orientation + "is not a valid orientation");
        }
        playField = tempPlayField;
        return shipCoordinates;
    }
    this.getPlayField = function() {
        return playField.slice();
    } 
}


