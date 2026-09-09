export {};

function subarrayEqualsToK(nums: number[], k: number){
    let i = 0;
    let ans = 0;
    let sum = 0;

    for (let j = 0; j < nums.length; j++) {
        sum = sum + nums[j];
        console.log("SUMA",sum);
    }
    console.log("furea for",sum)
    if (k < sum) {
        return 0;
    }
    
    sum = 0;
    i = 0;

    for (let j = 0; j < nums.length; j++) {
        sum = sum + nums[j];
        // ¿como avanzar i ? Cuando la suma sea mayor que k
        // console.log(sum);
        while (sum > k) {
            
            sum = sum - nums[i];
            i++;
            // console.log("while",sum);
        }

        if (sum == k) {
            ans++;
        }
        
    }
    // console.log(sum);
    return ans;
}

// console.log(subarrayEqualsToK([1,1,1], 2), 2);
console.log(subarrayEqualsToK([1,2,3], 3), 2);
// console.log(subarrayEqualsToK([1], 0), 0);

/**
 * 
 * [1,1,1]      
 *  j
 *  i
 * 
 * [1] k = 0
 *  j
 *  i
 */