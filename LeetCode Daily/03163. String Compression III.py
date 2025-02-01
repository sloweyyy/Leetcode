class Solution:
  def compressedString(self, word: str) -> str:
    compressed = ""
    count, length = 1, len(word)
    current_char = word[0]
    for i in range(1, length):
      if word[i] == current_char and count < 9:
        count += 1
      else:
        compressed += str(count) + current_char
        current_char = word[i]
        count = 1
    compressed += str(count) + current_char
    return compressed