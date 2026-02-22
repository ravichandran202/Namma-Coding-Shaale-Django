module.exports = {
    "title": "Is Positive Number",
    "difficulty": "easy",
    "acceptance": "99.9%",
  
    "description": `
      <p>Check if a number is positive. If it is, print "Positive".</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read an integer input</li>
        <li>Use an if statement to check if the number is positive (greater than 0)</li>
        <li>If positive, print "Positive"</li>
        <li>No output for non-positive numbers</li>
      </ul>
      <p>This problem teaches basic conditional statements and decision making in programming.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 5
Output: Positive</pre>
      <p><b>Explanation:</b> 5 is greater than 0, so "Positive" is printed.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: -3
Output: </pre>
      <p><b>Explanation:</b> -3 is not greater than 0, so nothing is printed.</p>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input: 0
Output: </pre>
      <p><b>Explanation:</b> 0 is not greater than 0, so nothing is printed.</p>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be a valid integer</li>
        <li>Numbers can be positive, negative, or zero</li>
        <li>Output only "Positive" for numbers greater than 0</li>
        <li>No output for numbers less than or equal to 0</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Positive", "stdinput": "5" },
      { "id": 2, "input": [], "expected": "", "stdinput": "-3" },
      { "id": 3, "input": [], "expected": "", "stdinput": "0" },
      { "id": 4, "input": [], "expected": "Positive", "stdinput": "1" },
    ],
  
    "templates": {
    "python": `number = int(input())\n\n# TODO: Check if the number is positive and print "Positive" if it is\n`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        \n        // TODO: Check if the number is positive and print "Positive" if it is\n        \n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    \n    // TODO: Check if the number is positive and print "Positive" if it is\n    \n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    \n    // TODO: Check if the number is positive and print "Positive" if it is\n    \n    return 0;\n}`
  },

  
    "solutions": {
      "python": `number = int(input())\nif number > 0:\n    print("Positive")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number > 0) {\n            System.out.println("Positive");\n        }\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num > 0) {\n        console.log("Positive");\n    }\n    readline.close();\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number > 0) {\n        std::cout << "Positive" << std::endl;\n    }\n    return 0;\n}`
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