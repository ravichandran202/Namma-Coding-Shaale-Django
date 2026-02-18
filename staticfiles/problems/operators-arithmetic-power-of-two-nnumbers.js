module.exports =  {
  "title": "Exponentiation",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Write a program that takes a base and exponent as input and calculates the power using the exponentiation operator.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read base and exponent as float inputs</li>
      <li>Use the exponentiation operator <code>**</code> to calculate power</li>
      <li>Print the result</li>
    </ul>
    <p>This problem teaches exponentiation operation, which is useful for calculating powers, squares, cubes, and other exponential values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2
3
Output: 8</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
-3
Output: 0.125</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid numbers (can be integers or floats)</li>
      <li>Base and exponent can be positive, negative, or zero</li>
      <li>Result will be calculated as base raised to the power of exponent</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "8", "stdinput": "2\n3" },
    { "id": 2, "input": [], "expected": "0.125", "stdinput": "2\n-3" },
    { "id": 3, "input": [], "expected": "25", "stdinput": "5\n2" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "10\n0" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "0\n5" },
    { "id": 6, "input": [], "expected": "1", "stdinput": "-1\n2" },
    { "id": 7, "input": [], "expected": "-1", "stdinput": "-1\n3" },
    { "id": 8, "input": [], "expected": "1024", "stdinput": "2\n10" },
    { "id": 9, "input": [], "expected": "1", "stdinput": "0\n0" },
    { "id": 10, "input": [], "expected": "0.001", "stdinput": "10\n-3" }
  ],

  "templates": {
    "python": `base = int(input())\nexponent = int(input())\nresult = base ** exponent\nprint(result)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double base = scanner.nextDouble();\n        double exponent = scanner.nextDouble();\n        double result = Math.pow(base, exponent);\n        System.out.println(result);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        const result = Math.pow(inputs[0], inputs[1]);\n        console.log(result);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <cmath>\n#include <iomanip>\n\nint main() {\n    double base, exponent;\n    std::cin >> base >> exponent;\n    double result = pow(base, exponent);\n    std::cout << std::fixed << std::setprecision(15) << result << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `base = int(input())\nexponent = int(input())\nresult = base ** exponent\nprint(result)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double base = scanner.nextDouble();\n        double exponent = scanner.nextDouble();\n        double result = Math.pow(base, exponent);\n        System.out.println(result);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        const result = Math.pow(inputs[0], inputs[1]);\n        console.log(result);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <cmath>\n#include <iomanip>\n\nint main() {\n    double base, exponent;\n    std::cin >> base >> exponent;\n    double result = pow(base, exponent);\n    std::cout << std::fixed << std::setprecision(15) << result << std::endl;\n    return 0;\n}`
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