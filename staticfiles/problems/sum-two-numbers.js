module.exports = {
  title: 'Sum of Two Numbers',
  difficulty: 'easy',
  acceptance: '89.5%',
  
  description: `
    <p>Implement a function that takes two integers as input and returns their sum.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>The function should be named <code>sum_two_numbers</code> (Python) or <code>sumTwoNumbers</code> (Java/JavaScript/C++)</li>
      <li>It should accept two integer parameters</li>
      <li>It should return the sum of these parameters</li>
    </ul>
    <p>This problem tests basic function implementation and arithmetic operations. While the solution is straightforward, pay attention to edge cases like negative numbers and zero.</p>
  `,

  signatures: `
    <pre><b>Python:</b> def sum_two_numbers(a, b):</pre>
    <pre><b>Java:</b> public static int sumTwoNumbers(int a, int b)</pre>
    <pre><b>JavaScript:</b> function sumTwoNumbers(a, b)</pre>
    <pre><b>C++:</b> int sumTwoNumbers(int a, int b)</pre>
  `,

  examples: `
    <h3>Example 1: Basic Case</h3>
    <pre>Input: a = 1, b = 2
Output: 3
Explanation: 1 + 2 = 3</pre>
    
    <h3>Example 2: Negative Numbers</h3>
    <pre>Input: a = -1, b = 5
Output: 4
Explanation: -1 + 5 = 4</pre>
  `,

  constraints: `
    <ul>
      <li>-2<sup>31</sup> ≤ a, b ≤ 2<sup>31</sup> - 1</li>
      <li>The sum will not exceed 32-bit integer range</li>
      <li>For languages with fixed-size integers (like Java), you don't need to handle overflow</li>
    </ul>
  `,

  followUp: 'Can you implement this without using the + operator? (Hint: Look into bit manipulation)',

  testCases: [
    { id: 1, input: [1, 2], expected: "3" },
    { id: 2, input: [-1, 5], expected: "4" },
    { id: 3, input: [0, 0], expected: "0" },
    { id: 4, input: [100, -50], expected: "50" },
    { id: 5, input: [2147483647, 1], expected: "2147483648" }
  ],

  templates: {
    python: `def sum_two_numbers(a, b):\n    # Write your code here\n`,
    java: `public class Main {\n    public static int sumTwoNumbers(int a, int b) {\n        // Write your code here\n        return a + b;\n    }\n}`,
    javascript: `function sumTwoNumbers(a, b) {\n    // Write your code here\n    return a + b;\n}`,
    "c++": `int sumTwoNumbers(int a, int b) {\n    // Write your code here\n    return a + b;\n}`
  },

  wrapCode: function(lang, code, input) {
    switch(lang) {
      case 'python':
        return `${code}\nprint(sum_two_numbers(${input.join(', ')}))`;
      case 'java':
        return `${code}\npublic static void main(String[] args) {\n    System.out.println(sumTwoNumbers(${input.join(', ')}));\n}`;
      case 'javascript':
        return `${code}\nconsole.log(sumTwoNumbers(${input.join(', ')}));`;
      case 'c++':
        return `#include <iostream>\nusing namespace std;\n${code}\nint main() {\n    cout << sumTwoNumbers(${input.join(', ')}) << endl;\n    return 0;\n}`;
      default:
        return code;
    }
  }
};