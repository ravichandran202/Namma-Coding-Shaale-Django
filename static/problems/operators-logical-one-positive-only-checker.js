module.exports =  {
  "title": "One Positive Only Checker",
  "difficulty": "medium",
  "acceptance": "98.2%",

  "description": `
    <p>Read two numbers and print True if exactly one of them is positive.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two numbers as input</li>
      <li>Check if exactly one number is positive (greater than 0)</li>
      <li>If exactly one is positive, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches exclusive OR logic using combinations of AND and OR operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
-3
Output: True</pre>
    <p><b>Explanation:</b> First number is positive (5 > 0), second is negative (-3 ≤ 0) - exactly one positive.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
7
Output: False</pre>
    <p><b>Explanation:</b> Both numbers are positive (5 > 0 and 7 > 0) - more than one positive.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
-2
-4
Output: False</pre>
    <p><b>Explanation:</b> Both numbers are negative (-2 ≤ 0 and -4 ≤ 0) - no positive numbers.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid numbers</li>
      <li>Numbers can be integers or floats</li>
      <li>Positive means greater than 0</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n-3" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n7" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "-2\n-4" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "-5\n3" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "0\n5" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "10\n-10" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "0\n0" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "1.5\n-2.5" },
    { "id": 9, "input": [], "expected": "False", "stdinput": "8\n9" },
    { "id": 10, "input": [], "expected": "True", "stdinput": "-7\n0.5" }
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nprint((a > 0 and b <= 0) or (a <= 0 and b > 0))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        System.out.println((a > 0 && b <= 0) || (a <= 0 && b > 0));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        console.log((inputs[0] > 0 && inputs[1] <= 0) || (inputs[0] <= 0 && inputs[1] > 0));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << ((a > 0 && b <= 0) || (a <= 0 && b > 0)) << std::endl;\n    return 0;\n}`
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