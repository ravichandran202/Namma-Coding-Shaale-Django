module.exports = {
  "title": "Total Sum",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Calculate the total sum of all elements in a 2D matrix.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the sum of all matrix elements</li>
    </ul>
    <p>This problem helps practice matrix traversal and accumulation operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 45</pre>
    <p><b>Explanation:</b> The sum is <code>1+2+3+4+5+6+7+8+9 = 45</code>.</p>
    

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1 1
50
Output: 50</pre>
    <p><b>Explanation:</b> With a single element, the sum equals that element.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "45", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "50", "stdinput": "1 1\n50" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "2 2\n10 20\n30 40" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "2 2\n-5 5\n-10 10" },
    { "id": 5, "input": [], "expected": "55", "stdinput": "1 10\n1 2 3 4 5 6 7 8 9 10" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "3 3\n0 0 0\n0 0 0\n0 0 0" }
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ntotal = 0\nfor r in matrix:\n    for c in r:\n        total += c\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int total = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                total += matrix[i][j];\n            }\n        }\n        \n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let total = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            total += rowData.reduce((sum, num) => sum + num, 0);\n        }\n        \n        console.log(total);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int total = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            total += matrix[i][j];\n        }\n    }\n    \n    cout << total << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ntotal = 0\nfor r in matrix:\n    for c in r:\n        total += c\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int total = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                total += matrix[i][j];\n            }\n        }\n        \n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let total = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            total += rowData.reduce((sum, num) => sum + num, 0);\n        }\n        \n        console.log(total);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int total = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            total += matrix[i][j];\n        }\n    }\n    \n    cout << total << endl;\n    return 0;\n}"
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