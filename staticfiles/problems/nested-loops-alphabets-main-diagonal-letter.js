module.exports = {
  "title": "Alphabet Pattern – Main Diagonal Letters",
  "difficulty": "easy",
  "acceptance": "88%",

  "description": `
    <p>Print an <code>n x n</code> grid where only the main diagonal positions contain letter <code>A</code>, and all other positions contain dashes, creating a diagonal line pattern.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Main Diagonal:</b> All positions where row equals column contain letter <code>A</code></li>
      <li><b>Other Positions:</b> All positions contain dashes <code>-</code></li>
      <li>The diagonal runs from top-left to bottom-right</li>
      <li>Only positions where the row index equals the column index are filled</li>
      <li>All non-diagonal positions remain empty (represented by dashes)</li>
      <li>The pattern creates a clear diagonal line across the grid</li>
    </ul>
    <p>This creates a grid where only the main diagonal is visible as letter A, making it appear as a diagonal line cutting across the square.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
A - - 
- A - 
- - A </pre>
    <p><b>Explanation:</b> 
    <br>Position (0,0): <code>A</code>, 
    <br>Position (1,1): <code>A</code>, 
    <br>Position (2,2): <code>A</code>. 
    <br>All other positions: dashes.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
A - - - 
- A - - 
- - A - 
- - - A </pre>
    <p><b>Explanation:</b> A 4x4 grid with letter A only on the main diagonal positions.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A - - \n- A - \n- - A", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "A - - - \n- A - - \n- - A - \n- - - A", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "A - \n- A", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A - - - - \n- A - - - \n- - A - - \n- - - A - \n- - - - A", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A - - - - - \n- A - - - - \n- - A - - - \n- - - A - - \n- - - - A - \n- - - - - A", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A - - - - - - \n- A - - - - - \n- - A - - - - \n- - - A - - - \n- - - - A - - \n- - - - - A - \n- - - - - - A", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A - - - - - - - \n- A - - - - - - \n- - A - - - - - \n- - - A - - - - \n- - - - A - - - \n- - - - - A - - \n- - - - - - A - \n- - - - - - - A", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A - - - - - - - - \n- A - - - - - - - \n- - A - - - - - - \n- - - A - - - - - \n- - - - A - - - - \n- - - - - A - - - \n- - - - - - A - - \n- - - - - - - A - \n- - - - - - - - A", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A - - - - - - - - - \n- A - - - - - - - - \n- - A - - - - - - - \n- - - A - - - - - - \n- - - - A - - - - - \n- - - - - A - - - - \n- - - - - - A - - - \n- - - - - - - A - - \n- - - - - - - - A - \n- - - - - - - - - A", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == j:\n            print('A', end=' ')\n        else:\n            print('-', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j) {\n                    System.out.print(\"A \");\n                } else {\n                    System.out.print(\"- \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === j) {\n                row += 'A ';\n            } else {\n                row += '- ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == j) {\n                cout << \"A \";\n            } else {\n                cout << \"- \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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