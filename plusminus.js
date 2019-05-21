const assert = require('assert');

function plusMinus(arr) {
	let countPositive = countNegative = countZero = 0;
		
        arr.forEach(element => {
         (element > 0) 
            ? countPositive += 1 
            : (element < 0) 
                ? countNegative += 1
                : countZero += 1
        });
    return [countPositive, countNegative, countZero].map(element =>
            (element / arr.length).toFixed(6)
            ).join(', ')
//  `${(countPositive / arr.length).toFixed(6)}, ${(countNegative / arr.length).toFixed(6)}, ${(countZero /
// 		arr.length).toFixed(6)}`;
    
}

assert.equal(plusMinus([ 1, 1, 0, -1, -1 ]), '0.400000, 0.400000, 0.200000');
assert.equal(plusMinus([ -4, 3, -9, 0, 4, 1 ]), '0.500000, 0.333333, 0.166667');
assert.equal(plusMinus([ 1, 2, 3, -1, -2, -3, 0, 0 ]), '0.375000, 0.375000, 0.250000');
assert.equal(plusMinus([ -1, -2, -3, -1, -2, -3, 0, 0 ]), '0.000000, 0.750000, 0.250000');
assert.equal(
	plusMinus([
		55,
		48,
		48,
		45,
		91,
		97,
		45,
		1,
		39,
		54,
		36,
		6,
		19,
		35,
		66,
		36,
		72,
		93,
		38,
		21,
		65,
		70,
		36,
		63,
		39,
		76,
		82,
		26,
		67,
		29,
		24,
		82,
		62,
		53,
		1,
		50,
		47,
		65,
		67,
		19,
		66,
		90,
		77
	]),
	'1.000000, 0.000000, 0.000000'
);
console.log('Ok');
