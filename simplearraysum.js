function simpleArraySum(ar) {
  let totalSum = ar.reduce(function (sum, value) {
    return sum + value;
  }, 0);

  return totalSum;
}