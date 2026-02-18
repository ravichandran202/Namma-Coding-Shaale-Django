module.exports = {
  "title": "Hollow Letter Square",
  "difficulty": "medium",
  "acceptance": "78%",

  "description": `
    <p>Print an <code>n x n</code> square where only the border contains letters, and the inside is empty space.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Top Border (Row 1):</b> Letters <code>A</code> to the nth letter in sequence</li>
      <li><b>Bottom Border (Last Row):</b> Same letters as top border</li>
      <li><b>Left Border:</b> First letter <code>A</code> appears in every row's first position</li>
      <li><b>Right Border:</b> Last letter appears in every row's last position</li>
      <li><b>Interior:</b> All positions inside the border are empty spaces</li>
      <li>Letters follow alphabetical order from <code>A</code> to <code>Z</code> and continue if needed</li>
    </ul>
    <p>This creates a frame or border effect where only the outer edges of the square contain letters, forming a hollow square pattern.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A B C D 
A     D 
A     D 
A B C D </pre>
    <p><b>Explanation:</b> The first row shows letters <code>A B C D</code>, the last row repeats the same letters, and the sides show <code>A</code> on left and <code>D</code> on right with empty space inside.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A B C 
A   C 
A B C </pre>
    <p><b>Explanation:</b> A 3x3 square with border letters <code>A B C</code> on top and bottom, <code>A</code> on left side, <code>C</code> on right side, and empty space in the middle.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A B C D \nA     D \nA     D \nA B C D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A B C \nA   C \nA B C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A B \nA B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "1" }
  ],

  "templates": {
    "python": "n = int(input())\n\nfor i in range(n):\n    for j in range(n):\n        if i == 0 or i == n - 1 or j == 0 or j == n - 1:\n            print(chr(65 + j), end=' ')\n        else:\n            print(' ', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                    System.out.print((char)(65 + j) + \" \");\n                } else {\n                    System.out.print(\"  \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {\n                row += String.fromCharCode(65 + j) + ' ';\n            } else {\n                row += '  ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                cout << (char)(65 + j) << \" \";\n            } else {\n                cout << \"  \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\n\nfor i in range(n):\n    for j in range(n):\n        if i == 0 or i == n - 1 or j == 0 or j == n - 1:\n            print(chr(65 + j), end=' ')\n        else:\n            print(' ', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                    System.out.print((char)(65 + j) + \" \");\n                } else {\n                    System.out.print(\"  \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {\n                row += String.fromCharCode(65 + j) + ' ';\n            } else {\n                row += '  ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                cout << (char)(65 + j) << \" \";\n            } else {\n                cout << \"  \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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