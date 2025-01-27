/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var isP = true;
    var newX = x.toString();
    var invertedX = '';
    for(var i = newX.length -1 ; i >= 0; i--){
        invertedX = invertedX + newX[i];
    }
    (invertedX === newX) ? isP = true : isP = false;

    return isP;
};
console.log('Case test: 1. X = 121 Output:', isPalindrome(121), 'Expected: true\n\n');
console.log('Case test: 2. X = -121 Output:', isPalindrome(-121), 'Expected: false\n\n');
console.log('Case test: 3. X = 10 Output:', isPalindrome(10), 'Expected: false\n\n');