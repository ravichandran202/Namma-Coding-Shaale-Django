module.exports =  {
  "title": "Is Number Even ?",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Take a number as input and check if the number is even.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>If even, print True</li>
      <li>If odd, print False</li>
    </ul>
    <p>This problem teaches modulus operation for checking divisibility and even/odd classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer</li>
      <li>Number can be positive, negative, or zero</li>
      <li>Use modulus operator % to check divisibility by 2</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "15" },
  ],

  "templates": {
    "python": `number = int(input())\nprint(number % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        System.out.println(number % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    console.log(num % 2 === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    std::cout << std::boolalpha << (number % 2 == 0) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `number = int(input())\nprint(number % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        System.out.println(number % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    console.log(num % 2 === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    std::cout << std::boolalpha << (number % 2 == 0) << std::endl;\n    return 0;\n}`
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