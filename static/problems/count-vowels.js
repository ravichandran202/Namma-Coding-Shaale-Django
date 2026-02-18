module.exports = {
    title: 'Count Vowels in String',
    difficulty: 'easy',
    acceptance: '91.3%',
  
    description: `
      <p>Create a function that counts the number of vowels (a, e, i, o, u) in a given string.</p>
      <p>The function should return the total count of vowels in the string.</p>
      <p><b>Note:</b> The solution should be case-insensitive.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def count_vowels(s: str) -> int</pre>
      <pre><b>Java:</b> public static int countVowels(String s)</pre>
      <pre><b>JavaScript:</b> function countVowels(s: string): number</pre>
      <pre><b>C++:</b> int countVowels(string s)</pre>
    `,
  
    examples: `
      <h3>Example 1:</h3>
      <pre>Input: "hello"
  Output: 2</pre>
      
      <h3>Example 2:</h3>
      <pre>Input: "AEIOU"
  Output: 5</pre>
    `,
  
    constraints: `
      <ul>
        <li>0 ≤ s.length ≤ 10<sup>5</sup></li>
        <li>The string may contain any ASCII characters</li>
      </ul>
    `,
  
    testCases: [
      { 
        id: 1, 
        input: ["hello"], 
        expected: "2",
        explanation: "Lowercase vowels"
      },
      { 
        id: 2, 
        input: ["AEIOU"], 
        expected: "5",
        explanation: "Uppercase vowels"
      },
      { 
        id: 3, 
        input: ["xyz"], 
        expected: "0",
        explanation: "No vowels case"
      },
      { 
        id: 4, 
        input: ["Hello World!"], 
        expected: "3",
        explanation: "Mixed case with punctuation"
      },
      { 
        id: 5, 
        input: [""], 
        expected: "0",
        explanation: "Empty string edge case"
      }
    ],
  
    templates: {
      python: `def count_vowels(s):\n    # Write your solution here\n    pass`,
      java: `public static int countVowels(String s) {\n    // Write your solution here\n    return 0;\n}`,
      javascript: `function countVowels(s) {\n    // Write your solution here\n    return 0;\n}`,
      "c++": `int countVowels(string s) {\n    // Write your solution here\n    return 0;\n}`
    },

  
    "solutions": {
      python: `def count_vowels(s):\n    # Write your solution here\n    pass`,
      java: `public static int countVowels(String s) {\n    // Write your solution here\n    return 0;\n}`,
      javascript: `function countVowels(s) {\n    // Write your solution here\n    return 0;\n}`,
      "c++": `int countVowels(string s) {\n    // Write your solution here\n    return 0;\n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.map(str => `"${str}"`).join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(count_vowels(${i}))`;
        case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(countVowels(${i}));}\n}`;
        case 'javascript': return `${code}\nconsole.log(countVowels(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << countVowels(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };