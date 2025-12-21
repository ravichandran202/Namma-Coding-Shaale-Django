module.exports = {
    "title": "Matrix Addition",
    "difficulty": "hard",
    "acceptance": "89%",
  
    "description": `
      <p>Given two matrices of the same size <code>M x N</code>, read both matrices and print their sum matrix where each element is the sum of corresponding elements from both input matrices.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>Read two matrices with identical dimensions</li>
        <li>Process both matrices element by element in the same order</li>
        <li>For each position <code>(i, j)</code>, add the element from the first matrix to the corresponding element from the second matrix</li>
        <li>Each element in the output is calculated as: <code>result[i][j] = A[i][j] + B[i][j]</code></li>
      </ul>
      <p>This pattern performs element-wise addition, creating a new matrix where each position contains the sum of values from the same position in both input matrices.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
2 2
1 2
3 4
5 6
7 8
Output: 
6 8
10 12</pre>
    <p><b>Explanation:</b> 
    <br><b>Position (0,0):</b> <code>1 + 5 = 6</code>, 
    <br><b>Position (0,1):</b> <code>2 + 6 = 8</code>, 
    <br><b>Position (1,0):</b> <code>3 + 7 = 10</code>, 
    <br><b>Position (1,1):</b> <code>4 + 8 = 12</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 3
10 20 30
40 50 60
1 2 3
4 5 6
Output: 
11 22 33
44 55 66</pre>
      <p><b>Explanation:</b> Each element in the first matrix is added to the corresponding element in the second matrix, resulting in a new 2x3 sum matrix.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "6 8 \n10 12", "stdinput": "2 2\n1 2\n3 4\n5 6\n7 8" },
      { "id": 2, "input": [], "expected": "11 22 33 \n44 55 66", "stdinput": "2 3\n10 20 30\n40 50 60\n1 2 3\n4 5 6" },
      { "id": 3, "input": [], "expected": "200", "stdinput": "1 1\n100\n100" },
      { "id": 4, "input": [], "expected": "10 12 \n14 16", "stdinput": "2 2\n5 6\n7 8\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "2 4 6 8 \n10 12 14 16 \n18 20 22 24 \n26 28 30 32", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
      { "id": 6, "input": [], "expected": "4 6 8 \n10 12 14 \n16 18 20", "stdinput": "3 3\n2 3 4\n5 6 7\n8 9 10\n2 3 4\n5 6 7\n8 9 10" },
      { "id": 7, "input": [], "expected": "0 2 4 \n6 0 8 \n10 12 0", "stdinput": "3 3\n0 1 2\n3 0 4\n5 6 0\n0 1 2\n3 0 4\n5 6 0" },
    ],
  
    "templates": {
      "python": `row, col = map(int, input().split())
  
A = []
B = []

for i in range(row):
    A.append(list(map(int, input().split())))
for i in range(row):
    B.append(list(map(int, input().split())))

for i in range(row):
    for j in range(col):
        print(A[i][j] + B[i][j], end=" ")
    print()`,
            
      "java": `import java.util.Scanner;
  
  public class Main {
      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);
          int row = scanner.nextInt();
          int col = scanner.nextInt();
          
          int[][] A = new int[row][col];
          int[][] B = new int[row][col];
          
          // Read first matrix
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  A[i][j] = scanner.nextInt();
              }
          }
          
          // Read second matrix
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  B[i][j] = scanner.nextInt();
              }
          }
          
          // Print sum matrix
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  System.out.print((A[i][j] + B[i][j]) + " ");
              }
              System.out.println();
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
  let A = [];
  let B = [];
  
  readline.on('line', (line) => {
      inputLines.push(line);
      lineCount++;
      
      if (lineCount === 1) {
          [row, col] = line.split(' ').map(Number);
      } else if (lineCount > 1 && lineCount <= row + 1) {
          A.push(line.split(' ').map(Number));
      } else if (lineCount > row + 1 && lineCount <= 2 * row + 1) {
          B.push(line.split(' ').map(Number));
          
          if (lineCount === 2 * row + 1) {
              let output = '';
              for (let i = 0; i < row; i++) {
                  let line = '';
                  for (let j = 0; j < col; j++) {
                      line += (A[i][j] + B[i][j]) + ' ';
                  }
                  output += line + '\\n';
              }
              console.log(output);
              readline.close();
          }
      }
  });`,
  
      "c++": `#include <iostream>
  using namespace std;
  
  int main() {
      int row, col;
      cin >> row >> col;
      
      int A[row][col];
      int B[row][col];
      
      // Read first matrix
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cin >> A[i][j];
          }
      }
      
      // Read second matrix
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cin >> B[i][j];
          }
      }
      
      // Print sum matrix
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cout << A[i][j] + B[i][j] << " ";
          }
          cout << endl;
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