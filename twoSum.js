/**
 * Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
24 de janeiro
Wrong Answer 58 / 63 testcases passed
Input nums = [2,5,5,11]; target = 10; Output: [1,1]; Expected [1,2]

 */
console.log('... running Two Sums problem')
var twoSum = function(nums, target) {
    
    // encontrar a soma de dois valores em nums que seja igual o valor em target
    // retornar os indices desses valores 

    console.log('target is:', target)
    var indexes = [];

    for (var i = 0; i < nums.length; i++){
        for (j = 1; j < nums.length; j++){
            if(nums[i]+ nums[j] === target) {
                if(indexes.length === 0 ){
                    indexes.push(i);
                    indexes.push(j);
                }
            }
        }
    }
    
    return indexes;
};

console.log('example 1 test:', twoSum([2,7,11,15], 9));
console.log('example 2 test:', twoSum([3,2,4], 6));