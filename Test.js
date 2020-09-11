function Test() {
    function getIndicesGreaterThanValue_array_notArray_throwsException() {
        try {
            getIndicesGreaterThanValue("hello",0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function getIndicesGreaterThanValue_array_elementsNotNumber_throwsException() {
        try {
            getIndicesGreaterThanValue(["hello"],0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray() {
        let valueToTest = getIndicesGreaterThanValue([],1);
        if(Array.isArray(valueToTest)) {
            if(valueToTest.length==0) return true;
        }
        return false;
    }

    function getIndicesGreaterThanValue_value_notNumber_throwsException() {
        try {
            getIndicesGreaterThanValue([],"hello");
        } catch (error) {
            return true;
        }
        return false;
    }
    function getIndicesGreaterThanValue_value_negative_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],-1)[index]
        })) return true;
        else return false;
    }
    function getIndicesGreaterThanValue_value_zero_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],0)[index]
        })) return true;
        else return false;
    }
    function getIndicesGreaterThanValue_value_notInteger_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],0.5)[index]
        })) return true;
        else return false;
    }


    this.testClearanceDetector = function() {
        runTest(getIndicesGreaterThanValue_array_notArray_throwsException.name,
            ()=>getIndicesGreaterThanValue_array_notArray_throwsException());
        runTest(getIndicesGreaterThanValue_array_elementsNotNumber_throwsException.name,
            ()=>getIndicesGreaterThanValue_array_elementsNotNumber_throwsException());
        runTest(getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray.name,
            ()=>getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray());

        runTest(getIndicesGreaterThanValue_value_notNumber_throwsException.name,
            ()=>getIndicesGreaterThanValue_value_notNumber_throwsException());
        runTest(getIndicesGreaterThanValue_value_negative_returnsOutput.name,
            ()=>getIndicesGreaterThanValue_value_negative_returnsOutput());
        runTest(getIndicesGreaterThanValue_value_zero_returnsOutput.name,
            ()=>getIndicesGreaterThanValue_value_zero_returnsOutput());
        runTest(getIndicesGreaterThanValue_value_notInteger_returnsOutput.name,
            ()=>getIndicesGreaterThanValue_value_notInteger_returnsOutput());
    }


    function ClearanceMatrix_constructor_columns_lessThanZero_throwsException() {
        try {
            new ClearanceMatrix(-1,1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_constructor_columns_notNumber_throwsException() {
        try {
            new ClearanceMatrix("test",1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_constructor_columns_notInteger_throwsException() {
        try {
            new ClearanceMatrix(1.5,1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }

    function ClearanceMatrix_constructor_rows_lessThanZero_throwsException() {
        try {
            new ClearanceMatrix(1,-1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_constructor_rows_notNumber_throwsException() {
        try {
            new ClearanceMatrix(1,"test",1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_constructor_rows_notInteger_throwsException() {
        try {
            new ClearanceMatrix(1,1.5,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    
    function ClearanceMatrix_constructor_orientation_NotNumber_throwsException() {
        try {
            new ClearanceMatrix(1,1,"test");
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException() {
        try {
            new ClearanceMatrix(1,1,-1);
        }   catch(error) {
            return true;
        }
        return false;
    }

    function ClearanceMatrix_getVector_vectorNo_notInteger_throwsException(testObject) {
        try {
            testObject.getVector("hello");
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException(testObject) {
        try {
            testObject.getVector(-1)
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException(testObject) {
        try {
            testObject.getVector(2)
        }   catch(error) {
            return true;
        }
        return false;
    }
    
    function ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException(testObject) {
        try {
            testObject.addObstacle(new Coordinate(2,1))
        }   catch(error) {
            return true;
        }
        return false;
    }
    function ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException(testObject) {
        try {
            testObject.addObstacle(new Coordinate(1,2))
        }   catch(error) {
            return true;
        }
        return false;
    }

    /*ClearanceMatrix_addObstacle_output
    ClearanceMatrix_getVector_output_allElementsAreInteger
    ClearanceMatrix_getVector_output_allElementsNotNegative
    ClearanceMatrix_getVector_output_allElementsGreaterByOneOverPreviousOrAreZero*/
    
    function runTest(testName, test) {
        console.log(test() + " " + testName);
    }
    


    this.testClearanceMatrix = function() {
        runTest(ClearanceMatrix_constructor_columns_lessThanZero_throwsException.name,
            ()=>ClearanceMatrix_constructor_columns_lessThanZero_throwsException());
        runTest(ClearanceMatrix_constructor_columns_notInteger_throwsException.name,
            ()=>ClearanceMatrix_constructor_columns_notInteger_throwsException());
        runTest(ClearanceMatrix_constructor_columns_notNumber_throwsException.name,
            ()=>ClearanceMatrix_constructor_columns_notNumber_throwsException());
        
        runTest(ClearanceMatrix_constructor_rows_lessThanZero_throwsException.name,
            ()=>ClearanceMatrix_constructor_rows_lessThanZero_throwsException());
        runTest(ClearanceMatrix_constructor_rows_notInteger_throwsException.name,
            ()=>ClearanceMatrix_constructor_rows_notInteger_throwsException());
        runTest(ClearanceMatrix_constructor_rows_notNumber_throwsException.name,
            ()=>ClearanceMatrix_constructor_rows_notNumber_throwsException());

        runTest(ClearanceMatrix_constructor_orientation_NotNumber_throwsException.name,
            ()=>ClearanceMatrix_constructor_orientation_NotNumber_throwsException());
        runTest(ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException.name,
            ()=>ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException());

        let testObject =new ClearanceMatrix(2,2,Direction.HORIZONTAL);
        runTest(ClearanceMatrix_getVector_vectorNo_notInteger_throwsException.name,
            ()=>ClearanceMatrix_getVector_vectorNo_notInteger_throwsException(testObject));
        runTest(ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException.name,
            ()=>ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException(testObject));
        runTest(ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException.name,
            ()=>ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException(testObject));
    
        runTest(ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException.name,
            ()=>ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException(testObject))
        
        runTest(ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException.name,
            ()=>ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException(testObject))
    }

    function ShipPlacer_constructor_column_negative_throwsException() {
        try {
            new ShipPlacer(-1,10);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_column_notNumber_throwsException() {
        try {
            new ShipPlacer("hello",10);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_column_notInteger_throwsException() {
        try {
            new ShipPlacer(1.5,10)
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_negative_throwsException() {
        try {
            new ShipPlacer(10,-1);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_notNumber_throwsException() {
        try {
            new ShipPlacer(10,"test");
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_notInteger_throwsException() {
        try {
            new ShipPlacer(10,1.5);
        } catch(error) {
            return true;
        }
        return false;
    };

    function ShipPlacer_tryPlaceShip_size_negative_throwsException(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(-1, 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    function ShipPlacer_tryPlaceShip_size_notInteger_throwsException(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1.5, 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    function ShipPlacer_tryPlaceShip_size_notNumber_throwsException(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip("test", 0, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }

    function ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1, "test", validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }
    function ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException(testObject, validCoordinate) {
        try{
            testObject.tryPlaceShip(1, 2, validCoordinate);
        } catch(error) {
            return true;
        }
        return false;
    }

    function ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException(testObject) {
        try{
            testObject.tryPlaceShip(1, 0, "test");
        } catch(error) {
            return true;
        }
        return false;
    }
    function ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException(testObject){
        try{
            testObject.tryPlaceShip(1, Direction.HORIZONTAL, new Coordinate(10,1));
        } catch(error) {
            return true;
        }
        return false;
    }
    function ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException(testObject){
        try{
            testObject.tryPlaceShip(1, Direction.VERTICAL, new Coordinate(1,10));
        } catch(error) {
            return true;
        }
        return false;
    }

    this.testShipPlacer = function() {
        runTest(ShipPlacer_constructor_column_negative_throwsException.name,
        ()=>ShipPlacer_constructor_column_negative_throwsException());
        runTest(ShipPlacer_constructor_column_notNumber_throwsException.name,
        ()=>ShipPlacer_constructor_column_notNumber_throwsException());
        runTest(ShipPlacer_constructor_column_notInteger_throwsException.name,
        ()=>ShipPlacer_constructor_column_notInteger_throwsException());
        runTest(ShipPlacer_constructor_row_negative_throwsException.name,
        ()=>ShipPlacer_constructor_row_negative_throwsException());
        runTest(ShipPlacer_constructor_row_notNumber_throwsException.name,
        ()=>ShipPlacer_constructor_row_notNumber_throwsException());
        runTest(ShipPlacer_constructor_row_notInteger_throwsException.name,
        ()=>ShipPlacer_constructor_row_notInteger_throwsException());

        let testObject = new ShipPlacer(10,10);
        let validCoordinate = new Coordinate(1,1);
        
        runTest(ShipPlacer_tryPlaceShip_size_negative_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_size_negative_throwsException(testObject, validCoordinate));
        runTest(ShipPlacer_tryPlaceShip_size_notInteger_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_size_notInteger_throwsException(testObject, validCoordinate));
        runTest(ShipPlacer_tryPlaceShip_size_notNumber_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_size_notNumber_throwsException(testObject, validCoordinate));
        runTest(ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_orientation_notNumber_throwsException(testObject, validCoordinate));
        runTest(ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_orientation_outOfRange_throwsException(testObject, validCoordinate));

        runTest(ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_pos_notCoordinate_throwsException(testObject));
        runTest(ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_pos_column_outOfRange_throwsException(testObject));
        runTest(ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException.name,
            ()=>ShipPlacer_tryPlaceShip_pos_row_outOfRange_throwsException(testObject));
    }

    function Coordinate_constructor_column_notNumber_throwsException(){
        try{
            new Coordinate("test", 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    function Coordinate_constructor_column_notInteger_throwsException(){
        try{
            new Coordinate(0.5, 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    function Coordinate_constructor_column_negative_throwsException(){
        try{
            new Coordinate(-1, 0);
        } catch(error) {
            return true;
        }
        return false;
    }
    function Coordinate_constructor_row_notNumber_throwsException(){
        try{
            new Coordinate(0,"test");
        } catch(error) {
            return true;
        }
        return false;
    }
    function Coordinate_constructor_row_notInteger_throwsException(){
        try{
            new Coordinate(0,0.5);
        } catch(error) {
            return true;
        }
        return false;
    }
    function Coordinate_constructor_row_negative_throwsException(){
        try{
            new Coordinate(0,-1);
        } catch(error) {
            return true;
        }
        return false;
    }
    this.testCoordinate = function() {
        runTest(Coordinate_constructor_column_notNumber_throwsException.name,
        ()=>Coordinate_constructor_column_notNumber_throwsException());
        runTest(Coordinate_constructor_column_notInteger_throwsException.name,
        ()=>Coordinate_constructor_column_notInteger_throwsException());
        runTest(Coordinate_constructor_column_negative_throwsException.name,
        ()=>Coordinate_constructor_column_negative_throwsException());
        runTest(Coordinate_constructor_row_notNumber_throwsException.name,
        ()=>Coordinate_constructor_row_notNumber_throwsException());
        runTest(Coordinate_constructor_row_notInteger_throwsException.name,
        ()=>Coordinate_constructor_row_notInteger_throwsException());
        runTest(Coordinate_constructor_row_negative_throwsException.name,
        ()=>Coordinate_constructor_row_negative_throwsException());
    }

    function GameState_constructor_playField_notObject_throwsException(){
        try {
            new GameState(NaN);
        } catch(error) {
            return true;
        }
        return false;
    }
    function GameState_constructor_playField_notArray_throwsException(){
        try {
            new GameState(new Coordinate(0,0));
        } catch(error) {
            return true;
        }
        return false;
    }
    function GameState_constructor_playField_element_notNumber_throwsException(){
        try {
            new GameState([0,"test",0]);
        } catch(error) {
            return true;
        }
        return false;
    }

    this.testGameState = function() {
        runTest(GameState_constructor_playField_notObject_throwsException.name,
        ()=>GameState_constructor_playField_notObject_throwsException());
        runTest(GameState_constructor_playField_notArray_throwsException.name,
        ()=>GameState_constructor_playField_notArray_throwsException());
        runTest(GameState_constructor_playField_element_notNumber_throwsException.name,
        ()=>GameState_constructor_playField_element_notNumber_throwsException());
    }
}

let test = new Test();
test.testClearanceMatrix();
test.testClearanceDetector();
test.testCoordinate();
test.testShipPlacer();
test.testGameState();