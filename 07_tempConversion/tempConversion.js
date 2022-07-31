const ftoc = function(tempF) {
  return parseFloat(((tempF - 32) / 1.8).toFixed(1));
};

const ctof = function(tempC) {
  return parseFloat(((tempC * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
