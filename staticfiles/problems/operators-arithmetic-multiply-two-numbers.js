module.exports = {
    "title": "Multiply Two Numbers",
    "difficulty": "easy",
    "acceptance": "99.8%",
  
    "description": `
      <p>Read two numbers and print their product.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read two integer inputs</li>
        <li>Calculate the product of the two numbers</li>
        <li>Print the result</li>
      </ul>
      <p>This problem teaches basic multiplication operation in programming.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
3
4
Output: 12</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
5
-6
Output: -30</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be two valid integers</li>
        <li>Numbers can be positive, negative, or zero</li>
        <li>Result will be within the range of standard integer operations</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "12", "stdinput": "3\n4" },
      { "id": 2, "input": [], "expected": "-30", "stdinput": "5\n-6" },
      { "id": 3, "input": [], "expected": "-14", "stdinput": "-2\n7" },
      { "id": 4, "input": [], "expected": "0", "stdinput": "0\n5" },
      { "id": 5, "input": [], "expected": "25", "stdinput": "5\n5" },
      { "id": 6, "input": [], "expected": "25", "stdinput": "-5\n-5" },
    ],
  
    "templates": {
      "python": `# TODO: Read first interger number\n\n# TODO: Read second interger number\n\n# TODO: Calculate and print the product\n`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        \n        // TODO: Calculate and print the product\n        \n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        \n        // TODO: Calculate and print the product\n        \n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    \n    // TODO: Calculate and print the product\n    \n    return 0;\n}`
    },

  
    "solutions": {
      "python": `a = int(input())\nb = int(input())\nprint(a * b)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        System.out.println(a * b);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] * inputs[1]);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << a * b << std::endl;\n    return 0;\n}`
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