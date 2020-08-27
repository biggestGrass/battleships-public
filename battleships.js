const Direction = {
    HORIZONTAL: 0,
    VERTICAL: 1
}
const e = React.createElement;


function ProximityDetector(){
    let proximity = [new Array(100),new Array(100)];
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            proximity[Direction.HORIZONTAL][i*10+j] = j+1;
            proximity[Direction.VERTICAL][i*10+j] = i+1;
        }
    }
    function updateObstacles(playField) { 
        for(let i = 0; i < 100; i++) {
            if (playField[i]) {
                proximity[Direction.HORIZONTAL][i] = 0;
                proximity[Direction.VERTICAL][i] = 0;
            }
        }
    }
    
    function updateProximity() {
        let max = [10,10];
        let current = 1;
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(current > proximity[Direction.HORIZONTAL][i*10+j]) {
                    current = 1;
                 } else {
                    proximity[Direction.HORIZONTAL][i*10+j] = current;
                    if(current>max[Direction.HORIZONTAL]) max[Direction.HORIZONTAL] = current;
                    current++;
                }

            }
            current = 1;
        }
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(current > proximity[Direction.VERTICAL][j*10+i]){
                    current = 1;
                } else {
                    proximity[Direction.VERTICAL][j*10+i] = current;
                    if(current>max[Direction.VERTICAL]) max[Direction.VERTICAL] = current;
                    current++;
                }
            }
            current = 1;
        }     
        return max;
    }

    this.update = function(playField) {
        updateObstacles(playField);
        return updateProximity();
    }

    this.getCandidates = function(size,orientation) { 
        let candidates = [];
        for(let i = 0; i < 100; i++) {
            if(proximity[orientation][i] >= size){
                candidates.push(i);
            }
        }
        return candidates;
    }
}

function ShipPlacer(){
    let playField = new Array(100).fill(0);
    let proximityDetector = new ProximityDetector();
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

class Game extends React.Component {
    constructor(props) {
        super(props)
        let shipPlacer = new ShipPlacer();        
        shipPlacer.placeShip(5);
        shipPlacer.placeShip(4);
        shipPlacer.placeShip(4);
        this.state = shipPlacer.getInitialGameState();
    }
    hitTile(i) {
        if(this.state.livesRemaining) {
            if(!this.state.hitField[i]) {
                const hitField = this.state.hitField.slice();
                hitField[i] = true;
                let lastEvent;
                if(this.state.playField[i]) {
                    this.state.livesRemaining--;
                    lastEvent = "Hit: "
                    switch(this.state.playField[i]) {
                    case 5:
                        lastEvent += "Battleship"
                        break;
                    case 4:
                        lastEvent += "Destroyer"
                        break;
                    default:
                        break;
                    }
                } else lastEvent = "Miss"
                this.setState( {
                    livesRemaining: this.state.livesRemaining,
                    hitField: hitField,
                    lastEvent: lastEvent
                })
            }
        }
    }
    tileContents(i) {
        let contents = "";
        if(this.state.hitField[i]) {
            switch(this.state.playField[i]) {
                case 5:
                    contents += "BS"
                    break;
                case 4:
                    contents += "DS"
                    break;
                default:
                    break;
            }
        } else {
            contents += String.fromCharCode('A'.charCodeAt(0)+(i%10));
            contents += Math.floor(i/10)+1;
        }
        return contents;
    }
    tileState(i) {
        if(this.state.hitField[i]) {
            if(this.state.playField[i]) return " hit";
            else return " miss";
        }
        return " unknown";
    }
    eventMessage() {
        if(this.state.livesRemaining) {
            return e("span", null, this.state.lastEvent);
        } else {
            return e("span", null, "Victory!");
        }
    }
    render() {
        let rows = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for(let j = 0; j < 10; j++) {
                row.push(e(Tile, {
                    tileState: "tile" + this.tileState(i*10+j),
                    clickHandler: () => this.hitTile(i*10+j),
                    tileContents: this.tileContents(i*10+j),
                    key: i*10+j
                }))
            }
            rows.push(e("div",{key: "row"+i},row));
        }
        return e("div",null,rows,e("div",null,this.eventMessage()), e(TextInput,{hitTile: (i) => this.hitTile(i)}));
    }
}

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        var a = this.state.value.toString();
        if(a.length>3 || a.length<2) return;
        let row = a.slice(1);
        row = parseInt(row,10);
        if(isNaN(row)|| row > 10 || row < 1) return;
        row--;
        let column = a.slice(0,1);
        column = column.toUpperCase();
        if(!column.match(/[A-J]/)) return;
        column = column.charCodeAt(0) - 'A'.charCodeAt(0);
        this.props.hitTile(column+row*10);
    }
    render() {
        return e("form", {
            onSubmit: this.handleSubmit
        }, e("input", {
            type:"text",
            value: this.state.value,
            onChange: this.updateValue
        }), e("input", {
            type:"submit",
            value:"Fire"
        }))
    }
}

function Tile(props) {
    return React.createElement("div",{
        className: props.tileState,
        onClick: props.clickHandler},
        props.tileContents
    )
}   


const domContainer = document.querySelector('#game');
ReactDOM.render(React.createElement(Game), domContainer);
