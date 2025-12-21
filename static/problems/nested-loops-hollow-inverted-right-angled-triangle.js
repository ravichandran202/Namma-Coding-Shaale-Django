module.exports = {
  "title": "Star Pattern – Hollow Inverted Triangle",
  "difficulty": "easy",
  "acceptance": "88%",

  "description": `
    <p>Print a hollow inverted triangle pattern using stars. Only the outer boundary of the triangle is filled with stars, while the interior remains empty.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Row:</b> Completely filled with stars</li>
      <li><b>Diagonal:</b> All positions where column equals (row + leading spaces) are filled with stars</li>
      <li><b>Right Edge:</b> The rightmost position of each row is filled with a star</li>
      <li><b>Interior:</b> All other positions are empty (spaces)</li>
      <li>The triangle decreases in width from top to bottom</li>
      <li>Each row has increasing leading spaces</li>
      <li>Only the perimeter is visible as stars</li>
    </ul>
    <p>This creates an inverted triangle outline where the top edge, left diagonal, and right edge are visible as stars.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
*****
 *  *
  * *
   **
    *</pre>
    <p><b>Explanation:</b> Top row: all stars. Left diagonal: stars from top-left to bottom. Right edge: stars from top-right to bottom. Interior: empty spaces.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
****
 * *
  **
   *</pre>
    <p><b>Explanation:</b> A 4-row hollow inverted triangle with only the border filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*****\n *  *\n  * *\n   **\n    *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "****\n * *\n  **\n   *", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "******\n *   *\n  *  *\n   * *\n    **\n     *", "stdinput": "6" },
    { "id": 4, "input": [], "expected": "*******\n *    *\n  *   *\n   *  *\n    * *\n     **\n      *", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "********\n *     *\n  *    *\n   *   *\n    *  *\n     * *\n      **\n       *", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for k in range(i):\n        print(' ', end='')\n    for j in range(n - i):\n        if j == 0 or i == 0 or j == n - i - 1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int k = 0; k < i; k++) {\n                System.out.print(\" \");\n            }\n            for (int j = 0; j < n - i; j++) {\n                if (j == 0 || i == 0 || j == n - i - 1) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let k = 0; k < i; k++) {\n            row += ' ';\n        }\n        for (let j = 0; j < n - i; j++) {\n            if (j === 0 || i === 0 || j === n - i - 1) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int k = 0; k < i; k++) {\n            cout << \" \";\n        }\n        for (int j = 0; j < n - i; j++) {\n            if (j == 0 || i == 0 || j == n - i - 1) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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