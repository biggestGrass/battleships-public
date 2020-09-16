function Tester() {
    let tests = [];

    function runTest(testName, test) {
        console.log(test() + " " + testName);
    }

    this.addTest  = function(testName, testFunction) {
        tests.push([testName, testFunction]);
    }

    this.runTests = function() {
        for(let i = 0; i < tests.length; i++) {
            runTest(tests[i][0], tests[i][1]);
        }
    }
    
}

ClearanceMatrixTester = new Tester();
CoordinateTester = new Tester();
GameStateTester = new Tester();
getIndicesGreaterThanValueTester = new Tester();
isValidArrayIndexTester = new Tester();
ShipPlacerTester = new Tester(); 
GameStateFactoryTester = new Tester();