{
    let ShipPlacer_constructor_column_negative_throwsException = function() {
        try {
            new ShipPlacer(-1,10);
        } catch(error) {
            return true;
        }
        return false;
    };
    let ShipPlacer_constructor_column_notNumber_throwsException = function() {
        try {
            new ShipPlacer("hello",10);
        } catch(error) {
            return true;
        }
        return false;
    };
    let ShipPlacer_constructor_column_notInteger_throwsException = function() {
        try {
            new ShipPlacer(1.5,10)
        } catch(error) {
            return true;
        }
        return false;
    };
    let ShipPlacer_constructor_row_negative_throwsException = function() {
        try {
            new ShipPlacer(10,-1);
        } catch(error) {
            return true;
        }
        return false;
    };
    let ShipPlacer_constructor_row_notNumber_throwsException = function() {
        try {
            new ShipPlacer(10,"test");
        } catch(error) {
            return true;
        }
        return false;
    };
    let ShipPlacer_constructor_row_notInteger_throwsException = function() {
        try {
            new ShipPlacer(10,1.5);
        } catch(error) {
            return true;
        }
        return false;
    };

    let ShipPlacer_tryPlaceShip_size_negative_throwsException = function(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(-1, 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_tryPlaceShip_size_notInteger_throwsException = function(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1.5, 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_tryPlaceShip_size_notNumber_throwsException = function(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip("test", 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }

    let ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException = function(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1, "test", validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException = function(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1, 2, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }

    let ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException = function(testObject) {
        try{
            testObject.tryPlaceShip(1, 0, "test");
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException = function(testObject){
        try{
            testObject.tryPlaceShip(1, Direction.HORIZONTAL, new Coordinate(10,1));
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException = function(testObject){
        try{
            testObject.tryPlaceShip(1, Direction.VERTICAL, new Coordinate(1,10));
        } catch(error) {
            return true;
        }
        return false;
    }
    let ShipPlacer_getPlayField_length_matches_constructor_inputs = function() {
        let testField = new ShipPlacer(10,10).getPlayField();
        if(testField.length != 10) return false;
        for(let i = 0; i < 10; i++) {
            if(testField[i].length != 10) return false;
        }
        return true;
    }
    let ShipPlacer_getPlayField_initial_allZeros = function() {
        let testField = new ShipPlacer(10,10).getPlayField();
        for(let column = 0; column < 10; column++) {
            for (let row = 0; row < 10; row++) {
                if(testField[column][row]) return false;
            }
        }
        return true;
    }
    let evalCoordinate = function(coordinate) {
        return coordinate.column +","+coordinate.row;
    }

    let ShipPlacer_tryPlaceShip_horizontal_returnsExpectedCoordinates = function() {
        let expectedCoordinates = [new Coordinate(5,5), new Coordinate(4,5), new Coordinate(3,5), new Coordinate(2,5), new Coordinate(1,5)];
        let coordinates = new ShipPlacer(10,10).tryPlaceShip(5,Direction.HORIZONTAL,expectedCoordinates[0]);
        if(coordinates.length != 5) return false;
        for(let i = 0; i < 5; i++) {
            if(evalCoordinate(coordinates[i])!=evalCoordinate(expectedCoordinates[i])) return false;
        }
        return true;
    }
    let ShipPlacer_tryPlaceShip_vertical_returnsExpectedCoordinates = function() {
        let expectedCoordinates = [new Coordinate(5,5), new Coordinate(5,4), new Coordinate(5,3), new Coordinate(5,2), new Coordinate(5,1)];
        let coordinates = new ShipPlacer(10,10).tryPlaceShip(5,Direction.VERTICAL,expectedCoordinates[0]);
        if(coordinates.length != 5) return false;
        for(let i = 0; i < 5; i++) {
            if(evalCoordinate(coordinates[i])!=evalCoordinate(expectedCoordinates[i])) return false;
        }
        return true;
    }

    let ShipPlacer_getPlayField_after_tryPlaceShip_returnMatchesCoordinates = function() {
        let testPlacer = new ShipPlacer(10,10);
        let expectedCoordinates = testPlacer.tryPlaceShip(5, Direction.HORIZONTAL, new Coordinate(5,5));
        let testField = testPlacer.getPlayField();
        let coordinates = [];
        let shipValues = [];
        for(let column = 0; column < 10; column++) {
            for(let row = 0; row < 10; row++) {
                if(testField[column][row]) {
                    shipValues.push(testField[column][row]);
                    coordinates.push(new Coordinate(column, row));
                }
            }
        }
        if(coordinates.length != expectedCoordinates.length) return false;
        for(let i = 0; i < 5; i++) {
            if(evalCoordinate(coordinates[4-i]) != evalCoordinate(expectedCoordinates[i])) return false;
            if(shipValues[i] != 5) return false;
        }
        return true;
    }

    ShipPlacerTester.addTest(ShipPlacer_constructor_column_negative_throwsException.name,
    ()=>ShipPlacer_constructor_column_negative_throwsException());
    ShipPlacerTester.addTest(ShipPlacer_constructor_column_notNumber_throwsException.name,
    ()=>ShipPlacer_constructor_column_notNumber_throwsException());
    ShipPlacerTester.addTest(ShipPlacer_constructor_column_notInteger_throwsException.name,
    ()=>ShipPlacer_constructor_column_notInteger_throwsException());
    ShipPlacerTester.addTest(ShipPlacer_constructor_row_negative_throwsException.name,
    ()=>ShipPlacer_constructor_row_negative_throwsException());
    ShipPlacerTester.addTest(ShipPlacer_constructor_row_notNumber_throwsException.name,
    ()=>ShipPlacer_constructor_row_notNumber_throwsException());
    ShipPlacerTester.addTest(ShipPlacer_constructor_row_notInteger_throwsException.name,
    ()=>ShipPlacer_constructor_row_notInteger_throwsException());

    let testObject = new ShipPlacer(10,10);
    let validCoordinate = new Coordinate(1,1);
    
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_size_negative_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_size_negative_throwsException(testObject, validCoordinate));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_size_notInteger_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_size_notInteger_throwsException(testObject, validCoordinate));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_size_notNumber_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_size_notNumber_throwsException(testObject, validCoordinate));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException(testObject, validCoordinate));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException(testObject, validCoordinate));

    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException(testObject));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException(testObject));
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException.name,
        ()=>ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException(testObject));

    ShipPlacerTester.addTest(ShipPlacer_getPlayField_length_matches_constructor_inputs.name,
        ()=>ShipPlacer_getPlayField_length_matches_constructor_inputs());
    ShipPlacerTester.addTest(ShipPlacer_getPlayField_initial_allZeros.name,
        ()=>ShipPlacer_getPlayField_initial_allZeros());
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_horizontal_returnsExpectedCoordinates.name,
        ()=>ShipPlacer_tryPlaceShip_horizontal_returnsExpectedCoordinates());
    ShipPlacerTester.addTest(ShipPlacer_tryPlaceShip_vertical_returnsExpectedCoordinates.name,
        ()=>ShipPlacer_tryPlaceShip_vertical_returnsExpectedCoordinates());
    ShipPlacerTester.addTest(ShipPlacer_getPlayField_after_tryPlaceShip_returnMatchesCoordinates.name,
        ()=>ShipPlacer_getPlayField_after_tryPlaceShip_returnMatchesCoordinates());
}
