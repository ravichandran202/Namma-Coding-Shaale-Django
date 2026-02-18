module.exports = {
  "title": "Alphabet Pattern – Descending Same Letter Triangle",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Print an inverted triangular pattern where each row contains the same letter repeated multiple times, with the number of repetitions decreasing from top to bottom.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>A</code> repeated <code>n</code> times</li>
      <li><b>Row 2:</b> Contains <code>B</code> repeated <code>n-1</code> times</li>
      <li><b>Row 3:</b> Contains <code>C</code> repeated <code>n-2</code> times</li>
      <li><b>Row 4:</b> Contains <code>D</code> repeated <code>n-3</code> times</li>
      <li>This pattern continues until the final row</li>
      <li>Each row contains only its designated letter, repeated a decreasing number of times</li>
      <li>The letter progresses alphabetically with each row</li>
      <li>The repetition count decreases by one with each subsequent row</li>
    </ul>
    <p>This creates an inverted triangular pattern where each row displays a single letter repeated according to its remaining width.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A A A A A 
B B B B 
C C C 
D D 
E </pre>
    <p><b>Explanation:</b> 
    <br></b>Row 1:</b> five <code>A</code>s, 
    <br></b>Row 2:</b> four <code>B</code>s, 
    <br></b>Row 3:</b> three <code>C</code>s, 
    <br></b>Row 4:</b> two <code>D</code>s, 
    <br></b>Row 5:</b> one <code>E</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A A A 
B B 
C </pre>
    <p><b>Explanation:</b> An inverted triangle where each row contains a single letter repeated decreasing times.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A A A A A \nB B B B \nC C C \nD D \nE", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A A A \nB B \nC", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A A \nB", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A A A A A A \nB B B B B \nC C C C \nD D D \nE E \nF", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "A A A A A A A \nB B B B B B \nC C C C C \nD D D D \nE E E \nF F \nG", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "A A A A A A A A \nB B B B B B B \nC C C C C C \nD D D D D \nE E E E \nF F F \nG G \nH", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "A A A A A A A A A \nB B B B B B B B \nC C C C C C C \nD D D D D D \nE E E E E \nF F F F \nG G G \nH H \nI", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "A A A A A A A A A A \nB B B B B B B B B \nC C C C C C C C \nD D D D D D D \nE E E E E E \nF F F F F \nG G G G \nH H H \nI I \nJ", "stdinput": "10" },
    { "id": 9, "input": [], "expected": "A A A A A A A A A A A \nB B B B B B B B B B \nC C C C C C C C C \nD D D D D D D D \nE E E E E E E \nF F F F F F \nG G G G G \nH H H H \nI I I \nJ J \nK", "stdinput": "11" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i):\n        print(chr(65 + i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i; j++) {\n                System.out.print((char)('A' + i) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i; j++) {\n            row += String.fromCharCode(65 + i) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i; j++) {\n            cout << (char)('A' + i) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i):\n        print(chr(65 + i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i; j++) {\n                System.out.print((char)('A' + i) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i; j++) {\n            row += String.fromCharCode(65 + i) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i; j++) {\n            cout << (char)('A' + i) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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