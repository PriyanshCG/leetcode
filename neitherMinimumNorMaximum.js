function findNonMinOrMax(nums){

    if(nums.length<3){
        return -1;
    }

    let a = nums[0];
    let b = nums[1];
    let c = nums[2];

    return a+b+c-Math.min(a,b,c)-Math.max(a,b,c);
}