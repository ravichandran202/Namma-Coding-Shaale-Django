module.exports = {
  "title": "Number Pattern – Binary Alternating Triangle",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print a triangular pattern with alternating 1s and 0s, starting each row with alternating values to create a checkerboard-like pattern within the triangle.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Starts with <code>1</code></li>
      <li><b>Row 2:</b> Starts with <code>0</code> followed by <code>1</code></li>
      <li><b>Row 3:</b> Starts with <code>1</code> followed by alternating <code>0</code> and <code>1</code></li>
      <li><b>Row 4:</b> Starts with <code>0</code> followed by alternating <code>1</code> and <code>0</code></li>
      <li>This alternating pattern continues for all rows</li>
      <li>Each row alternates between starting with 1 and starting with 0</li>
      <li>Within each row, values alternate between 1 and 0</li>
      <li>Odd-numbered rows start with 1, even-numbered rows start with 0</li>
    </ul>
    <p>This creates a triangular checkerboard pattern where adjacent elements (both horizontally and diagonally) have different values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: <code>1</code>, 
    <br>Row 2: <code>0 1</code>, 
    <br>Row 3: <code>1 0 1</code>, 
    <br>Row 4: <code>0 1 0 1</code>, 
    <br>Row 5: <code>1 0 1 0 1</code>. Each row alternates starting value and continues alternating.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
0 1 
1 0 1 </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows showing alternating 1s and 0s in a checkerboard arrangement.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "1 \n0 1 \n1 0 1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1 \n1 0 1 0 1 0 1", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1 \n1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1 \n1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n1 0 1 0 1 0 1 0 1", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1 \n1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1", "stdinput": "10" },
    { "id": 9, "input": [], "expected": "1 \n0 1 \n1 0 1 \n0 1 0 1 \n1 0 1 0 1 \n0 1 0 1 0 1 \n1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 \n1 0 1 0 1 0 1 0 1 \n0 1 0 1 0 1 0 1 0 1 \n1 0 1 0 1 0 1 0 1 0 1", "stdinput": "11" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print((i + j + 1) % 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i + j + 1) % 2 + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += ((i + j + 1) % 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << ((i + j + 1) % 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print((i + j + 1) % 2, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i + j + 1) % 2 + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += ((i + j + 1) % 2) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << ((i + j + 1) % 2) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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