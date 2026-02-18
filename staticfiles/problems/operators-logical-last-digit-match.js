module.exports =  {
  "title": "Last Digit Match",
  "difficulty": "medium",
  "acceptance": "98.5%",

  "description": `
    <p>Read two numbers and check if both have the same last digit.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Compare the last digits</li>
      <li>If last digits are equal, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches the use of modulus operator for digit extraction and comparison.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
27
47
Output: True</pre>
    <p><b>Explanation:</b> Both numbers end with digit 7.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
123
456
Output: False</pre>
    <p><b>Explanation:</b> First number ends with 3, second with 6.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
100
200
Output: True</pre>
    <p><b>Explanation:</b> Both numbers end with digit 0.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive or negative</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "27\n47" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "123\n456" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "100\n200" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "-27\n-47" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "999\n998" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "0\n10" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 10 == b % 10)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 10 == b % 10);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] % 10 === inputs[1] % 10);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 10 == b % 10) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 10 == b % 10)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 10 == b % 10);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] % 10 === inputs[1] % 10);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 10 == b % 10) << std::endl;\n    return 0;\n}`
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