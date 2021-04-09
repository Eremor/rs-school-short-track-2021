/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let i = 0;
  let current;
  const result = names;

  while (i < result.length - 1) {
    let k = 1;
    current = result[i];

    for (let j = i + 1; j < result.length; j++) {
      if (current === result[j]) {
        result[j] = `${current}(${k})`;
        k++;
        i = 0;
      }
    }

    i++;
  }

  return result;
}

module.exports = renameFiles;
