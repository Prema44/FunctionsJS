var num = parseInt(process.argv[2]);
var rev = 0, temp = num;
function isPalindrome(num) {
    while (num > 0) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (temp == rev) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome(num));