const add = function(a,b) {
	let total = a + b;
  return total;
};

const subtract = function(a,b) {
	let total = a - b;
  return total;
};

const sum = function(suma) {
  let total = 0;
	for(let i = 0;i < suma.length;i++){
    total += parseInt(suma[i]);
  }return total;
};

const multiply = function(mul) {
let total = 1;
for(let i = 0;i<mul.length;i++){
total *= mul[i];
}return total;

};

const power = function(a,b) {
	let total = 1;
  for(let i = 1;i<= b;i++){
    total *= parseInt(a);
  }return total;
};

const factorial = function(a) {
  let total = 1;
	for(let i = a; i>1; i--){
    total *= i;
  }return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
