module.exports = {
  "title": "Alphabet Pattern – Vertical Diamond Sequence",
  "difficulty": "hard",
  "acceptance": "78%",

  "description": `
    <p>Print a diamond-shaped pattern where each row displays letters starting from <code>A</code> up to a maximum that increases then decreases, creating a symmetrical diamond.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Half:</b></li>
      <ul>
        <li>Row 1: Contains letters from <code>A</code> to <code>A</code></li>
        <li>Row 2: Contains letters from <code>A</code> to <code>B</code></li>
        <li>Row 3: Contains letters from <code>A</code> to <code>C</code></li>
        <li>Continues until the middle row with the longest sequence</li>
      </ul>
      <li><b>Lower Half:</b></li>
      <ul>
        <li>Row 1: Contains letters from <code>A</code> to <code>B</code></li>
        <li>Row 2: Contains letters from <code>A</code> to <code>C</code></li>
        <li>Row 3: Contains letters from <code>A</code> to <code>B</code></li>
        <li>Continues until the final row with only <code>A</code></li>
      </ul>
      <li>The pattern is perfectly symmetrical around the horizontal axis</li>
      <li>Each row shows sequential letters from A up to the current maximum</li>
      <li>The diamond shape is formed by increasing then decreasing sequence lengths</li>
    </ul>
    <p>This creates a diamond pattern where the alphabetical sequences grow and then shrink, maintaining perfect symmetry.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A 
A B 
A B C 
A B C D 
A B C D E 
A B C D 
A B C 
A B 
A </pre>
    <p><b>Explanation:</b> 
    <br><b>Upper half:</b> increasing sequences. 
    <br><b>Lower half:</b> decreasing sequences. 
    <br>Perfect diamond symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
A B 
A B C 
A B 
A </pre>
    <p><b>Explanation:</b> A diamond pattern with 3 rows in upper half and 2 rows in lower half.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D \nA B C \nA B \nA", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A \nA B \nA B C \nA B \nA", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nA B \nA", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E \nA B C D \nA B C \nA B \nA", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F \nA B C D E \nA B C D \nA B C \nA B \nA", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F G H \nA B C D E F G \nA B C D E F \nA B C D E \nA B C D \nA B C \nA B \nA", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + j), end=' ')\n    print()\nfor i in range(n - 1):\n    for j in range(n - i - 1):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = 0; i < n - 1; i++) {\n        let row = '';\n        for (let j = 0; j < n - i - 1; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + j), end=' ')\n    print()\nfor i in range(n - 1):\n    for j in range(n - i - 1):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = 0; i < n - 1; i++) {\n        let row = '';\n        for (let j = 0; j < n - i - 1; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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