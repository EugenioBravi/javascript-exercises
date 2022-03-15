let reversedString = ""; 

const reverseString = function(str) {
    reversedString = ""; 
    for(let i = str.length; i > 0; i--){
        reversedString += str.slice(i - 1, i)
    }return reversedString
};

// Do not edit below this line
module.exports = reverseString;
