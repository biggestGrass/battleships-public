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
}
