let sumTotal= 0;
let endNum = 0 ;
const sumAll = function(startNum, endNum) {
    sumTotal = 0;
if(startNum < 0 || typeof endNum != 'number'){
    return "ERROR"
} else if(startNum < endNum){  
    for(let i = startNum; i <= endNum; i++){
        sumTotal += i;
    }return sumTotal
} else{
    for(let i = startNum; i >= endNum; i--){
        sumTotal += i;
    }return sumTotal
}
};

// Do not edit below this line
module.exports = sumAll;
