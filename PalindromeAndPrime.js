let num = process.argv[2];

function isPrime(num) {
  if (num == 1) {
    return false;
  }
  else if (num == 2) {
    return true;
  }
  else {
    for (let i = 2; i < (num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}

let rev = 0, temp = num;
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
console.log(" The number is Prime : " + isPrime(num) );
console.log(" the number is Palindrome : " + isPalindrome(num));