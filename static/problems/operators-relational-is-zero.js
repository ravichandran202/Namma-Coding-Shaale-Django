module.exports =  {
  "title": "Is Number Zero?",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Take a number as input and check if the number is exactly zero.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a number as input</li>
      <li>Check if the number is exactly equal to 0</li>
      <li>If zero, print True</li>
      <li>If not zero, print False</li>
    </ul>
    <p>This problem teaches exact equality comparison with floating point numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 0
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0.0
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid number</li>
      <li>Number can be integer or float</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "0" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "0.0" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "0.1" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "0.0001" }
  ],

  "templates": {
    "python": `number = float(input())\nprint(number == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double number = scanner.nextDouble();\n        System.out.println(number == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseFloat(number);\n    console.log(num === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double number;\n    std::cin >> number;\n    std::cout << std::boolalpha << (number == 0) << std::endl;\n    return 0;\n}`
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