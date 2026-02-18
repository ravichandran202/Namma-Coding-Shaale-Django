module.exports =  {
  "title": "Next Number Finder",
  "difficulty": "easy",
  "acceptance": "99.9%",

  "description": `
    <p>Take a number as input and give the next number (add 1).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>Calculate the next number by adding 1</li>
      <li>Print the next number</li>
      <li><b>Note : perform operations using single variable</b></li>
    </ul>
    <p>This problem teaches basic arithmetic operations and sequential number generation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 7
Output: 8</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 0
Output: 1</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: -5
Output: -4</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Add 1 to the input number</li>
      <li>Print only the result</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "8", "stdinput": "7" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 3, "input": [], "expected": "-4", "stdinput": "-5" },
    { "id": 4, "input": [], "expected": "100", "stdinput": "99" },
    { "id": 5, "input": [], "expected": "-1", "stdinput": "-2" },
  ],

  "templates": {
    "python": `number = int(input())\nnext_number += 1\nprint(next_number)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        int next_number = number + 1;\n        System.out.println(next_number);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const next_number = parseInt(number) + 1;\n    console.log(next_number);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    int next_number = number + 1;\n    std::cout << next_number << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `number = int(input())\nnext_number += 1\nprint(next_number)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        int next_number = number + 1;\n        System.out.println(next_number);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const next_number = parseInt(number) + 1;\n    console.log(next_number);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    int next_number = number + 1;\n    std::cout << next_number << std::endl;\n    return 0;\n}`
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