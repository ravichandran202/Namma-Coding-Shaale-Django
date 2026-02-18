module.exports = {
  "title": "Star Pattern – Simple Hollow Diamond",
  "difficulty": "hard",
  "acceptance": "86%",

  "description": `
    <p>Print a hollow diamond pattern using stars. Only the outer boundary of the diamond is filled with stars, while the interior remains empty.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Half:</b></li>
      <ul>
        <li>Each row has decreasing leading spaces</li>
        <li>First and last position of each row are stars</li>
        <li>Interior positions are empty spaces</li>
      </ul>
      <li><b>Lower Half:</b></li>
      <ul>
        <li>Each row has increasing leading spaces</li>
        <li>First and last position of each row are stars</li>
        <li>Interior positions are empty spaces</li>
      </ul>
      <li>The diamond is perfectly symmetrical</li>
      <li>Only the outline of the diamond is visible</li>
      <li>The top and bottom points are single stars</li>
    </ul>
    <p>This creates an elegant diamond outline where only the perimeter is filled with stars.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
   *
  * *
 *   *
*     *
 *   *
  * *
   *</pre>
    <p><b>Explanation:</b> 
    <br><b>Upper half:</b> increasing width with stars at edges. 
    <br><b>Lower half:</b> decreasing width with stars at edges. 
    <br>Perfect diamond symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
  *
 * *
*   *
 * *
  *</pre>
    <p><b>Explanation:</b> A 3-row hollow diamond with only the outline filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "  *\n * *\n*   *\n * *\n  *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": " *\n* *\n *", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "     *\n    * *\n   *   *\n  *     *\n *       *\n*         *\n *       *\n  *     *\n   *   *\n    * *\n     *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "      *\n     * *\n    *   *\n   *     *\n  *       *\n *         *\n*           *\n *         *\n  *       *\n   *     *\n    *   *\n     * *\n      *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "       *\n      * *\n     *   *\n    *     *\n   *       *\n  *         *\n *           *\n*             *\n *           *\n  *         *\n   *       *\n    *     *\n     *   *\n      * *\n       *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "        *\n       * *\n      *   *\n     *     *\n    *       *\n   *         *\n  *           *\n *             *\n*               *\n *             *\n  *           *\n   *         *\n    *       *\n     *     *\n      *   *\n       * *\n        *", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "         *\n        * *\n       *   *\n      *     *\n     *       *\n    *         *\n   *           *\n  *             *\n *               *\n*                 *\n *               *\n  *             *\n   *           *\n    *         *\n     *       *\n      *     *\n       *   *\n        * *\n         *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    print('*', end='')\n    if i > 0:\n        for k in range(2 * i - 1):\n            print(' ', end='')\n        print('*', end='')\n    print()\nfor i in range(n - 2, -1, -1):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    print('*', end='')\n    if i > 0:\n        for k in range(2 * i - 1):\n            print(' ', end='')\n        print('*', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            System.out.print(\"*\");\n            if (i > 0) {\n                for (int k = 0; k < 2 * i - 1; k++) {\n                    System.out.print(\" \");\n                }\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n        for (int i = n - 2; i >= 0; i--) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            System.out.print(\"*\");\n            if (i > 0) {\n                for (int k = 0; k < 2 * i - 1; k++) {\n                    System.out.print(\" \");\n                }\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = ' '.repeat(n - i - 1) + '*';\n        if (i > 0) {\n            row += ' '.repeat(2 * i - 1) + '*';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 2; i >= 0; i--) {\n        let row = ' '.repeat(n - i - 1) + '*';\n        if (i > 0) {\n            row += ' '.repeat(2 * i - 1) + '*';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        cout << \"*\";\n        if (i > 0) {\n            for (int k = 0; k < 2 * i - 1; k++) {\n                cout << \" \";\n            }\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        cout << \"*\";\n        if (i > 0) {\n            for (int k = 0; k < 2 * i - 1; k++) {\n                cout << \" \";\n            }\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    print('*', end='')\n    if i > 0:\n        for k in range(2 * i - 1):\n            print(' ', end='')\n        print('*', end='')\n    print()\nfor i in range(n - 2, -1, -1):\n    for k in range(n - i - 1):\n        print(' ', end='')\n    print('*', end='')\n    if i > 0:\n        for k in range(2 * i - 1):\n            print(' ', end='')\n        print('*', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            System.out.print(\"*\");\n            if (i > 0) {\n                for (int k = 0; k < 2 * i - 1; k++) {\n                    System.out.print(\" \");\n                }\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n        for (int i = n - 2; i >= 0; i--) {\n            for (int k = 0; k < n - i - 1; k++) {\n                System.out.print(\" \");\n            }\n            System.out.print(\"*\");\n            if (i > 0) {\n                for (int k = 0; k < 2 * i - 1; k++) {\n                    System.out.print(\" \");\n                }\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = ' '.repeat(n - i - 1) + '*';\n        if (i > 0) {\n            row += ' '.repeat(2 * i - 1) + '*';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 2; i >= 0; i--) {\n        let row = ' '.repeat(n - i - 1) + '*';\n        if (i > 0) {\n            row += ' '.repeat(2 * i - 1) + '*';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        cout << \"*\";\n        if (i > 0) {\n            for (int k = 0; k < 2 * i - 1; k++) {\n                cout << \" \";\n            }\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n        for (int k = 0; k < n - i - 1; k++) {\n            cout << \" \";\n        }\n        cout << \"*\";\n        if (i > 0) {\n            for (int k = 0; k < 2 * i - 1; k++) {\n                cout << \" \";\n            }\n            cout << \"*\";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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