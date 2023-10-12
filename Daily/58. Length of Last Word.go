func lengthOfLastWord(s string) int {
	var res int
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] != ' ' {
			res++
		} else if res > 0 {
			return res
		}
	}
	return res
}

