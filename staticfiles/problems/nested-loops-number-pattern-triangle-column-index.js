module.exports =  {
  "title": "Number Pattern – Triangle Column Index",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Print a triangular pattern where each row displays numbers starting from <code>1</code> up to the current row number. Each subsequent row adds one more number to the sequence.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains numbers from <code>1</code> to <code>1</code></li>
      <li><b>Row 2:</b> Contains numbers from <code>1</code> to <code>2</code></li>
      <li><b>Row 3:</b> Contains numbers from <code>1</code> to <code>3</code></li>
      <li><b>Row 4:</b> Contains numbers from <code>1</code> to <code>4</code></li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row always starts from <code>1</code> and increments up to the row number</li>
      <li>The pattern forms a right-angled triangle with sequential numbers</li>
    </ul>
    <p>This creates a growing sequence pattern where each row extends the number sequence by one more element.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1 
1 2 
1 2 3 
1 2 3 4 </pre>
    <p><b>Explanation:</b> Row 1 has <code>1</code>, Row 2 has <code>1 2</code>, Row 3 has <code>1 2 3</code>, and Row 4 has <code>1 2 3 4</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
1 2 
1 2 3 </pre>
    <p><b>Explanation:</b> A triangular pattern where each row shows numbers from 1 up to the row number.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1 \n1 2 \n1 2 3", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 \n1 2 3 4 5 6", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 \n1 2 3 4 5 6 \n1 2 3 4 5 6 7", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 \n1 2 3 4 5 6 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 8", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 \n1 2 3 4 5 6 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 9", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n1 2 3 4 5 \n1 2 3 4 5 6 \n1 2 3 4 5 6 7 \n1 2 3 4 5 6 7 8 \n1 2 3 4 5 6 7 8 9 \n1 2 3 4 5 6 7 8 9 10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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