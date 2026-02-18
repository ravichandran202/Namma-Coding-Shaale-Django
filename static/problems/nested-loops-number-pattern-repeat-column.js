module.exports ={
  "title": "Number Pattern – Repeated Columns",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Print an <code>n x n</code> grid where each row contains the same sequence of numbers from <code>1</code> to <code>n</code>. Every row in the grid is identical and displays numbers in increasing order.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>All rows:</b> Print the sequence <code>1 2 3 ... n</code></li>
      <li><b>Row 1:</b> <code>1 2 3 ... n</code></li>
      <li><b>Row 2:</b> <code>1 2 3 ... n</code></li>
      <li><b>Row 3:</b> <code>1 2 3 ... n</code></li>
      <li>Continue this pattern until <b>Row n</b></li>
      <li>Every row contains the exact same sequence of numbers</li>
      <li>Numbers increase from left to right within each row</li>
    </ul>
    <p>This pattern creates vertical stripes where each column has a consistent number, and all rows are identical copies of the number sequence.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1 2 3 
1 2 3 
1 2 3 </pre>
    <p><b>Explanation:</b> Three identical rows, each containing the sequence <code>1 2 3</code>. All rows display the same numbers in the same order.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
1 2 3 4 
1 2 3 4 
1 2 3 4 
1 2 3 4 </pre>
    <p><b>Explanation:</b> Four identical rows, each containing the sequence <code>1 2 3 4</code>. The pattern repeats the same number sequence in every row.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 \n1 2 3 \n1 2 3", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1 2 3 4 \n1 2 3 4 \n1 2 3 4 \n1 2 3 4", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 2 \n1 2", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "1 2 3 4 5 \n1 2 3 4 5 \n1 2 3 4 5 \n1 2 3 4 5 \n1 2 3 4 5", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "1 2 3 4 5 6 \n1 2 3 4 5 6 \n1 2 3 4 5 6 \n1 2 3 4 5 6 \n1 2 3 4 5 6 \n1 2 3 4 5 6", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(1, n + 1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 1; j <= n; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 1; j <= n; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 1; j <= n; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(1, n + 1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 1; j <= n; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 1; j <= n; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 1; j <= n; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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