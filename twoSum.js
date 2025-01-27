/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution
 * and you may not use the same element twice.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * 24 de janeiro
 * Wrong Answer 58 / 63 testcases passed
 * Input nums = [2,5,5,11]; target = 10; Output: [1,1]; Expected [1,2]
 * errado pq estou enviando o mesmo elemento [1]. os elementos não se repetem 
 * 
 * [2,5,5,11] 
 * nums[i=1] = 5, nums[j=1] = 5
 */
console.log('... running Two Sums problem')
var nbjhnj = function(nums, target) {
    
    // encontrar a soma de dois valores em nums que seja igual o valor em target
    // retornar os indices desses valores 
    console.log('target is:', target)
    var indexes = [];

    // essa primeira tentativa eu coloquei os arrays para correr de maneira igual 
    // ao submeter, deu sucesso em 58/63 casos 
    // o erro foi que eu estava repetindo a posição dos elementos
    // for (var i = 0; i < nums.length; i++){
    //     for (j = 1; j < nums.length; j++){
    //         if(nums[i]+ nums[j] === target) {
    //             if(indexes.length === 0 ){
    //                 indexes.push(i);
    //                 indexes.push(j);
    //             }
    //         }
    //     }
    // }
    // nessa solução, olhei na parte de Editorial e vi que tinha pouca diferença
    // a solução proposta tbm eram com dois 'for's 
    // mas o array j começava com i+1 para pular a posição abaixo e não duplicar o elemento
    for (var i = 0; i < nums.length; i++){
        for (j = i + 1; j < nums.length; j++){
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