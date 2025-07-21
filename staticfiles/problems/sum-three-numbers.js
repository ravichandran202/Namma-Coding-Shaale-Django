module.exports = {
    title: 'Sum of Three Numbers',
    difficulty: 'easy',
    acceptance: '85.2%',
    
    description: `
    <p>Implement a function that calculates the sum of three integers.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>The function should be named <code>sum_three_numbers</code> (Python) or <code>sumThreeNumbers</code> (Java/JavaScript/C++)</li>
      <li>It should accept three integer parameters</li>
      <li>It should return the sum of these parameters</li>
    </ul>
    <p>This problem extends the basic sum operation to three parameters, testing your understanding of function implementation with multiple arguments.</p>
  `,
    
    signatures: `
      <pre><b>Python:</b> def sum_three_numbers(a, b, c):</pre>
      <pre><b>Java:</b> public static int sumThreeNumbers(int a, int b, int c)</pre>
      <pre><b>JavaScript:</b> function sumThreeNumbers(a, b, c)</pre>
      <pre><b>C++:</b> int sumThreeNumbers(int a, int b, int c)</pre>
    `,
    
    examples: `
      <h3>Example 1</h3>
      <pre>Input: a = 1, b = 2, c = 3
  Output: 6</pre>
      
      <h3>Example 2</h3>
      <pre>Input: a = -1, b = 5, c = -2
  Output: 2</pre>
    `,
    
    constraints: `
      <ul>
        <li>-2<sup>31</sup> ≤ a, b, c ≤ 2<sup>31</sup> - 1</li>
        <li>The sum will not exceed 32-bit integer range</li>
      </ul>
    `,
    
    followUp: 'Can you implement this using only one + operator?',
    
    testCases: [
      { id: 1, input: [1, 2, 3], expected: 6 },
      { id: 2, input: [-1, 5, -2], expected: 2 },
      { id: 3, input: [100, 200, 300], expected: 600 },
      { id: 4, input: [-10, -20, -30], expected: -60 },
      { id: 5, input: [0, 0, 0], expected: 0 },
      { id: 6, input: [-1000, 999, 1], expected: 0 },
      { id: 7, input: [99999, 1, 0], expected: 100000 },
      { id: 8, input: [2147483647, 0, -1], expected: 2147483646 },
      { id: 9, input: [-2147483648, 0, 1], expected: -2147483647 },
      { id: 10, input: [12345, 54321, 11111], expected: 77777 }
    ],
    
    templates: {
      python: `def sum_three_numbers(a, b, c):\n   # write your code here\n   pass`,
      java: `public class Main {\n  public static int sumThreeNumbers(int a, int b, int c) {\n    return a + b + c;\n  }\n  \n  public static void main(String[] args) {\n    // Test cases will be added here\n  }\n}`,
      javascript: `function sumThreeNumbers(a, b, c) {\n  return a + b + c;\n}`,
      "c++": `#include <iostream>\n\nint sumThreeNumbers(int a, int b, int c) {\n  return a + b + c;\n}\n\nint main() {\n  // Test cases will be added here\n  return 0;\n}`
    },
    
    wrapCode: function(lang, userCode, input) {
      switch(lang) {
        case 'python': return `${userCode}\nprint(sum_three_numbers(${input[0]}, ${input[1]}, ${input[2]}))`;
        case 'java':
          return userCode.replace('// Test cases will be added here', 
            `System.out.println(sumThreeNumbers(${input[0]}, ${input[1]}, ${input[2]}));`);
        case 'javascript':
          return `${userCode}\nconsole.log(sumThreeNumbers(${input[0]}, ${input[1]}, ${input[2]}));`;
        case 'c++':
          return userCode.replace('// Test cases will be added here', 
            `std::cout << sumThreeNumbers(${input[0]}, ${input[1]}, ${input[2]}) << std::endl;`);
        default: return userCode;
      }
    }
  };