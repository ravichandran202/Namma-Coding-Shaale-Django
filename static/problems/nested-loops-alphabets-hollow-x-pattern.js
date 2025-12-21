module.exports = {
  "title": "X Pattern Letters",
  "difficulty": "medium",
  "acceptance": "72%",

  "description": `
    <p>Print an <code>n x n</code> grid where letters form an X pattern along both diagonals, with empty spaces everywhere else.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Main Diagonal:</b> Letters run from top-left to bottom-right, starting with <code>A</code> at the top-left corner</li>
      <li><b>Anti-Diagonal:</b> Letters run from top-right to bottom-left, starting with the last letter at the top-right corner</li>
      <li><b>Center Intersection:</b> Both diagonals meet at the center position (when <code>n</code> is odd)</li>
      <li><b>Letter Sequence:</b> Main diagonal uses letters <code>A, B, C...</code> in order, anti-diagonal uses letters in reverse order</li>
      <li><b>Empty Spaces:</b> All positions not on either diagonal are filled with empty spaces</li>
    </ul>
    <p>This creates an X-shaped pattern where the two diagonals cross each other, forming a symmetrical letter arrangement.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A       E 
  B   D 
    C 
  D   B 
E       A </pre>
    <p><b>Explanation:</b> 
    <br>Main diagonal has <code>A B C D E</code>, 
    <br>anti-diagonal has <code>E D C B A</code>, 
    <br>and they intersect at the center letter <code>C</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
A     D 
  B C 
  C B 
D     A </pre>
    <p><b>Explanation:</b> A 4x4 grid where both diagonals form an X pattern without a single center intersection point.</p>
  `,

  "testCases": [
    { 
      "id": 6, 
      "input": [], 
      "expected": "A         F \n  B     E \n    C D \n    D C \n  E     B \nF         A", 
      "stdinput": "6" 
    },
    { "id": 1, "input": [], "expected": "A       E \n  B   D \n    C \n  D   B \nE       A", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A     D \n  B C \n  C B \nD     A", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "A   C \n  B \nC   A", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "A B \nB A", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "A", "stdinput": "1" },
    { "id": 6, "input": [], "expected": "A         F \n  B     E \n    C D \n    D C \n  E     B \nF         A", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "A           G \n  B       F \n    C   E \n      D \n    E   C \n  F       B \nG           A", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "A             H \n  B         G \n    C     F \n      D E \n      E D \n    F     C \n  G         B \nH             A", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "A               I \n  B           H \n    C       G \n      D   F \n        E \n      F   D \n    G       C \n  H           B \nI               A", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\n\nfor i in range(n):\n    for j in range(n):\n        if i == j:\n            print(chr(65 + i), end=' ')\n        elif i + j == n - 1:\n            print(chr(65 + n - j - 1), end=' ')\n        else:\n            print(' ', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j) {\n                    System.out.print((char)(65 + i) + \" \");\n                } else if (i + j == n - 1) {\n                    System.out.print((char)(65 + n - j - 1) + \" \");\n                } else {\n                    System.out.print(\"  \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === j) {\n                row += String.fromCharCode(65 + i) + ' ';\n            } else if (i + j === n - 1) {\n                row += String.fromCharCode(65 + n - j - 1) + ' ';\n            } else {\n                row += '  ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == j) {\n                cout << (char)(65 + i) << \" \";\n            } else if (i + j == n - 1) {\n                cout << (char)(65 + n - j - 1) << \" \";\n            } else {\n                cout << \"  \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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