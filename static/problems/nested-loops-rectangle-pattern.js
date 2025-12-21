module.exports = {
  "title": "Star Rectangle Pattern",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Print rows lines, each containing cols stars separated by spaces.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integers: rows and cols</li>
      <li>Use nested for loops</li>
      <li>Print rows × cols grid of stars</li>
      <li>Stars separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Pattern Logic:</b></p>
    <ul>
      <li>Outer loop controls rows</li>
      <li>Inner loop controls columns</li>
      <li>For each row, print cols stars with spaces</li>
      <li>Move to next line after each row</li>
    </ul>
    <p>This problem teaches nested loops with dynamic dimensions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 2 4
Output: 
* * * *
* * * *</pre>
    <p><b>Explanation:</b> 2 rows and 4 columns of stars</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3 2
Output: 
* *
* *
* *</pre>
    <p><b>Explanation:</b> 3 rows and 2 columns of stars</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 1 5
Output: * * * * *</pre>
    <p><b>Explanation:</b> 1 row and 5 columns of stars</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * \n* * * *", "stdinput": "2 4" },
    { "id": 2, "input": [], "expected": "* * \n* * \n* *", "stdinput": "3 2" },
    { "id": 3, "input": [], "expected": "* * * * *", "stdinput": "1 5" },
    { "id": 4, "input": [], "expected": "* * * \n* * * \n* * * \n* * *", "stdinput": "4 3" },
    { "id": 5, "input": [], "expected": "*", "stdinput": "1 1" }
  ],

  "templates": {
    "python": "rows, cols = map(int, input().split())\nfor i in range(rows):\n    for j in range(cols):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int rows = scanner.nextInt();\n        int cols = scanner.nextInt();\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [rows, cols] = input.split(' ').map(Number);\n    let output = '';\n    for (let i = 0; i < rows; i++) {\n        let row = '';\n        for (let j = 0; j < cols; j++) {\n            row += '* ';\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows, cols;\n    cin >> rows >> cols;\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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