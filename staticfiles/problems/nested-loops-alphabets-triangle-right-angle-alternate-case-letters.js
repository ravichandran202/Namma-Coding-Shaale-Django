module.exports = {
  "title": "Alphabet Pattern – Alternating Case Triangle",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Print a triangular pattern where each row alternates between uppercase and lowercase versions of the same letter, with the letter repeated according to the row number.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains uppercase <code>A</code> repeated <code>1</code> time</li>
      <li><b>Row 2:</b> Contains lowercase <code>b</code> repeated <code>2</code> times</li>
      <li><b>Row 3:</b> Contains uppercase <code>C</code> repeated <code>3</code> times</li>
      <li><b>Row 4:</b> Contains lowercase <code>d</code> repeated <code>4</code> times</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Odd-numbered rows use uppercase letters</li>
      <li>Even-numbered rows use lowercase letters</li>
      <li>Each row contains the same letter repeated according to the row number</li>
      <li>The letter corresponds to the row position in the alphabet</li>
    </ul>
    <p>This creates a triangular pattern that alternates between uppercase and lowercase letters, creating a visually striking case-alternating effect.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A 
b b 
C C C 
d d d d </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> uppercase <code>A</code>, 
    <br><b>Row 2:</b> lowercase <code>b b</code>, 
    <br><b>Row 3:</b> uppercase <code>C C C</code>, 
    <br><b>Row 4:</b> lowercase <code>d d d d</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
b b 
C C C </pre>
    <p><b>Explanation:</b> A triangular pattern alternating between uppercase and lowercase letters.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nb b \nC C C \nd d d d", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A \nb b \nC C C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nb b", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nb b \nC C C \nd d d d \nE E E E E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A \nb b \nC C C \nd d d d \nE E E E E \nf f f f f f", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A \nb b \nC C C \nd d d d \nE E E E E \nf f f f f f \nG G G G G G G \nh h h h h h h h", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "A \nb b \nC C C \nd d d d \nE E E E E \nf f f f f f \nG G G G G G G \nh h h h h h h h \nI I I I I I I I I", "stdinput": "9" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        if i % 2 == 1:\n            print(chr(65 + i - 1), end=' ')\n        else:\n            print(chr(97 + i - 1), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (i % 2 == 1) {\n                    System.out.print((char)('A' + i - 1) + \" \");\n                } else {\n                    System.out.print((char)('a' + i - 1) + \" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            if (i % 2 === 1) {\n                row += String.fromCharCode(65 + i - 1) + ' ';\n            } else {\n                row += String.fromCharCode(97 + i - 1) + ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (i % 2 == 1) {\n                cout << (char)('A' + i - 1) << \" \";\n            } else {\n                cout << (char)('a' + i - 1) << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        if i % 2 == 1:\n            print(chr(65 + i - 1), end=' ')\n        else:\n            print(chr(97 + i - 1), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (i % 2 == 1) {\n                    System.out.print((char)('A' + i - 1) + \" \");\n                } else {\n                    System.out.print((char)('a' + i - 1) + \" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            if (i % 2 === 1) {\n                row += String.fromCharCode(65 + i - 1) + ' ';\n            } else {\n                row += String.fromCharCode(97 + i - 1) + ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (i % 2 == 1) {\n                cout << (char)('A' + i - 1) << \" \";\n            } else {\n                cout << (char)('a' + i - 1) << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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