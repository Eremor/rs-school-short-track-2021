/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let arr2 = arr.map((a) => a);
  let maxValue = 0;
  let value = '';

  for (let i = 0; i < arr.length; i++) {
    arr2.splice(i, 1);

    for (let j = 0; j < arr2.length; j++) {
      value += arr2[j];
    }

    if (maxValue <= parseInt(value, 10)) {
      maxValue = parseInt(value, 10);
    }

    arr2 = arr.map((a) => a);
    value = '';
  }

  return maxValue;
}

module.exports = deleteDigit;
