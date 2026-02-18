module.exports = {
  "title": "Find the count of zeros and ones",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>Count how many zeros and ones are present in a 2D matrix and display both counts.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of rows and columns as space-separated integers</li>
      <li><b>Subsequent Inputs:</b> The next lines contain the matrix rows as space-separated integers</li>
      <li><b>Output Format:</b> Display two integers on separate lines - first the count of ones, then the count of zeros</li>
    </ul>
    <p>This problem helps practice multiple conditional counting and understanding binary data patterns.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 0 1
1 0 1
1 1 1
Output: 
7
2</pre>
    <p><b>Explanation:</b> There are 7 ones and 2 zeros in the matrix.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 2
0 0
0 0
Output: 
0
4</pre>
    <p><b>Explanation:</b> All elements are zeros - 0 ones and 4 zeros.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "7\n2", "stdinput": "3 3\n1 0 1\n1 0 1\n1 1 1" },
    { "id": 2, "input": [], "expected": "0\n4", "stdinput": "2 2\n0 0\n0 0" },
    { "id": 3, "input": [], "expected": "3\n0", "stdinput": "1 3\n1 1 1" },
    { "id": 4, "input": [], "expected": "2\n2", "stdinput": "2 2\n1 0\n0 1" },
    { "id": 5, "input": [], "expected": "5\n3", "stdinput": "4 2\n1 1\n0 1\n1 0\n0 1" },
    { "id": 6, "input": [], "expected": "1\n0", "stdinput": "1 1\n1" },
    { "id": 7, "input": [], "expected": "0\n1", "stdinput": "1 1\n0" },
    { "id": 8, "input": [], "expected": "6\n3", "stdinput": "3 3\n1 0 1\n1 1 0\n0 1 1" },
    { "id": 9, "input": [], "expected": "4\n4", "stdinput": "4 2\n1 0\n0 1\n1 0\n0 1" }
  ],

  "templates": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ncount_1 = 0\ncount_0 = 0\nfor i in range(row):\n    for j in range(col):\n        if matrix[i][j] == 1:\n            count_1 += 1\n        elif matrix[i][j] == 0:\n            count_0 += 1\nprint(count_1)\nprint(count_0)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int count1 = 0;\n        int count0 = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                if (matrix[i][j] == 1) {\n                    count1++;\n                } else if (matrix[i][j] == 0) {\n                    count0++;\n                }\n            }\n        }\n        \n        System.out.println(count1);\n        System.out.println(count0);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let count1 = 0;\n        let count0 = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            rowData.forEach(num => {\n                if (num === 1) count1++;\n                else if (num === 0) count0++;\n            });\n        }\n        \n        console.log(count1);\n        console.log(count0);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int count1 = 0;\n    int count0 = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            if (matrix[i][j] == 1) {\n                count1++;\n            } else if (matrix[i][j] == 0) {\n                count0++;\n            }\n        }\n    }\n    \n    cout << count1 << endl;\n    cout << count0 << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "row, col = tuple(map(int, input().split()))\n\nmatrix = []\nfor i in range(row):\n    r = list(map(int, input().split()))\n    matrix.append(r)\n\ncount_1 = 0\ncount_0 = 0\nfor i in range(row):\n    for j in range(col):\n        if matrix[i][j] == 1:\n            count_1 += 1\n        elif matrix[i][j] == 0:\n            count_0 += 1\nprint(count_1)\nprint(count_0)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int row = scanner.nextInt();\n        int col = scanner.nextInt();\n        \n        int[][] matrix = new int[row][col];\n        int count1 = 0;\n        int count0 = 0;\n        \n        for (int i = 0; i < row; i++) {\n            for (int j = 0; j < col; j++) {\n                matrix[i][j] = scanner.nextInt();\n                if (matrix[i][j] == 1) {\n                    count1++;\n                } else if (matrix[i][j] == 0) {\n                    count0++;\n                }\n            }\n        }\n        \n        System.out.println(count1);\n        System.out.println(count0);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === parseInt(inputLines[0].split(' ')[0]) + 1) {\n        const [row, col] = inputLines[0].split(' ').map(Number);\n        const matrix = [];\n        let count1 = 0;\n        let count0 = 0;\n        \n        for (let i = 1; i <= row; i++) {\n            const rowData = inputLines[i].split(' ').map(Number);\n            matrix.push(rowData);\n            rowData.forEach(num => {\n                if (num === 1) count1++;\n                else if (num === 0) count0++;\n            });\n        }\n        \n        console.log(count1);\n        console.log(count0);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int row, col;\n    cin >> row >> col;\n    \n    int matrix[row][col];\n    int count1 = 0;\n    int count0 = 0;\n    \n    for (int i = 0; i < row; i++) {\n        for (int j = 0; j < col; j++) {\n            cin >> matrix[i][j];\n            if (matrix[i][j] == 1) {\n                count1++;\n            } else if (matrix[i][j] == 0) {\n                count0++;\n            }\n        }\n    }\n    \n    cout << count1 << endl;\n    cout << count0 << endl;\n    return 0;\n}"
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