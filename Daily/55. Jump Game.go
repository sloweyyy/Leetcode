func canJump(nums []int) bool {
	var maxPos int
	for i := 0; i < len(nums); i++ {
		if i > maxPos {
			return false
		}
		maxPos = max(maxPos, i + nums[i])
	}
	return true
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
	