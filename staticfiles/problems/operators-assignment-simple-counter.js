module.exports =  {
  "title": "Counter with Assignment",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Start with a number and perform arithmetic operations using assignment operators.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>Use += operator to add 5 to the number</li>
      <li>Use -= operator to subtract 3 from the number</li>
      <li>Print the final result</li>
      <li><b>Note : perform operations using single variable</b></li>
    </ul>
    <p>This problem teaches compound assignment operators (<code>+=</code> and <code>-=</code>) for efficient variable modification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10
Output: 12</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 0
Output: 2</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: -5
Output: -3</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Must use <code>+=</code> and <code>-=</code> operators</li>
      <li>Operations: add 5, then subtract 3</li>
      <li>Print only the final result</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "12", "stdinput": "10" },
    { "id": 2, "input": [], "expected": "2", "stdinput": "0" },
    { "id": 3, "input": [], "expected": "-3", "stdinput": "-5" },
    { "id": 4, "input": [], "expected": "7", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "102", "stdinput": "100" },
  ],

  "templates": {
    "python": `number = int(input())\nnumber += 5\nnumber -= 3\nprint(number)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        number += 5;\n        number -= 3;\n        System.out.println(number);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    let num = parseInt(number);\n    num += 5;\n    num -= 3;\n    console.log(num);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    number += 5;\n    number -= 3;\n    std::cout << number << std::endl;\n    return 0;\n}`
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