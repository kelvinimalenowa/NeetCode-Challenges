class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++){
            for (let j = i + 1; j < nums.length; j++){
                console.log('these are i and j: ', i, j)
                if (nums[i] + nums[j] === target){
                    return [i, j]
                }
            }
        }
    }
}