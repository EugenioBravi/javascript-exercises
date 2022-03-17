let celcius = 0;
let fahrenheit = 0;
const ftoc = function(far) {
celcius = (far - 32) * (5/9);
return Number(celcius.toPrecision(3));
};

const ctof = function(cel) {
fahrenheit = cel *(9/5) + 32;
return Number(fahrenheit.toPrecision(4));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
