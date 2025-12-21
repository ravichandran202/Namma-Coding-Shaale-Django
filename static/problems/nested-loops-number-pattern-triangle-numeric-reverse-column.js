module.exports = {
  "title": "Number Pattern – Descending Column Numbers",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Print a triangular pattern where each row contains numbers in descending order starting from n. The pattern creates columns that count down from the maximum value.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>n</code></li>
      <li><b>Row 2:</b> Contains <code>n, n-1</code></li>
      <li><b>Row 3:</b> Contains <code>n, n-1, n-2</code></li>
      <li><b>Row 4:</b> Contains <code>n, n-1, n-2, n-3</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row starts from n and counts down</li>
      <li>The number of elements in each row equals the row number</li>
      <li>The sequence in each row decreases by 1 with each step</li>
      <li>The final row contains numbers from n down to 1</li>
    </ul>
    <p>This creates a triangular pattern where each row shows a descending sequence starting from n, with each subsequent row extending the countdown by one more number.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
5 
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1 </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>5</code>, 
    <br><b>Row 2:</b> <code>5 4</code>, 
    <br><b>Row 3:</b> <code>5 4 3</code>, 
    <br><b>Row 4:</b> <code>5 4 3 2</code>, 
    <br><b>Row 5:</b> <code>5 4 3 2 1</code>. 
    <br>Each row counts down from 5.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
3 
3 2 
3 2 1 </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows showing descending sequences starting from 3.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5 \n5 4 \n5 4 3 \n5 4 3 2 \n5 4 3 2 1", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "3 \n3 2 \n3 2 1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "4 \n4 3 \n4 3 2 \n4 3 2 1", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "6 \n6 5 \n6 5 4 \n6 5 4 3 \n6 5 4 3 2 \n6 5 4 3 2 1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "7 \n7 6 \n7 6 5 \n7 6 5 4 \n7 6 5 4 3 \n7 6 5 4 3 2 \n7 6 5 4 3 2 1", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "8 \n8 7 \n8 7 6 \n8 7 6 5 \n8 7 6 5 4 \n8 7 6 5 4 3 \n8 7 6 5 4 3 2 \n8 7 6 5 4 3 2 1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "9 \n9 8 \n9 8 7 \n9 8 7 6 \n9 8 7 6 5 \n9 8 7 6 5 4 \n9 8 7 6 5 4 3 \n9 8 7 6 5 4 3 2 \n9 8 7 6 5 4 3 2 1", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "10 \n10 9 \n10 9 8 \n10 9 8 7 \n10 9 8 7 6 \n10 9 8 7 6 5 \n10 9 8 7 6 5 4 \n10 9 8 7 6 5 4 3 \n10 9 8 7 6 5 4 3 2 \n10 9 8 7 6 5 4 3 2 1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n, n - i, -1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = n; j > n - i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = n; j > n - i; j--) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = n; j > n - i; j--) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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