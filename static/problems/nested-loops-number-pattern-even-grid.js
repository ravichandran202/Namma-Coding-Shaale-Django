module.exports = {
  "title": "Number Pattern – Even Numbers Grid",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Print an <code>n x n</code> grid filled with the first <code>n</code> even numbers, repeated across all rows. Every row contains the same sequence of even numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>All Rows:</b> Contain the same sequence: <code>2, 4, 6, 8, ...</code> up to the <code>n</code>-th even number</li>
      <li><b>Column 1:</b> Always contains <code>2</code> (the first even number)</li>
      <li><b>Column 2:</b> Always contains <code>4</code> (the second even number)</li>
      <li><b>Column 3:</b> Always contains <code>6</code> (the third even number)</li>
      <li>This pattern continues for all columns</li>
      <li>Each even number equals <code>2 × column_number</code></li>
      <li>The sequence is identical in every row, creating horizontal stripes of the same values</li>
    </ul>
    <p>This creates a uniform grid where every row shows the same progression of even numbers, creating consistent vertical patterns.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
2 4 6 
2 4 6 
2 4 6 </pre>
    <p><b>Explanation:</b> All three rows contain the same sequence: the first 3 even numbers <code>2, 4, 6</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
2 4 
2 4 </pre>
    <p><b>Explanation:</b> Both rows show the first 2 even numbers <code>2</code> and <code>4</code> in the same order.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2 4 6 \n2 4 6 \n2 4 6", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "2 4 \n2 4", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "2 4 6 8 \n2 4 6 8 \n2 4 6 8 \n2 4 6 8", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "2 4 6 8 10 \n2 4 6 8 10 \n2 4 6 8 10 \n2 4 6 8 10 \n2 4 6 8 10", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "2 4 6 8 10 12 \n2 4 6 8 10 12 \n2 4 6 8 10 12 \n2 4 6 8 10 12 \n2 4 6 8 10 12 \n2 4 6 8 10 12", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "2 4 6 8 10 12 14 \n2 4 6 8 10 12 14 \n2 4 6 8 10 12 14 \n2 4 6 8 10 12 14 \n2 4 6 8 10 12 14 \n2 4 6 8 10 12 14 \n2 4 6 8 10 12 14", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16 \n2 4 6 8 10 12 14 16", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18 \n2 4 6 8 10 12 14 16 18", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(1, n + 1):\n        print(j * 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 1; j <= n; j++) {\n                System.out.print((j * 2) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 1; j <= n; j++) {\n            row += (j * 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 1; j <= n; j++) {\n            cout << (j * 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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