module.exports =  {
  "title": "Out of Range Checker",
  "difficulty": "medium",
  "acceptance": "98.7%",

  "description": `
    <p>Read a number and print True if it is less than 100 or greater than 200.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a number as input</li>
      <li>Check if the number is less than 100</li>
      <li>Check if the number is greater than 200</li>
      <li>If either condition is true, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches range exclusion checking using logical OR operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 250
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 150
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 50
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid number</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "250" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "150" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "50" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "100" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "200" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "99" },
  ],

  "templates": {
    "python": `x = int(input())\nprint(x < 100 or x > 200)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double x = scanner.nextDouble();\n        System.out.println(x < 100 || x > 200);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseFloat(x);\n    console.log(num < 100 || num > 200);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x < 100 || x > 200) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `x = int(input())\nprint(x < 100 or x > 200)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double x = scanner.nextDouble();\n        System.out.println(x < 100 || x > 200);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (x) => {\n    const num = parseFloat(x);\n    console.log(num < 100 || num > 200);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double x;\n    std::cin >> x;\n    std::cout << std::boolalpha << (x < 100 || x > 200) << std::endl;\n    return 0;\n}`
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