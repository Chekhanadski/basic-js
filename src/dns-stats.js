const { NotImplementedError } = require("../extensions/index.js");

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
  const obj = {};

  domains.forEach((str) => {
    const reversedDomains = str.split(".").reverse();
    let currentDomain = "";

    reversedDomains.forEach((domain) => {
      currentDomain += "." + domain;

      if (obj.hasOwnProperty(currentDomain)) {
        obj[currentDomain] += 1;
      } else {
        obj[currentDomain] = 1;
      }
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
