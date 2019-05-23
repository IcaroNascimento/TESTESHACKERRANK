const compareTriplets = require('./compareTriplets');

test('should return a draw between Alice and Bob with scoreboard 1, 1', () => {
  expect(compareTriplets([ 5, 6, 7 ], [ 3, 6, 10 ])).toStrictEqual([1, 1]);
});
test('should return Alice victory between Alice and Bob with scoreboard 2, 1', () => {
  expect(compareTriplets([ 5, 7, 7 ], [ 3, 6, 10 ])).toStrictEqual([2, 1]);
});
test('should return Bob victory between Alice and Bob with scoreboard 1, 2', () => {
  expect(compareTriplets([ 3, 6, 10 ], [ 5, 7, 7 ])).toStrictEqual([1, 2]);
});
test('should return Bob victory between Alice and Bob with scoreboard 1, 3 and up to 1 more round', () => {
  expect(compareTriplets([ 3, 6, 10, 6 ], [ 5, 7, 7, 10 ])).toStrictEqual([1, 3]);
});

