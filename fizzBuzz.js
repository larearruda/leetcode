/**
 * @param {number} n
 * @return {string[]}
 */

/**
 
 * 
 */
var fizzBuzz = function(n) {
    var answer = [];
    for(var i = 1; i <= n; i++){
        console.log("i: ", i)
        if(i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz")
        }else if(i % 3 === 0 && i % 5 !== 0){
            answer.push("Fizz")
        }else if(i % 3 !== 0 && i % 5 === 0){
            answer.push("Buzz")
        }else {
            answer.push(i.toString())
        }
    }

    return answer;
};
//
// Input: n = 3, Output: ["1","2","Fizz"]
// Input: n = 15, Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log('', fizzBuzz(3));
console.log('', fizzBuzz(15));