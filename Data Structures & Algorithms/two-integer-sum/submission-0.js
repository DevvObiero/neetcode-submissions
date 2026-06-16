class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const memory = new Map();
  
    for (let i = 0; i < nums.length; i++) { 
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (memory.has(complement)) {
            return [memory.get(complement), i];
        }
        memory.set(currentNum, i);

    }


    }
}
