module.exports = {
  "title": "Alphabet Pattern – Column Letter Grid",
  "difficulty": "easy",
  "acceptance": "91%",

  "description": `
    <p>Print an <code>n x n</code> grid where each column contains sequential letters from A onward, and this pattern is repeated across all rows.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Column 1:</b> All rows contain the letter <code>A</code></li>
      <li><b>Column 2:</b> All rows contain the letter <code>B</code></li>
      <li><b>Column 3:</b> All rows contain the letter <code>C</code></li>
      <li><b>Column 4:</b> All rows contain the letter <code>D</code></li>
      <li>This pattern continues until <b>Column n</b></li>
      <li>Each row contains the complete alphabet sequence from A up to the nth letter</li>
      <li>The same letter sequence is repeated in every row</li>
      <li>The pattern creates vertical stripes of sequential letters</li>
    </ul>
    <p>This creates a grid where each row shows the same progression of letters from A onward, creating consistent vertical patterns across the grid.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A B C D 
A B C D 
A B C D 
A B C D </pre>
    <p><b>Explanation:</b> All four rows contain the same sequence: <code>A B C D</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A B C 
A B C 
A B C </pre>
    <p><b>Explanation:</b> A 3x3 grid where every row shows the sequence <code>A B C</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A B C D \nA B C D \nA B C D \nA B C D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A B C \nA B C \nA B C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A B \nA B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A B C D E \nA B C D E \nA B C D E \nA B C D E \nA B C D E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A B C D E F \nA B C D E F \nA B C D E F \nA B C D E F \nA B C D E F \nA B C D E F", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A B C D E F G \nA B C D E F G \nA B C D E F G \nA B C D E F G \nA B C D E F G \nA B C D E F G \nA B C D E F G", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A B C D E F G H \nA B C D E F G H \nA B C D E F G H \nA B C D E F G H \nA B C D E F G H \nA B C D E F G H \nA B C D E F G H \nA B C D E F G H", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I \nA B C D E F G H I", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J \nA B C D E F G H I J", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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