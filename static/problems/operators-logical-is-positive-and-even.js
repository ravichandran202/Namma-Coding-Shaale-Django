module.exports =  {
  "title": "Positive Even Checker",
  "difficulty": "medium",
  "acceptance": "98.5%",

  "description": `
    <p>Read a number and check if it is both positive and even number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>Check if the number is positive (greater than 0)</li>
      <li>Check if the number is even</li>
      <li>If both conditions are true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches combination of comparison and modulus operations with logical AND.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 8
Output: True
</pre>
<b> Explination : </b> 8 is positive and even number, hence True

    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: False</pre>
<b> Explination : </b> 7 is positive but odd number, hence False

    
    <h3>Example 3</h3>
    <pre class="constraints">Input: -4
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Number can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "8" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "-4" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "0" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "-6" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "3" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "-10" },
  ],

  "templates": {
    "python": `x = int(input())\nprint(x > 0 and x % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        System.out.println(x > 0 && x % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseInt(x);\n    console.log(num > 0 && num % 2 === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x > 0 && x % 2 == 0) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `x = int(input())\nprint(x > 0 and x % 2 == 0)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        System.out.println(x > 0 && x % 2 == 0);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseInt(x);\n    console.log(num > 0 && num % 2 === 0);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x > 0 && x % 2 == 0) << std::endl;\n    return 0;\n}`
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