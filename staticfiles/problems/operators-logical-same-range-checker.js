module.exports =  {
  "title": "Same Range Checker",
  "difficulty": "medium",
  "acceptance": "98.4%",

  "description": `
    <p>Read two numbers and check if both numbers lie between 1 and 100 (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two numbers as input</li>
      <li>Check if both numbers are between 1 and 100 (inclusive)</li>
      <li>If both are in range, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches multiple range checks combined with logical AND operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
55
99
Output: True</pre>
    <p><b>Explanation:</b> Both numbers (55 and 99) are between 1 and 100 inclusive.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
50
150
Output: False</pre>
    <p><b>Explanation:</b> First number (50) is in range, but second (150) is outside range.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
0
75
Output: False</pre>
    <p><b>Explanation:</b> First number (0) is below range, second (75) is in range.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid numbers</li>
      <li>Numbers can be integers or floats</li>
      <li>Range is inclusive: 1 ≤ number ≤ 100</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "55\n99" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "50\n150" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "0\n75" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "1\n100" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "101\n50" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "25.5\n75.5" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "-10\n90" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "42\n84" },
    { "id": 9, "input": [], "expected": "False", "stdinput": "0\n0" },
    { "id": 10, "input": [], "expected": "False", "stdinput": "200\n300" }
  ],

  "templates": {
    "python": `a = float(input())\nb = float(input())\nprint(a >= 1 and a <= 100 and b >= 1 and b <= 100)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double a = scanner.nextDouble();\n        double b = scanner.nextDouble();\n        System.out.println(a >= 1 && a <= 100 && b >= 1 && b <= 100);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        console.log(inputs[0] >= 1 && inputs[0] <= 100 && inputs[1] >= 1 && inputs[1] <= 100);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a >= 1 && a <= 100 && b >= 1 && b <= 100) << std::endl;\n    return 0;\n}`
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