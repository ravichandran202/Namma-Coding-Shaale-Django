module.exports = {
  "title": "Alphabet Pattern – Continuous Sequential Triangle",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Print a triangular pattern filled with consecutive letters of the alphabet. The letters continue uninterrupted across rows, creating a continuous sequence throughout the triangle.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> letter starting from <code>A</code></li>
      <li><b>Row 2:</b> Contains <code>2</code> letters continuing the sequence</li>
      <li><b>Row 3:</b> Contains <code>3</code> letters continuing the sequence</li>
      <li><b>Row 4:</b> Contains <code>4</code> letters continuing the sequence</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Letters are consecutive alphabet characters: A, B, C, D, E, etc.</li>
      <li>Each letter follows immediately after the previous one</li>
      <li>The sequence continues uninterrupted across rows</li>
    </ul>
    <p>This creates a triangular pattern where each row contains more letters than the previous row, maintaining a continuous alphabetical sequence throughout the entire triangle.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A 
B C 
D E F 
G H I J </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>B C</code>, 
    <br><b>Row 3:</b> <code>D E F</code>, 
    <br><b>Row 4:</b> <code>G H I J</code>. 
    <br>All letters are consecutive in the alphabet.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
B C 
D E F </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows showing consecutive letters in increasing order.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nB C \nD E F \nG H I J", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A \nB C \nD E F", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nB C", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nB C \nD E F \nG H I J \nK L M N O", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A \nB C \nD E F \nG H I J \nK L M N O \nP Q R S T U", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A \nB C \nD E F \nG H I J \nK L M N O \nP Q R S T U \nV W X Y Z [ \\", "stdinput": "7" },
  ],

  "templates": {
    "python": "n = int(input())\ncurrent = 0\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + current), end=' ')\n        current += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int current = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + current) + \" \");\n                current++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let current = 0;\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + current) + ' ';\n            current++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int current = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + current) << \" \";\n            current++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ncurrent = 0\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + current), end=' ')\n        current += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int current = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + current) + \" \");\n                current++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let current = 0;\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + current) + ' ';\n            current++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int current = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + current) << \" \";\n            current++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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