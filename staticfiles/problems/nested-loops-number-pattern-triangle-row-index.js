module.exports =  {
  "title": "Number Pattern – Triangle Row Index",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>Print a triangular pattern where each row displays its row number repeated multiple times. The number of repetitions increases with each subsequent row, creating a right-angled triangle shape.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> repeated <code>1</code> time</li>
      <li><b>Row 2:</b> Contains <code>2</code> repeated <code>2</code> times</li>
      <li><b>Row 3:</b> Contains <code>3</code> repeated <code>3</code> times</li>
      <li><b>Row 4:</b> Contains <code>4</code> repeated <code>4</code> times</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row contains only its row number, repeated as many times as the row number itself</li>
      <li>The pattern forms a triangle where the width increases with each row</li>
    </ul>
    <p>This creates a staircase-like pattern where the number and its repetition count are always equal to the current row number.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1 
2 2 
3 3 3 
4 4 4 4 </pre>
    <p><b>Explanation:</b> Row 1 has one <code>1</code>, Row 2 has two <code>2</code>s, Row 3 has three <code>3</code>s, and Row 4 has four <code>4</code>s.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
2 2 
3 3 3 </pre>
    <p><b>Explanation:</b> A triangular pattern where each row number is repeated according to its position.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1 \n2 2 \n3 3 3", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5 \n6 6 6 6 6 6", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5 \n6 6 6 6 6 6 \n7 7 7 7 7 7 7", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5 \n6 6 6 6 6 6 \n7 7 7 7 7 7 7 \n8 8 8 8 8 8 8 8", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5 \n6 6 6 6 6 6 \n7 7 7 7 7 7 7 \n8 8 8 8 8 8 8 8 \n9 9 9 9 9 9 9 9 9", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "1 \n2 2 \n3 3 3 \n4 4 4 4 \n5 5 5 5 5 \n6 6 6 6 6 6 \n7 7 7 7 7 7 7 \n8 8 8 8 8 8 8 8 \n9 9 9 9 9 9 9 9 9 \n10 10 10 10 10 10 10 10 10 10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(i, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(i, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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