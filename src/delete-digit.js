const { NotImplementedError } = require('../extensions/index.js');

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
 let strN = String(n);
 let maxNum = 0;
 for (let i = 0; i < strN.length; i++) {
  let newN = Number(strN.slice(0, i) + strN.slice(i + 1))
  if (maxNum < newN) {
    maxNum = newN;
  }
 }
 return maxNum;
}

deleteDigit(253)
module.exports = {
  deleteDigit
};
