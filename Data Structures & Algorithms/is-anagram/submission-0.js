class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
 const count = {}


for(let i = 0 ; i < s.length; i++){
     const charS = s[i];
     const charT = t[i];

count[charS]  = (count[charS] || 0 ) +1;
count[charT] =  (count[charT] || 0 ) - 1;

 
}
for (let char in count){
if(count[char]!== 0 ){
    return false
}
}

return true


    }
}
