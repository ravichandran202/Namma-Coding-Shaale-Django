module.exports =  {
  "title": "Add Three Numbers",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Read three numbers and print their sum.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three integer inputs</li>
      <li>Calculate the sum of the three numbers</li>
      <li>Print the result</li>
    </ul>
    <p>This problem teaches handling multiple inputs and performing arithmetic operations with more than two numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2
4
6
Output: 12</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
1
2
3
Output: 6</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
10
20
30
Output: 60</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be three valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Result will be within the range of standard integer operations</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "12", "stdinput": "2\n4\n6" },
    { "id": 2, "input": [], "expected": "6", "stdinput": "1\n2\n3" },
    { "id": 3, "input": [], "expected": "60", "stdinput": "10\n20\n30" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "0\n0\n0" },
    { "id": 5, "input": [], "expected": "-6", "stdinput": "-1\n-2\n-3" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "5\n-5\n0" },
    { "id": 7, "input": [], "expected": "-15", "stdinput": "-10\n-3\n-2" },
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a + b + c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        System.out.println(a + b + c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        readline.question('', (third) => {\n            inputs.push(parseInt(third));\n            console.log(inputs[0] + inputs[1] + inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << a + b + c << std::endl;\n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nb = int(input())\nc = int(input())\nprint(a + b + c)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        System.out.println(a + b + c);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        readline.question('', (third) => {\n            inputs.push(parseInt(third));\n            console.log(inputs[0] + inputs[1] + inputs[2]);\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    std::cout << a + b + c << std::endl;\n    return 0;\n}`
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