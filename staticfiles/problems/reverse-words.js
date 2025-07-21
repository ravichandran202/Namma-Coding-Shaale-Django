module.exports = {
    title: 'Reverse Words in a String',
    difficulty: 'easy',
    acceptance: '87.3%',
  
    description: `
      <p>Write a function that reverses the words in a given string. A word is defined as a sequence of non-space characters.</p>
      <p>The function should reverse the order of words, not the characters in the words.</p>
      <p><b>Note:</b> You may assume that the input string contains only letters and spaces, with words separated by a single space.</p>
    `,
  
    signatures: `
      <pre><b>Python:</b> def reverse_words(s: str) -> str</pre>
      <pre><b>Java:</b> public static String reverseWords(String s)</pre>
      <pre><b>JavaScript:</b> function reverseWords(s: string): string</pre>
      <pre><b>C++:</b> string reverseWords(string s)</pre>
    `,
  
    examples: `
      <h3>Example 1:</h3>
      <pre>Input: "hello world"
  Output: "world hello"</pre>
  
      <h3>Example 2:</h3>
      <pre>Input: "this is fine"
  Output: "fine is this"</pre>
    `,
  
    constraints: `
      <ul>
        <li>1 ≤ s.length ≤ 10<sup>5</sup></li>
        <li>The string consists of letters and single spaces only</li>
        <li>Leading or trailing spaces should be trimmed before processing</li>
      </ul>
    `,
  
    testCases: [
      {
        id: 1,
        input: ["hello world"],
        expected: "world hello",
        explanation: "Two words reversed"
      },
      {
        id: 2,
        input: ["a b c"],
        expected: "c b a",
        explanation: "Three single-letter words"
      },
      {
        id: 3,
        input: ["  sky  blue  "],
        expected: "blue sky",
        explanation: "Handles leading/trailing/multiple spaces"
      },
      {
        id: 4,
        input: ["one"],
        expected: "one",
        explanation: "Single word remains unchanged"
      },
      {
        id: 5,
        input: ["code in python"],
        expected: "python in code",
        explanation: "Standard three-word case"
      }
    ],
  
    templates: {
      python: `def reverse_words(s):\n    # Write your solution here\n    pass`,
      java: `public static String reverseWords(String s) {\n    // Write your solution here\n    return ""; \n}`,
      javascript: `function reverseWords(s) {\n    // Write your solution here\n    return ""; \n}`,
      "c++": `string reverseWords(string s) {\n    // Write your solution here\n    return ""; \n}`
    },
  
    wrapCode(lang, code, input) {
      const i = input.map(str => `"${str}"`).join(', ');
      switch(lang) {
        case 'python': return `${code}\nprint(reverse_words(${i}))`;
        case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(reverseWords(${i}));}\n}`;
        case 'javascript': return `${code}\nconsole.log(reverseWords(${i}));`;
        case 'c++': return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << reverseWords(${i}) << endl;\n    return 0;\n}`;
        default: return code;
      }
    }
  };
  