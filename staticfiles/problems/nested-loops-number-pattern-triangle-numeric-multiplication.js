module.exports = {
  "title": "Number Pattern – Triangular Multiplication Table",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print a triangular multiplication table where each row shows the multiples of the row number. The pattern creates a triangular representation of multiplication facts.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains multiples of <code>1</code>: <code>1</code></li>
      <li><b>Row 2:</b> Contains multiples of <code>2</code>: <code>2 4</code></li>
      <li><b>Row 3:</b> Contains multiples of <code>3</code>: <code>3 6 9</code></li>
      <li><b>Row 4:</b> Contains multiples of <code>4</code>: <code>4 8 12 16</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row shows the multiplication of the row number by numbers from 1 up to the row number</li>
      <li>The value at position (i,j) equals <code>i × j</code></li>
      <li>Each row contains exactly as many elements as the row number</li>
    </ul>
    <p>This creates a triangular multiplication table where you can see the products of each row number multiplied by increasing factors.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1 
2 4 
3 6 9 
4 8 12 16 </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> 1×1=1  
    <br><b>Row 2:</b> 2×1=2, 2×2=4 
    <br><b>Row 3:</b> 3×1=3, 3×2=6, 3×3=9 
    <br><b>Row 4:</b> 4×1=4, 4×2=8, 4×3=12, 4×4=16</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
2 4 
3 6 9 </pre>
    <p><b>Explanation:</b> A triangular multiplication table showing products of row numbers multiplied by increasing factors.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n2 4 \n3 6 9 \n4 8 12 16", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1 \n2 4 \n3 6 9", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n2 4 \n3 6 9 \n4 8 12 16 \n5 10 15 20 25", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1 \n2 4 \n3 6 9 \n4 8 12 16 \n5 10 15 20 25 \n6 12 18 24 30 36", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "1 \n2 4 \n3 6 9 \n4 8 12 16 \n5 10 15 20 25 \n6 12 18 24 30 36 \n7 14 21 28 35 42 49", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "1 \n2 4 \n3 6 9 \n4 8 12 16 \n5 10 15 20 25 \n6 12 18 24 30 36 \n7 14 21 28 35 42 49 \n8 16 24 32 40 48 56 64", "stdinput": "8" },
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(i * j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += (i * j) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << (i * j) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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