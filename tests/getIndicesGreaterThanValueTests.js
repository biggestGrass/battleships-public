{
    let getIndicesGreaterThanValue_array_notArray_throwsException = function() {
        try {
            getIndicesGreaterThanValue("hello",0);
        } catch (error) {
            return true;
        }
        return false;
    }
    let getIndicesGreaterThanValue_array_elementsNotNumber_throwsException = function() {
        try {
            getIndicesGreaterThanValue(["hello"],0);
        } catch (error) {
            return true;
        }
        return false;
    }
    let getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray = function() {
        let valueToTest = getIndicesGreaterThanValue([],1);
        if(Array.isArray(valueToTest)) {
            if(valueToTest.length==0) return true;
        }
        return false;
    }

    let getIndicesGreaterThanValue_value_notNumber_throwsException = function() {
        try {
            getIndicesGreaterThanValue([],"hello");
        } catch (error) {
            return true;
        }
        return false;
    }
    let getIndicesGreaterThanValue_value_negative_returnsOutput = function() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],-1)[index]
        })) return true;
        else return false;
    }
    let getIndicesGreaterThanValue_value_zero_returnsOutput = function() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],0)[index]
        })) return true;
        else return false;
    }
    let getIndicesGreaterThanValue_value_notInteger_returnsOutput = function() {
        if([0,1].every((element, index) => {
            return element==getIndicesGreaterThanValue([1,1],0.5)[index]
        })) return true;
        else return false;
    }

    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_array_notArray_throwsException.name,
        ()=>getIndicesGreaterThanValue_array_notArray_throwsException());
    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_array_elementsNotNumber_throwsException.name,
        ()=>getIndicesGreaterThanValue_array_elementsNotNumber_throwsException());
    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray.name,
        ()=>getIndicesGreaterThanValue_array_zeroLength_returnsEmptyArray());

    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_value_notNumber_throwsException.name,
        ()=>getIndicesGreaterThanValue_value_notNumber_throwsException());
    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_value_negative_returnsOutput.name,
        ()=>getIndicesGreaterThanValue_value_negative_returnsOutput());
    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_value_zero_returnsOutput.name,
        ()=>getIndicesGreaterThanValue_value_zero_returnsOutput());
    getIndicesGreaterThanValueTester.addTest(getIndicesGreaterThanValue_value_notInteger_returnsOutput.name,
        ()=>getIndicesGreaterThanValue_value_notInteger_returnsOutput());
}