var isPalindrome = function(s) {
    s = s.toLowerCase();
    let cleaned = "";
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] >= 'a' && s[i] <= 'z') || 
            (s[i] >= '0' && s[i] <= '9')
        ) {
            cleaned += s[i];
        }
    }
    let reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
        return true;
    } else {
        return false;
    }
};