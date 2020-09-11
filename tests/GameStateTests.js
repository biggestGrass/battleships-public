{
    let GameState_constructor_playField_notObject_throwsException= function() {
        try {
            new GameState(NaN);
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_notArray_throwsException= function() {
        try {
            new GameState(new Coordinate(0,0));
        } catch(error) {
            return true;
        }
        return false;
    }
    let GameState_constructor_playField_element_notNumber_throwsException= function() {
        try {
            new GameState([0,"test",0]);
        } catch(error) {
            return true;
        }
        return false;
    }

    GameStateTester.addTest(GameState_constructor_playField_notObject_throwsException.name,
    ()=>GameState_constructor_playField_notObject_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_notArray_throwsException.name,
    ()=>GameState_constructor_playField_notArray_throwsException());
    GameStateTester.addTest(GameState_constructor_playField_element_notNumber_throwsException.name,
    ()=>GameState_constructor_playField_element_notNumber_throwsException());
}