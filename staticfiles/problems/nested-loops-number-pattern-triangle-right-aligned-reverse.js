module.exports = {
  "title": "Star Pattern – Right-Aligned Reverse Triangle",
  "difficulty": "hard",
  "acceptance": "91%",

  "description": `
    <p>Print a right-aligned star triangle that decreases in width from top to bottom. The pattern creates a triangular shape aligned to the right side with stars filling from the right.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>n</code> stars with no leading spaces</li>
      <li><b>Row 2:</b> Contains <code>2</code> leading spaces followed by <code>n-1</code> stars</li>
      <li><b>Row 3:</b> Contains <code>4</code> leading spaces followed by <code>n-2</code> stars</li>
      <li><b>Row 4:</b> Contains <code>6</code> leading spaces followed by <code>n-3</code> stars</li>
      <li>This pattern continues until the final row</li>
      <li>Each row has increasing leading spaces and decreasing stars</li>
      <li>The number of stars decreases by one with each row</li>
      <li>The number of leading spaces increases by two with each row</li>
    </ul>
    <p>This creates a right-aligned triangular pattern where stars appear to be "falling" from the right side as you move down the rows.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
* * * * 
  * * * 
    * * 
      * </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: 4 stars, 
    <br>Row 2: 2 spaces + 3 stars, 
    <br>Row 3: 4 spaces + 2 stars, 
    <br>Row 4: 6 spaces + 1 star.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * * 
  * * 
    * </pre>
    <p><b>Explanation:</b> A right-aligned triangle with 3 rows showing decreasing stars and increasing spaces.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * \n  * * * \n    * * \n      *", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "* * * \n  * * \n    *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * * \n  * * * * \n    * * * \n      * * \n        *", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "* * * * * * \n  * * * * * \n    * * * * \n      * * * \n        * * \n          *", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "* * * * * * * \n  * * * * * * \n    * * * * * \n      * * * * \n        * * * \n          * * \n            *", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "* * * * * * * * \n  * * * * * * * \n    * * * * * * \n      * * * * * \n        * * * * \n          * * * \n            * * \n              *", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "* * * * * * * * * \n  * * * * * * * * \n    * * * * * * * \n      * * * * * * \n        * * * * * \n          * * * * \n            * * * \n              * * \n                *", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "* * * * * * * * * * \n  * * * * * * * * * \n    * * * * * * * * \n      * * * * * * * \n        * * * * * * \n          * * * * * \n            * * * * \n              * * * \n                * * \n                  *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for s in range(i):\n        print(' ', end=' ')\n    for j in range(n - i):\n        print('*', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int s = 0; s < i; s++) {\n                System.out.print(\"  \");\n            }\n            for (int j = 0; j < n - i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let s = 0; s < i; s++) {\n            row += '  ';\n        }\n        for (let j = 0; j < n - i; j++) {\n            row += '* ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int s = 0; s < i; s++) {\n            cout << \"  \";\n        }\n        for (int j = 0; j < n - i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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