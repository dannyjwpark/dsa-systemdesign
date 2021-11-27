 var productExceptSelf = function(nums) {
        let leftProduct = 1;
        let rightProduct = 1;
        const ans = new Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
			// To multiply the products and save to ans 
            ans[i] = ans[i] * leftProduct;
            ans[nums.length - 1 - i] =  ans[nums.length - 1 - i]*rightProduct;
			
			// To get new leftProduct and rightProduct
            leftProduct *= nums[i];
            rightProduct *= nums[nums.length - 1 - i];
        }

        return ans;
    };