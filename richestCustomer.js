/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // console.log(accounts.length);
    var biggestWealth = 0;

    for(var i = 0; i < accounts.length; i++){
        console.log(accounts[i])
        var sum = 0;
        for(var j = 0; j < accounts[i].length; j++){
            sum = sum + accounts[i][j];
        }
        if(sum > biggestWealth) biggestWealth = sum;
    }

    return biggestWealth;
};

console.log('Case test: 1. accounts = [[1,2,3],[3,2,1]] Output:', maximumWealth([[1,2,3],[3,2,1]]), 'Expected: true\n\n');