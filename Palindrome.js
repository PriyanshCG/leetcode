function isPalindrome(x) {
    let str = x.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(121));