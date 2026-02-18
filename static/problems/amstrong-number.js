module.exports = {
  title: 'Armstrong Number',
  difficulty: 'hard',
  acceptance: '87.3%',

  description: `
  <p>Implement a function to determine if a number is an <strong>Armstrong number</strong> (also known as narcissistic number).</p>
  
  <p><b>Definition:</b></p>
  <p>An Armstrong number is a number that equals the sum of its own digits each raised to the power of the number of digits.</p>
  
  <p><b>Mathematical Formulation:</b></p>
  <p>For an n-digit number num with digits d₁d₂...dₙ:</p>
  <p>num = d₁<sup>n</sup> + d₂<sup>n</sup> + ... + dₙ<sup>n</sup></p>
  
  <p><b>Key Properties:</b></p>
  <ul>
    <li>All single-digit numbers (0-9) are Armstrong numbers</li>
    <li>There are no 2-digit Armstrong numbers</li>
    <li>The sequence continues with 153, 370, 371, 407, etc.</li>
  </ul>
`,

  signatures: `
    <pre><b>Python:</b> def is_armstrong_number(num):</pre>
    <pre><b>Java:</b> public static boolean isArmstrongNumber(int num)</pre>
    <pre><b>JavaScript:</b> function isArmstrongNumber(num)</pre>
    <pre><b>C++:</b> bool isArmstrongNumber(int num)</pre>
  `,

  examples: `
    <h3>Example 1</h3>
    <pre>Input: num = 153
Output: true
Explanation: 1^3 + 5^3 + 3^3 = 153</pre>

    <h3>Example 2</h3>
    <pre>Input: num = 123
Output: false
Explanation: 1^3 + 2^3 + 3^3 = 36 ≠ 123</pre>
  `,

  constraints: `
    <ul>
      <li>0 ≤ num ≤ 10<sup>9</sup></li>
    </ul>
  `,

  followUp: 'Can you solve this without converting the number to a string?',

  testCases: [
    { id: 1, input: [0], expected: true },
    { id: 2, input: [1], expected: true },
    { id: 3, input: [153], expected: true },
    { id: 4, input: [370], expected: true },
    { id: 5, input: [371], expected: true },
    { id: 6, input: [407], expected: true },
    { id: 7, input: [9474], expected: true },
    { id: 8, input: [123], expected: false },
    { id: 9, input: [9475], expected: false },
    { id: 10, input: [8208], expected: true }
  ],

  templates: {
    python: `def is_armstrong_number(num):\n    # Your code here\n    pass`,
    java: `public class Main {\n  public static boolean isArmstrongNumber(int num) {\n    // Your code here\n    return false;\n  }\n\n  public static void main(String[] args) {\n    // Test cases will be added here\n  }\n}`,
    javascript: `function isArmstrongNumber(num) {\n  // Your code here\n  return false;\n}`,
    "c++": `#include <iostream>\n#include <cmath>\n\nbool isArmstrongNumber(int num) {\n  // Your code here\n  return false;\n}\n\nint main() {\n  // Test cases will be added here\n  return 0;\n}`
  },


  "solutions": {
    python: `def is_armstrong_number(num):\n    # Your code here\n    pass`,
    java: `public class Main {\n  public static boolean isArmstrongNumber(int num) {\n    // Your code here\n    return false;\n  }\n\n  public static void main(String[] args) {\n    // Test cases will be added here\n  }\n}`,
    javascript: `function isArmstrongNumber(num) {\n  // Your code here\n  return false;\n}`,
    "c++": `#include <iostream>\n#include <cmath>\n\nbool isArmstrongNumber(int num) {\n  // Your code here\n  return false;\n}\n\nint main() {\n  // Test cases will be added here\n  return 0;\n}`
  },

  wrapCode: function(lang, userCode, input) {
    switch(lang) {
      case 'python':
        return `${userCode}\nprint(is_armstrong_number(${input[0]}))`;
      case 'java':
        return userCode.replace('// Test cases will be added here',
          `System.out.println(isArmstrongNumber(${input[0]}));`);
      case 'javascript':
        return `${userCode}\nconsole.log(isArmstrongNumber(${input[0]}));`;
      case 'c++':
        return userCode.replace('// Test cases will be added here',
          `std::cout << std::boolalpha << isArmstrongNumber(${input[0]}) << std::endl;`);
      default:
        return userCode;
    }
  }
};