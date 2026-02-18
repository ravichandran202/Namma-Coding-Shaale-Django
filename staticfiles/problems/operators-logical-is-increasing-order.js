module.exports =  {
  "title": "Ascending Order Checker",
  "difficulty": "medium",
  "acceptance": "98.5%",

  "description": `
    <p>Read three numbers and print True if they are in increasing order.</p>
    <p> Example : <code>1, 2, 2, 3, 4, 10, 10, 15, 100</code></p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if the numbers are in increasing order</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches chained comparisons and logical AND operations for sequence validation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3
5
9
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
3
9
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
7
7
8
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Numbers can be integers </li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "3\n5\n9" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n3\n9" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "7\n7\n8" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "1\n1\n1" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "10\n20\n15" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "-5\n0\n5" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a <= b and b <= c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a < b && b < c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] < inputs[1] && inputs[1] < inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a < b && b < c) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a <= b and b <= c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a < b && b < c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] < inputs[1] && inputs[1] < inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a < b && b < c) << std::endl;\n    return 0;\n}`
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