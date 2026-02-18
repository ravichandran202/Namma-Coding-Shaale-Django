module.exports ={
  "title": "Number Pattern – Repeated Rows",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Print an <code>n x n</code> grid where each row contains the same number repeated <code>n</code> times. The number in each row corresponds to the row number starting from <code>1</code>.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Print the number <code>1</code> repeated <code>n</code> times</li>
      <li><b>Row 2:</b> Print the number <code>2</code> repeated <code>n</code> times</li>
      <li><b>Row 3:</b> Print the number <code>3</code> repeated <code>n</code> times</li>
      <li>Continue this pattern until <b>Row n</b></li>
      <li>All numbers in the same row are identical</li>
      <li>Numbers increase by <code>1</code> as you move down the rows</li>
    </ul>
    <p>This pattern creates horizontal stripes where each row has a uniform number that identifies the row position.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1 1 1 
2 2 2 
3 3 3 </pre>
    <p><b>Explanation:</b> Three rows where each row contains the same number repeated three times. Row 1 has <code>1</code>, Row 2 has <code>2</code>, Row 3 has <code>3</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
1 1 1 1 
2 2 2 2 
3 3 3 3 
4 4 4 4 </pre>
    <p><b>Explanation:</b> Four rows where each row contains the same number repeated four times, with row numbers increasing from <code>1</code> to <code>4</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 1 1 \n2 2 2 \n3 3 3", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1 1 1 1 \n2 2 2 2 \n3 3 3 3 \n4 4 4 4", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 1 \n2 2", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "1 1 1 1 1 \n2 2 2 2 2 \n3 3 3 3 3 \n4 4 4 4 4 \n5 5 5 5 5", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "1 1 1 1 1 1 \n2 2 2 2 2 2 \n3 3 3 3 3 3 \n4 4 4 4 4 4 \n5 5 5 5 5 5 \n6 6 6 6 6 6", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "1 1 1 1 1 1 1 \n2 2 2 2 2 2 2 \n3 3 3 3 3 3 3 \n4 4 4 4 4 4 4 \n5 5 5 5 5 5 5 \n6 6 6 6 6 6 6 \n7 7 7 7 7 7 7", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "1 1 1 1 1 1 1 1 \n2 2 2 2 2 2 2 2 \n3 3 3 3 3 3 3 3 \n4 4 4 4 4 4 4 4 \n5 5 5 5 5 5 5 5 \n6 6 6 6 6 6 6 6 \n7 7 7 7 7 7 7 7 \n8 8 8 8 8 8 8 8", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "1 1 1 1 1 1 1 1 1 \n2 2 2 2 2 2 2 2 2 \n3 3 3 3 3 3 3 3 3 \n4 4 4 4 4 4 4 4 4 \n5 5 5 5 5 5 5 5 5 \n6 6 6 6 6 6 6 6 6 \n7 7 7 7 7 7 7 7 7 \n8 8 8 8 8 8 8 8 8 \n9 9 9 9 9 9 9 9 9", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n):\n        print(i, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n):\n        print(i, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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