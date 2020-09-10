const Direction = {
    HORIZONTAL: 0,
    VERTICAL: 1
}

class Coordinate{
    constructor(column, row) {
        if(!(Number.isSafeInteger(column) && Number.isSafeInteger(row))) throw new TypeError();
        if(column < 0 || row < 0) throw new RangeError();
        this.column = column;
        this.row = row;
    }
}

class GameState {
    constructor(_playField,_lives) {
        this.playField = _playField;
        this.livesRemaining = _lives;
        this.hitField = new Array(100).fill(false);
        this.lastEvent = "Battleships";
    }
}

function isValidArrayIndex(index,arrayLength) {
    if(Number.isSafeInteger(index)) {
        if(Number.isSafeInteger(arrayLength)) {
            if(arrayLength < 0) throw new RangeError("arrayLength " + arrayLength + " must not be negative");
            else if(index >= 0 && index < arrayLength) return true;
            else return false;
        } else {
            throw new TypeError("arrayLength " + arrayLength + " is not an integer");
        }
    } else {
        return false;
    }
}

function getIndicesGreaterThanValue(array, value) {
    if(!Array.isArray(array)) throw new TypeError("array " + array + " is not an array");
    if(typeof(value) != 'number') throw new TypeError("value " + value + " is not a number");
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i])!='number') throw new TypeError("element " + i + " of array " + array + " is not a number");
    }
    let indices = [];
    for(let index = 0; index < array.length; index++) {
        if(array[index] >= value) indices.push(index);
    }
    return indices;
}