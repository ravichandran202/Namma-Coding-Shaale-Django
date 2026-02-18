module.exports =  {
  "title": "First is Greatest",
  "difficulty": "medium",
  "acceptance": "98.7%",

  "description": `
    <p>Read three numbers and print True if the first number is greater than both the second and the third.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if the first number is greater than the second number</li>
      <li>Check if the first number is greater than the third number</li>
      <li>If both conditions are true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches multiple comparisons combined with logical AND operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
9
4
2
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
10
3
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
      <li>Numbers can be integers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "9\n4\n2" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n10\n3" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "7\n7\n5" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "15\n10\n8" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "5\n5\n5" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "100\n50\n25" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a > b and a > c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a > b && a > c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] > inputs[1] && inputs[0] > inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a > b && a > c) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a > b and a > c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        \n        System.out.println(a > b && a > c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] > inputs[1] && inputs[0] > inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    \n    std::cout << std::boolalpha << (a > b && a > c) << std::endl;\n    return 0;\n}`
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