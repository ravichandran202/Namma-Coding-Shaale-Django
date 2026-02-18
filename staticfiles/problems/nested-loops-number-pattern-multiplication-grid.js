module.exports = {
  "title": "Number Pattern – Multiplication Grid",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>Print an <code>n x n</code> grid where each cell contains the product of its row index and column index. The grid displays a multiplication table pattern starting from zero.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 0:</b> All columns show <code>0</code> (since 0 multiplied by any number is 0)</li>
      <li><b>Row 1:</b> Shows <code>0, 1, 2, 3, ...</code> (1 multiplied by each column index)</li>
      <li><b>Row 2:</b> Shows <code>0, 2, 4, 6, ...</code> (2 multiplied by each column index)</li>
      <li><b>Row 3:</b> Shows <code>0, 3, 6, 9, ...</code> (3 multiplied by each column index)</li>
      <li>This pattern continues for all rows</li>
      <li>The value at position (i,j) equals <code>i × j</code></li>
      <li>Row and column indices start from <code>0</code></li>
    </ul>
    <p>This creates a multiplication table where you can see the products of all row and column combinations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
0 0 0 
0 1 2 
0 2 4 </pre>
    <p><b>Explanation:</b> Row 0: 0×0=0, 0×1=0, 0×2=0 | Row 1: 1×0=0, 1×1=1, 1×2=2 | Row 2: 2×0=0, 2×1=2, 2×2=4</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
0 0 
0 1 </pre>
    <p><b>Explanation:</b> A 2x2 multiplication grid showing products of row and column indices.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "0 0 0 \n0 1 2 \n0 2 4", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "0 0 \n0 1", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "0 0 0 0 \n0 1 2 3 \n0 2 4 6 \n0 3 6 9", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "0 0 0 0 0 \n0 1 2 3 4 \n0 2 4 6 8 \n0 3 6 9 12 \n0 4 8 12 16", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "0 0 0 0 0 0 \n0 1 2 3 4 5 \n0 2 4 6 8 10 \n0 3 6 9 12 15 \n0 4 8 12 16 20 \n0 5 10 15 20 25", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "0 0 0 0 0 0 0 \n0 1 2 3 4 5 6 \n0 2 4 6 8 10 12 \n0 3 6 9 12 15 18 \n0 4 8 12 16 20 24 \n0 5 10 15 20 25 30 \n0 6 12 18 24 30 36", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "0 0 0 0 0 0 0 0 \n0 1 2 3 4 5 6 7 \n0 2 4 6 8 10 12 14 \n0 3 6 9 12 15 18 21 \n0 4 8 12 16 20 24 28 \n0 5 10 15 20 25 30 35 \n0 6 12 18 24 30 36 42 \n0 7 14 21 28 35 42 49", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "0 0 0 0 0 0 0 0 0 \n0 1 2 3 4 5 6 7 8 \n0 2 4 6 8 10 12 14 16 \n0 3 6 9 12 15 18 21 24 \n0 4 8 12 16 20 24 28 32 \n0 5 10 15 20 25 30 35 40 \n0 6 12 18 24 30 36 42 48 \n0 7 14 21 28 35 42 49 56 \n0 8 16 24 32 40 48 56 64", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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