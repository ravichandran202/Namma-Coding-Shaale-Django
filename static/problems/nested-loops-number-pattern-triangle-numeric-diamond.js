module.exports = {
  "title": "Number Pattern – Diamond Shape",
  "difficulty": "hard",
  "acceptance": "83%",

  "description": `
    <p>Print a diamond pattern with numbers where each row contains a sequence from 1 up to the row number, perfectly centered to form a diamond shape.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Upper Half:</b></li>
      <ul>
        <li>Row 1: Contains <code>1</code> with maximum leading spaces</li>
        <li>Row 2: Contains <code>1 2</code> with fewer leading spaces</li>
        <li>Row 3: Contains <code>1 2 3</code> with even fewer leading spaces</li>
        <li>Continues until the middle row with the longest sequence</li>
      </ul>
      <li><b>Lower Half:</b></li>
      <ul>
        <li>Row 1: Contains <code>1 2 3</code> with some leading spaces</li>
        <li>Row 2: Contains <code>1 2</code> with more leading spaces</li>
        <li>Row 3: Contains <code>1</code> with maximum leading spaces</li>
        <li>Continues until the final row</li>
      </ul>
      <li>The pattern is perfectly symmetrical around both horizontal and vertical axes</li>
      <li>Each row contains numbers from 1 up to the current sequence length</li>
      <li>The diamond is perfectly centered with appropriate spacing</li>
    </ul>
    <p>This creates an elegant diamond shape where numbers increase towards the center and then decrease, maintaining perfect symmetry.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
   1 
  1 2 
 1 2 3 
1 2 3 4 
 1 2 3 
  1 2 
   1 </pre>
    <p><b>Explanation:</b> 
    <br><b>Upper half:</b> increasing sequences with decreasing spaces. 
    <br><b>Lower half:</b> decreasing sequences with increasing spaces. 
    <br>Perfect diamond symmetry.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
  1 
 1 2 
1 2 3 
 1 2 
  1 </pre>
    <p><b>Explanation:</b> A diamond pattern with 3 rows in upper half and 2 rows in lower half.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "   1 \n  1 2 \n 1 2 3 \n1 2 3 4 \n 1 2 3 \n  1 2 \n   1", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "  1 \n 1 2 \n1 2 3 \n 1 2 \n  1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": " 1 \n1 2 \n 1", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "    1 \n   1 2 \n  1 2 3 \n 1 2 3 4 \n1 2 3 4 5 \n 1 2 3 4 \n  1 2 3 \n   1 2 \n    1", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "     1 \n    1 2 \n   1 2 3 \n  1 2 3 4 \n 1 2 3 4 5 \n1 2 3 4 5 6 \n 1 2 3 4 5 \n  1 2 3 4 \n   1 2 3 \n    1 2 \n     1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "      1 \n     1 2 \n    1 2 3 \n   1 2 3 4 \n  1 2 3 4 5 \n 1 2 3 4 5 6 \n1 2 3 4 5 6 7 \n 1 2 3 4 5 6 \n  1 2 3 4 5 \n   1 2 3 4 \n    1 2 3 \n     1 2 \n      1", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "       1 \n      1 2 \n     1 2 3 \n    1 2 3 4 \n   1 2 3 4 5 \n  1 2 3 4 5 6 \n 1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 8 \n 1 2 3 4 5 6 7 \n  1 2 3 4 5 6 \n   1 2 3 4 5 \n    1 2 3 4 \n     1 2 3 \n      1 2 \n       1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "        1 \n       1 2 \n      1 2 3 \n     1 2 3 4 \n    1 2 3 4 5 \n   1 2 3 4 5 6 \n  1 2 3 4 5 6 7 \n 1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 9 \n 1 2 3 4 5 6 7 8 \n  1 2 3 4 5 6 7 \n   1 2 3 4 5 6 \n    1 2 3 4 5 \n     1 2 3 4 \n      1 2 3 \n       1 2 \n        1", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "         1 \n        1 2 \n       1 2 3 \n      1 2 3 4 \n     1 2 3 4 5 \n    1 2 3 4 5 6 \n   1 2 3 4 5 6 7 \n  1 2 3 4 5 6 7 8 \n 1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 10 \n 1 2 3 4 5 6 7 8 9 \n  1 2 3 4 5 6 7 8 \n   1 2 3 4 5 6 7 \n    1 2 3 4 5 6 \n     1 2 3 4 5 \n      1 2 3 4 \n       1 2 3 \n        1 2 \n         1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(' ' * (n - i), end='')\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()\nfor i in range(n - 1, 0, -1):\n    print(' ' * (n - i), end='')\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) {\n                System.out.print(\" \");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n        for (int i = n - 1; i >= 1; i--) {\n            for (int s = 1; s <= n - i; s++) {\n                System.out.print(\" \");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = ' '.repeat(n - i);\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 1; i >= 1; i--) {\n        let row = ' '.repeat(n - i);\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int s = 1; s <= n - i; s++) {\n            cout << \" \";\n        }\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    for (int i = n - 1; i >= 1; i--) {\n        for (int s = 1; s <= n - i; s++) {\n            cout << \" \";\n        }\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(' ' * (n - i), end='')\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()\nfor i in range(n - 1, 0, -1):\n    print(' ' * (n - i), end='')\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) {\n                System.out.print(\" \");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n        for (int i = n - 1; i >= 1; i--) {\n            for (int s = 1; s <= n - i; s++) {\n                System.out.print(\" \");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = ' '.repeat(n - i);\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    for (let i = n - 1; i >= 1; i--) {\n        let row = ' '.repeat(n - i);\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int s = 1; s <= n - i; s++) {\n            cout << \" \";\n        }\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    for (int i = n - 1; i >= 1; i--) {\n        for (int s = 1; s <= n - i; s++) {\n            cout << \" \";\n        }\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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