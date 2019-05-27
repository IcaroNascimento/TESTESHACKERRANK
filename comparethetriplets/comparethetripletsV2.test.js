const compareTheTriplets = require('./comparethetripletsV2');

test('should return a draw between Alice and Bob with scoreboard 1, 1', () => {
  expect(compareTheTriplets([[ 5, 6, 7 ], [ 3, 6, 10 ]])).toStrictEqual([1, 1]);
});
test('should return Alice victory between Alice and Bob with scoreboard 2, 1', () => {
  expect(compareTheTriplets([[ 5, 7, 7 ], [ 3, 6, 10 ]])).toStrictEqual([2, 1]);
});
test('should return Bob victory between Alice and Bob with scoreboard 1, 2', () => {
  expect(compareTheTriplets([[ 3, 6, 10 ], [ 5, 7, 7 ]])).toStrictEqual([1, 2]);
});
test('should return Bob victory between Alice and Bob with scoreboard 1, 3 and up to 1 more round', () => {
  expect(compareTheTriplets([[ 3, 6, 10, 1 ], [ 5, 7, 7, 8 ]])).toStrictEqual([1, 2]);
});
