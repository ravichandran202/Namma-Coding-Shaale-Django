module.exports =  {
  "title": "Between Numbers Checker",
  "difficulty": "medium",
  "acceptance": "98.2%",

  "description": `
    <p>Read three numbers and check if the first number lies between the second and third numbers (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if the first number is between the second and third numbers</li>
      <li>If first number is between the other two, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches range checking with inclusive boundaries in both ascending and descending order.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
3
8
Output: True</pre>
    <p><b>Explanation:</b> First number (5) is between 3 and 8 (3 ≤ 5 ≤ 8).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
10
2
Output: True</pre>
    <p><b>Explanation:</b> First number (4) is between 2 and 10 (2 ≤ 4 ≤ 10).</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
1
5
10
Output: False</pre>
    <p><b>Explanation:</b> First number (1) is less than both 5 and 10 - not between them.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Range is inclusive (first number can equal second or third)</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n3\n8" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "4\n10\n2" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "1\n5\n10" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "7\n7\n10" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "10\n5\n10" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "15\n5\n10" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "0\n-5\n5" },
    { "id": 8, "input": [], "expected": "False", "stdinput": "20\n10\n15" },
    { "id": 9, "input": [], "expected": "True", "stdinput": "5\n5\n5" }
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nc = float(input())\nprint((a >= b and a <= c) or (a >= c and a <= b))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        System.out.println((a >= b && a <= c) || (a >= c && a <= b));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            console.log((inputs[0] >= inputs[1] && inputs[0] <= inputs[2]) || (inputs[0] >= inputs[2] && inputs[0] <= inputs[1]));\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << std::boolalpha << ((a >= b && a <= c) || (a >= c && a <= b)) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = float(input())\nb = float(input())\nc = float(input())\nprint((a >= b and a <= c) or (a >= c and a <= b))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        System.out.println((a >= b && a <= c) || (a >= c && a <= b));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            console.log((inputs[0] >= inputs[1] && inputs[0] <= inputs[2]) || (inputs[0] >= inputs[2] && inputs[0] <= inputs[1]));\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << std::boolalpha << ((a >= b && a <= c) || (a >= c && a <= b)) << std::endl;\n    return 0;\n}`
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