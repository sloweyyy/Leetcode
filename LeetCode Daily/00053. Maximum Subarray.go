func maxSubArray(nums []int) int {
	var res = nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i - 1] > 0 {
			nums[i] += nums[i - 1]
		}
		res = max(res, nums[i])
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

