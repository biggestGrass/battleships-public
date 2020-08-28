function GameStateFactory(){
    let playField = new Array(100).fill(0);
    let proximityDetector = new ClearanceMatrix();
    let max = proximityDetector.update(playField);
    let lives = 0;
    this.placeShip = function(size) {
        if(max[Direction.HORIZONTAL]>=size && max[Direction.VERTICAL]>=size) {
            placeShipWithOrientation(size,Math.floor(Math.random()*2))
        } else if (max[Direction.HORIZONTAL]>=size) {
            placeShipWithOrientation(size,Direction.HORIZONTAL);
        } else if (max[Direction.VERTICAL]>=size) {
            placeShipWithOrientation(size,Direction.VERTICAL);
        } else {
            console.log("Unable to place ship of size " +size+".");
            return;
        }
        lives += size;
    }
    function placeShipWithOrientation(size,orientation) {
        let placePos = proximityDetector.getCandidates(size,orientation);
        placePos = placePos[Math.floor(Math.random()*placePos.length)];
        let factor = orientation==Direction.HORIZONTAL?1:10;
        for(let i = 0; i < size; i++){
            playField[placePos-i*factor] = size;
        }
        proximityDetector.update(playField);
    }
    this.getInitialGameState = function() {
        return new GameState(playField,lives);
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