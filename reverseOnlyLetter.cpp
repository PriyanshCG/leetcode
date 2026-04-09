class Solution {
public:
    bool isLetter(char ch) {
        return isalpha(ch);
    }
    string reverseOnlyLetters(string s) {
        int left = 0;
        int right = s.length()-1;
        while(left < right){
            while(left < right && !isLetter(s[left])){
                left++;
            }
            while(left < right && !isLetter(s[right])){
                right--;
            }
            swap(s[left], s[right]);
            left++;
            right--;
        } 
        return s;
    }
};