module.exports = {
  "title": "Star Pattern – Hourglass",
  "difficulty": "hard",
  "acceptance": "84%",

  "description": `
    <p>Print an hourglass pattern using stars. The hourglass consists of an inverted pyramid followed by an upright pyramid, creating a symmetrical hourglass shape.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Half (Inverted Pyramid):</b></li>
      <ul>
        <li>Row 1: Contains no leading spaces followed by the maximum number of stars</li>
        <li>Row 2: Contains <code>2</code> leading spaces followed by fewer stars</li>
        <li>Row 3: Contains <code>4</code> leading spaces followed by even fewer stars</li>
        <li>Continues until the middle row with the fewest stars</li>
      </ul>
      <li><b>Lower Half (Upright Pyramid):</b></li>
      <ul>
        <li>Row 1: Contains some leading spaces followed by a few stars</li>
        <li>Row 2: Contains fewer leading spaces followed by more stars</li>
        <li>Row 3: Contains even fewer leading spaces followed by even more stars</li>
        <li>Continues until the final row with the maximum stars</li>
      </ul>
      <li>The pattern is perfectly symmetrical around the horizontal axis</li>
      <li>Each row has an odd number of stars</li>
      <li>The hourglass appears to be "pinched" in the middle</li>
    </ul>
    <p>This creates a classic hourglass shape where the upper and lower halves mirror each other perfectly.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
* * * * * * *
  * * * * *
    * * *
      *
    * * *
  * * * * *
* * * * * * * </pre>
    <p><b>Explanation:</b> Upper half: decreasing stars with increasing spaces. Lower half: increasing stars with decreasing spaces. Perfect hourglass symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * * * *
  * * *
    *
  * * *
* * * * * </pre>
    <p><b>Explanation:</b> An hourglass with 3 rows in upper half and 3 rows in lower half.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * * * \n  * * * * * \n    * * * \n      * \n    * * * \n  * * * * * \n* * * * * * *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "* * * * * \n  * * * \n    * \n  * * * \n* * * * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "* * * \n  * \n* * *", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "* * * * * * * * * \n  * * * * * * * \n    * * * * * \n      * * * \n        * \n      * * * \n    * * * * * \n  * * * * * * * \n* * * * * * * * *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * * * \n  * * * * * * * * * \n    * * * * * * * \n      * * * * * \n        * * * \n          * \n        * * * \n      * * * * * \n    * * * * * * * \n  * * * * * * * * * \n* * * * * * * * * * *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "* * * * * * * * * * * * * \n  * * * * * * * * * * * \n    * * * * * * * * * \n      * * * * * * * \n        * * * * * \n          * * * \n            * \n          * * * \n        * * * * * \n      * * * * * * * \n    * * * * * * * * * \n  * * * * * * * * * * * \n* * * * * * * * * * * * *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "* * * * * * * * * * * * * * * \n  * * * * * * * * * * * * * \n    * * * * * * * * * * * \n      * * * * * * * * * \n        * * * * * * * \n          * * * * * \n            * * * \n              * \n            * * * \n          * * * * * \n        * * * * * * * \n      * * * * * * * * * \n    * * * * * * * * * * * \n  * * * * * * * * * * * * * \n* * * * * * * * * * * * * * *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "* * * * * * * * * * * * * * * * * \n  * * * * * * * * * * * * * * * \n    * * * * * * * * * * * * * \n      * * * * * * * * * * * \n        * * * * * * * * * \n          * * * * * * * \n            * * * * * \n              * * * \n                * \n              * * * \n            * * * * * \n          * * * * * * * \n        * * * * * * * * * \n      * * * * * * * * * * * \n    * * * * * * * * * * * * * \n  * * * * * * * * * * * * * * * \n* * * * * * * * * * * * * * * * *", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i):\n        print(' ', end=' ')\n    for k in range(2 * (n - i) - 1):\n        print('*', end=' ')\n    print()\nfor i in range(n - 2, -1, -1):\n    for j in range(i):\n        print(' ', end=' ')\n    for k in range(2 * (n - i) - 1):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < 2 * (n - i) - 1; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n        for (int i = n - 2; i >= 0; i--) {\n            for (int j = 0; j < i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < 2 * (n - i) - 1; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < 2 * (n - i) - 1; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 2; i >= 0; i--) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < 2 * (n - i) - 1; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < 2 * (n - i) - 1; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n        for (int j = 0; j < i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < 2 * (n - i) - 1; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i):\n        print(' ', end=' ')\n    for k in range(2 * (n - i) - 1):\n        print('*', end=' ')\n    print()\nfor i in range(n - 2, -1, -1):\n    for j in range(i):\n        print(' ', end=' ')\n    for k in range(2 * (n - i) - 1):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < 2 * (n - i) - 1; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n        for (int i = n - 2; i >= 0; i--) {\n            for (int j = 0; j < i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < 2 * (n - i) - 1; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < 2 * (n - i) - 1; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 2; i >= 0; i--) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < 2 * (n - i) - 1; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < 2 * (n - i) - 1; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    for (int i = n - 2; i >= 0; i--) {\n        for (int j = 0; j < i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < 2 * (n - i) - 1; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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