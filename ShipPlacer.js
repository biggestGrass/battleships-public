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
                if(tempPlayField == 0) {
                    tempPlayField[pos.column-column][pos.row] = size;
                    shipCoordinates.push({column:pos.column-column,row:pos.row});
                } else {
                    return null;
                }
            }
        } else if(orientation == Direction.VERTICAL) {
            for(let row = 0; row < size; row++) {
                if(tempPlayField == 0) {
                    tempPlayField[pos.column][pos.row-row] = size;
                    shipCoordinates.push({column:pos.column,row:pos.row-row});
                } else {
                    return null;
                }
            }
        } else {

        }
        playField = tempPlayField;
        return shipCoordinates;
    }
    this.getPlayField = function() {
        return playField.slice();
    } 
}