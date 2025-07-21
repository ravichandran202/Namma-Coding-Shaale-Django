module.exports = {
  title: 'Check Palindrome',
  difficulty: 'easy',
  acceptance: '89.5%',

  description: `
    <p>Create a function that checks if a given string is a palindrome (reads the same backward as forward).</p>
    <p>The function should return true if the string is a palindrome, false otherwise.</p>
    <p><b>Note:</b> Case matters ("Racecar" is not considered a palindrome in this problem).</p>
  `,

  signatures: `
    <pre><b>Python:</b> def is_palindrome(s: str) -> bool</pre>
    <pre><b>Java:</b> public static boolean isPalindrome(String s)</pre>
    <pre><b>JavaScript:</b> function isPalindrome(s: string): boolean</pre>
    <pre><b>C++:</b> bool isPalindrome(string s)</pre>
  `,

  examples: `
    <h3>Example 1:</h3>
    <pre>Input: "racecar"
Output: true</pre>
    
    <h3>Example 2:</h3>
    <pre>Input: "hello"
Output: false</pre>
  `,

  constraints: `
    <ul>
      <li>1 ≤ s.length ≤ 10<sup>5</sup></li>
      <li>The string may contain any ASCII characters</li>
      <li>Comparison is case-sensitive</li>
    </ul>
  `,

  testCases: [
    { 
      id: 1, 
      input: ["racecar"], 
      expected: "true",
      explanation: "Standard palindrome case"
    },
    { 
      id: 2, 
      input: ["hello"], 
      expected: "false",
      explanation: "Non-palindrome case"
    },
    { 
      id: 3, 
      input: ["a"], 
      expected: "true",
      explanation: "Single character edge case"
    },
    { 
      id: 4, 
      input: ["abba"], 
      expected: "true",
      explanation: "Even length palindrome"
    },
    { 
      id: 5, 
      input: ["abcba"], 
      expected: "true",
      explanation: "Odd length palindrome"
    }
  ],

  templates: {
    python: `def is_palindrome(s):\n    # Write your solution here\n    pass`,
    java: `public static boolean isPalindrome(String s) {\n    // Write your solution here\n    return false;\n}`,
    javascript: `function isPalindrome(s) {\n    // Write your solution here\n    return false;\n}`,
    "c++": `bool isPalindrome(string s) {\n    // Write your solution here\n    return false;\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.map(str => `"${str}"`).join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint(is_palindrome(${i}))`;
      case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(isPalindrome(${i}));}\n}`;
      case 'javascript': return `${code}\nconsole.log(isPalindrome(${i}));`;
      case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << boolalpha << isPalindrome(${i}) << endl;\n    return 0;\n}`;
      default: return code;
    }
  }
};