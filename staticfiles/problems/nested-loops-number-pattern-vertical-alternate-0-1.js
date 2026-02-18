module.exports =  {
  "title": "Number Pattern – Column Alternating 0-1",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>Print an <code>n x n</code> grid where each column alternates between <code>0</code> and <code>1</code> in a repeating pattern. The pattern remains consistent across all rows, creating vertical stripes of alternating values.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Column 1:</b> Always prints <code>0</code></li>
      <li><b>Column 2:</b> Always prints <code>1</code></li>
      <li><b>Column 3:</b> Always prints <code>0</code></li>
      <li><b>Column 4:</b> Always prints <code>1</code></li>
      <li>This alternating pattern continues for all columns</li>
      <li>Every row has the exact same sequence of <code>0</code> and <code>1</code> values</li>
      <li>The pattern creates vertical stripes where odd-numbered columns are <code>0</code> and even-numbered columns are <code>1</code></li>
    </ul>
    <p>This pattern creates a checkerboard-like appearance with consistent vertical stripes across the entire grid.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
0 1 0 1 
0 1 0 1 
0 1 0 1 
0 1 0 1 </pre>
    <p><b>Explanation:</b> All rows have the same pattern: <code>0</code> in columns 1 and 3, <code>1</code> in columns 2 and 4, creating vertical stripes.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
0 1 
0 1 </pre>
    <p><b>Explanation:</b> A 2x2 grid where both rows show the same pattern: <code>0</code> in first column and <code>1</code> in second column.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "0 1 0 1 \n0 1 0 1 \n0 1 0 1 \n0 1 0 1", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "0 1 \n0 1", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "0 1 0 1 0 \n0 1 0 1 0 \n0 1 0 1 0 \n0 1 0 1 0 \n0 1 0 1 0", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "0 1 0 1 0 1 \n0 1 0 1 0 1 \n0 1 0 1 0 1 \n0 1 0 1 0 1 \n0 1 0 1 0 1 \n0 1 0 1 0 1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 \n0 1 0 1 0 1 0", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0 \n0 1 0 1 0 1 0 1 0", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(j % 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((j % 2) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += (j % 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (j % 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(j % 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((j % 2) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += (j % 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (j % 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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