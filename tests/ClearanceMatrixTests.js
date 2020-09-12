{
    let ClearanceMatrix_constructor_columns_lessThanZero_throwsException =  function() {
        try {
            new ClearanceMatrix(-1,1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_constructor_columns_notNumber_throwsException =  function() {
        try {
            new ClearanceMatrix("test",1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_constructor_columns_notInteger_throwsException = function() {
        try {
            new ClearanceMatrix(1.5,1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }

    let ClearanceMatrix_constructor_rows_lessThanZero_throwsException = function() {
        try {
            new ClearanceMatrix(1,-1,1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_constructor_rows_notNumber_throwsException = function() {
        try {
            new ClearanceMatrix(1,"test",1);
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_constructor_rows_notInteger_throwsException = function() {
        try {
            new ClearanceMatrix(1,1.5,1);
        }   catch(error) {
            return true;
        }
        return false;
    }

    let ClearanceMatrix_constructor_orientation_NotNumber_throwsException = function() {
        try {
            new ClearanceMatrix(1,1,"test");
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException = function() {
        try {
            new ClearanceMatrix(1,1,-1);
        }   catch(error) {
            return true;
        }
        return false;
    }

    let ClearanceMatrix_getVector_vectorNo_notInteger_throwsException = function(testObject) {
        try {
            testObject.getVector("hello");
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException = function(testObject) {
        try {
            testObject.getVector(-1)
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException = function(testObject) {
        try {
            testObject.getVector(10)
        }   catch(error) {
            return true;
        }
        return false;
    }

    let ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
        try {
            testObject.addObstacle(new Coordinate(10,1))
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
        try {
            testObject.addObstacle(new Coordinate(1,10))
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_addObstacle_validInput_returnsTrue_repeatedInput_returnsFalse = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
        let testCoordinate = new Coordinate(2,4);
        if(testObject.addObstacle(testCoordinate)) {
            if(!testObject.addObstacle(testCoordinate)) return true;
        }
        return false;
    }

    
    function isElementEquivalent(element, index, arrayToCompare) {
        return element == arrayToCompare[index];
    }

    let ClearanceMatrix_initialState_getVector_returnsExpected = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
        let expectedVector = [1,2,3,4,5,6,7,8,9,10];
        for(let i = 0; i < 10; i++) {
            if(!testObject.getVector(i).every((element, index) => isElementEquivalent(element, index, expectedVector))) return false;
        }
        return true;
    }
    
    let ClearanceMatrix_addObstacle_then_getVector_horizontal_returnsExpected = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.HORIZONTAL);
        let testCoordinate = new Coordinate(2,4);
        let expectedVector1 = [1,2,3,4,5,6,7,8,9,10];
        let expectedVector2 = [1,2,0,1,2,3,4,5,6,7];
        if(!testObject.addObstacle(testCoordinate)) return false;
        for(let i = 0; i < 10; i++) {
            if(i == 4) {
                if(!testObject.getVector(i).every((element, index) => isElementEquivalent(element, index, expectedVector2))) return false;
            } else {
                if(!testObject.getVector(i).every((element, index) => isElementEquivalent(element, index, expectedVector1))) return false;
            }
        }
        return true;
    }

    let ClearanceMatrix_addObstacle_then_getVector_vertical_returnsExpected = function() {
        let testObject = new ClearanceMatrix(10,10,Direction.VERTICAL);
        let testCoordinate = new Coordinate(2,4);
        let expectedVector1 = [1,2,3,4,5,6,7,8,9,10];
        let expectedVector2 = [1,2,3,4,0,1,2,3,4,5];
        if(!testObject.addObstacle(testCoordinate)) return false;
        for(let i = 0; i < 10; i++) {
            if(i == 2) {
                if(!testObject.getVector(i).every((element, index) => isElementEquivalent(element, index, expectedVector2))) return false;
            } else {
                if(!testObject.getVector(i).every((element, index) => isElementEquivalent(element, index, expectedVector1))) return false;
            }
        }
        return true;
    }


    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_columns_lessThanZero_throwsException.name,
        ()=>ClearanceMatrix_constructor_columns_lessThanZero_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_columns_notInteger_throwsException.name,
        ()=>ClearanceMatrix_constructor_columns_notInteger_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_columns_notNumber_throwsException.name,
        ()=>ClearanceMatrix_constructor_columns_notNumber_throwsException());
    
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_rows_lessThanZero_throwsException.name,
        ()=>ClearanceMatrix_constructor_rows_lessThanZero_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_rows_notInteger_throwsException.name,
        ()=>ClearanceMatrix_constructor_rows_notInteger_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_rows_notNumber_throwsException.name,
        ()=>ClearanceMatrix_constructor_rows_notNumber_throwsException());

    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_orientation_NotNumber_throwsException.name,
        ()=>ClearanceMatrix_constructor_orientation_NotNumber_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException.name,
        ()=>ClearanceMatrix_constructor_orientation_NotZeroOrOne_throwsException());

    let testObject =new ClearanceMatrix(10,10,Direction.HORIZONTAL);
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_notInteger_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_notInteger_throwsException(testObject));
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException(testObject));
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException(testObject));

    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException.name,
        ()=>ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException.name,
        ()=>ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException());
    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_validInput_returnsTrue_repeatedInput_returnsFalse.name,
        ()=>ClearanceMatrix_addObstacle_validInput_returnsTrue_repeatedInput_returnsFalse());
    ClearanceMatrixTester.addTest(ClearanceMatrix_initialState_getVector_returnsExpected.name,
        ()=>ClearanceMatrix_initialState_getVector_returnsExpected());
    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_then_getVector_horizontal_returnsExpected.name,
        ()=>ClearanceMatrix_addObstacle_then_getVector_horizontal_returnsExpected());
    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_then_getVector_vertical_returnsExpected.name,
        ()=>ClearanceMatrix_addObstacle_then_getVector_vertical_returnsExpected());
}