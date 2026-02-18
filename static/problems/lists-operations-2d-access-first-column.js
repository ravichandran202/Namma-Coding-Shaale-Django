module.exports = {
  "title": "Print Column Elements",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Print all elements from the first column of a 2D matrix, each on a separate line.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display each element of the first column on a separate line</li>
    </ul>
    <p>This problem helps practice accessing specific columns in 2D arrays and understanding matrix traversal patterns.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
1
4
7</pre>
    <p><b>Explanation:</b> The first column contains elements <code>1, 4, 7</code>, each printed on a separate line.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4 2
10 20
30 40
50 60
70 80
Output: 
10
30
50
70</pre>
    <p><b>Explanation:</b> All four elements of the first column are printed, one per line.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1 1
100
Output: 
100</pre>
    <p><b>Explanation:</b> With a single element matrix, that element is in both the first row and first column.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n4\n7", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "10\n30\n50\n70", "stdinput": "4 2\n10 20\n30 40\n50 60\n70 80" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
    { "id": 4, "input": [], "expected": "5\n10\n15", "stdinput": "3 3\n5 6 7\n10 11 12\n15 16 17" },
    { "id": 5, "input": [], "expected": "-5\n0\n6\n12", "stdinput": "4 3\n-5 -3 -1\n0 2 4\n6 8 10\n12 14 16" },
    { "id": 6, "input": [], "expected": "7\n9", "stdinput": "2 2\n7 8\n9 10" },
    { "id": 7, "input": [], "expected": "25\n125\n225", "stdinput": "3 4\n25 50 75 100\n125 150 175 200\n225 250 275 300" },
    { "id": 8, "input": [], "expected": "0\n1", "stdinput": "2 3\n0 0 0\n1 1 1" },
    { "id": 9, "input": [], "expected": "99\n88\n77\n66\n55", "stdinput": "5 2\n99 100\n88 89\n77 78\n66 67\n55 56" }
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nfor i in range(row):\n    print(matrix[i][0])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        for (int i = 0; i < row; i++) {\n            System.out.println(matrix[i][0]);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        for (let i = 0; i < row; i++) {\n            console.log(matrix[i][0]);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    for (int i = 0; i < row; i++) {\n        cout << matrix[i][0] << endl;\n    }\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nfor i in range(row):\n    print(matrix[i][0])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        for (int i = 0; i < row; i++) {\n            System.out.println(matrix[i][0]);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        for (let i = 0; i < row; i++) {\n            console.log(matrix[i][0]);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    for (int i = 0; i < row; i++) {\n        cout << matrix[i][0] << endl;\n    }\n    \n    return 0;\n}"
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