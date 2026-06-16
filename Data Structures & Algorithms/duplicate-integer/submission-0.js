class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const memory =  new Set();
        for (let i = 0 ; i <nums.length ; i++ ){
            const currentNum  = nums[i]

        if(memory.has(currentNum)){
            return true
        }
        memory.add(currentNum,true)
     
        }
           return false
    }
}
