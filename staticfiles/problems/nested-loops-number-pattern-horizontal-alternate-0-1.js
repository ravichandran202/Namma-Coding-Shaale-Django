module.exports =  {
  "title": "Number Pattern – Row Alternating 0-1",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Print an <code>n x n</code> grid where each row alternates between all <code>0</code>s and all <code>1</code>s in a repeating pattern. The pattern creates horizontal stripes where entire rows have the same value.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> All columns print <code>0</code></li>
      <li><b>Row 2:</b> All columns print <code>1</code></li>
      <li><b>Row 3:</b> All columns print <code>0</code></li>
      <li><b>Row 4:</b> All columns print <code>1</code></li>
      <li>This alternating pattern continues for all rows</li>
      <li>Every column within a row has the exact same value</li>
      <li>The pattern creates horizontal stripes where odd-numbered rows are <code>0</code> and even-numbered rows are <code>1</code></li>
    </ul>
    <p>This pattern creates a striped appearance with consistent horizontal bands across the entire grid.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
0 0 0 0 
1 1 1 1 
0 0 0 0 
1 1 1 1 </pre>
    <p><b>Explanation:</b> Rows alternate between all <code>0</code>s and all <code>1</code>s. Row 1 has all <code>0</code>s, Row 2 has all <code>1</code>s, Row 3 has all <code>0</code>s, and Row 4 has all <code>1</code>s.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
0 0 
1 1 </pre>
    <p><b>Explanation:</b> A 2x2 grid where Row 1 shows all <code>0</code>s and Row 2 shows all <code>1</code>s, creating two horizontal stripes.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "0 0 0 0 \n1 1 1 1 \n0 0 0 0 \n1 1 1 1", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "0 0 \n1 1", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "0 0 0 0 0 \n1 1 1 1 1 \n0 0 0 0 0 \n1 1 1 1 1 \n0 0 0 0 0", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "0 0 0 0 0 0 \n1 1 1 1 1 1 \n0 0 0 0 0 0 \n1 1 1 1 1 1 \n0 0 0 0 0 0 \n1 1 1 1 1 1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 \n0 0 0 0 0 0 0", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "0 0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 1 \n0 0 0 0 0 0 0 0 0 0 \n1 1 1 1 1 1 1 1 1 1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        print(i % 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print((i % 2) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += (i % 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << (i % 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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