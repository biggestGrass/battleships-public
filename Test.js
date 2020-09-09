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

    function ClearanceMatrix_getVector_vectorNo_notInteger_returnsUndefined(testObject) {
        if(testObject.getVector("hello") === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_getVector_vectorNo_lessThanZero_returnsUndefined(testObject) {
        if(testObject.getVector(-1) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_returnsUndefined(testObject) {
        if(testObject.getVector(2) === undefined) return true;
        else return false;
    }
    
    function ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined(testObject) {
        if(testObject.addObstacle(new Coordinate(2,1)) === undefined) return true;
        else return false;
    }

    function ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined(testObject) {
        if(testObject.addObstacle(new Coordinate(1,2)) === undefined) return true;
        else return false;
    }

    /*ClearanceMatrix_addObstacle_output
    ClearanceMatrix_getVector_output_allElementsAreInteger
    ClearanceMatrix_getVector_output_allElementsNotNegative
    ClearanceMatrix_getVector_output_allElementsGreaterByOneOverPreviousOrAreZero*/
    
    function runTest(testName, test) {
        console.log(testName + " " + test());
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
        runTest(ClearanceMatrix_getVector_vectorNo_notInteger_returnsUndefined.name,
            ()=>ClearanceMatrix_getVector_vectorNo_notInteger_returnsUndefined(testObject));
        runTest(ClearanceMatrix_getVector_vectorNo_lessThanZero_returnsUndefined.name,
            ()=>ClearanceMatrix_getVector_vectorNo_lessThanZero_returnsUndefined(testObject));
        runTest(ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_returnsUndefined.name,
            ()=>ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_returnsUndefined(testObject));
    
        runTest(ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined(testObject))
        
        runTest(ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined(testObject))
    }
/*
    function ShipPlacer_constructor_column_negative() {
        try {
            new ShipPlacer(-1,10);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_column_notNumber() {
        try {
            new ShipPlacer("hello",10);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_column_notInteger() {
        try {
            new ShipPlacer(1.5,10)
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_negative() {
        try {
            new ShipPlacer(10,-1);
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_notNumber() {
        try {
            new ShipPlacer(10,"test");
        } catch(error) {
            return true;
        }
        return false;
    };
    function ShipPlacer_constructor_row_notInteger() {
        try {
            new ShipPlacer(10,1.5);
        } catch(error) {
            return true;
        }
        return false;
    };

    function ShipPlacer_placeShip_size_negative(testObject, validCoordinate) {
        testObject.placeShip(-1, 0, validCoordinate);
    }
    function ShipPlacer_placeShip_size_notInteger(testObject, validCoordinate) {
        testObject.placeShip(1.5, 0, validCoordinate);
    }
    function ShipPlacer_placeShip_size_notNumber(testObject, validCoordinate) {
        testObject.placeShip("test", 0, validCoordinate);
    }

    function ShipPlacer_placeShip_orientation_notNumber(testObject, validCoordinate) {
        testObject.placeShip(1, "test", validCoordinate);
    }
    function ShipPlacer_placeShip_orientation_outOfRange(testObject, validCoordinate) {
        testObject.placeShip(1, 2, validCoordinate);
    }

    function ShipPlacer_placeShip_pos_notCoordinate(testObject) {
        testObject.placeShip(1, 0, "test");
    }
    function ShipPlacer_placeShip_pos_column_outOfRange(testObject){
        testObject.placeShip(1, 0, new Coordinate(10,1));
    }
    function ShipPlacer_placeShip_pos_row_outOfRange(){
        testObject.placeShip(1, 0, new Coordinate(1,10));
    }

    function ShipPlacer_placeShipRandomly_size_negative(testObject, validCoordinateList){
        testObject.placeShipRandomly(-1, 0, validCoordinateList);
    }
    function ShipPlacer_placeShipRandomly_size_notInteger(testObject, validCoordinateList){
        testObject.placeShipRandomly(1.5, 0, validCoordinateList);
    }
    function ShipPlacer_placeShipRandomly_size_notNumber(testObject, validCoordinateList){
        testObject.placeShipRandomly("test", 0, validCoordinateList);
    }

    function ShipPlacer_placeShipRandomly_orientation_notNumber(testObject, validCoordinateList){
        testObject.placeShipRandomly(1, "test", validCoordinateList);
    }
    function ShipPlacer_placeShipRandomly_orientation_outOfRange(testObject, validCoordinateList){
        testObject.placeShipRandomly(1, 2, validCoordinateList);
    }

    function ShipPlacer_placeShipRandomly_positions_notArray(testObject, validCoordinate){
        testObject.placeShipRandomly(1, 0, validCoordinate);
    }
    function ShipPlacer_placeShipRandomly_positions_notArrayOfCoordinates(testObject, invalidCoordinateList){
        testObject.placeShipRandomly(1, 0, invalidCoordinateList);
    }
    
*/
}

let test = new Test();
test.testClearanceMatrix();
test.testClearanceDetector();