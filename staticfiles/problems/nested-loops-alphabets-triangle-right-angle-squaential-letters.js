module.exports = {
  "title": "Alphabet Pattern – Right-Aligned Sequential Triangle",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Print a right-aligned triangular pattern where each row displays letters starting from <code>A</code> up to the current row's letter, with appropriate leading spaces to create a right-aligned effect.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains maximum leading spaces followed by <code>A</code></li>
      <li><b>Row 2:</b> Contains fewer leading spaces followed by <code>A B</code></li>
      <li><b>Row 3:</b> Contains even fewer leading spaces followed by <code>A B C</code></li>
      <li><b>Row 4:</b> Contains minimum leading spaces followed by <code>A B C D</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row has decreasing leading spaces</li>
      <li>Each row shows sequential letters from A up to the row's ending letter</li>
      <li>The triangle is perfectly right-aligned</li>
    </ul>
    <p>This creates a right-aligned triangular pattern where letters progress sequentially and the triangle appears to be pushed against the right side.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
      A 
    A B 
  A B C 
A B C D </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> 6 spaces + <code>A</code>, 
    <br><b>Row 2:</b> 4 spaces + <code>A B</code>, 
    <br><b>Row 3:</b> 2 spaces + <code>A B C</code>, 
    <br><b>Row 4:</b> 0 spaces + <code>A B C D</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
    A 
  A B 
A B C </pre>
    <p><b>Explanation:</b> A right-aligned triangle with 3 rows showing sequential letters.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "      A \n    A B \n  A B C \nA B C D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "    A \n  A B \nA B C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "  A \nA B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "        A \n      A B \n    A B C \n  A B C D \nA B C D E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "          A \n        A B \n      A B C \n    A B C D \n  A B C D E \nA B C D E F", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "            A \n          A B \n        A B C \n      A B C D \n    A B C D E \n  A B C D E F \nA B C D E F G", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "              A \n            A B \n          A B C \n        A B C D \n      A B C D E \n    A B C D E F \n  A B C D E F G \nA B C D E F G H", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n - i):\n        print(' ', end=' ')\n    for k in range(i):\n        print(chr(65 + k), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n - i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < i; k++) {\n                System.out.print((char)('A' + k) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n - i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < i; k++) {\n            row += String.fromCharCode(65 + k) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < i; k++) {\n            cout << (char)('A' + k) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n - i):\n        print(' ', end=' ')\n    for k in range(i):\n        print(chr(65 + k), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n - i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < i; k++) {\n                System.out.print((char)('A' + k) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n - i; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < i; k++) {\n            row += String.fromCharCode(65 + k) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < i; k++) {\n            cout << (char)('A' + k) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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