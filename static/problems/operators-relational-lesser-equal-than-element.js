module.exports =  {
  "title": "Less or Equal Checker",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Write a program that reads two numbers and checks if the first number is less than or equal to the second.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Check if first number is less than or equal to second using comparison operator</li>
      <li>If less or equal, print True</li>
      <li>If not, print False</li>
    </ul>
    <p>This problem teaches the 'less than or equal to' comparison operation and boolean logic in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
9
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15
10
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (boolean)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "4\n9" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "15\n10" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "5\n5" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "-10\n-5" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "0\n1" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a <= b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a <= b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] <= inputs[1]);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a <= b) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nprint(a <= b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a <= b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] <= inputs[1]);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a <= b) << std::endl;\n    return 0;\n}`
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