module.exports = {
  "title": "Alphabet Pattern – Row Letter Grid",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>Print an <code>n x n</code> grid where each row contains the same letter repeated across all columns. The letters progress alphabetically from row to row.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> All columns contain the letter <code>A</code></li>
      <li><b>Row 2:</b> All columns contain the letter <code>B</code></li>
      <li><b>Row 3:</b> All columns contain the letter <code>C</code></li>
      <li><b>Row 4:</b> All columns contain the letter <code>D</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row contains the same letter repeated <code>n</code> times</li>
      <li>Letters progress sequentially through the alphabet</li>
      <li>The pattern creates horizontal stripes of identical letters</li>
    </ul>
    <p>This creates a grid where each row is filled with a single letter, creating horizontal bands that progress alphabetically down the grid.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A A A A 
B B B B 
C C C C 
D D D D </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> all <code>A's</code>, 
    <br><b>Row 2:</b> all <code>B's</code>, 
    <br><b>Row 3:</b> all <code>C's</code>, 
    <br><b>Row 4:</b> all <code>D's</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A A A 
B B B 
C C C </pre>
    <p><b>Explanation:</b> A 3x3 grid with each row containing a single repeated letter.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A A A A \nB B B B \nC C C C \nD D D D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A A A \nB B B \nC C C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A A \nB B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A A A A A \nB B B B B \nC C C C C \nD D D D D \nE E E E E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A A A A A A \nB B B B B B \nC C C C C C \nD D D D D D \nE E E E E E \nF F F F F F", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A A A A A A A \nB B B B B B B \nC C C C C C C \nD D D D D D D \nE E E E E E E \nF F F F F F F \nG G G G G G G", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A A A A A A A A \nB B B B B B B B \nC C C C C C C C \nD D D D D D D D \nE E E E E E E E \nF F F F F F F F \nG G G G G G G G \nH H H H H H H H", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A A A A A A A A A \nB B B B B B B B B \nC C C C C C C C C \nD D D D D D D D D \nE E E E E E E E E \nF F F F F F F F F \nG G G G G G G G G \nH H H H H H H H H \nI I I I I I I I I", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A A A A A A A A A A \nB B B B B B B B B B \nC C C C C C C C C C \nD D D D D D D D D D \nE E E E E E E E E E \nF F F F F F F F F F \nG G G G G G G G G G \nH H H H H H H H H H \nI I I I I I I I I I \nJ J J J J J J J J J", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(chr(65 + i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((char)('A' + i) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += String.fromCharCode(65 + i) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (char)('A' + i) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(chr(65 + i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((char)('A' + i) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += String.fromCharCode(65 + i) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (char)('A' + i) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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