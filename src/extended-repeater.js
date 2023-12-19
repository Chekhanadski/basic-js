const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

const defaultOptions = {
  repeatTimes: 1,
  separator: "+",
  addition: "",
  additionRepeatTimes: 1,
  additionSeparator: "|",
};

function repeater(str, options = defaultOptions) {
  options = { ...defaultOptions, ...options };
  const string = String(str);
  const addition = String(options.addition);
  const additionStr = Array(options.additionRepeatTimes)
    .fill(addition)
    .join(options.additionSeparator);
  const fullStr = string + additionStr;
  const fullStrRepeat = Array(options.repeatTimes)
    .fill(fullStr)
    .join(options.separator);

  return fullStrRepeat;
}

module.exports = {
  repeater,
};
