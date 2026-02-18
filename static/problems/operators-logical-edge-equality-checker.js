module.exports =  {
  "title": "Edge Equality Checker",
  "difficulty": "medium",
  "acceptance": "98.3%",

  "description": `
    <p>Read three numbers and check if the first and last numbers are equal, but the middle one is different.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if the first and last numbers are equal</li>
      <li>Check if the middle number is different from the first/last number</li>
      <li>If both conditions are true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches combination of equality and inequality comparisons with logical AND operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
3
5
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
5
5
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
2
4
6
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
      <li>Use logical AND to combine both conditions</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n3\n5" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n5\n5" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "2\n4\n6" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "10\n20\n10" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "7\n7\n8" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a == c and a != b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a == c && a != b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] === inputs[2] && inputs[0] !== inputs[1]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a == c && a != b) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a == c and a != b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a == c && a != b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] === inputs[2] && inputs[0] !== inputs[1]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a == c && a != b) << std::endl;\n    return 0;\n}`
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