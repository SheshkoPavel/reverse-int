module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    let last, result = 0;

    while( n !==0 ){
        last = n % 10;  
        result = (result * 10) + last  ;
        n = Math.floor(n/10);
    }    
    return result;
}

