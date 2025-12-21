module.exports =  {
  "title": "Number Pattern – Reverse Sequential Grid",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Print an <code>n x n</code> grid filled with consecutive numbers starting from <code>n×n</code> and decreasing down to <code>1</code>. The numbers fill the grid in reverse reading order, starting from the highest number and counting backwards.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Numbers <code>n×n</code> down to <code>n×(n-1)+1</code> in reverse order</li>
      <li><b>Row 2:</b> Numbers <code>n×(n-1)</code> down to <code>n×(n-2)+1</code> in reverse order</li>
      <li><b>Row 3:</b> Numbers <code>n×(n-2)</code> down to <code>n×(n-3)+1</code> in reverse order</li>
      <li>Continue this pattern until <b>Row n</b> which ends with <code>1</code></li>
      <li>Numbers decrease continuously from <code>n×n</code> to <code>1</code></li>
      <li>Each row picks up where the previous row left off, counting backwards</li>
    </ul>
    <p>This pattern creates a reverse number sequence that flows across rows from highest to lowest, similar to counting backwards in reading order.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
9 8 7 
6 5 4 
3 2 1 </pre>
    <p><b>Explanation:</b> Numbers fill the grid in reverse: Row 1 has <code>9 8 7</code> (highest numbers), Row 2 continues with <code>6 5 4</code>, and Row 3 completes with <code>3 2 1</code> (lowest numbers).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
4 3 
2 1 </pre>
    <p><b>Explanation:</b> A 2x2 grid filled with numbers <code>4</code> down to <code>1</code>. Row 1 has <code>4 3</code> and Row 2 continues with <code>2 1</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "9 8 7 \n6 5 4 \n3 2 1", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "4 3 \n2 1", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "16 15 14 13 \n12 11 10 9 \n8 7 6 5 \n4 3 2 1", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "25 24 23 22 21 \n20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 6 \n5 4 3 2 1", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "36 35 34 33 32 31 \n30 29 28 27 26 25 \n24 23 22 21 20 19 \n18 17 16 15 14 13 \n12 11 10 9 8 7 \n6 5 4 3 2 1", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "49 48 47 46 45 44 43 \n42 41 40 39 38 37 36 \n35 34 33 32 31 30 29 \n28 27 26 25 24 23 22 \n21 20 19 18 17 16 15 \n14 13 12 11 10 9 8 \n7 6 5 4 3 2 1", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "64 63 62 61 60 59 58 57 \n56 55 54 53 52 51 50 49 \n48 47 46 45 44 43 42 41 \n40 39 38 37 36 35 34 33 \n32 31 30 29 28 27 26 25 \n24 23 22 21 20 19 18 17 \n16 15 14 13 12 11 10 9 \n8 7 6 5 4 3 2 1", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "81 80 79 78 77 76 75 74 73 \n72 71 70 69 68 67 66 65 64 \n63 62 61 60 59 58 57 56 55 \n54 53 52 51 50 49 48 47 46 \n45 44 43 42 41 40 39 38 37 \n36 35 34 33 32 31 30 29 28 \n27 26 25 24 23 22 21 20 19 \n18 17 16 15 14 13 12 11 10 \n9 8 7 6 5 4 3 2 1", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\ncount = n * n\nfor i in range(n):\n    for j in range(n):\n        print(count, end=' ')\n        count -= 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = n * n;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                System.out.print(count + \" \");\n                count--;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let count = n * n;\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            row += count + ' ';\n            count--;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = n * n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cout << count << \" \";\n            count--;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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