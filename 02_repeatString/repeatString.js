let stringRepeated = "";

const repeatString = function(str, times) {
stringRepeated = "";
    if(times<0){
        return 'ERROR'
    }else{
        for (let i = 0; i<times; i++){
        stringRepeated += str;
    } return stringRepeated;}
};

// Do not edit below this line
module.exports = repeatString;
