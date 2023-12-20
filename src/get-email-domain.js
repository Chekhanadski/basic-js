const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  while (email.includes("@")) {
    const indexAt = email.indexOf("@");
    email = email.slice(indexAt + 1);
  }

  return email;
}

console.log(getEmailDomain("very.unusual.@.unusual.com@usual.com"));
module.exports = {
  getEmailDomain,
};
