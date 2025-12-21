module.exports =  {
  "title": "Floor Division",
  "difficulty": "easy",
  "acceptance": "99.3%",

  "description": `
    <p>Write a program that takes two numbers and performs floor division to find how many times the second number completely fits into the first.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Print the integer result</li>
    </ul>
    <p>This problem teaches floor division, which returns the largest integer less than or equal to the division result.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
3
Output: 3</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15
4
Output: 3</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>The second number will not be zero</li>
      <li>Numbers can be positive or negative</li>
      <li>Floor division rounds towards negative infinity</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "10\n3" },
    { "id": 2, "input": [], "expected": "3", "stdinput": "15\n4" },
    { "id": 3, "input": [], "expected": "5", "stdinput": "25\n5" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "2\n5" },
    { "id": 5, "input": [], "expected": "-4", "stdinput": "-10\n3" },
    { "id": 6, "input": [], "expected": "-3", "stdinput": "-10\n4" },
    { "id": 7, "input": [], "expected": "0", "stdinput": "0\n7" },
    { "id": 8, "input": [], "expected": "2147483647", "stdinput": "2147483647\n1" },
    { "id": 9, "input": [], "expected": "1", "stdinput": "-5\n-3" },
    { "id": 10, "input": [], "expected": "1000000", "stdinput": "3000000\n3" }
  ],

  "templates": {
    "python": `num1 = int(input())\nnum2 = int(input())\nresult = num1 // num2\nprint(result)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        int result = num1 / num2;\n        System.out.println(result);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        const result = Math.floor(inputs[0] / inputs[1]);\n        console.log(result);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int num1, num2;\n    std::cin >> num1 >> num2;\n    int result = num1 / num2;\n    std::cout << result << std::endl;\n    return 0;\n}`
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