{
    let GameStateFactory_constructor_columns_negative_throwsException = function() {
        try {
            new GameStateFactory(-1,10);
        } catch (error) {
            return true;
        }
        return false;
    }

    let GameStateFactory_constructor_columns_notNumber_throwsException = function() {
        try {
            new GameStateFactory("test",10);
        } catch (error) {
            return true;
        }
        return false;
    }

    let GameStateFactory_constructor_columns_notInteger_throwsException = function() {
        try {
            new GameStateFactory(10.5,10);
        } catch (error) {
            return true;
        }
        return false;
    }

    let GameStateFactory_constructor_rows_negative_throwsException = function() {
        try {
            new GameStateFactory(10,-1);
        } catch (error) {
            return true;
        }
        return false;
    }

    let GameStateFactory_constructor_rows_notNumber_throwsException = function() {
        try {
            new GameStateFactory(10,"test");
        } catch (error) {
            return true;
        }
        return false;
    }


    let GameStateFactory_constructor_rows_notInteger_throwsException = function() {
        try {
            new GameStateFactory(10,10.5);
        } catch (error) {
            return true;
        }
        return false;
    }

    let GameStateFactory_tryPlaceShipRandomly_saturatedPlayField_returnsFalse = function() {
        let testStateFactory = new GameStateFactory(10,10);
        for(let i = 0; i < 100; i++) {
            testStateFactory.tryPlaceShipRandomly(1);
        }
        return !testStateFactory.tryPlaceShipRandomly(1);
    }

    let GameStateFactory_tryPlaceShipRandomly_size_greaterThanPlayFieldBounds_returnsFalse = function() {
        let testStateFactory = new GameStateFactory(10,10);
        return !testStateFactory.tryPlaceShipRandomly(11);
    }

    let GameStateFactory_getInitialGameState_returnsGameState = function() {
        let testState = new GameStateFactory(10,10).getInitialGameState();
        if(typeof(testState)!='object') return false;
        if(testState.constructor.name != GameState.name) return false;
        return true;
    }

    
    let GameStateFactory_getInitialGameState_returnsGameState_arraysLengthEqualToCOnstructorInput = function() {
        let testState = new GameStateFactory(10,10).getInitialGameState();
        if(testState.hitField.length != 10) return false;
        if(testState.playField.length != 10) return false;
        for(let column = 0; column < 10; column++) {
            if(testState.hitField[column].length != 10) return false;
            if(testState.playField[column].length != 10) return false;
        }
        return true;
    }

    let GameStateFactory_getInitialGameState_afterPlaceShipRandomly_returnsExpected = function() {
        let testStateFactory = new GameStateFactory(10,10);
        let old = [];
        let latestPos = [];
        let latestVal = null;
        let testField;
        testStateFactory.tryPlaceShipRandomly(5);
        testField = testStateFactory.getInitialGameState().playField;
        for(let coordinate = 0; coordinate < old.length; coordinate++) {
            testField[old[coordinate].column][old[coordinate].row] = 0;
        }
        for(let column = 0; column < 10; column++) {
            for(let row = 0; row < 10; row++) {
                if(testField[column][row] != 0) {
                    if(latestVal != testField[column][row]) {
                        if(latestVal == null) latestVal = testField[column][row];
                        else return false;
                    }
                    latestPos.push(new Coordinate(column,row));
                } 
            }
        }
        if(latestPos.length != latestVal) return false;
        for(let coordinate = 1; coordinate<latestVal; coordinate++) {
            let difference = Math.abs(latestPos[coordinate].column - latestPos[coordinate-1].column)
                difference +=Math.abs(latestPos[coordinate].row - latestPos[coordinate-1].row);
            if(difference != 1) return false;
        }
        old = old.concat(latestPos);
        return true;
    }

    GameStateFactoryTester.addTest(GameStateFactory_constructor_columns_negative_throwsException.name,
        ()=>GameStateFactory_constructor_columns_negative_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_constructor_columns_notNumber_throwsException.name,
        ()=>GameStateFactory_constructor_columns_notNumber_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_constructor_columns_notInteger_throwsException.name,
        ()=>GameStateFactory_constructor_columns_notInteger_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_constructor_rows_negative_throwsException.name,
        ()=>GameStateFactory_constructor_rows_negative_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_constructor_rows_notNumber_throwsException.name,
        ()=>GameStateFactory_constructor_rows_notNumber_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_constructor_rows_notInteger_throwsException.name,
        ()=>GameStateFactory_constructor_rows_notInteger_throwsException());
    GameStateFactoryTester.addTest(GameStateFactory_getInitialGameState_returnsGameState.name,
        ()=>GameStateFactory_getInitialGameState_returnsGameState());
    GameStateFactoryTester.addTest(GameStateFactory_tryPlaceShipRandomly_saturatedPlayField_returnsFalse.name,
        ()=>GameStateFactory_tryPlaceShipRandomly_saturatedPlayField_returnsFalse());
    GameStateFactoryTester.addTest(GameStateFactory_tryPlaceShipRandomly_size_greaterThanPlayFieldBounds_returnsFalse.name,
        ()=>GameStateFactory_tryPlaceShipRandomly_size_greaterThanPlayFieldBounds_returnsFalse());
    GameStateFactoryTester.addTest(GameStateFactory_getInitialGameState_returnsGameState_arraysLengthEqualToCOnstructorInput.name,
        ()=>GameStateFactory_getInitialGameState_returnsGameState_arraysLengthEqualToCOnstructorInput());
    GameStateFactoryTester.addTest(GameStateFactory_getInitialGameState_afterPlaceShipRandomly_returnsExpected.name,
        ()=>GameStateFactory_getInitialGameState_afterPlaceShipRandomly_returnsExpected());
}