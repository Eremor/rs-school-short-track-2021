/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  const result = [];
  let domain = '';

  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.');

    for (let j = arr.length - 1; j >= 0; j--) {
      domain += `.${arr[j]}`;
      result.push(domain);
    }

    domain = '';
  }

  return result.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

module.exports = getDNSStats;
