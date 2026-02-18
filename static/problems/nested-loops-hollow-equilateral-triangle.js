module.exports = {
  "title": "Star Pattern – Inverted Hollow Equilateral Triangle",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Print an inverted hollow equilateral triangle pattern using stars. Only the outer boundary of the triangle is filled with stars, while the interior remains empty.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Base Row:</b> Completely filled with stars</li>
      <li><b>Left Edge:</b> All positions at the start of each row are stars</li>
      <li><b>Right Edge:</b> All positions at the end of each row are stars</li>
      <li><b>Interior:</b> All other positions are empty (spaces)</li>
      <li>The triangle decreases in width from bottom to top</li>
      <li>Each row has increasing leading spaces</li>
      <li>Only the perimeter is visible as stars</li>
    </ul>
    <p>This creates an inverted equilateral triangle outline where only the border is filled with stars.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
    * \n   * * \n  *   * \n *     * \n*********</pre>
    <p><b>Explanation:</b> Base row: all stars. Left and right edges: stars forming the triangle sides. Interior: empty spaces.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
   * \n  * * \n *   * \n*******</pre>
    <p><b>Explanation:</b> A 4-row inverted hollow equilateral triangle with only the border filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "    * \n   * * \n  *   * \n *     * \n*********", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "   * \n  * * \n *   * \n*******", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "  * \n * * \n*****", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "     * \n    * * \n   *   * \n  *     * \n *       * \n***********", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "      * \n     * * \n    *   * \n   *     * \n  *       * \n *         * \n*************", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "       * \n      * * \n     *   * \n    *     * \n   *       * \n  *         * \n *           * \n***************", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "        * \n       * * \n      *   * \n     *     * \n    *       * \n   *         * \n  *           * \n *             * \n*****************", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "         * \n        * * \n       *   * \n      *     * \n     *       * \n    *         * \n   *           * \n  *             * \n *               * \n*******************", "stdinput": "10" },
    { "id": 9, "input": [], "expected": "          * \n         * * \n        *   * \n       *     * \n      *       * \n     *         * \n    *           * \n   *             * \n  *               * \n *                 * \n*********************", "stdinput": "11" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    for j in range(2 * i + 1):\n        if j == 0 or j == 2 * i or i == n - 1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            for (int j = 0; j < 2 * i + 1; j++) {\n                if (j == 0 || j == 2 * i || i == n - 1) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = ' '.repeat(n - i - 1);\n        for (let j = 0; j < 2 * i + 1; j++) {\n            if (j === 0 || j === 2 * i || i === n - 1) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        for (int j = 0; j < 2 * i + 1; j++) {\n            if (j == 0 || j == 2 * i || i == n - 1) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    for j in range(2 * i + 1):\n        if j == 0 or j == 2 * i or i == n - 1:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            for (int j = 0; j < 2 * i + 1; j++) {\n                if (j == 0 || j == 2 * i || i == n - 1) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = ' '.repeat(n - i - 1);\n        for (let j = 0; j < 2 * i + 1; j++) {\n            if (j === 0 || j === 2 * i || i === n - 1) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        for (int j = 0; j < 2 * i + 1; j++) {\n            if (j == 0 || j == 2 * i || i == n - 1) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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