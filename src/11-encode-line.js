/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let last = arr[0];
  let count = 0;
  let result = '';

  for (let i = 0; i < arr.length + 1; i++) {
    if (last === arr[i]) {
      count++;
    } else {
      result += `${count > 1 ? count : ''}${last}`;
      count = 1;
      last = arr[i];
    }
  }

  return result;
}

module.exports = encodeLine;
