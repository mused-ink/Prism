// Generated by CoffeeScript 1.11.1
var helperHex, hexValue;

helperHex = function(val) {
  var hexString;
  hexString = parseInt(val).toString(16).toUpperCase();
  if (val < 16) {
    return "0" + hexString;
  } else {
    return hexString;
  }
};

hexValue = function(dictionary) {
  return "" + helperHex(dictionary.r * 255) + helperHex(dictionary.g * 255) + helperHex(dictionary.b * 255);
};