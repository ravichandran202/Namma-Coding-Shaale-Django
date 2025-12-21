module.exports =  {
  "title": "Not Equal Numbers Checker",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Write a program that reads two numbers and prints True if they are not equal, otherwise False.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Check if both numbers are not equal using comparison operator</li>
      <li>If not equal, print True</li>
      <li>If equal, print False</li>
    </ul>
    <p>This problem teaches the 'not equal' comparison operation and boolean logic in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
5
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
5
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
-3
3
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (boolean)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "10\n5" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n5" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "-3\n3" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "0\n0" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "1\n0" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "100\n200" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "-10\n-10" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "42\n43" },
    { "id": 9, "input": [], "expected": "False", "stdinput": "999\n999" },
    { "id": 10, "input": [], "expected": "True", "stdinput": "7\n-7" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a != b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a != b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] !== inputs[1]);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a != b) << std::endl;\n    return 0;\n}`
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