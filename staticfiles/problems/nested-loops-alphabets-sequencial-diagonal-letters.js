module.exports = {
  "title": "Alphabet Pattern – Sequential Diagonal Letters",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print an <code>n x n</code> grid where the main diagonal positions contain sequential letters starting from <code>A</code>, and all other positions contain dashes.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Main Diagonal:</b> All positions where row equals column contain sequential letters</li>
      <li><b>Position (0,0):</b> Contains letter <code>A</code></li>
      <li><b>Position (1,1):</b> Contains letter <code>B</code></li>
      <li><b>Position (2,2):</b> Contains letter <code>C</code></li>
      <li><b>Position (3,3):</b> Contains letter <code>D</code></li>
      <li><b>Other Positions:</b> All positions contain dashes <code>-</code></li>
      <li>The diagonal letters progress alphabetically</li>
      <li>Each diagonal position gets the next letter in sequence</li>
    </ul>
    <p>This creates a grid where only the main diagonal is filled with sequential letters, creating an alphabetical progression along the diagonal line.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A - - - 
- B - - 
- - C - 
- - - D </pre>
    <p><b>Explanation:</b> 
    <br>Position (0,0): <code>A</code>, 
    <br>Position (1,1): <code>B</code>, 
    <br>Position (2,2): <code>C</code>, 
    <br>Position (3,3): <code>D</code>. 
    <br>All other positions: dashes.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A - - 
- B - 
- - C </pre>
    <p><b>Explanation:</b> A 3x3 grid with sequential letters A, B, C along the main diagonal.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A - - - \n- B - - \n- - C - \n- - - D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A - - \n- B - \n- - C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A - \n- B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A - - - - \n- B - - - \n- - C - - \n- - - D - \n- - - - E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A - - - - - \n- B - - - - \n- - C - - - \n- - - D - - \n- - - - E - \n- - - - - F", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A - - - - - - \n- B - - - - - \n- - C - - - - \n- - - D - - - \n- - - - E - - \n- - - - - F - \n- - - - - - G", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A - - - - - - - \n- B - - - - - - \n- - C - - - - - \n- - - D - - - - \n- - - - E - - - \n- - - - - F - - \n- - - - - - G - \n- - - - - - - H", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A - - - - - - - - \n- B - - - - - - - \n- - C - - - - - - \n- - - D - - - - - \n- - - - E - - - - \n- - - - - F - - - \n- - - - - - G - - \n- - - - - - - H - \n- - - - - - - - I", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A - - - - - - - - - \n- B - - - - - - - - \n- - C - - - - - - - \n- - - D - - - - - - \n- - - - E - - - - - \n- - - - - F - - - - \n- - - - - - G - - - \n- - - - - - - H - - \n- - - - - - - - I - \n- - - - - - - - - J", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == j:\n            print(chr(65 + i), end=' ')\n        else:\n            print('-', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j) {\n                    System.out.print((char)('A' + i) + \" \");\n                } else {\n                    System.out.print(\"- \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === j) {\n                row += String.fromCharCode(65 + i) + ' ';\n            } else {\n                row += '- ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == j) {\n                cout << (char)('A' + i) << \" \";\n            } else {\n                cout << \"- \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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