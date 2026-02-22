module.exports = {
  "title": "Star Square Pattern",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Print n lines, each containing n stars separated by spaces.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Print n rows and n columns of stars</li>
      <li>Stars separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Pattern Logic:</b></p>
    <ul>
      <li>Outer loop controls rows</li>
      <li>Inner loop controls columns</li>
      <li>For each row, print n stars with spaces</li>
      <li>Move to next line after each row</li>
    </ul>
    <p>This problem teaches nested loops and grid pattern printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
* * *
* * *
* * *</pre>
    <p><b>Explanation:</b> 3 rows and 3 columns of stars</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
* *
* *</pre>
    <p><b>Explanation:</b> 2 rows and 2 columns of stars</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 4
Output: 
* * * *
* * * *
* * * *
* * * *</pre>
    <p><b>Explanation:</b> 4 rows and 4 columns of stars</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * \n* * * \n* * *", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "* * \n* *", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "* * * * \n* * * * \n* * * * \n* * * *", "stdinput": "4" },
    { "id": 4, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *", "stdinput": "5" }
  ],

  "templates": {
    "python": "n = int(input())\n\n# TODO: Use nested loops to print a square pattern of * with size n x n\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        // TODO: Use nested loops to print a square pattern of * with size n x n\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    const size = parseInt(n);\n    \n    // TODO: Use nested loops to print a square pattern of * with size n x n\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    // TODO: Use nested loops to print a square pattern of * with size n x n\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += '* ';\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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