const fibonacci = function(fiboNumber) {
    fiboNumber = parseInt(fiboNumber)
    let fiboAdd = 0;
    let fiboResult = 1;
    if(fiboNumber >= 1){
        for(let i = 1;i<=fiboNumber;i++){
            fiboAdd += fiboResult ;
            fiboResult = fiboAdd-fiboResult;
        }return fiboAdd;
    }else if(fiboNumber<0){
        return "OOPS";
    }else{
        return 1;
    }
    };
//1, 1, 2, 3, 5, 8, etc.
// Do not edit below this line
module.exports = fibonacci;
