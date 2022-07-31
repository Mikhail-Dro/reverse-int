module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
    n = n.toString();
    let reverseN = '';
    for(let i = n.length - 1; i >=0; i--) {
      reverseN += n[i];
    }
    return(reverseN);
}

