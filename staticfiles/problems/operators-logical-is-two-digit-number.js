module.exports =  {
  "title": "Two-Digit Number Check",
  "difficulty": "medium",
  "acceptance": "98.2%",

  "description": `
    <p>Read a number and check if it is a two-digit number (10 to 99 or -10 to -99).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a number as input</li>
      <li>Check if the number is between 10 and 99 (positive two-digit)</li>
      <li>Check if the number is between -99 and -10 (negative two-digit)</li>
      <li>If either condition is true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches range checking for both positive and negative numbers using logical OR.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 45
Output: True</pre>
    <p><b>Explanation:</b> 45 is a positive two-digit number (between 10 and 99).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: -67
Output: True</pre>
    <p><b>Explanation:</b> -67 is a negative two-digit number (between -99 and -10).</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 5
Output: False</pre>
    <p><b>Explanation:</b> 5 is a single-digit number, not a two-digit number.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Two-digit numbers range from 10-99 (positive) and -99 to -10 (negative)</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
      <li>Use logical OR to combine positive and negative range checks</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "45" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "-67" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "100" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "99" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "10" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "-10" },
    { "id": 8, "input": [], "expected": "True", "stdinput": "-99" },
    { "id": 9, "input": [], "expected": "False", "stdinput": "-9" },
    { "id": 10, "input": [], "expected": "False", "stdinput": "0" }
  ],

  "templates": {
    "python": `x = int(input())\nprint((x >= 10 and x <= 99) or (x <= -10 and x >= -99))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        System.out.println((x >= 10 && x <= 99) || (x <= -10 && x >= -99));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseInt(x);\n    console.log((num >= 10 && num <= 99) || (num <= -10 && num >= -99));\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int x;\n    std::cin >> x;\n    std::cout << std::boolalpha << ((x >= 10 && x <= 99) || (x <= -10 && x >= -99)) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `x = int(input())\nprint((x >= 10 and x <= 99) or (x <= -10 and x >= -99))`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        System.out.println((x >= 10 && x <= 99) || (x <= -10 && x >= -99));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseInt(x);\n    console.log((num >= 10 && num <= 99) || (num <= -10 && num >= -99));\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int x;\n    std::cin >> x;\n    std::cout << std::boolalpha << ((x >= 10 && x <= 99) || (x <= -10 && x >= -99)) << std::endl;\n    return 0;\n}`
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