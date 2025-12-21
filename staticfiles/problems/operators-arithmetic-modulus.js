module.exports =  {
  "title": "Modulus Operation",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Write a program that takes two integers as input and finds the remainder when the first number is divided by the second number using the modulus operator.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Use the modulus operator <code>%</code> to find the remainder</li>
      <li>Print the remainder</li>
    </ul>
    <p>This problem teaches the modulus operation, which is useful for checking divisibility and finding remainders in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
3
Output: 1</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15
5
Output: 0</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
7
2
Output: 1</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>The second number will not be zero</li>
      <li>Numbers can be positive or negative</li>
      <li>Result will be within the range of standard integer operations</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1", "stdinput": "10\n3" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "15\n5" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "7\n2" },
    { "id": 4, "input": [], "expected": "2", "stdinput": "17\n3" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "20\n4" },
    { "id": 6, "input": [], "expected": "2", "stdinput": "-10\n4" },
    { "id": 7, "input": [], "expected": "1", "stdinput": "-7\n2" },
    { "id": 8, "input": [], "expected": "999", "stdinput": "999\n1000" },
    { "id": 9, "input": [], "expected": "0", "stdinput": "2147483647\n2147483647" },
    { "id": 10, "input": [], "expected": "0", "stdinput": "-100\n-5" }
  ],

  "templates": {
    "python": `num1 = int(input())\nnum2 = int(input())\nremainder = num1 % num2\nprint(remainder)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        int remainder = num1 % num2;\n        System.out.println(remainder);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        const remainder = inputs[0] % inputs[1];\n        console.log(remainder);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int num1, num2;\n    std::cin >> num1 >> num2;\n    int remainder = num1 % num2;\n    std::cout << remainder << std::endl;\n    return 0;\n}`
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