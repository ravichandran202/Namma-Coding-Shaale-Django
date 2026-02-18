module.exports = {
  "title": "Number Pattern – Multiplication Table",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Print an <code>n x n</code> multiplication table where each cell contains the product of its row number and column number. This creates a classic multiplication table starting from 1.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Shows <code>1, 2, 3, 4, ...</code> (1 multiplied by each column number)</li>
      <li><b>Row 2:</b> Shows <code>2, 4, 6, 8, ...</code> (2 multiplied by each column number)</li>
      <li><b>Row 3:</b> Shows <code>3, 6, 9, 12, ...</code> (3 multiplied by each column number)</li>
      <li><b>Row 4:</b> Shows <code>4, 8, 12, 16, ...</code> (4 multiplied by each column number)</li>
      <li>This pattern continues for all rows</li>
      <li>The value at position (i,j) equals <code>i × j</code> where both start from 1</li>
      <li>Each row shows the multiples of its row number</li>
    </ul>
    <p>This creates a complete multiplication table that you might recognize from elementary math classes.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1 2 3 
2 4 6 
3 6 9 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: 1×1=1, 1×2=2, 1×3=3 
    <br>Row 2: 2×1=2, 2×2=4, 2×3=6 
    <br>Row 3: 3×1=3, 3×2=6, 3×3=9</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
1 2 
2 4 </pre>
    <p><b>Explanation:</b> A 2x2 multiplication table showing products of row and column numbers starting from 1.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 \n2 4 6 \n3 6 9", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1 2 \n2 4", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 2 3 4 \n2 4 6 8 \n3 6 9 12 \n4 8 12 16", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "1 2 3 4 5 6 \n2 4 6 8 10 12 \n3 6 9 12 15 18 \n4 8 12 16 20 24 \n5 10 15 20 25 30 \n6 12 18 24 30 36", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "1 2 3 4 5 6 7 \n2 4 6 8 10 12 14 \n3 6 9 12 15 18 21 \n4 8 12 16 20 24 28 \n5 10 15 20 25 30 35 \n6 12 18 24 30 36 42 \n7 14 21 28 35 42 49", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "1 2 3 4 5 6 7 8 \n2 4 6 8 10 12 14 16 \n3 6 9 12 15 18 21 24 \n4 8 12 16 20 24 28 32 \n5 10 15 20 25 30 35 40 \n6 12 18 24 30 36 42 48 \n7 14 21 28 35 42 49 56 \n8 16 24 32 40 48 56 64", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "1 2 3 4 5 6 7 8 9 \n2 4 6 8 10 12 14 16 18 \n3 6 9 12 15 18 21 24 27 \n4 8 12 16 20 24 28 32 36 \n5 10 15 20 25 30 35 40 45 \n6 12 18 24 30 36 42 48 54 \n7 14 21 28 35 42 49 56 63 \n8 16 24 32 40 48 56 64 72 \n9 18 27 36 45 54 63 72 81", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, n + 1):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, n + 1):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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