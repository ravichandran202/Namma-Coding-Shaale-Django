module.exports = {
  "title": "Star Pattern – Hourglass",
  "difficulty": "hard",
  "acceptance": "89%",

  "description": `
    <p>Print an hourglass star pattern consisting of two triangles - one inverted and one upright. The pattern creates a symmetrical hourglass shape with stars.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Top Half (Inverted Triangle):</b></li>
      <ul>
        <li>Row 1: Contains <code>n</code> stars with no leading spaces</li>
        <li>Row 2: Contains <code>2</code> leading spaces followed by <code>n-1</code> stars</li>
        <li>Row 3: Contains <code>4</code> leading spaces followed by <code>n-2</code> stars</li>
        <li>Continues until the middle row</li>
      </ul>
      <li><b>Bottom Half (Upright Triangle):</b></li>
      <ul>
        <li>Row 1: Contains <code>n-1</code> leading spaces followed by <code>1</code> star</li>
        <li>Row 2: Contains <code>n-2</code> leading spaces followed by <code>2</code> stars</li>
        <li>Row 3: Contains <code>n-3</code> leading spaces followed by <code>3</code> stars</li>
        <li>Continues until the final row with <code>n</code> stars</li>
      </ul>
      <li>The pattern is perfectly symmetrical around the horizontal axis</li>
    </ul>
    <p>This creates an hourglass shape where stars decrease then increase in a mirrored pattern.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
* * * * 
  * * * 
    * * 
      * 
      * 
    * * 
  * * * 
* * * * </pre>
    <p><b>Explanation:</b> Top half: decreasing stars with increasing spaces. Bottom half: increasing stars with decreasing spaces. Perfect mirror image.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * * 
  * * 
    * 
    * 
  * * 
* * * </pre>
    <p><b>Explanation:</b> A symmetrical hourglass pattern with 3 rows in each half.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * \n  * * * \n    * * \n      * \n      * \n    * * \n  * * * \n* * * *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "* * * \n  * * \n    * \n    * \n  * * \n* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "* \n*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * * \n  * * * * \n    * * * \n      * * \n        * \n        * \n      * * \n    * * * \n  * * * * \n* * * * *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "* * * * * * \n  * * * * * \n    * * * * \n      * * * \n        * * \n          * \n          * \n        * * \n      * * * \n    * * * * \n  * * * * * \n* * * * * *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "* * * * * * * \n  * * * * * * \n    * * * * * \n      * * * * \n        * * * \n          * * \n            * \n            * \n          * * \n        * * * \n      * * * * \n    * * * * * \n  * * * * * * \n* * * * * * *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "* * * * * * * * \n  * * * * * * * \n    * * * * * * \n      * * * * * \n        * * * * \n          * * * \n            * * \n              * \n              * \n            * * \n          * * * \n        * * * * \n      * * * * * \n    * * * * * * \n  * * * * * * * \n* * * * * * * *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "* * * * * * * * * \n  * * * * * * * * \n    * * * * * * * \n      * * * * * * \n        * * * * * \n          * * * * \n            * * * \n              * * \n                * \n                * \n              * * \n            * * * \n          * * * * \n        * * * * * \n      * * * * * * \n    * * * * * * * \n  * * * * * * * * \n* * * * * * * * *", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for s in range(i):\n        print(' ', end=' ')\n    for j in range(n - i):\n        print('*', end=' ')\n    print()\nfor i in range(1, n + 1):\n    for s in range(n - i):\n        print(' ', end=' ')\n    for j in range(i):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int s = 0; s < i; s++) {\n                System.out.print(\"  \");\n            }\n            for (int j = 0; j < n - i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) {\n                System.out.print(\"  \");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let s = 0; s < i; s++) {\n            row += '  ';\n        }\n        for (let j = 0; j < n - i; j++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let s = 1; s <= n - i; s++) {\n            row += '  ';\n        }\n        for (let j = 1; j <= i; j++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int s = 0; s < i; s++) {\n            cout << \"  \";\n        }\n        for (int j = 0; j < n - i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    for (int i = 1; i <= n; i++) {\n        for (int s = 1; s <= n - i; s++) {\n            cout << \"  \";\n        }\n        for (int j = 1; j <= i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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