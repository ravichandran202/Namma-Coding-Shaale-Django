module.exports =  {
  "title": "Find Average of Two Numbers",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Read two numbers and print their average.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Print the result as a float</li>
    </ul>
    <p>This problem teaches basic arithmetic operations and division, resulting in a float value even when inputs are integers.</p>
    <pre class="constraints">Formula:
average = sum of all numbers / total given numbers</pre>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
20
Output: 15.0</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
7
Output: 6.0</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
3
3
Output: 3.0</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Result will be a float value</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "15.0", "stdinput": "10\n20" },
    { "id": 2, "input": [], "expected": "6.0", "stdinput": "5\n7" },
    { "id": 3, "input": [], "expected": "3.0", "stdinput": "3\n3" },
    { "id": 4, "input": [], "expected": "0.0", "stdinput": "0\n0" },
    { "id": 5, "input": [], "expected": "5000000000.0", "stdinput": "10000000000\n0" },
    { "id": 6, "input": [], "expected": "0.0", "stdinput": "-5\n5" },
    { "id": 7, "input": [], "expected": "2147483647.0", "stdinput": "2147483647\n2147483647" },
    { "id": 8, "input": [], "expected": "0.0", "stdinput": "-2147483648\n2147483648" },
    { "id": 9, "input": [], "expected": "2500000000.5", "stdinput": "5000000000\n1" },
    { "id": 10, "input": [], "expected": "-1073741824.0", "stdinput": "-2147483648\n0" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\naverage = (a + b) / 2\nprint(average)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        double average = (a + b) / 2.0;\n        System.out.println(average);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        const average = (inputs[0] + inputs[1]) / 2;\n        console.log(average);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    double average = (a + b) / 2.0;\n    std::cout << std::fixed << std::setprecision(1) << average << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\naverage = (a + b) / 2\nprint(average)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        double average = (a + b) / 2.0;\n        System.out.println(average);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        const average = (inputs[0] + inputs[1]) / 2;\n        console.log(average);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    double average = (a + b) / 2.0;\n    std::cout << std::fixed << std::setprecision(1) << average << std::endl;\n    return 0;\n}`
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