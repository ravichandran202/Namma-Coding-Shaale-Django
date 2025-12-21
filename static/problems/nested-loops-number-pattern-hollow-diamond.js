module.exports ={
  "title": "Star Pattern – Hollow Diamond",
  "difficulty": "hard",
  "acceptance": "82%",

  "description": `
    <p>Print a hollow diamond pattern using stars. The diamond has a hollow center with only the outer boundary filled with stars.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Half:</b></li>
      <ul>
        <li><b>Row 1:</b> Contains maximum leading spaces with <code>1</code> star in center</li>
        <li><b>Row 2:</b> Contains fewer leading spaces with <code>2</code> stars separated by spaces</li>
        <li><b>Row 3:</b> Contains even fewer leading spaces with <code>2</code> stars separated by more spaces</li>
        <li>Continues until the middle row with stars on both edges</li>
      </ul>
      <li><b>Lower Half:</b></li>
      <ul>
        <li><b>Row 1:</b> Contains some leading spaces with stars on both edges</li>
        <li><b>Row 2:</b> Contains more leading spaces with stars separated by fewer spaces</li>
        <li><b>Row 3:</b> Contains even more leading spaces with stars separated by even fewer spaces</li>
        <li>Continues until the final row with <code>1</code> star in center</li>
      </ul>
      <li>The pattern is perfectly symmetrical around both axes</li>
      <li>Only the outer boundary of the diamond is filled with stars</li>
      <li>The interior of the diamond is empty (spaces)</li>
    </ul>
    <p>This creates an elegant hollow diamond shape where only the outline is visible.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * </pre>
    <p><b>Explanation:</b> Upper half: decreasing interior space. Lower half: increasing interior space. Perfect hollow diamond symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * * * * * * 
* * *   * * * 
* *       * * 
*           * 
*           * 
* *       * * 
* * *   * * * 
* * * * * * * </pre>
    <p><b>Explanation:</b> A hollow diamond with 3 rows in upper half and 3 rows in lower half.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * * * * * * \n* * * *     * * * * \n* * *         * * * \n* *             * * \n*                 * \n*                 * \n* *             * * \n* * *         * * * \n* * * *     * * * * \n* * * * * * * * * *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "* * * * * * * * * * * * \n* * * * *     * * * * * \n* * * *         * * * * \n* * *             * * * \n* *                 * * \n*                     * \n*                     * \n* *                 * * \n* * *             * * * \n* * * *         * * * * \n* * * * *     * * * * * \n* * * * * * * * * * * *", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "* * * * * * * * * * * * * * \n* * * * * *     * * * * * * \n* * * * *         * * * * * \n* * * *             * * * * \n* * *                 * * * \n* *                     * * \n*                         * \n*                         * \n* *                     * * \n* * *                 * * * \n* * * *             * * * * \n* * * * *         * * * * * \n* * * * * *     * * * * * * \n* * * * * * * * * * * * * *", "stdinput": "6" },
    { "id": 4, "input": [], "expected": "* * * * * * * * * * * * * * * * \n* * * * * * *     * * * * * * * \n* * * * * *         * * * * * * \n* * * * *             * * * * * \n* * * *                 * * * * \n* * *                     * * * \n* *                         * * \n*                             * \n*                             * \n* *                         * * \n* * *                     * * * \n* * * *                 * * * * \n* * * * *             * * * * * \n* * * * * *         * * * * * * \n* * * * * * *     * * * * * * * \n* * * * * * * * * * * * * * * *", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * * * * * * * * * * \n* * * * * * * *     * * * * * * * * \n* * * * * * *         * * * * * * * \n* * * * * *             * * * * * * \n* * * * *                 * * * * * \n* * * *                     * * * * \n* * *                         * * * \n* *                             * * \n*                                 * \n*                                 * \n* *                             * * \n* * *                         * * * \n* * * *                     * * * * \n* * * * *                 * * * * * \n* * * * * *             * * * * * * \n* * * * * * *         * * * * * * * \n* * * * * * * *     * * * * * * * * \n* * * * * * * * * * * * * * * * * *", "stdinput": "8" }
  ],

  "templates": {
    "python": "n = int(input())+1\nfor i in range(n, 0, -1):\n    for j in range(i):\n        print('*', end=' ')\n    for k in range(2 * (n - i)):\n        print(' ', end=' ')\n    for l in range(i):\n        print('*', end=' ')\n    print()\nfor i in range(1, n + 1):\n    for j in range(i):\n        print('*', end=' ')\n    for k in range(2 * (n - i)):\n        print(' ', end=' ')\n    for l in range(i):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            for (int k = 1; k <= 2 * (n - i); k++) {\n                System.out.print(\"  \");\n            }\n            for (int l = 1; l <= i; l++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            for (int k = 1; k <= 2 * (n - i); k++) {\n                System.out.print(\"  \");\n            }\n            for (int l = 1; l <= i; l++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = n; i >= 1; i--) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += '* ';\n        }\n        for (let k = 1; k <= 2 * (n - i); k++) {\n            row += '  ';\n        }\n        for (let l = 1; l <= i; l++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += '* ';\n        }\n        for (let k = 1; k <= 2 * (n - i); k++) {\n            row += '  ';\n        }\n        for (let l = 1; l <= i; l++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        for (int k = 1; k <= 2 * (n - i); k++) {\n            cout << \"  \";\n        }\n        for (int l = 1; l <= i; l++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        for (int k = 1; k <= 2 * (n - i); k++) {\n            cout << \"  \";\n        }\n        for (int l = 1; l <= i; l++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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