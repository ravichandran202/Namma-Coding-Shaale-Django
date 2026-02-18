module.exports =  {
  "title": "Sum of Geometric Series",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Calculate the sum of a geometric series using the geometric series sum formula.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read the first term (a), common ratio (r), and number of terms (n)</li>
      <li>Use the geometric series sum formula</li>
      <li>Print the sum of the geometric series</li>
    </ul>
    <pre class="constraints">Formula:
S = a × (rⁿ - 1) / (r - 1)

Where:
a = First term
r = Common ratio
n = Number of terms</pre>
    <p>This problem teaches geometric series calculations and practical use of exponentiation and division.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2
3
4
Output: 80</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
1
2
5
Output: 31</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
3
2
4
Output: 45</pre>
  `,

  "conditions": `
    <ul>
      <li>First term (a) will be a positive integer</li>
      <li>Common ratio (r) will be an integer greater than 1</li>
      <li>Number of terms (n) will be a positive integer</li>
      <li>All inputs will be valid for the formula</li>
      <li>Use integer division for exact results</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "80", "stdinput": "2\n3\n4" },
    { "id": 2, "input": [], "expected": "31", "stdinput": "1\n2\n5" },
    { "id": 3, "input": [], "expected": "45", "stdinput": "3\n2\n4" },
    { "id": 4, "input": [], "expected": "121", "stdinput": "1\n3\n5" },
    { "id": 5, "input": [], "expected": "63", "stdinput": "1\n2\n6" },
    { "id": 6, "input": [], "expected": "364", "stdinput": "1\n3\n6" },
    { "id": 7, "input": [], "expected": "255", "stdinput": "1\n2\n8" },
  ],

  "templates": {
    "python": `a = int(input())\nr = int(input())\nn = int(input())\n\nsum_series = a * (r ** n - 1) // (r - 1)\nprint(sum_series)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int r = scanner.nextInt();\n        int n = scanner.nextInt();\n        \n        int sum_series = a * ((int)Math.pow(r, n) - 1) / (r - 1);\n        System.out.println(sum_series);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (a) => {\n    inputs.push(parseInt(a));\n    readline.question('', (r) => {\n        inputs.push(parseInt(r));\n        readline.question('', (n) => {\n            inputs.push(parseInt(n));\n            \n            const sum_series = inputs[0] * (Math.pow(inputs[1], inputs[2]) - 1) / (inputs[1] - 1);\n            console.log(Math.floor(sum_series));\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n#include <cmath>\n\nint main() {\n    int a, r, n;\n    std::cin >> a >> r >> n;\n    \n    int sum_series = a * (pow(r, n) - 1) / (r - 1);\n    std::cout << sum_series << std::endl;\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `a = int(input())\nr = int(input())\nn = int(input())\n\nsum_series = a * (r ** n - 1) // (r - 1)\nprint(sum_series)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int r = scanner.nextInt();\n        int n = scanner.nextInt();\n        \n        int sum_series = a * ((int)Math.pow(r, n) - 1) / (r - 1);\n        System.out.println(sum_series);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (a) => {\n    inputs.push(parseInt(a));\n    readline.question('', (r) => {\n        inputs.push(parseInt(r));\n        readline.question('', (n) => {\n            inputs.push(parseInt(n));\n            \n            const sum_series = inputs[0] * (Math.pow(inputs[1], inputs[2]) - 1) / (inputs[1] - 1);\n            console.log(Math.floor(sum_series));\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n#include <cmath>\n\nint main() {\n    int a, r, n;\n    std::cin >> a >> r >> n;\n    \n    int sum_series = a * (pow(r, n) - 1) / (r - 1);\n    std::cout << sum_series << std::endl;\n    \n    return 0;\n}`
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