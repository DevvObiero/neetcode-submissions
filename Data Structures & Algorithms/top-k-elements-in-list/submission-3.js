class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count  =  {};

     for (const num of nums){
count[num]  =   (count[num] || 0 ) +1;
}
const buckets =  Array(nums.length +1).fill().map(()=>[]);
// Hapa II'm creating a black array wileld with these '[]'
for(const num in count){
    const freq =  count[num];
    buckets[freq].push(Number(num))
}
const result = [];


for(let i = buckets.length -1;i>= 0;i-- ){
    for (const num of buckets[i] ){
        result.push(num);
        if(result.length === k ){
            return result
        }
    }
}














    }
}
