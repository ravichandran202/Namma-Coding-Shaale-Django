module.exports =  {
  "title": "Any Odd Checker",
  "difficulty": "medium",
  "acceptance": "98.6%",

  "description": `
    <p>Read two numbers and check if at least one of them is odd number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Check if at least one number is odd element</li>
      <li>If at least one number is odd, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches modulus operations combined with logical OR for checking multiple conditions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
9
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
8
12
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
7
4
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "6\n9" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "8\n12" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "7\n4" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "3\n5" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "-3\n-4" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "0\n6" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 2 != 0 or b % 2 != 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 2 != 0 || b % 2 != 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] % 2 !== 0 || inputs[1] % 2 !== 0);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 2 != 0 || b % 2 != 0) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 2 != 0 or b % 2 != 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 2 != 0 || b % 2 != 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] % 2 !== 0 || inputs[1] % 2 !== 0);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 2 != 0 || b % 2 != 0) << std::endl;\n    return 0;\n}`
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