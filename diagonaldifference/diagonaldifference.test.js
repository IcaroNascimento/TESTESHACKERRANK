const diagonalDifference = require('./diagonaldifference');

test('return absolute value "0" when the diagonal difference is 15 - 15 ', () => {
	expect(diagonalDifference([ [ 1, 2, 3 ], 
								[ 4, 5, 6 ], 
								[ 7, 8, 9 ] ])).toEqual(0);
});

test('return absolute value "2" when the diagonal difference is 17 - 15 ', () => {
	expect(diagonalDifference([ [ 1, 2, 3 ], 
								[ 4, 5, 6 ], 
								[ 9, 8, 9 ] ])).toEqual(2);
});

test('return absolute value "15" when the diagonal difference is 19 - 4 ', () => {
	expect(diagonalDifference([ [ 11, 2, 4 ], 
								[  4, 5, 6 ], 
								[ 10, 8, -12 ] ])).toEqual(15);
});

test('return absolute value "37" when the diagonal difference is 9 - (-28) ', () => {
	expect(diagonalDifference([ [ -11, 2, 4 ], 
								[ 4, -5, 6 ], 
								[ 10, -8, -12 ] ])).toEqual(37);
});

test('return absolute value "13" when the diagonal difference is 21 - 34 ', () => {
	expect(diagonalDifference([[ 1, 2, 3, 4 ], 
							   [ 5, 6, 7, 8 ], 
							   [ 9, 10, 11, 12 ], 
							   [ 0, 14, 15, 16 ] ])).toEqual(13);
});
test('return absolute value "1" when the diagonal difference is 34 - 35 ', () => {
	expect(diagonalDifference([ [ 1, 2, 3, 4 ], 
								[ 5, 6, 7, 8 ], 
								[ 9, 10, 11, 12 ], 
								[ 13, 14, 15, 17 ] ])).toEqual(1);
});
