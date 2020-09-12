{
    let GameState_constructor_playField_notObject_throwsException = function() {
        try {
            new GameState(NaN);
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_notArray_throwsException = function() {
        try {
            new GameState(new Coordinate(0,0));
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_element_notObject_throwsException = function() {
        try {
            new GameState(["test",[]]);
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_element_notArray_throwsException = function() {
        try {
            new GameState([new Coordinate(0,0),[]]);
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_element_element_notNumber_throwsException = function() {
        try {
            new GameState([[0,"test",0]]);
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_truthy_saturated_playField_returnsGameState_livesEqualsPlayFieldLength = function() {
        let truthyValues = [[Number.MIN_VALUE, Number.MAX_VALUE, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.EPSILON, 1]];
        return new GameState(truthyValues).livesRemaining == truthyValues[0].length;
    }

    let GameState_falsy_saturated_playField_returnsGameState_livesZero = function() {
        let falsyValues = [[NaN, -0, 0]];
        return new GameState(falsyValues).livesRemaining == 0;
    }

    let GameState_empty_playField_returnsGameState_livesZero = function() {
        return new GameState([]).livesRemaining == 0;
    }


    GameStateTester.addTest(GameState_constructor_playField_notObject_throwsException.name,
    ()=>GameState_constructor_playField_notObject_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_notArray_throwsException.name,
    ()=>GameState_constructor_playField_notArray_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_element_notObject_throwsException.name,
    ()=>GameState_constructor_playField_element_notObject_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_element_notArray_throwsException.name,
    ()=>GameState_constructor_playField_element_notArray_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_element_element_notNumber_throwsException.name,
    ()=>GameState_constructor_playField_element_element_notNumber_throwsException());
    GameStateTester.addTest(GameState_truthy_saturated_playField_returnsGameState_livesEqualsPlayFieldLength.name,
    ()=>GameState_truthy_saturated_playField_returnsGameState_livesEqualsPlayFieldLength());
    GameStateTester.addTest(GameState_falsy_saturated_playField_returnsGameState_livesZero.name,
    ()=>GameState_falsy_saturated_playField_returnsGameState_livesZero());
    GameStateTester.addTest(GameState_empty_playField_returnsGameState_livesZero.name,
    ()=>GameState_empty_playField_returnsGameState_livesZero());
}