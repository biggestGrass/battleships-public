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
    constructor(playField) {
        if(typeof(playField) != 'object') throw new TypeError("playField type"+ typeof(playField) +" must be object");
        if(playField.constructor.name != Array.name) throw new TypeError("playField class"+ playField.constructor.name +" must be class " + Array.name);
        
        this.playField = playField;
        this.livesRemaining = 0;
        this.hitField = new Array(playField.length);
        for(let column = 0; column < playField.length; column++) {
            if(typeof(playField[column]) != 'object') throw new TypeError("playField["+column+"] type"+ typeof(playField[column]) +" must be object");
            if(playField[column].constructor.name != Array.name) throw new TypeError("playField["+column+"] class"+ playField[column].constructor.name +" must be class " + Array.name);
            this.hitField[column] = new Array(playField[column].length).fill(false);
            for(let row = 0; row < playField[column].length; row++) {
                if(typeof(playField[column][row]) != 'number') throw new TypeError("playField[" + column+ "]["+row+"] "+ typeof(playField[column][row]) + " must be type number");
                if(playField[column][row]) this.livesRemaining++;
            }
        }
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
        if(typeof(array[i])!='number') throw new TypeError("array[" + i + "] " + array[i] + " is not a number");
    }
    let indices = [];
    for(let index = 0; index < array.length; index++) {
        if(array[index] >= value) indices.push(index);
    }
    return indices;
}