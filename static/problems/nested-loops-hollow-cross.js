module.exports = {
  "title": "Star Pattern – Cross Pattern (X)",
  "difficulty": "easy",
  "acceptance": "88%",

  "description": `
    <p>Print a cross pattern (X shape) using stars. The pattern forms two diagonal lines that intersect at the center, creating an X shape.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Main Diagonal:</b> All positions where row equals column are filled with stars</li>
      <li><b>Anti-Diagonal:</b> All positions where row + column equals n-1 are filled with stars</li>
      <li><b>Other Positions:</b> All positions are empty (spaces)</li>
      <li>The two diagonals intersect at the center</li>
      <li>The pattern forms a perfect X shape</li>
      <li>Both diagonals are symmetrical</li>
    </ul>
    <p>This creates an X pattern where two diagonal lines cross each other at the center of the grid.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
*   *
 * *
  *
 * *
*   *</pre>
    <p><b>Explanation:</b> Main diagonal: top-left to bottom-right. Anti-diagonal: top-right to bottom-left. All other positions: spaces.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
*  *
 **
 **
*  *</pre>
    <p><b>Explanation:</b> A 4x4 cross pattern with two diagonal lines intersecting.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*   *\n * * \n  *  \n * * \n*   *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "*  *\n ** \n ** \n*  *", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "* *\n * \n* *", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "*     *\n *   * \n  * *  \n   *   \n  * *  \n *   * \n*     *", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "*       *\n *     * \n  *   *  \n   * *   \n    *    \n   * *   \n  *   *  \n *     * \n*       *", "stdinput": "9" },
    { "id": 6, "input": [], "expected": "*         *\n *       * \n  *     *  \n   *   *   \n    * *    \n     *     \n    * *    \n   *   *   \n  *     *  \n *       * \n*         *", "stdinput": "11" },
    { "id": 7, "input": [], "expected": "*           *\n *         * \n  *       *  \n   *     *   \n    *   *    \n     * *     \n      *      \n     * *     \n    *   *    \n   *     *   \n  *       *  \n *         * \n*           *", "stdinput": "13" },
    { "id": 8, "input": [], "expected": "*             *\n *           * \n  *         *  \n   *       *   \n    *     *    \n     *   *     \n      * *      \n       *       \n      * *      \n     *   *     \n    *     *    \n   *       *   \n  *         *  \n *           * \n*             *", "stdinput": "15" },
    { "id": 9, "input": [], "expected": "*               *\n *             * \n  *           *  \n   *         *   \n    *       *    \n     *     *     \n      *   *      \n       * *       \n        *        \n       * *       \n      *   *      \n     *     *     \n    *       *    \n   *         *   \n  *           *  \n *             * \n*               *", "stdinput": "17" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == j or i + j == n - 1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j || i + j == n - 1) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === j || i + j === n - 1) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == j || i + j == n - 1) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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