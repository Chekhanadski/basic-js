const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let count = 0; 
    if(Array.isArray(arr)){
      for(const value of arr) {
        count = Math.max(this.calculateDepth(value), count)
      }
      return count + 1;
    } else {
      return 0;
    }
  } 
}

module.exports = {
  DepthCalculator
};
