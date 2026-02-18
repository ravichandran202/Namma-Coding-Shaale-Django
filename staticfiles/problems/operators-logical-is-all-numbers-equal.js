module.exports =  {
  "title": "All Numbers Equal",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Take three numbers as input and check if all three numbers are equal to each other.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three numbers as input</li>
      <li>Check if all three numbers are equal to each other</li>
      <li>If all numbers are equal, print True</li>
      <li>If any number is different, print False</li>
    </ul>
    <p>This problem teaches multiple equality comparisons and logical AND operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
5
5
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
5
3
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
0
0
0
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid numbers</li>
      <li>Numbers can be integers or floats</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n5\n5" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "5\n5\n3" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "0\n0\n0" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "1\n2\n3" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "7\n7\n8" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "-5\n-5\n-5" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "0\n0\n1" }
  ],

  "templates": {
    "python": `num1 = int(input())\nnum2 = int(input())\nnum3 = int(input())\n\nprint(num1 == num2 and num2 == num3 and num1 == num3)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double num1 = scanner.nextDouble();\n        double num2 = scanner.nextDouble();\n        double num3 = scanner.nextDouble();\n        \n        System.out.println(num1 == num2 && num2 == num3 && num1 == num3);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] === inputs[1] && inputs[1] === inputs[2] && inputs[0] === inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double num1, num2, num3;\n    std::cin >> num1 >> num2 >> num3;\n    \n    std::cout << std::boolalpha << (num1 == num2 && num2 == num3 && num1 == num3) << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `num1 = int(input())\nnum2 = int(input())\nnum3 = int(input())\n\nprint(num1 == num2 and num2 == num3 and num1 == num3)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double num1 = scanner.nextDouble();\n        double num2 = scanner.nextDouble();\n        double num3 = scanner.nextDouble();\n        \n        System.out.println(num1 == num2 && num2 == num3 && num1 == num3);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseFloat(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        readline.question('', (third) => {\n            inputs.push(parseFloat(third));\n            \n            console.log(inputs[0] === inputs[1] && inputs[1] === inputs[2] && inputs[0] === inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    double num1, num2, num3;\n    std::cin >> num1 >> num2 >> num3;\n    \n    std::cout << std::boolalpha << (num1 == num2 && num2 == num3 && num1 == num3) << std::endl;\n    return 0;\n}`
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