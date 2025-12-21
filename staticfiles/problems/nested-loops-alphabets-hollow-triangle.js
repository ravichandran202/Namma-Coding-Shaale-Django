module.exports = {
  "title": "Hollow Letter Triangle",
  "difficulty": "hard",
  "acceptance": "75%",

  "description": `
    <p>Print a right-angled triangle where only the border contains letters, and the inside is empty space.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Left Border:</b> Every row starts with letter <code>A</code> in the first position</li>
      <li><b>Right Border:</b> Each row ends with the corresponding letter for that position</li>
      <li><b>Bottom Border:</b> The last row contains all letters from <code>A</code> to the nth letter</li>
      <li><b>Interior:</b> All positions inside the triangle are empty spaces</li>
      <li>The triangle grows from top to bottom, with each row having one more position than the previous</li>
      <li>Letters follow alphabetical order from <code>A</code> to <code>Z</code></li>
    </ul>
    <p>This creates a triangular frame where only the outer edges contain letters, forming a hollow triangle pattern.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A 
A B 
A   C 
A     D 
A B C D E </pre>
    <p><b>Explanation:</b> First row has <code>A</code>, second has <code>A B</code>, third has <code>A</code> and <code>C</code> with space between, and the last row has all letters <code>A</code> through <code>E</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
A 
A B 
A   C 
A B C D </pre>
    <p><b>Explanation:</b> A 4-row triangle with border letters on left side, diagonal, and full letters on the bottom row.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nA B \nA   C \nA     D \nA B C D E", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A \nA B \nA   C \nA B C D", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "A \nA B \nA B C", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "A \nA B", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "A", "stdinput": "1" },
    { "id": 6, "input": [], "expected": "A \nA B \nA   C \nA     D \nA       E \nA B C D E F", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "A \nA B \nA   C \nA     D \nA       E \nA         F \nA B C D E F G", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "A \nA B \nA   C \nA     D \nA       E \nA         F \nA           G \nA B C D E F G H", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "A \nA B \nA   C \nA     D \nA       E \nA         F \nA           G \nA             H \nA B C D E F G H I", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\n\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        if j == 1 or j == i or i == n:\n            print(chr(65 + j - 1), end=' ')\n        else:\n            print(' ', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (j == 1 || j == i || i == n) {\n                    System.out.print((char)(65 + j - 1) + \" \");\n                } else {\n                    System.out.print(\"  \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            if (j === 1 || j === i || i === n) {\n                row += String.fromCharCode(65 + j - 1) + ' ';\n            } else {\n                row += '  ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (j == 1 || j == i || i == n) {\n                cout << (char)(65 + j - 1) << \" \";\n            } else {\n                cout << \"  \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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