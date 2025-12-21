module.exports = {
  "title": "Star Pattern – Hollow Right Triangle",
  "difficulty": "easy",
  "acceptance": "89%",

  "description": `
    <p>Print a hollow right triangle pattern using stars. Only the outer boundary and the diagonal of the triangle are filled with stars, while the interior remains empty.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Column:</b> All positions filled with stars</li>
      <li><b>Last Row:</b> Completely filled with stars</li>
      <li><b>Diagonal:</b> All positions where row equals column are filled with stars</li>
      <li><b>Interior:</b> All other positions are empty (spaces)</li>
      <li>The triangle grows from top-left to bottom-right</li>
      <li>Only the perimeter and diagonal are visible as stars</li>
    </ul>
    <p>This creates a right-angled triangle outline where the left edge, bottom edge, and diagonal are visible as stars.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
*
**
* *
*  *
*****</pre>
    <p><b>Explanation:</b> Left column: all stars. Bottom row: all stars. Diagonal: stars from top-left to bottom-right. Interior: empty spaces.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
*
**
* *
****</pre>
    <p><b>Explanation:</b> A 4-row hollow right triangle with only the border and diagonal filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*\n**\n* *\n*  *\n*****", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "*\n**\n* *\n****", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "*\n**", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "*\n**\n* *\n*  *\n*   *\n******", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "*\n**\n* *\n*  *\n*   *\n*    *\n*******", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "*\n**\n* *\n*  *\n*   *\n*    *\n*     *\n********", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "*\n**\n* *\n*  *\n*   *\n*    *\n*     *\n*      *\n*********", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "*\n**\n* *\n*  *\n*   *\n*    *\n*     *\n*      *\n*       *\n**********", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        if j == 0 or i == n - 1 or i == j:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                if (j == 0 || i == n - 1 || i == j) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            if (j === 0 || i === n - 1 || i === j) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            if (j == 0 || i == n - 1 || i == j) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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