module.exports = {
  "title": "Number Pattern – Palindromic Triangle",
  "difficulty": "hard",
  "acceptance": "84%",

  "description": `
    <p>Print a triangular pattern where each row forms a palindromic sequence of numbers. Each row reads the same forwards and backwards, creating a symmetrical number pattern.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains the palindrome <code>1</code></li>
      <li><b>Row 2:</b> Contains the palindrome <code>1 2 1</code></li>
      <li><b>Row 3:</b> Contains the palindrome <code>1 2 3 2 1</code></li>
      <li><b>Row 4:</b> Contains the palindrome <code>1 2 3 4 3 2 1</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row starts from 1, increases to the row number, then decreases back to 1</li>
      <li>The sequence is perfectly symmetrical around the center number</li>
      <li>The center number of each row equals the row number</li>
    </ul>
    <p>This creates a beautiful triangular pattern where each row is a perfect numerical palindrome, symmetrical around its center value.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
1 
1 2 1 
1 2 3 2 1 
1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: <code>1</code>, 
    <br>Row 2: <code>1 2 1</code>, 
    <br>Row 3: <code>1 2 3 2 1</code>, 
    <br>Row 4: <code>1 2 3 4 3 2 1</code>, 
    <br>Row 5: <code>1 2 3 4 5 4 3 2 1</code>. 
    <br>Each row is a perfect palindrome.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
1 2 1 
1 2 3 2 1 </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows where each row forms a palindromic sequence of numbers.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1 \n1 2 3 4 3 2 1 \n1 2 3 4 5 4 3 2 1", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1 \n1 2 3 4 3 2 1 \n1 2 3 4 5 4 3 2 1 \n1 2 3 4 5 6 5 4 3 2 1", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1 \n1 2 3 4 3 2 1 \n1 2 3 4 5 4 3 2 1 \n1 2 3 4 5 6 5 4 3 2 1 \n1 2 3 4 5 6 7 6 5 4 3 2 1", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1 \n1 2 3 4 3 2 1 \n1 2 3 4 5 4 3 2 1 \n1 2 3 4 5 6 5 4 3 2 1 \n1 2 3 4 5 6 7 6 5 4 3 2 1 \n1 2 3 4 5 6 7 8 7 6 5 4 3 2 1", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "1 \n1 2 1 \n1 2 3 2 1 \n1 2 3 4 3 2 1 \n1 2 3 4 5 4 3 2 1 \n1 2 3 4 5 6 5 4 3 2 1 \n1 2 3 4 5 6 7 6 5 4 3 2 1 \n1 2 3 4 5 6 7 8 7 6 5 4 3 2 1 \n1 2 3 4 5 6 7 8 9 8 7 6 5 4 3 2 1", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    for j in range(i - 1, 0, -1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            for (int j = i - 1; j >= 1; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        for (let j = i - 1; j >= 1; j--) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        for (int j = i - 1; j >= 1; j--) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    for j in range(i - 1, 0, -1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            for (int j = i - 1; j >= 1; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        for (let j = i - 1; j >= 1; j--) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        for (int j = i - 1; j >= 1; j--) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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