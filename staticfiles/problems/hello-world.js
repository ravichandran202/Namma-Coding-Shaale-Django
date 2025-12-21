module.exports = {
  "title": "Alphabet Pattern – Reverse Letter Triangle",
  "difficulty": "medium",
  "acceptance": "83%",

  "description": `
    <p>Print a triangular pattern where each row displays letters in descending order, starting from the current row's letter and counting down to <code>A</code>.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains letter <code>A</code></li>
      <li><b>Row 2:</b> Contains letters <code>B A</code></li>
      <li><b>Row 3:</b> Contains letters <code>C B A</code></li>
      <li><b>Row 4:</b> Contains letters <code>D C B A</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row starts with the letter corresponding to the row number and counts down to A</li>
      <li>The sequence in each row is in reverse alphabetical order</li>
      <li>The starting letter of each row progresses alphabetically</li>
    </ul>
    <p>This creates a triangular pattern where each row shows a descending sequence of letters from the row's starting letter down to A.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A 
B A 
C B A 
D C B A </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>B A</code>, 
    <br><b>Row 3:</b> <code>C B A</code>, 
    <br><b>Row 4:</b> <code>D C B A</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
B A 
C B A </pre>
    <p><b>Explanation:</b> A triangular pattern where each row counts down from its starting letter to A.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nB A \nC B A \nD C B A", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A \nB A \nC B A", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nB A", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nB A \nC B A \nD C B A \nE D C B A", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A \nB A \nC B A \nD C B A \nE D C B A \nF E D C B A", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A \nB A \nC B A \nD C B A \nE D C B A \nF E D C B A \nG F E D C B A", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A \nB A \nC B A \nD C B A \nE D C B A \nF E D C B A \nG F E D C B A \nH G F E D C B A", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i, 0, -1):\n        print(chr(65 + j - 1), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = i; j >= 1; j--) {\n                System.out.print((char)('A' + j - 1) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = i; j >= 1; j--) {\n            row += String.fromCharCode(65 + j - 1) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = i; j >= 1; j--) {\n            cout << (char)('A' + j - 1) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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