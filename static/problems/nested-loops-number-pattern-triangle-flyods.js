module.exports = {
  "title": "Number Pattern – Floyd's Triangle",
  "difficulty": "medium",
  "acceptance": "89%",

  "description": `
    <p>Print Floyd's Triangle - a triangular pattern filled with consecutive natural numbers in a specific arrangement. The numbers are filled row by row, with each row containing one more number than the previous row.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> number starting from <code>1</code></li>
      <li><b>Row 2:</b> Contains <code>2</code> numbers continuing from where the previous row ended</li>
      <li><b>Row 3:</b> Contains <code>3</code> numbers continuing the sequence</li>
      <li><b>Row 4:</b> Contains <code>4</code> numbers continuing the sequence</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Numbers are consecutive and increase by <code>1</code> with each step</li>
      <li>Each row picks up exactly where the previous row left off</li>
      <li>The total numbers printed equals the triangular number for n</li>
    </ul>
    <p>This creates a famous number pattern where consecutive numbers fill a right-angled triangle shape, with each row containing one more number than the previous row.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1 
2 3 
4 5 6 
7 8 9 10 </pre>
    <p><b>Explanation:</b> Row 1 has <code>1</code>, Row 2 continues with <code>2 3</code>, Row 3 continues with <code>4 5 6</code>, and Row 4 completes with <code>7 8 9 10</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
2 3 
4 5 6 </pre>
    <p><b>Explanation:</b> Floyd's triangle with 3 rows showing consecutive numbers filling the triangular pattern.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1 \n2 3 \n4 5 6", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 21", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 21 \n22 23 24 25 26 27 28", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 21 \n22 23 24 25 26 27 28 \n29 30 31 32 33 34 35 36", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 21 \n22 23 24 25 26 27 28 \n29 30 31 32 33 34 35 36 \n37 38 39 40 41 42 43 44 45", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 21 \n22 23 24 25 26 27 28 \n29 30 31 32 33 34 35 36 \n37 38 39 40 41 42 43 44 45 \n46 47 48 49 50 51 52 53 54 55", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nnum = 1\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(num, end=' ')\n        num += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int num = 1;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(num + \" \");\n                num++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let num = 1;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += num + ' ';\n            num++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int num = 1;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << num << \" \";\n            num++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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