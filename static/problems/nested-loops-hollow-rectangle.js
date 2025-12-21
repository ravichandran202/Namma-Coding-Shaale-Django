module.exports = {
  "title": "Star Pattern – Hollow Rectangle",
  "difficulty": "easy",
  "acceptance": "89%",

  "description": `
    <p>Print a hollow rectangle pattern using stars. Only the outer boundary of the rectangle is filled with stars, while the interior remains empty.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Row:</b> Completely filled with stars</li>
      <li><b>Last Row:</b> Completely filled with stars</li>
      <li><b>First Column:</b> All positions filled with stars</li>
      <li><b>Last Column:</b> All positions filled with stars</li>
      <li><b>Interior:</b> All positions are empty (spaces)</li>
      <li>The rectangle can have different width and height</li>
      <li>Only the perimeter is visible as stars</li>
    </ul>
    <p>This creates a rectangular outline where only the border is visible, making it appear as a hollow rectangle.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4 6
Output: 
******
*    *
*    *
******</pre>
    <p><b>Explanation:</b> Top and bottom rows are solid stars. Left and right columns are stars. Interior is empty spaces. Rectangle is 4 rows by 6 columns.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3 5
Output: 
*****
*   *
*****</pre>
    <p><b>Explanation:</b> A 3x5 hollow rectangle with only the border filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "******\n*    *\n*    *\n******", "stdinput": "4 6" },
    { "id": 2, "input": [], "expected": "*****\n*   *\n*****", "stdinput": "3 5" },
    { "id": 3, "input": [], "expected": "**\n**", "stdinput": "2 2" },
    { "id": 4, "input": [], "expected": "*******\n*     *\n*     *\n*     *\n*******", "stdinput": "5 7" },
    { "id": 5, "input": [], "expected": "********\n*      *\n*      *\n*      *\n*      *\n********", "stdinput": "6 8" },
    { "id": 6, "input": [], "expected": "*********\n*       *\n*       *\n*       *\n*       *\n*       *\n*********", "stdinput": "7 9" },
    { "id": 7, "input": [], "expected": "**********\n*        *\n*        *\n*        *\n*        *\n*        *\n*        *\n**********", "stdinput": "8 10" },
    { "id": 8, "input": [], "expected": "***********\n*         *\n*         *\n*         *\n*         *\n*         *\n*         *\n*         *\n***********", "stdinput": "9 11" },
    { "id": 9, "input": [], "expected": "************\n*          *\n*          *\n*          *\n*          *\n*          *\n*          *\n*          *\n*          *\n************", "stdinput": "10 12" }
  ],

  "templates": {
    "python": "rows, cols = map(int, input().split())\nfor i in range(rows):\n    for j in range(cols):\n        if i == 0 or i == rows-1 or j == 0 or j == cols-1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int rows = scanner.nextInt();\n        int cols = scanner.nextInt();\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                if (i == 0 || i == rows-1 || j == 0 || j == cols-1) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [rows, cols] = input.split(' ').map(Number);\n    let output = '';\n    for (let i = 0; i < rows; i++) {\n        let row = '';\n        for (let j = 0; j < cols; j++) {\n            if (i === 0 || i === rows-1 || j === 0 || j === cols-1) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows, cols;\n    cin >> rows >> cols;\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            if (i == 0 || i == rows-1 || j == 0 || j == cols-1) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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