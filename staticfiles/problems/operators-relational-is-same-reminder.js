module.exports =  {
  "title": "Is Same Remainder ?",
  "difficulty": "medium",
  "acceptance": "98.5%",

  "description": `
    <p>Read two numbers and print True if both leave the same remainder when divided by 5.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Calculate the remainder when each number is divided by 5 using modulus operator</li>
      <li>Compare the remainders</li>
      <li>If remainders are equal, print True</li>
      <li>If remainders are different, print False</li>
    </ul>
    <p>This problem teaches modulus operation and comparison of remainders, which is useful in number theory and modular arithmetic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
12
17
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
14
21
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
25
30
Output: True</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
      <li>Use modulus operator % to find remainders</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "12\n17" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "14\n21" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "25\n30" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "7\n12" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "7\n13" },
    { "id": 6, "input": [], "expected": "True", "stdinput": "0\n5" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "-3\n2" },
    { "id": 8, "input": [], "expected": "False", "stdinput": "10\n16" },
    { "id": 9, "input": [], "expected": "True", "stdinput": "100\n105" },
    { "id": 10, "input": [], "expected": "True", "stdinput": "23\n28" }
  ],

  "templates": {
    "python": `a = int(input())\nb = int(input())\nprint(a % 5 == b % 5)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a % 5 == b % 5);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log((inputs[0] % 5) === (inputs[1] % 5));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << std::boolalpha << (a % 5 == b % 5) << std::endl;\n    return 0;\n}`
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