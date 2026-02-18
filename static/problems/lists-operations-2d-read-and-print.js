module.exports = {
  "title": "Print a matrix",
  "difficulty": "very easy",
  "acceptance": "98%",

  "description": `
    <p>Take a 2D list (matrix) as input and print it in the same structure.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display the matrix in the same row-column structure as input</li>
      <li><b>Matrix Structure:</b> Print each row on a separate line with elements space-separated</li>
    </ul>
    <p>This problem helps practice 2D list manipulation and formatted output for matrix structures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
1 2 3 
4 5 6 
7 8 9 </pre>
    <p><b>Explanation:</b> The matrix is printed with each row on a separate line and elements space-separated.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 4
10 20 30 40
50 60 70 80
Output: 
10 20 30 40 
50 60 70 80 </pre>
    <p><b>Explanation:</b> A 2x4 matrix printed in the same row-column format.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1 3
5 10 15
Output: 
5 10 15 </pre>
    <p><b>Explanation:</b> A single-row matrix printed as a single line.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 \n4 5 6 \n7 8 9", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "10 20 30 40 \n50 60 70 80", "stdinput": "2 4\n10 20 30 40\n50 60 70 80" },
    { "id": 3, "input": [], "expected": "5 10 15", "stdinput": "1 3\n5 10 15" },
    { "id": 4, "input": [], "expected": "1 \n2 \n3", "stdinput": "3 1\n1\n2\n3" },
    { "id": 5, "input": [], "expected": "-1 -2 \n-3 -4", "stdinput": "2 2\n-1 -2\n-3 -4" },
    { "id": 6, "input": [], "expected": "100 200 300 400 500", "stdinput": "1 5\n100 200 300 400 500" },
    { "id": 7, "input": [], "expected": "0 0 \n0 0", "stdinput": "2 2\n0 0\n0 0" },
    { "id": 8, "input": [], "expected": "7 8 9 \n10 11 12", "stdinput": "2 3\n7 8 9\n10 11 12" },
    { "id": 9, "input": [], "expected": "25 50 \n75 100", "stdinput": "2 2\n25 50\n75 100" }
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nfor i in range(row):\n    for j in range(col):\n        print(matrix[i][j], end=\" \")\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                System.out.print(matrix[i][j] + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        let output = '';\n        for (let i = 0; i < row; i++) {\n            for (let j = 0; j < col; j++) {\n                output += matrix[i][j] + ' ';\n            }\n            output += '\\n';\n        }\n        console.log(output);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nfor i in range(row):\n    for j in range(col):\n        print(matrix[i][j], end=\" \")\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                System.out.print(matrix[i][j] + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        let output = '';\n        for (let i = 0; i < row; i++) {\n            for (let j = 0; j < col; j++) {\n                output += matrix[i][j] + ' ';\n            }\n            output += '\\n';\n        }\n        console.log(output);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}"
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