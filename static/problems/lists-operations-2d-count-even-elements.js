module.exports = {
  "title": "Count Evens",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Count how many even numbers are present in a 2D matrix.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the count of even numbers</li>
    </ul>
    <p>This problem helps practice conditional logic and matrix traversal with filtering.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 4</pre>
    <p><b>Explanation:</b> The even numbers are <code>2, 4, 6, 8</code>, so count is 4.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 3
2 4 6
8 10 12
Output: 6</pre>
    <p><b>Explanation:</b> All numbers are even, so count equals total elements (6).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "6", "stdinput": "2 3\n2 4 6\n8 10 12" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "2 2\n1 3\n5 7" },
    { "id": 4, "input": [], "expected": "5", "stdinput": "3 3\n0 1 2\n3 4 5\n6 7 8" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "2 2\n-2 1\n-4 3" },
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ncount = 0\nfor row in matrix:\n    for val in row:\n        if val % 2 == 0:\n            count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int count = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                if (matrix[i][j] % 2 == 0) {\n                    count++;\n                }\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let count = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            count += rowData.filter(num => num % 2 === 0).length;\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int count = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            if (matrix[i][j] % 2 == 0) {\n                count++;\n            }\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ncount = 0\nfor row in matrix:\n    for val in row:\n        if val % 2 == 0:\n            count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int count = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                if (matrix[i][j] % 2 == 0) {\n                    count++;\n                }\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let count = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            count += rowData.filter(num => num % 2 === 0).length;\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int count = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            if (matrix[i][j] % 2 == 0) {\n                count++;\n            }\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
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