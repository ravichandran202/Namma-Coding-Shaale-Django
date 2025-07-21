module.exports = {
  title: 'Check Even or Odd',
  difficulty: 'easy',
  acceptance: '96.8%',

  description: `
    <p>Create a function that checks if a number is even or odd.</p>
    <p>Return "Even" if the number is even, "Odd" if it's odd.</p>
  `,

  signatures: `
    <pre><b>Python:</b> def check_even_odd(num)</pre>
    <pre><b>Java:</b> public static String checkEvenOdd(int num)</pre>
    <pre><b>JavaScript:</b> function checkEvenOdd(num)</pre>
    <pre><b>C++:</b> string checkEvenOdd(int num)</pre>
  `,

  examples: `
    <h3>Example 1:</h3>
    <pre>Input: 4\nOutput: "Even"</pre>
    <h3>Example 2:</h3>
    <pre>Input: 7\nOutput: "Odd"</pre>
  `,

  constraints: `
    <ul><li>-10^9 ≤ num ≤ 10^9</li></ul>
  `,

  testCases: [
    { id: 1, input: [4], expected: "Even" },
    { id: 2, input: [7], expected: "Odd" },
    { id: 3, input: [0], expected: "Even" },
    { id: 4, input: [-3], expected: "Odd" },
    { id: 5, input: [-2], expected: "Even" }
  ],

  templates: {
    python: `def check_even_odd(num):\n    # write your code here\n    pass`,
    java: `public static String checkEvenOdd(int num) {\n    // write your code here\n    return "";\n}`,
    javascript: `function checkEvenOdd(num) {\n    // write your code here\n    return "";\n}`,
    "c++": `#include <string>\nusing namespace std;\nstring checkEvenOdd(int num) {\n    // write your code here\n    return "";\n}`
  },

  wrapCode(lang, code, input) {
    const i = input.join(', ');
    switch(lang) {
      case 'python': return `${code}\nprint(check_even_odd(${i}))`;
      case 'java': return `class Main { ${code}\npublic static void main(String[] args) {\n    System.out.println(checkEvenOdd(${i}));}\n}`;
      case 'javascript': return `${code}\nconsole.log(checkEvenOdd(${i}));`;
      case 'c++': return `#include <iostream>\n${code}\nint main() {\n    cout << checkEvenOdd(${i}) << endl;\n    return 0;\n}`;
      default: return code;
    }
  }
};