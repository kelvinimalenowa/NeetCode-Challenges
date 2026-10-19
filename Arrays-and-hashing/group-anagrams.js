class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //group anagrams into its own array
        // const obj = {
        //     'act' : ['act', 'cat'],
        //     'pots' : ['pots', 'tops', 'stop'],
        //     'hat' : ['hat']
        // }

        //keeping track of the key value pairs we've seen before
        const seenBefore = {}

        //using a for loop
        for (let i = 0; i < strs.length; i++){
            // when i = 0, we can grab the first string in the array
            // strs[i] = strs[0] = 'act'
            
            //place new word inside a sorted variable
            const sortedWord = strs[i].split('').sort().join('')

            // seeing if the new sorted word is already in the object
            if (Object.hasOwn(seenBefore, sortedWord)){
                seenBefore[sortedWord].push(strs[i])
            } else {
                seenBefore[sortedWord] = [strs[i]]
            }
        }
        //return our results as an array within an array
        return Object.values(seenBefore)
    }
}
