function Test() {
    function ClearanceDetector_getCandidates_vector_notArray_throwsException() {
        try {
            ClearanceDetector.getCandidates("hello",0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_getCandidates_vector_elementsNotNumber_throwsException() {
        try {
            ClearanceDetector.getCandidates(["hello"],0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_getCandidates_vector_zeroLength_returnsEmptyArray() {
        let valueToTest = ClearanceDetector.getCandidates([],1);
        if(Array.isArray(valueToTest)) {
            if(valueToTest.length==0) return true;
        }
        return false;
    }

    function ClearanceDetector_getCandidates_size_notNumber_throwsException() {
        try {
            ClearanceDetector.getCandidates([],"hello");
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_getCandidates_size_negative_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==ClearanceDetector.getCandidates([1,1],-1)[index]
        })) return true;
        else return false;
    }
    function ClearanceDetector_getCandidates_size_zero_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==ClearanceDetector.getCandidates([1,1],0)[index]
        })) return true;
        else return false;
    }
    function ClearanceDetector_getCandidates_size_notInteger_returnsOutput() {
        if([0,1].every((element, index) => {
            return element==ClearanceDetector.getCandidates([1,1],0.5)[index]
        })) return true;
        else return false;
    }

    function ClearanceDetector_isPositionClear_size_notNumber_throwsException() {
        try {
            ClearanceDetector.isPositionClear([1,1],"hello",0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_size_negative_returnsOutput() {
        return ClearanceDetector.isPositionClear([1,1],-1,0);
    }
    function ClearanceDetector_isPositionClear_size_zero_returnsOutput() {
        return ClearanceDetector.isPositionClear([1,1],0,0);
    }
    function ClearanceDetector_isPositionClear_size_notInteger_returnsOutput() {
        return ClearanceDetector.isPositionClear([1,1],0.5,0);
    }

    function ClearanceDetector_isPositionClear_vector_notArray_throwsException() {
        try {
            ClearanceDetector.isPositionClear("hello",0,0);        
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_vector_elementNotNumber_throwsException() {
        try {
            ClearanceDetector.isPositionClear(["hello","hello"],0,0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_vector_zeroLength_throwsException() {
        try {
            ClearanceDetector.isPositionClear([],0,0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_pos_notInteger_throwsException() {
        try {
            ClearanceDetector.isPositionClear([1,1],0,0.5);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_pos_greaterThanOrEqualToVectorLength_throwsException() {
        try {
            ClearanceDetector.isPositionClear([],0,0);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_pos_notNumber_throwsException() {
        try {
            ClearanceDetector.isPositionClear([1,1],0,"hello");
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_pos_negative_throwsException() {
        try {
            ClearanceDetector.isPositionClear([1,1],0,-1);
        } catch (error) {
            return true;
        }
        return false;
    }
    function ClearanceDetector_isPositionClear_pos_zero_returnsOutput() {
        return ClearanceDetector.isPositionClear([1,1],0,0);
    }
    function ClearanceDetector_isPositionClear_pos_vectorLengthMinusOne_returnsOutput() {
        return ClearanceDetector.isPositionClear([1,1],0,1);
    }


    this.testClearanceDetector = function() {
        runTest(ClearanceDetector_getCandidates_vector_notArray_throwsException.name,
            ()=>ClearanceDetector_getCandidates_vector_notArray_throwsException());
        runTest(ClearanceDetector_getCandidates_vector_elementsNotNumber_throwsException.name,
            ()=>ClearanceDetector_getCandidates_vector_elementsNotNumber_throwsException());
        runTest(ClearanceDetector_getCandidates_vector_zeroLength_returnsEmptyArray.name,
            ()=>ClearanceDetector_getCandidates_vector_zeroLength_returnsEmptyArray());

        runTest(ClearanceDetector_getCandidates_size_notNumber_throwsException.name,
            ()=>ClearanceDetector_getCandidates_size_notNumber_throwsException());
        runTest(ClearanceDetector_getCandidates_size_negative_returnsOutput.name,
            ()=>ClearanceDetector_getCandidates_size_negative_returnsOutput());
        runTest(ClearanceDetector_getCandidates_size_zero_returnsOutput.name,
            ()=>ClearanceDetector_getCandidates_size_zero_returnsOutput());
        runTest(ClearanceDetector_getCandidates_size_notInteger_returnsOutput.name,
            ()=>ClearanceDetector_getCandidates_size_notInteger_returnsOutput());

        runTest(ClearanceDetector_isPositionClear_size_notNumber_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_size_notNumber_throwsException());
        runTest(ClearanceDetector_isPositionClear_size_negative_returnsOutput.name,
            ()=>ClearanceDetector_isPositionClear_size_negative_returnsOutput());
        runTest(ClearanceDetector_isPositionClear_size_zero_returnsOutput.name,
            ()=>ClearanceDetector_isPositionClear_size_zero_returnsOutput());
        runTest(ClearanceDetector_isPositionClear_size_notInteger_returnsOutput.name,
            ()=>ClearanceDetector_isPositionClear_size_notInteger_returnsOutput());

        
        runTest(ClearanceDetector_isPositionClear_vector_notArray_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_vector_notArray_throwsException());
        runTest(ClearanceDetector_isPositionClear_vector_elementNotNumber_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_vector_elementNotNumber_throwsException());
        runTest(ClearanceDetector_isPositionClear_vector_zeroLength_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_vector_zeroLength_throwsException());
        runTest(ClearanceDetector_isPositionClear_pos_notInteger_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_pos_notInteger_throwsException());
        runTest(ClearanceDetector_isPositionClear_pos_greaterThanOrEqualToVectorLength_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_pos_greaterThanOrEqualToVectorLength_throwsException());
        runTest(ClearanceDetector_isPositionClear_pos_notNumber_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_pos_notNumber_throwsException());
        runTest(ClearanceDetector_isPositionClear_pos_negative_throwsException.name,
            ()=>ClearanceDetector_isPositionClear_pos_negative_throwsException());
        runTest(ClearanceDetector_isPositionClear_pos_zero_returnsOutput.name,
            ()=>ClearanceDetector_isPositionClear_pos_zero_returnsOutput());
        runTest(ClearanceDetector_isPositionClear_pos_vectorLengthMinusOne_returnsOutput.name,
            ()=>ClearanceDetector_isPositionClear_pos_vectorLengthMinusOne_returnsOutput());
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
    
    function ClearanceMatrix_addObstacle_column_notNumber_returnsUndefined(testObject) {
        if(testObject.addObstacle("hello",1) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_column_notInteger_returnsUndefined(testObject) {
        if(testObject.addObstacle(0.5,1) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_column_negative_returnsUndefined(testObject) {
        if(testObject.addObstacle(-1,1) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined(testObject) {
        if(testObject.addObstacle(2,1) === undefined) return true;
        else return false;
    }

    function ClearanceMatrix_addObstacle_row_notNumber_returnsUndefined(testObject) {
        if(testObject.addObstacle(1,"hello") === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_row_notInteger_returnsUndefined(testObject) {
        if(testObject.addObstacle(1,0.5) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_row_negative_returnsUndefined(testObject) {
        if(testObject.addObstacle(1,-1) === undefined) return true;
        else return false;
    }
    function ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined(testObject) {
        if(testObject.addObstacle(1,2) === undefined) return true;
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
    
        runTest(ClearanceMatrix_addObstacle_column_notNumber_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_column_notNumber_returnsUndefined(testObject))
        runTest(ClearanceMatrix_addObstacle_column_notInteger_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_column_notInteger_returnsUndefined(testObject))
        runTest(ClearanceMatrix_addObstacle_column_negative_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_column_negative_returnsUndefined(testObject))
        runTest(ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_column_greaterThanMax_returnsUndefined(testObject))
        
        runTest(ClearanceMatrix_addObstacle_row_notNumber_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_row_notNumber_returnsUndefined(testObject) )
        runTest(ClearanceMatrix_addObstacle_row_notInteger_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_row_notInteger_returnsUndefined(testObject))
        runTest(ClearanceMatrix_addObstacle_row_negative_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_row_negative_returnsUndefined(testObject))
        runTest(ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined.name,
            ()=>ClearanceMatrix_addObstacle_row_greaterThanMax_returnsUndefined(testObject))
    }
}

let test = new Test();
test.testClearanceMatrix();
test.testClearanceDetector();