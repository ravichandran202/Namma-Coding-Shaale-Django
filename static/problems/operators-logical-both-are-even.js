module.exports =  {
  "title": "Both Even Checker",
  "difficulty": "medium",
  "acceptance": "98.6%",

  "description": `
    <p>Read two numbers and check if both are even numbers.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Check if both numbers are divisible by 2 (even)</li>
      <li>If both numbers are even, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches modulus operations combined with logical AND for checking multiple conditions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
8
12
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
8
7
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "8\n12" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "8\n7" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "0\n4" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "3\n4" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "10\n20" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 2 == 0 and b % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 2 == 0 && b % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] % 2 === 0 && inputs[1] % 2 === 0);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 2 == 0 && b % 2 == 0) << std::endl;\n    return 0;\n}`
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