module.exports =  {
  "title": "Number Doubler",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Take a number as input and give its double.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>use <code>*=</code> operator</li>
      <li>Print the doubled number</li>
      <li><b>Note : perform operations using single variable</b></li>
    </ul>
    <p>This problem teaches multiplication using compound assignment operators.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 7
Output: 14</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 0
Output: 0</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Must use <code>*=</code> operator to multiply</li>
      <li>Print only the result</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "14", "stdinput": "7" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "0" },
    { "id": 3, "input": [], "expected": "-10", "stdinput": "-5" },
    { "id": 4, "input": [], "expected": "200", "stdinput": "100" },
    { "id": 5, "input": [], "expected": "-20", "stdinput": "-10" },
  ],

  "templates": {
    "python": `number = int(input())\nnumber *= 2\nprint(number)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        number *= 2;\n        System.out.println(number);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    let num = parseInt(number);\n    num *= 2;\n    console.log(num);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    number *= 2;\n    std::cout << number << std::endl;\n    return 0;\n}`
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