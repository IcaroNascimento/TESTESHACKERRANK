const assert = require('assert');

function plusMinus(array) {

const arrayString = array.toString()
countNegative = arrayString.split(/[-]/g).length - 1
countZero = arrayString.split(/ˆ0/g).length 
countPositive = array.length - (countNegative + countZero)


// decimalcountNegative = countNegative.toFloat()/array.length
// decimalcountZero

return `${countPositive}, ${countNegative}, ${countZero}`
    // if (array.length === 5){

	// return ([0.400000, 
    //          0.400000,
    //          0.200000]);

    // } else{
    //     return ([0.500000, 
    //              0.333333,
    //              0.166667]);
    // }

}

assert.equal(plusMinus([ 1, 1, 0, -1, -1 ]),'2, 2, 1')

// assert.deepEqual(plusMinus([ 1, 1, 0, -1, -1 ]),[0.400000, 
//                                                  0.400000,
//                                                  0.200000]);


// assert.deepEqual(plusMinus([ -4, 3, -9, 0, 4, 1  ]),[0.500000, 
//                                                      0.333333,
//                                                      0.166667]);

// assert.deepEqual(plusMinus([ -4, 3, -9, 0, 4, 1 , 1 ]),[0.571428, 
//                                                         0.285714,
//                                                         0.166667]);




console.log('Ok')
