
function findLongestPalindromes(s, topN = 3) {
        // Helper function to expand around the center and find palindromes
        function expandAroundCenter(left, right) {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            return {
                text: s.slice(left + 1, right),
                index: left + 1,
                length: right - left - 1
            };
        }
    
        // Dictionary to store unique palindromes
        const uniquePalindromes = new Map();
    
        // Loop through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Odd-length palindromes
            const oddPalindrome = expandAroundCenter(i, i);
            if (!uniquePalindromes.has(oddPalindrome.text)) {
                uniquePalindromes.set(oddPalindrome.text, oddPalindrome);
            }
    
            // Even-length palindromes
            const evenPalindrome = expandAroundCenter(i, i + 1);
            if (!uniquePalindromes.has(evenPalindrome.text)) {
                uniquePalindromes.set(evenPalindrome.text, evenPalindrome);
            }
        }
    
        // Sort palindromes by length in descending order and get the top N results
        const sortedPalindromes = Array.from(uniquePalindromes.values())
            .sort((a, b) => b.length - a.length)
            .slice(0, topN);
    
        // Format the result
        return sortedPalindromes.map(palindrome => ({
            Text: palindrome.text,
            Index: palindrome.index,
            Length: palindrome.length
        }));
    }
    
    // Test case
    const inputString = "sqrrgabccbatudefggfedvwhijkllkjihxymnnmzpop";
    const result = findLongestPalindromes(inputString);
    
    // Display the result
    result.forEach(item => {
        console.log(`Text: ${item.Text}, Index: ${item.Index}, Length: ${item.Length}`);
    });
    

