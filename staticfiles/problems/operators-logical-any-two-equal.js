module.exports =  {
  "title": "Any Two Equal",
  "difficulty": "medium",
  "acceptance": "98.3%",

  "description": `
    <p>Read three numbers and check if at least two of them are equal.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if any two numbers are equal to each other</li>
      <li>If at least two numbers are equal, print True</li>
      <li>If all three are different, print False</li>
    </ul>
    <p>This problem teaches multiple equality comparisons combined with logical OR operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
5
3
Output: True</pre>
    <p><b>Explanation:</b> First two numbers (5 and 5) are equal - at least two are equal.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
1
2
3
Output: False</pre>
    <p><b>Explanation:</b> All three numbers are different - no two are equal.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
7
8
7
Output: True</pre>
    <p><b>Explanation:</b> First and last numbers (7 and 7) are equal - at least two are equal.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n5\n3" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "1\n2\n3" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "7\n8\n7" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "10\n10\n10" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "4\n5\n5" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a == b or b == c or a == c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        System.out.println(a == b || b == c || a == c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            console.log(inputs[0] === inputs[1] || inputs[1] === inputs[2] || inputs[0] === inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << std::boolalpha << (a == b || b == c || a == c) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a == b or b == c or a == c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        System.out.println(a == b || b == c || a == c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            console.log(inputs[0] === inputs[1] || inputs[1] === inputs[2] || inputs[0] === inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << std::boolalpha << (a == b || b == c || a == c) << std::endl;\n    return 0;\n}`
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