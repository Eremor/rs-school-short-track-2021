/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // const index = [];
  // array.map((el, i) => ((el === value) ? index.push(i) : ''));
  // return index[0];

  let start = 0;
  let end = array.length;
  // let middle = Math.floor((start + end) / 2);
  let middle;
  let index;

  // for (let i = 0; i < array.length; i++) {
  //   if (array[middle] !== value) {
  //     if (value < array[middle]) {
  //       end = middle;
  //     } else {
  //       start = middle;
  //     }
  //     middle = Math.floor((start + end) / 2);
  //   } else {
  //     index = middle;
  //   }
  // }
  while (start < end) {
    middle = Math.floor((start + end) / 2);
    if (value < array[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
    if (value === array[middle]) {
      index = middle;
    }
  }

  return index;
}

module.exports = findIndex;
