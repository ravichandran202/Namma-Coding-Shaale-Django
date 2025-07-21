module.exports = {
    title: 'Reverse a String',
    difficulty: 'easy',
    acceptance: '95.2%',
  
    description: `
      <p>Create a function that takes a string and returns a new string with the characters in reverse order.</p>
      
      <p><b>Requirements:</b></p>
      <ul>
        <li>The function should handle all types of characters: letters, numbers, symbols, and spaces</li>
        <li>The input string length can range from 0 to 1000 characters</li>
        <li>You should not use built-in reverse methods (like Array.reverse()) - implement the logic yourself</li>
      </ul>
      
      <p><b>Examples:</b></p>
      <ol>
        <li>"hello" becomes "olleh"</li>
        <li>"12345" becomes "54321"</li>
        <li>"a" remains "a" (edge case: single character)</li>
        <li>"" remains "" (edge case: empty string)</li>
      </ol>
      
      <p><b>Algorithm Approach:</b></p>
      <p>There are several ways to solve this problem:</p>
      <ol>
        <li><b>Two-pointer technique:</b> Initialize pointers at start and end, swap characters and move pointers toward center</li>
        <li><b>Iterative build:</b> Create a new string by prepending each character from the original string</li>
        <li><b>Recursive approach:</b> Take the last character and concatenate with reverse of remaining substring</li>
      </ol>
    `,
  
    signatures: `
      <pre><b>Python:</b> def reverse_string(s: str) -> str</pre>
      <pre><b>Java:</b> public static String reverseString(String s)</pre>
      <pre><b>JavaScript:</b> function reverseString(s: string): string</pre>
      <pre><b>C++:</b> std::string reverseString(std::string s)</pre>
    `,
  
    examples: `
      <h3>Example 1:</h3>
      <pre>Input: "hello"
Output: "olleh"</pre>
      
      <h3>Example 2:</h3>
      <pre>Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"</pre>
      
      <h3>Example 3 (Edge Case):</h3>
      <pre>Input: ""
Output: ""</pre>
    `,
  
    constraints: `
      <ul>
        <li>0 ≤ s.length ≤ 1000</li>
        <li>The string may contain any ASCII characters</li>
        <li>For languages with mutable strings (like C++), you may modify the input string in-place</li>
      </ul>
    `,
  
    testCases: [
      { 
        id: 1, 
        input: ["hello"], 
        expected: "olleh",
        explanation: "Simple word reversal"
      },
      { 
        id: 2, 
        input: ["123!@"], 
        expected: "@!321",
        explanation: "Numbers and symbols"
      },
      { 
        id: 3, 
        input: [""], 
        expected: "",
        explanation: "Empty string edge case"
      },
      { 
        id: 4, 
        input: ["a"], 
        expected: "a",
        explanation: "Single character edge case"
      },
      { 
        id: 5, 
        input: ["racecar"], 
        expected: "racecar",
        explanation: "Palindrome remains the same"
      }
    ],
  
    templates: {
      python: `def reverse_string(s):\n    # Implement the string reversal logic\n    # Try not to use s[::-1] or reversed(s)\n    return s`,
      java: `public static String reverseString(String s) {\n    // Convert to char array and implement two-pointer approach\n    return s;\n}`,
      javascript: `function reverseString(s) {\n    // Try implementing with a for loop or array reduce\n    return s;\n}`,
      "c++": `#include <string>\nusing namespace std;\n\nstring reverseString(string s) {\n    // Implement in-place reversal with two pointers\n    return s;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.map(str => `"${str}"`).join(', ');
      switch(lang) {
        case 'python':
          return `${code}\nprint(reverse_string(${i}))`;
        case 'java':
          return `class Main {\n    ${code}\n    public static void main(String[] args) {\n        System.out.println(reverseString(${i}));\n    }\n}`;
        case 'javascript':
          return `${code}\nconsole.log(reverseString(${i}));`;
        case 'c++':
          return `#include <iostream>\n${code}\n\nint main() {\n    std::cout << reverseString(${i}) << std::endl;\n    return 0;\n}`;
        default:
          return code;
      }
    }
  };