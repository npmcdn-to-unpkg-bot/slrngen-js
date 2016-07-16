var version = require('./version');

const min = 10000000;
const max = 99999999;

function createSLRN() {
  var eigth = getRandomInt(min, max);
  var ninth = calculateChecksumDigit(eigth.toString());
  return eigth.toString() + ninth.toString();
}

function verifySLRN(code) {
  var result = replaceAll(code, '-', '');
  var eigthString = result.substring(0, result.length - 1);
  var ninth = calculateChecksumDigit(eigthString);
  return (eigthString + ninth) === result;
}

function calculateChecksumDigit(code) {
  var prefixAndCode = prefixCode() + code;
  var codeWithoutVd = prefixAndCode.substring(0, 12);
  var e = sumEven(codeWithoutVd);
  var o = sumOdd(codeWithoutVd);
  var me = o * 3;
  var s = me + e;
  var dv = getEanVd(s);
  return dv;
}

function formatSLRN(code) {
  return code.substring(0, 3) + '-' + code.substring(3, 6) + '-' + code.substring(6);
}

function formatWithSLRN(code) {
  return 'SLRN ' + code.substring(0, 3) + '-' + code.substring(3, 6) + '-' + code.substring(6);
}

function prefixCode() {
  return '2672';
}

function deformatSLRN(code) {
  var str = code;
  if (code.indexOf('-') > 0) {
    str = code.substring(0, 3) + code.substring(4, 7) + code.substring(8);
  }
  return str;
}

function getEanVd(s) {
  return (10 - (s % 10)) % 10;
}

function sumEven(code) {
  var sum = 0;
  for (var i = 0; i < code.length; i++) {
    if (isEven(i)) {
      sum += toNumeric(code[i]);
    }
  }
  return sum;
}

function sumOdd(code) {
  var sum = 0;
  for (var i = 0; i < code.length; i++) {
    if (!isEven(i)) {
      sum += toNumeric(code[i]);
    }
  }
  return sum;
}

function isEven(i) {
  return i % 2 === 0;
}

function toNumeric(string) {
  return parseInt(string.replace(/\D/g, ''), 10);
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
/* function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
*/

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

module.exports = {
  version: version,
  create: createSLRN,
  verify: verifySLRN,
  checksum: calculateChecksumDigit,
  fmt: formatSLRN,
  fmtw: formatWithSLRN,
  prefix: prefixCode,
  defmt: deformatSLRN
};
