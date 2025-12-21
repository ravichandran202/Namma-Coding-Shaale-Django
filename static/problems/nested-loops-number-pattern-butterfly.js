module.exports = {
  "title": "Star Pattern – Butterfly",
  "difficulty": "hard",
  "acceptance": "83%",

  "description": `
    <p>Print a butterfly pattern using stars. The butterfly consists of two symmetrical wings that mirror each other, with decreasing spaces in the center.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Wings:</b></li>
      <ul>
        <li><b>Row 1:</b> Contains <code>1</code> star on left, maximum spaces in center, <code>1</code> star on right</li>
        <li><b>Row 2:</b> Contains <code>2</code> stars on left, fewer spaces in center, <code>2</code> stars on right</li>
        <li><b>Row 3:</b> Contains <code>3</code> stars on left, even fewer spaces in center, <code>3</code> stars on right</li>
        <li>Continues until the middle row with maximum stars and no spaces</li>
      </ul>
      <li><b>Lower Wings:</b></li>
      <ul>
        <li><b>Row 1:</b> Contains <code>n-1</code> stars on left, some spaces in center, <code>n-1</code> stars on right</li>
        <li><b>Row 2:</b> Contains <code>n-2</code> stars on left, more spaces in center, <code>n-2</code> stars on right</li>
        <li><b>Row 3:</b> Contains <code>n-3</code> stars on left, even more spaces in center, <code>n-3</code> stars on right</li>
        <li>Continues until the final row with minimum stars and maximum spaces</li>
      </ul>
      <li>The pattern is perfectly symmetrical around the vertical axis</li>
      <li>Each wing mirrors the other perfectly</li>
      <li>The center gap decreases then increases</li>
    </ul>
    <p>This creates a beautiful butterfly shape with symmetrical wings on both sides.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
*             *
* *         * *
* * *     * * *
* * * * * * * *
* * *     * * *
* *         * *
*             * </pre>
    <p><b>Explanation:</b> Upper wings: increasing stars with decreasing center gap. Lower wings: decreasing stars with increasing center gap. Perfect butterfly symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
*         *
* *     * *
* * * * * *
* *     * *
*         * </pre>
    <p><b>Explanation:</b> A butterfly with 3 rows in upper wings and 2 rows in lower wings.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*             * \n* *         * * \n* * *     * * * \n* * * * * * * * \n* * *     * * * \n* *         * * \n*             *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "*         * \n* *     * * \n* * * * * * \n* *     * * \n*         *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*     * \n* * * * \n*     *", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "*                 * \n* *             * * \n* * *         * * * \n* * * *     * * * * \n* * * * * * * * * * \n* * * *     * * * * \n* * *         * * * \n* *             * * \n*                 *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "*                     * \n* *                 * * \n* * *             * * * \n* * * *         * * * * \n* * * * *     * * * * * \n* * * * * * * * * * * * \n* * * * *     * * * * * \n* * * *         * * * * \n* * *             * * * \n* *                 * * \n*                     *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "*                         * \n* *                     * * \n* * *                 * * * \n* * * *             * * * * \n* * * * *         * * * * * \n* * * * * *     * * * * * * \n* * * * * * * * * * * * * * \n* * * * * *     * * * * * * \n* * * * *         * * * * * \n* * * *             * * * * \n* * *                 * * * \n* *                     * * \n*                         *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "*                             * \n* *                         * * \n* * *                     * * * \n* * * *                 * * * * \n* * * * *             * * * * * \n* * * * * *         * * * * * * \n* * * * * * *     * * * * * * * \n* * * * * * * * * * * * * * * * \n* * * * * * *     * * * * * * * \n* * * * * *         * * * * * * \n* * * * *             * * * * * \n* * * *                 * * * * \n* * *                     * * * \n* *                         * * \n*                             *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "*                                 * \n* *                             * * \n* * *                         * * * \n* * * *                     * * * * \n* * * * *                 * * * * * \n* * * * * *             * * * * * * \n* * * * * * *         * * * * * * * \n* * * * * * * *     * * * * * * * * \n* * * * * * * * * * * * * * * * * * \n* * * * * * * *     * * * * * * * * \n* * * * * * *         * * * * * * * \n* * * * * *             * * * * * * \n* * * * *                 * * * * * \n* * * *                     * * * * \n* * *                         * * * \n* *                             * * \n*                                 *", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        print('*', end=' ')\n    for k in range(2 * (n - i)):\n        print(' ', end=' ')\n    for l in range(i):\n        print('*', end=' ')\n    print()\nfor i in range(n - 1, 0, -1):\n    for j in range(i):\n        print('*', end=' ')\n    for k in range(2 * (n - i)):\n        print(' ', end=' ')\n    for l in range(i):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            for (int k = 1; k <= 2 * (n - i); k++) {\n                System.out.print(\"  \");\n            }\n            for (int l = 1; l <= i; l++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n        for (int i = n - 1; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            for (int k = 1; k <= 2 * (n - i); k++) {\n                System.out.print(\"  \");\n            }\n            for (int l = 1; l <= i; l++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += '* ';\n        }\n        for (let k = 1; k <= 2 * (n - i); k++) {\n            row += '  ';\n        }\n        for (let l = 1; l <= i; l++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 1; i >= 1; i--) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += '* ';\n        }\n        for (let k = 1; k <= 2 * (n - i); k++) {\n            row += '  ';\n        }\n        for (let l = 1; l <= i; l++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        for (int k = 1; k <= 2 * (n - i); k++) {\n            cout << \"  \";\n        }\n        for (int l = 1; l <= i; l++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    for (int i = n - 1; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        for (int k = 1; k <= 2 * (n - i); k++) {\n            cout << \"  \";\n        }\n        for (int l = 1; l <= i; l++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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