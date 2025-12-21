module.exports = {
  "title": "Access Last Row",
  "difficulty": "very easy",
  "acceptance": "96%",

  "description": `
    <p>Print all elements from the last row of a 2D matrix, each on a separate line.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display each element of the last row on a separate line</li>
    </ul>
    <p>This problem helps practice accessing specific rows in 2D arrays using both positive and negative indexing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
7
8
9</pre>
    <p><b>Explanation:</b> The last row contains elements <code>7, 8, 9</code>, each printed on a separate line.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 4
10 20 30 40
50 60 70 80
Output: 
50
60
70
80</pre>
    <p><b>Explanation:</b> All four elements of the last row are printed, one per line.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1 3
5 10 15
Output: 
5
10
15</pre>
    <p><b>Explanation:</b> With only one row, that row is both first and last, so all elements are printed.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "7\n8\n9", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "50\n60\n70\n80", "stdinput": "2 4\n10 20 30 40\n50 60 70 80" },
    { "id": 3, "input": [], "expected": "5\n10\n15", "stdinput": "1 3\n5 10 15" },
    { "id": 4, "input": [], "expected": "300", "stdinput": "3 1\n100\n200\n300" },
    { "id": 5, "input": [], "expected": "12\n14\n16", "stdinput": "4 3\n-5 -3 -1\n0 2 4\n6 8 10\n12 14 16" },

  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nfor j in range(col):\n    print(matrix[-1][j])",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n            }\n        }\n        \n        for (int j = 0; j < col; j++) {\n            System.out.println(matrix[row - 1][j]);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        \n        for (let i = 1; i <= row; i++) {\n            matrix.push(inputLines[i].split(' ').map(Number));\n        }\n        \n        for (let j = 0; j < col; j++) {\n            console.log(matrix[row - 1][j]);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n        }\n    }\n    \n    for (int j = 0; j < col; j++) {\n        cout << matrix[row - 1][j] << endl;\n    }\n    \n    return 0;\n}"
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