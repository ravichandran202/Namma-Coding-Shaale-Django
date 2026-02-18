module.exports = {
  "title": "Subtract Three Numbers",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Read three numbers and subtract the second and third from the first.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three integer inputs</li>
      <li>Calculate the result of first number minus second number minus third number</li>
      <li>Print the result</li>
    </ul>
    <p>This problem teaches multiple subtraction operations and the order of operations in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
20
5
3
Output: 12</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15
4
2
Output: 9</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
10
3
7
Output: 0</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Result will be within the range of standard integer operations</li>
      <li>Operation is first number minus second number minus third number</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "12", "stdinput": "20\n5\n3" },
    { "id": 2, "input": [], "expected": "9", "stdinput": "15\n4\n2" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "10\n3\n7" },
    { "id": 4, "input": [], "expected": "5", "stdinput": "10\n3\n2" },
    { "id": 5, "input": [], "expected": "-10", "stdinput": "5\n10\n5" },
    { "id": 6, "input": [], "expected": "2147483647", "stdinput": "2147483647\n0\n0" },
    { "id": 7, "input": [], "expected": "-2147483648", "stdinput": "0\n1073741824\n1073741824" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "-100\n-50\n-50" },
    { "id": 9, "input": [], "expected": "1000000", "stdinput": "1500000\n300000\n200000" },
    { "id": 10, "input": [], "expected": "-999999", "stdinput": "1\n500000\n500000" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a - b - c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        System.out.println(a - b - c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        readline.question('', (third) => {\n            inputs.push(parseInt(third));\n            console.log(inputs[0] - inputs[1] - inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << a - b - c << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a - b - c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        System.out.println(a - b - c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        readline.question('', (third) => {\n            inputs.push(parseInt(third));\n            console.log(inputs[0] - inputs[1] - inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << a - b - c << std::endl;\n    return 0;\n}`
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