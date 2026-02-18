module.exports = {
  "title": "Print Middle Element",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>Print the middle element of a matrix. For matrices with odd dimensions, there is exactly one middle element.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the middle element</li>
    </ul>
    <p>This problem helps practice integer division and matrix indexing for finding center elements.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 5</pre>
    <p><b>Explanation:</b> Middle row is index 1, middle column is index 1, so element at [1][1] is <code>5</code>.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1 1
100
Output: 100</pre>
    <p><b>Explanation:</b> With a single element matrix, that element is the middle.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "100", "stdinput": "1 1\n100" },
    { "id": 3, "input": [], "expected": "13", "stdinput": "5 5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25" },
    { "id": 4, "input": [], "expected": "8", "stdinput": "3 5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "3 3\n-1 -2 -3\n-4 0 4\n3 2 1" },
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ni = row // 2\nj = col // 2\nprint(matrix[i][j])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        int middleRow = row / 2;\n        int middleCol = col / 2;\n        System.out.println(matrix[middleRow][middleCol]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        const middleRow = Math.floor(row / 2);\n        const middleCol = Math.floor(col / 2);\n        console.log(matrix[middleRow][middleCol]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    int middleRow = row / 2;\n    int middleCol = col / 2;\n    cout << matrix[middleRow][middleCol] << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ni = row // 2\nj = col // 2\nprint(matrix[i][j])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        int middleRow = row / 2;\n        int middleCol = col / 2;\n        System.out.println(matrix[middleRow][middleCol]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        const middleRow = Math.floor(row / 2);\n        const middleCol = Math.floor(col / 2);\n        console.log(matrix[middleRow][middleCol]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    int middleRow = row / 2;\n    int middleCol = col / 2;\n    cout << matrix[middleRow][middleCol] << endl;\n    \n    return 0;\n}"
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