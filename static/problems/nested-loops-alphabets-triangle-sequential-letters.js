module.exports = {
  "title": "Alphabet Pattern – Sequential Letter Triangle",
  "difficulty": "medium",
  "acceptance": "89%",

  "description": `
    <p>Print a triangular pattern where each row displays letters starting from <code>A</code> up to the current row's letter. Each subsequent row adds one more letter to the sequence.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains letters from <code>A</code> to <code>A</code></li>
      <li><b>Row 2:</b> Contains letters from <code>A</code> to <code>B</code></li>
      <li><b>Row 3:</b> Contains letters from <code>A</code> to <code>C</code></li>
      <li><b>Row 4:</b> Contains letters from <code>A</code> to <code>D</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row always starts from <code>A</code> and increments alphabetically up to the row's ending letter</li>
      <li>The ending letter of each row corresponds to the row position in the alphabet</li>
      <li>The pattern forms a right-angled triangle with sequential letters</li>
    </ul>
    <p>This creates a growing sequence pattern where each row extends the alphabetical sequence by one more letter.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A 
A B 
A B C 
A B C D 
A B C D E </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>A B</code>, 
    <br><b>Row 3:</b> <code>A B C</code>, 
    <br><b>Row 4:</b> <code>A B C D</code>, 
    <br><b>Row 5:</b> <code>A B C D E</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
A B 
A B C </pre>
    <p><b>Explanation:</b> A triangular pattern where each row shows letters from A up to the row number's corresponding letter.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A \nA B \nA B C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nA B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F G H", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F G H \nA B C D E F G H I", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F G H \nA B C D E F G H I \nA B C D E F G H I J", "stdinput": "10" },
    { "id": 9, "input": [], "expected": "A \nA B \nA B C \nA B C D \nA B C D E \nA B C D E F \nA B C D E F G \nA B C D E F G H \nA B C D E F G H I \nA B C D E F G H I J \nA B C D E F G H I J K", "stdinput": "11" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(chr(65 + j), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print((char)('A' + j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += String.fromCharCode(65 + j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << (char)('A' + j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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