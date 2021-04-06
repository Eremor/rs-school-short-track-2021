/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let elem;
  const count1 = s1.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  const count2 = s2.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const key1 = Object.keys(count1);
  const key2 = Object.keys(count2);

  for (let i = 0; i < key1.length; i++) {
    for (let j = 0; j < key2.length; j++) {
      if (key1[i] === key2[j]) {
        const index = key1[i];
        elem = count1[index] < count2[index] ? count1[index] : count2[index];
        sum += elem;
      }
    }
  }

  return sum;
}

module.exports = getCommonCharacterCount;
