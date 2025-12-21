module.exports =  {
  "title": "Is All Different",
  "difficulty": "medium",
  "acceptance": "98.3%",

  "description": `
    <p>Read three numbers and check if all given numbers are different from each other.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if all three numbers are different from each other</li>
      <li>If all numbers are different, print True</li>
      <li>If any two numbers are equal, print False</li>
    </ul>
    <p>This problem teaches multiple inequality comparisons combined with logical AND operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2
4
7
Output: True</pre>
    <p><b>Explanation:</b> All three numbers (2, 4, 7) are different from each other.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
5
3
Output: False</pre>
    <p><b>Explanation:</b> First two numbers (5 and 5) are equal - not all different.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
1
2
1
Output: False</pre>
    <p><b>Explanation:</b> First and last numbers (1 and 1) are equal - not all different.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
      <li>Use logical AND to combine multiple inequality checks</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "2\n4\n7" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n5\n3" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "1\n2\n1" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "10\n20\n30" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "8\n8\n8" },
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nc = float(input())\nprint(a != b and b != c and a != c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        double c = scanner.nextDouble();\n        System.out.println(a != b && b != c && a != c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            console.log(inputs[0] !== inputs[1] && inputs[1] !== inputs[2] && inputs[0] !== inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << std::boolalpha << (a != b && b != c && a != c) << std::endl;\n    return 0;\n}`
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