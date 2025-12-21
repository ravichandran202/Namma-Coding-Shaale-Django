module.exports =  {
  "title": "Sum of Natural Numbers",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Calculate the sum of first n natural numbers using the arithmetic series formula.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a positive integer n</li>
      <li>Calculate the sum of numbers from 1 to n</li>
      <li>Print the sum</li>
    </ul>
    <pre class="constraints">Formula:
Sum = n × (n + 1) / 2

Where:
n = Number of natural numbers</pre>
    <p>This problem teaches arithmetic series calculations and efficient summation using mathematical formula.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 15</pre>
<p><b>Explination</b> <code>1 + 2 + 3 + 4 + 5 = 15</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: 55</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 100
Output: 5050</pre>
  `,

  "conditions": `
    <ul>
      <li>n will be a positive integer between 1 and 10000</li>
      <li>Use the formula: Sum = n × (n + 1) / 2</li>
      <li>The result will be an integer</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "15", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "55", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "5050", "stdinput": "100" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "3", "stdinput": "2" },
    { "id": 6, "input": [], "expected": "500500", "stdinput": "1000" },
    { "id": 7, "input": [], "expected": "1275", "stdinput": "50" },
    { "id": 8, "input": [], "expected": "20100", "stdinput": "200" },
    { "id": 9, "input": [], "expected": "45", "stdinput": "9" },
    { "id": 10, "input": [], "expected": "50005000", "stdinput": "10000" }
  ],

  "templates": {
    "python": `n = int(input())\nsum_natural = n * (n + 1) // 2\nprint(sum_natural)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int sum_natural = n * (n + 1) / 2;\n        System.out.println(sum_natural);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    const num = parseInt(n);\n    const sum_natural = num * (num + 1) / 2;\n    console.log(sum_natural);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int sum_natural = n * (n + 1) / 2;\n    std::cout << sum_natural << std::endl;\n    return 0;\n}`
  },

  "wrapCode": function(lang, userCode, input) {
    switch(lang) {
      case 'python':
        return `${userCode}`;
      case 'java':
        return userCode;
      case 'javascript':
        return `${userCode}`;
      case 'c++':
        return userCode;
      default:
        return userCode;
    }
  }
}