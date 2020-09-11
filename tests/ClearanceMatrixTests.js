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
            testObject.getVector(2)
        }   catch(error) {
            return true;
        }
        return false;
    }

    let ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException = function(testObject) {
        try {
            testObject.addObstacle(new Coordinate(2,1))
        }   catch(error) {
            return true;
        }
        return false;
    }
    let ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException = function(testObject) {
        try {
            testObject.addObstacle(new Coordinate(1,2))
        }   catch(error) {
            return true;
        }
        return false;
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

    let testObject =new ClearanceMatrix(2,2,Direction.HORIZONTAL);
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_notInteger_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_notInteger_throwsException(testObject));
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_lessThanZero_throwsException(testObject));
    ClearanceMatrixTester.addTest(ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException.name,
        ()=>ClearanceMatrix_getVector_vectorNo_greaterThanOrEqualToClearanceVectorsLength_throwsException(testObject));

    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException.name,
        ()=>ClearanceMatrix_addObstacle_column_greaterThanMax_throwsException(testObject))
    
    ClearanceMatrixTester.addTest(ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException.name,
        ()=>ClearanceMatrix_addObstacle_row_greaterThanMax_throwsException(testObject))
}