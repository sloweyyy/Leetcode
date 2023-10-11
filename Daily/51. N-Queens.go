func solveNQueens(n int) [][]string {
	var res [][]string
	var board [][]byte
	for i := 0; i < n; i++ {
		var row []byte
		for j := 0; j < n; j++ {
			row = append(row, '.')
		}
		board = append(board, row)
	}
	backtrack(&res, board, 0)
	return res
}

func backtrack(res *[][]string, board [][]byte, row int) {
	if row == len(board) {
		var temp []string
		for _, v := range board {
			temp = append(temp, string(v))
		}
		*res = append(*res, temp)
		return
	}
	for col := 0; col < len(board); col++ {
		if !isValid(board, row, col) {
			continue
		}
		board[row][col] = 'Q'
		backtrack(res, board, row + 1)
		board[row][col] = '.'
	}
}

func isValid(board [][]byte, row, col int) bool {
	for i := 0; i < row; i++ {
		if board[i][col] == 'Q' {
			return false
		}
	}
	for i, j := row - 1, col - 1; i >= 0 && j >= 0; i, j = i - 1, j - 1 {
		if board[i][j] == 'Q' {
			return false
		}
	}
	for i, j := row - 1, col + 1; i >= 0 && j < len(board); i, j = i - 1, j + 1 {
		if board[i][j] == 'Q' {
			return false
		}
	}
	return true
}

