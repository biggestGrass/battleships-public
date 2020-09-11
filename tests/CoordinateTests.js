{
    let Coordinate_constructor_column_notNumber_throwsException = function() {
        try{
            new Coordinate("test", 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    let Coordinate_constructor_column_notInteger_throwsException = function() {
        try{
            new Coordinate(0.5, 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    let Coordinate_constructor_column_negative_throwsException = function() {
        try{
            new Coordinate(-1, 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    let Coordinate_constructor_row_notNumber_throwsException = function() {
        try{
            new Coordinate(0,"test");
        } catch(error) {
            return true;
        }
        return false;
    }
    let Coordinate_constructor_row_notInteger_throwsException = function() {
        try{
            new Coordinate(0,0.5);
        } catch(error) {
            return true;
        }
        return false;
    }
    let Coordinate_constructor_row_negative_throwsException = function() {
        try{
            new Coordinate(0,-1);
        } catch(error) {
            return true;
        }
        return false;
    }
    CoordinateTester.addTest(Coordinate_constructor_column_notNumber_throwsException.name,
    ()=>Coordinate_constructor_column_notNumber_throwsException());
    CoordinateTester.addTest(Coordinate_constructor_column_notInteger_throwsException.name,
    ()=>Coordinate_constructor_column_notInteger_throwsException());
    CoordinateTester.addTest(Coordinate_constructor_column_negative_throwsException.name,
    ()=>Coordinate_constructor_column_negative_throwsException());
    CoordinateTester.addTest(Coordinate_constructor_row_notNumber_throwsException.name,
    ()=>Coordinate_constructor_row_notNumber_throwsException());
    CoordinateTester.addTest(Coordinate_constructor_row_notInteger_throwsException.name,
    ()=>Coordinate_constructor_row_notInteger_throwsException());
    CoordinateTester.addTest(Coordinate_constructor_row_negative_throwsException.name,
    ()=>Coordinate_constructor_row_negative_throwsException());
}