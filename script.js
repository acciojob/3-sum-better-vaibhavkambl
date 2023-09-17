
// write your code here
	function threeSum(nums, target) {
    // Sort the input array in ascending order.
    nums.sort((a, b) => a - b);

    let closestSum = Infinity;
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            // Check if the current sum is closer to the target than the current closestSum.
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSum(nums, target)); // Output: 2
  


module.exports = threeSum;
