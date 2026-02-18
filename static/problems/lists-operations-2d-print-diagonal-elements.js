module.exports = {
  "title": "Find the diagonal elements",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Given an <code>N x N</code> square matrix, find and print all the diagonal elements. The diagonal elements are those elements where the row index equals the column index.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>In a square matrix, the diagonal runs from the top-left corner to the bottom-right corner</li>
      <li>For position <code>(i, j)</code> in the matrix, it's a diagonal element when <code>i = j</code></li>
      <li>Row <b>0</b> has diagonal element at column <b>0</b></li>
      <li>Row <b>1</b> has diagonal element at column <b>1</b></li>
      <li>Row <b>2</b> has diagonal element at column <b>2</b></li>
      <li>This pattern continues until the last row</li>
      <li>Each diagonal element is printed on a separate line</li>
    </ul>
    <p>This pattern extracts the main diagonal of the matrix, which forms a straight line from the top-left to bottom-right corner.</p>
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
5
9</pre>
    <p><b>Explanation:</b> The diagonal elements are at positions where row equals column: <code>(0,0) = 1</code>, <code>(1,1) = 5</code>, and <code>(2,2) = 9</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 2
10 20
30 40
Output: 
10
40</pre>
    <p><b>Explanation:</b> In this 2x2 matrix, the diagonal elements are <code>(0,0) = 10</code> and <code>(1,1) = 40</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n5\n9", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "10\n40", "stdinput": "2 2\n10 20\n30 40" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
    { "id": 4, "input": [], "expected": "5\n8", "stdinput": "2 2\n5 6\n7 8" },
    { "id": 5, "input": [], "expected": "1\n6\n11\n16", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
  ],

  "templates": {
    "python": `row, col = tuple(map(int, input().split()))

matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

for i in range(row):
    for j in range(col):
        if i == j:
            print(matrix[i][j])`,
            
    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int row = scanner.nextInt();
        int col = scanner.nextInt();
        
        int[][] matrix = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                matrix[i][j] = scanner.nextInt();
            }
        }
        
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (i == j) {
                    System.out.println(matrix[i][j]);
                }
            }
        }
    }
}`,

    "javascript": `const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let lineCount = 0;
let row, col;
let matrix = [];

readline.on('line', (line) => {
    inputLines.push(line);
    lineCount++;
    
    if (lineCount === 1) {
        [row, col] = line.split(' ').map(Number);
    } else if (lineCount > 1 && lineCount <= row + 1) {
        matrix.push(line.split(' ').map(Number));
        
        if (lineCount === row + 1) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    if (i === j) {
                        console.log(matrix[i][j]);
                    }
                }
            }
            readline.close();
        }
    }
});`,

    "c++": `#include <iostream>
using namespace std;

int main() {
    int row, col;
    cin >> row >> col;
    
    int matrix[row][col];
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cin >> matrix[i][j];
        }
    }
    
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (i == j) {
                cout << matrix[i][j] << endl;
            }
        }
    }
    
    return 0;
}`
  },


  "solutions": {
    "python": `row, col = tuple(map(int, input().split()))

matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

for i in range(row):
    for j in range(col):
        if i == j:
            print(matrix[i][j])`,
            
    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int row = scanner.nextInt();
        int col = scanner.nextInt();
        
        int[][] matrix = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                matrix[i][j] = scanner.nextInt();
            }
        }
        
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (i == j) {
                    System.out.println(matrix[i][j]);
                }
            }
        }
    }
}`,

    "javascript": `const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let lineCount = 0;
let row, col;
let matrix = [];

readline.on('line', (line) => {
    inputLines.push(line);
    lineCount++;
    
    if (lineCount === 1) {
        [row, col] = line.split(' ').map(Number);
    } else if (lineCount > 1 && lineCount <= row + 1) {
        matrix.push(line.split(' ').map(Number));
        
        if (lineCount === row + 1) {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < col; j++) {
                    if (i === j) {
                        console.log(matrix[i][j]);
                    }
                }
            }
            readline.close();
        }
    }
});`,

    "c++": `#include <iostream>
using namespace std;

int main() {
    int row, col;
    cin >> row >> col;
    
    int matrix[row][col];
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cin >> matrix[i][j];
        }
    }
    
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (i == j) {
                cout << matrix[i][j] << endl;
            }
        }
    }
    
    return 0;
}`
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