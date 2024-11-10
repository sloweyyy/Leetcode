class Solution {
public:
    string sortVowels(string inputString) {
        int sizeOfString = inputString.size();
        vector<char> vowels;
        vector<int> vowelPositions;
        for(int i = 0; i < sizeOfString; i++) {
            if(inputString[i] == 'a' || inputString[i] == 'e' || inputString[i] == 'i' || inputString[i] =='o' || inputString[i] == 'u' || inputString[i] == 'A' || inputString[i] == 'E' || inputString[i] == 'O' || inputString[i] == 'I' || inputString[i] == 'U') {for vowel
                vowels.push_back(inputString[i]);
                vowelPositions.push_back(i); 
            }
        }
        sort(vowels.begin(), vowels.end());
        string resultString = inputString;
        for(int i = 0; i < vowelPositions.size(); i++) {
            resultString[vowelPositions[i]] = vowels[i];
        }
        return resultString;
    }
};