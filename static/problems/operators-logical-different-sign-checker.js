module.exports =  {
  "title": "Opposite Sign Checker",
  "difficulty": "medium",
  "acceptance": "98.3%",

  "description": `
    <p>Read two numbers and check if one number is positive and the other is negative.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two numbers as input</li>
      <li>Check if one number is positive and the other is negative</li>
      <li>If they have opposite signs, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches sign comparison using logical OR to check for opposite sign numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
-3
Output: True</pre>
    <p><b>Explanation:</b> First number is positive (5 > 0), second is negative (-3 < 0) - opposite signs.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
-7
4
Output: True</pre>
    <p><b>Explanation:</b> First number is negative (-7 < 0), second is positive (4 > 0) - opposite signs.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
2
8
Output: False</pre>
    <p><b>Explanation:</b> Both numbers are positive (2 > 0 and 8 > 0) - same signs.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid numbers</li>
      <li>Zero is considered neither positive nor negative</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n-3" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "-7\n4" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "2\n8" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "-5\n-10" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "0\n5" },
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nprint((a > 0 and b < 0) or (a < 0 and b > 0))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        System.out.println((a > 0 && b < 0) || (a < 0 && b > 0));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        console.log((inputs[0] > 0 && inputs[1] < 0) || (inputs[0] < 0 && inputs[1] > 0));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << ((a > 0 && b < 0) || (a < 0 && b > 0)) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = float(input())\nb = float(input())\nprint((a > 0 and b < 0) or (a < 0 and b > 0))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        System.out.println((a > 0 && b < 0) || (a < 0 && b > 0));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        console.log((inputs[0] > 0 && inputs[1] < 0) || (inputs[0] < 0 && inputs[1] > 0));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << ((a > 0 && b < 0) || (a < 0 && b > 0)) << std::endl;\n    return 0;\n}`
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