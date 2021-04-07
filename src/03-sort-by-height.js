/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const stack = [];
  const solution = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      stack.push(arr[i]);
    }
  }

  stack.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      solution.push(arr[i]);
    } else {
      solution.push(stack[0]);
      stack.shift();
    }
  }

  return solution;
}

module.exports = sortByHeight;
