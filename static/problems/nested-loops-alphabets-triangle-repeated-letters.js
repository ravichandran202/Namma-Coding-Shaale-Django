module.exports = {
  "title": "Alphabet Pattern – Repeated Letter Triangle",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Print a triangular pattern where each row contains the same letter repeated multiple times. The letters progress alphabetically with each row, and the number of repetitions equals the row number.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>A</code> repeated <code>1</code> time</li>
      <li><b>Row 2:</b> Contains <code>B</code> repeated <code>2</code> times</li>
      <li><b>Row 3:</b> Contains <code>C</code> repeated <code>3</code> times</li>
      <li><b>Row 4:</b> Contains <code>D</code> repeated <code>4</code> times</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row contains only its designated letter, repeated as many times as the row number</li>
      <li>The pattern forms a right-angled triangle where the width increases with each row</li>
      <li>Both the letter and repetition count correspond to the row position</li>
    </ul>
    <p>This creates a staircase-like pattern where each row displays a single letter repeated according to its position in the triangle.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A 
B B 
C C C 
D D D D 
E E E E E </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> one <code>A</code>, 
    <br><b>Row 2:</b> two <code>B</code>s, 
    <br><b>Row 3:</b> three <code>C</code>s, 
    <br><b>Row 4:</b> four <code>D</code>s, Row 5: five <code>E</code>s.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
B B 
C C C </pre>
    <p><b>Explanation:</b> A triangular pattern where each row letter corresponds to its position and is repeated according to the row number.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A \nB B \nC C C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nB B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F \nG G G G G G G", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F \nG G G G G G G \nH H H H H H H H", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F \nG G G G G G G \nH H H H H H H H \nI I I I I I I I I", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F \nG G G G G G G \nH H H H H H H H \nI I I I I I I I I \nJ J J J J J J J J J", "stdinput": "10" },
    { "id": 9, "input": [], "expected": "A \nB B \nC C C \nD D D D \nE E E E E \nF F F F F F \nG G G G G G G \nH H H H H H H H \nI I I I I I I I I \nJ J J J J J J J J J \nK K K K K K K K K K K", "stdinput": "11" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + i) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + i) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + i) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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