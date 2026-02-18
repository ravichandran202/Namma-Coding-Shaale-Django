module.exports = {
  "title": "Star Pattern – Tilted Rhombus",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print a tilted rhombus shape using stars. The pattern creates a parallelogram that appears to be sliding to the right as it moves down.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>n-1</code> leading spaces followed by <code>n</code> stars</li>
      <li><b>Row 2:</b> Contains <code>n-2</code> leading spaces followed by <code>n</code> stars</li>
      <li><b>Row 3:</b> Contains <code>n-3</code> leading spaces followed by <code>n</code> stars</li>
      <li><b>Row 4:</b> Contains <code>n-4</code> leading spaces followed by <code>n</code> stars</li>
      <li>This pattern continues until the final row which has no leading spaces</li>
      <li>Each row contains exactly <code>n</code> stars</li>
      <li>The number of leading spaces decreases by two with each row</li>
      <li>The shape maintains constant width but shifts position</li>
    </ul>
    <p>This creates a rhombus (parallelogram) shape where each row has the same number of stars but starts at different horizontal positions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
      * * * * 
    * * * * 
  * * * * 
* * * * </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: 6 spaces + 4 stars, 
    <br>Row 2: 4 spaces + 4 stars, 
    <br>Row 3: 2 spaces + 4 stars, 
    <br>Row 4: 0 spaces + 4 stars.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
    * * * 
  * * * 
* * * </pre>
    <p><b>Explanation:</b> A tilted rhombus with 3 rows, each containing 3 stars but starting at different positions.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "      * * * * \n    * * * * \n  * * * * \n* * * *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "    * * * \n  * * * \n* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "        * * * * * \n      * * * * * \n    * * * * * \n  * * * * * \n* * * * *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "          * * * * * * \n        * * * * * * \n      * * * * * * \n    * * * * * * \n  * * * * * * \n* * * * * *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "            * * * * * * * \n          * * * * * * * \n        * * * * * * * \n      * * * * * * * \n    * * * * * * * \n  * * * * * * * \n* * * * * * *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "              * * * * * * * * \n            * * * * * * * * \n          * * * * * * * * \n        * * * * * * * * \n      * * * * * * * * \n    * * * * * * * * \n  * * * * * * * * \n* * * * * * * *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "                * * * * * * * * * \n              * * * * * * * * * \n            * * * * * * * * * \n          * * * * * * * * * \n        * * * * * * * * * \n      * * * * * * * * * \n    * * * * * * * * * \n  * * * * * * * * * \n* * * * * * * * *", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "                  * * * * * * * * * * \n                * * * * * * * * * * \n              * * * * * * * * * * \n            * * * * * * * * * * \n          * * * * * * * * * * \n        * * * * * * * * * * \n      * * * * * * * * * * \n    * * * * * * * * * * \n  * * * * * * * * * * \n* * * * * * * * * *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i - 1):\n        print(' ', end=' ')\n    for k in range(n):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < n; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i - 1; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < n; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < n; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i - 1):\n        print(' ', end=' ')\n    for k in range(n):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < n; k++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i - 1; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < n; k++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < n; k++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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