module.exports = {
  "title": "Find the maximum element",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Find the maximum element in a 2D matrix.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the maximum value in the matrix</li>
    </ul>
    <p>This problem helps practice finding extreme values in 2D data structures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 9</pre>
    <p><b>Explanation:</b> The maximum value in the matrix is <code>9</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 2
-5 -10
-3 -1
Output: -1</pre>
    <p><b>Explanation:</b> Among negative numbers, <code>-1</code> is the largest (closest to zero).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "9", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "-1", "stdinput": "2 2\n-5 -10\n-3 -1" },
    { "id": 3, "input": [], "expected": "200", "stdinput": "1 3\n100 50 200" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "3 3\n-10 -5 0\n-20 -15 -10\n-30 -25 -20" },
    { "id": 5, "input": [], "expected": "999", "stdinput": "2 3\n100 200 999\n300 400 500" },
    { "id": 6, "input": [], "expected": "1000", "stdinput": "1 1\n1000" },
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\nmax_element = matrix[0][0]\nfor row in matrix:\n    for val in row:\n        if val > max_element:\n            max_element = val\nprint(max_element)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int maxElement = Integer.MIN_VALUE;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                if (matrix[i][j] > maxElement) {\n                    maxElement = matrix[i][j];\n                }\n            }\n        }\n        \n        System.out.println(maxElement);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let maxElement = -Infinity;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            const rowMax = Math.max(...rowData);\n            if (rowMax > maxElement) {\n                maxElement = rowMax;\n            }\n        }\n        \n        console.log(maxElement);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int maxElement = INT_MIN;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            if (matrix[i][j] > maxElement) {\n                maxElement = matrix[i][j];\n            }\n        }\n    }\n    \n    cout << maxElement << endl;\n    return 0;\n}"
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