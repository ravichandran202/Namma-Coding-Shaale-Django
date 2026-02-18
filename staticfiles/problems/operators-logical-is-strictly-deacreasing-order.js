module.exports =  {
  "title": "Descending Order Checker",
  "difficulty": "medium",
  "acceptance": "98.5%",

  "description": `
    <p>Read three numbers and print True if they are in strictly decreasing order.</p>
    <p>Example</p>
    <p>✅ <code>100, 50, 20, 10, 4, 3, 2, 1</code></p>
    <p>❌ <code>100, 100, 20, 10, 4, 3, 3, 1</code></p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if the numbers are in strictly decreasing order</li>
      <li>If strictly decreasing, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches chained comparisons and logical AND operations for descending sequence validation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
9
5
2
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
9
2
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
7
7
5
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "9\n5\n2" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n9\n2" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "7\n7\n5" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "3\n2\n1" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "5\n0\n-5" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "5\n5\n5" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "2\n3\n4" },
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nc = float(input())\nprint(a > b and b > c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a > b && b > c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] > inputs[1] && inputs[1] > inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a > b && b > c) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = float(input())\nb = float(input())\nc = float(input())\nprint(a > b and b > c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a > b && b > c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] > inputs[1] && inputs[1] > inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a > b && b > c) << std::endl;\n    return 0;\n}`
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