module.exports =  {
  "title": "Three-Digit Even Checker",
  "difficulty": "medium",
  "acceptance": "98.3%",

  "description": `
    <p>Read a number and check if it's a three-digit even number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>Check if the number is between 100 and 999 (three-digit)</li>
      <li>Check if the number is even</li>
      <li>If both conditions are true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches combination of range checking and even/odd verification using logical AND.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 248
Output: True</pre>
    <p><b>Explanation:</b> 248 is a three-digit number (100-999) and even (248 % 2 = 0).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 357
Output: False</pre>
    <p><b>Explanation:</b> 357 is a three-digit number but odd (357 % 2 = 1).</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 50
Output: False</pre>
    <p><b>Explanation:</b> 50 is even but not a three-digit number (less than 100).</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Three-digit numbers range from 100 to 999</li>
      <li>Use modulus operator to check for even numbers</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "248" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "357" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "50" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "1000" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "100" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "998" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "999" },
  ],

  "templates": {
    "python": `x = int(input())\nprint(x >= 100 and x <= 999 and x % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        System.out.println(x >= 100 && x <= 999 && x % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseInt(x);\n    console.log(num >= 100 && num <= 999 && num % 2 === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x >= 100 && x <= 999 && x % 2 == 0) << std::endl;\n    return 0;\n}`
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