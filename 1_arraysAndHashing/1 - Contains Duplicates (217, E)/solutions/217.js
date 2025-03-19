/*
Name: Mohammed Sarhat
The following is my code for the Contains Duplicate problem (217, Easy) from Leetcode.
Outside this working directory, check the README.md for the problem statement, and my thought process. 
Needless to say, I will include comments throughout the code that will carry the same intent; to show my thought process.
*/

// the following is a JSDoc

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // create a Set (a dictionary that not include duplicates)
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};
