let reversedString = "";
let pstring = "";
const palindromes = function (str) {
    str = str.toLowerCase().replace(     /[\s~`!@#$%^&*()-_+=[\]{}\\|:;"',<>.?\/\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F]/g,     '');
    pstring = str;
    reversedString = ""; 
    for(let i = str.length; i > 0; i--){
        reversedString += str.slice(i - 1, i)
    }return pstring == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
