module.exports =  {
  "title": "Range Checker",
  "difficulty": "medium",
  "acceptance": "98.8%",

  "description": `
    <p>Read a number and check if it lies between 10 and 50 (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a number as input</li>
      <li>Check if the number is greater than or equal to 10</li>
      <li>Check if the number is less than or equal to 50</li>
      <li>If both conditions are true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches range checking using logical AND operations with inclusive boundaries.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 25
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 50
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid number</li>
      <li>Range is inclusive: 10 ≤ number ≤ 50</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "25" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "50" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "51" },
  ],

  "templates": {
    "python": `x = int(input())\nprint(x >= 10 and x <= 50)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double x = scanner.nextDouble();\n        System.out.println(x >= 10 && x <= 50);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseFloat(x);\n    console.log(num >= 10 && num <= 50);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x >= 10 && x <= 50) << std::endl;\n    return 0;\n}`
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