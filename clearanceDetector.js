/*

getCandidates:vector and isPositionClear:vector
vector is not array                 throw exception
vector elements are not numbers     throw exception
vector is length 0                  normal behavior
vector is valid                     normal behavior

getCandidates:size and isPositionClear:size
size is not number type             throw exception
size is less than 0                 normal behavior
size is 0                           normal behavior
size is not integer                 normal behavior
size is valid                       normal behavior

isPositionClear:pos
pos should be a valid array index
pos is not integer                  throw exception
pos >= vector.length                throw exception
pos is not number type              throw exception
pos is less than 0                  throw exception
pos is 0                            normal behavior
pos is not 0, valid value           normal behavior

on all valid values in isPositionClear
vector length 0 should always return false


on all valid values in getCandidates


elements in vector greater than size should have their index be part of candidates


*/


const ClearanceDetector = {
    isPositionClear : function(vector, size, pos) {
        if(vector[pos] >= size) return true;
        else return false;
    },
    getCandidates : function(vector, size) {
        let candidates = [];
        for(let pos = 0; pos < vector.length; pos++) {
            if(vector[pos] >= size) candidates.push(pos);
        }
        return candidates;
    }
}