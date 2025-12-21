module.exports =  {
  "title": "Same Sign Checker",
  "difficulty": "medium",
  "acceptance": "98.4%",

  "description": `
    <p>Read two numbers and check if both are positive or both are negative.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two numbers as input</li>
      <li>Check if both numbers are positive (greater than 0)</li>
      <li>Check if both numbers are negative (less than 0)</li>
      <li>If either condition is true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches sign comparison using logical OR to check for same sign numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
7
Output: True</pre>
    <p><b>Explanation:</b> Both numbers (4 and 7) are positive - same sign.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
-5
-3
Output: True</pre>
    <p><b>Explanation:</b> Both numbers (-5 and -3) are negative - same sign.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
2
-8
Output: False</pre>
    <p><b>Explanation:</b> One number is positive (2) and one is negative (-8) - different signs.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid numbers</li>
      <li>Zero is considered neither positive nor negative</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "4\n7" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "-5\n-3" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "2\n-8" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "0\n5" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "-10\n0" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "0\n0" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "10\n-10" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "100\n200" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint((a > 0 and b > 0) or (a < 0 and b < 0))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        System.out.println((a > 0 && b > 0) || (a < 0 && b < 0));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        console.log((inputs[0] > 0 && inputs[1] > 0) || (inputs[0] < 0 && inputs[1] < 0));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << ((a > 0 && b > 0) || (a < 0 && b < 0)) << std::endl;\n    return 0;\n}`
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