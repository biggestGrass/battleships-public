function ShipPlacer(columns, rows) {
    let playField = new Array(columns);
    for(let column = 0; column < columns; column++) {
        playField[column] = new Array(rows).fill(0);
    }

    this.tryPlaceShip = function(size, orientation, pos) {
        let tempPlayField = playField.slice();
        let shipCoordinates = [];
        if(!Number.isInteger(size)) throw new TypeError("size " + size + "is not an integer");
        if(size < 1) throw new TypeError("size " + size + "must be greater than 0");
        if(typeof(pos) != 'object') throw new TypeError("pos " + pos + "is of the wrong type");
        if(pos.constructor.name != Coordinate.name) throw new TypeError("pos " + pos + "is of the wrong type");
        if(orientation== Direction.HORIZONTAL) {
            if(size > pos.column + 1) return [];
            for(let column = 0; column < size; column++) {
                if(tempPlayField[pos.column-column][pos.row] == 0) {
                    tempPlayField[pos.column-column][pos.row] = size;
                    shipCoordinates.push({column:pos.column-column,row:pos.row});
                } else {
                    return [];
                }
            }
        } else if(orientation == Direction.VERTICAL) {
            if(size > pos.row + 1) return [];
            for(let row = 0; row < size; row++) {
                if(tempPlayField[pos.column][pos.row-row] == 0) {
                    tempPlayField[pos.column][pos.row-row] = size;
                    shipCoordinates.push({column:pos.column,row:pos.row-row});
                } else {
                    return [];
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


