module.exports = {
  "title": "Alphabet Pattern – Alternating AB Triangle",
  "difficulty": "easy",
  "acceptance": "80%",

  "description": `
    <p>Print a triangular pattern that alternates between letters <code>A</code> and <code>B</code> in a checkerboard-like arrangement, creating an AB pattern throughout the triangle.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Starts with <code>A</code></li>
      <li><b>Row 2:</b> Starts with <code>B</code> followed by <code>A</code></li>
      <li><b>Row 3:</b> Starts with <code>A</code> followed by alternating <code>B</code> and <code>A</code></li>
      <li><b>Row 4:</b> Starts with <code>B</code> followed by alternating <code>A</code> and <code>B</code></li>
      <li>This alternating pattern continues for all rows</li>
      <li>Each row alternates between starting with A and starting with B</li>
      <li>Within each row, values alternate between A and B</li>
      <li>The pattern creates a checkerboard effect with only two letters</li>
    </ul>
    <p>This creates a triangular checkerboard pattern where adjacent elements (both horizontally and diagonally) have different letters A and B.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A 
B A 
A B A 
B A B A 
A B A B A </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>B A</code>, 
    <br><b>Row 3:</b> <code>A B A</code>, 
    <br><b>Row 4:</b> <code>B A B A</code>, 
    <br><b>Row 5:</b> <code>A B A B A</code>. 
    <br>Each row alternates starting letter and continues alternating.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
B A 
A B A </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows showing alternating A and B in a checkerboard arrangement.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nB A \nA B A \nB A B A \nA B A B A", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A \nB A \nA B A", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nB A", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nB A \nA B A \nB A B A \nA B A B A \nB A B A B A", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "A \nB A \nA B A \nB A B A \nA B A B A \nB A B A B A \nA B A B A B A", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "A \nB A \nA B A \nB A B A \nA B A B A \nB A B A B A \nA B A B A B A \nB A B A B A B A", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        if (i + j + 1) % 2 == 0:\n            print('A', end=' ')\n        else:\n            print('B', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 0; j < i; j++) {\n                if ((i + j) % 2 == 0) {\n                    System.out.print(\"A \");\n                } else {\n                    System.out.print(\"B \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            if ((i + j) % 2 === 0) {\n                row += 'A ';\n            } else {\n                row += 'B ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < i; j++) {\n            if ((i + j) % 2 == 0) {\n                cout << \"A \";\n            } else {\n                cout << \"B \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        if (i + j + 1) % 2 == 0:\n            print('A', end=' ')\n        else:\n            print('B', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 0; j < i; j++) {\n                if ((i + j) % 2 == 0) {\n                    System.out.print(\"A \");\n                } else {\n                    System.out.print(\"B \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 0; j < i; j++) {\n            if ((i + j) % 2 === 0) {\n                row += 'A ';\n            } else {\n                row += 'B ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < i; j++) {\n            if ((i + j) % 2 == 0) {\n                cout << \"A \";\n            } else {\n                cout << \"B \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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