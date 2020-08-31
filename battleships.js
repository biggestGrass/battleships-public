
const e = React.createElement;

class Game extends React.Component {
    constructor(props) {
        super(props)
        let gameStateFactory = new GameStateFactory(10,10);        
        gameStateFactory.tryPlaceShipRandomly(5);
        gameStateFactory.tryPlaceShipRandomly(4);
        gameStateFactory.tryPlaceShipRandomly(4);
        console.log(gameStateFactory.getInitialGameState().playField)
        this.state = gameStateFactory.getInitialGameState();
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
