module.exports = {
  "title": "Subtract Two Numbers",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Read two numbers and print the result of subtracting the second from the first.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Calculate the difference (first number minus second number)</li>
      <li>Print the result</li>
    </ul>
    <p>This problem teaches basic subtraction operation and order of operations in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
9
5
Output: 4</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15
8
Output: 7</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
10
20
Output: -10</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Result will be within the range of standard integer operations</li>
      <li>Operation is first number minus second number</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "9\n5" },
    { "id": 2, "input": [], "expected": "7", "stdinput": "15\n8" },
    { "id": 3, "input": [], "expected": "-10", "stdinput": "10\n20" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "5\n5" },
    { "id": 5, "input": [], "expected": "-8", "stdinput": "-3\n5" },
    { "id": 6, "input": [], "expected": "2", "stdinput": "-5\n-7" },
    { "id": 7, "input": [], "expected": "-150", "stdinput": "-200\n-50" }
  ],

  "templates": {
    "python": `# TODO: Read first interger number\n\n# TODO: Read second interger number\n\n# TODO: Calculate and print the difference\n`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        \n        // TODO: Calculate and print the difference\n        \n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        \n        // TODO: Calculate and print the difference\n        \n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    \n    // TODO: Calculate and print the difference\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nprint(a - b)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a - b);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] - inputs[1]);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << a - b << std::endl;\n    return 0;\n}`
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