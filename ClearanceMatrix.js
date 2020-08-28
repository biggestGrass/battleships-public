const Direction = {
    HORIZONTAL: 0,
    VERTICAL: 1
}


function ClearanceMatrix(){
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