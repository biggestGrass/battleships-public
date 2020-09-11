{
    let isValidArrayIndex_arrayLength_notNumber_throwsException = function(){
        try {
            isValidArrayIndex(0,"test");
        } catch(error) {
            return true;
        }
        return false;
    }
    let isValidArrayIndex_arrayLength_notInteger_throwsException = function(){
        try {
            isValidArrayIndex(0,1.5);
        } catch(error) {
            return true;
        }
        return false;
    }
    let isValidArrayIndex_arrayLength_negative_throwsException = function(){
        try {
            isValidArrayIndex(0,-1);
        } catch(error) {
            return true;
        }
        return false;
    }


    isValidArrayIndexTester.addTest(isValidArrayIndex_arrayLength_notNumber_throwsException.name,
        ()=>isValidArrayIndex_arrayLength_notNumber_throwsException());
    isValidArrayIndexTester.addTest(isValidArrayIndex_arrayLength_notInteger_throwsException.name,
        ()=>isValidArrayIndex_arrayLength_notInteger_throwsException());
    isValidArrayIndexTester.addTest(isValidArrayIndex_arrayLength_negative_throwsException.name,
        ()=>isValidArrayIndex_arrayLength_negative_throwsException());
}