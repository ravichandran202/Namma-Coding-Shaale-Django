module.exports = {
    "title": "Matrix Transpose",
    "difficulty": "hard",
    "acceptance": "85%",
  
    "description": `
      <p>Given a matrix of size <code>M x N</code>, find and print its transpose. The transpose of a matrix is obtained by swapping its rows with columns.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>The transpose converts an <code>M x N</code> matrix into an <code>N x M</code> matrix</li>
        <li>Rows become columns and columns become rows</li>
        <li>The element at position <code>(i, j)</code> in the original matrix moves to position <code>(j, i)</code> in the transposed matrix</li>
        <li>The first row of the original matrix becomes the first column of the transposed matrix</li>
        <li>The second row becomes the second column, and so on</li>
        <li>Each element is essentially reflected across the main diagonal</li>
        <li>The output should maintain the same element order but in the new row-column arrangement</li>
      </ul>
      <p>This pattern flips the matrix over its main diagonal, creating a new matrix where rows and columns are interchanged.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
2 3
1 2 3
4 5 6
Output: 
1 4
2 5
3 6</pre>
    <p><b>Explanation:</b> Original rows become columns: 
    <br>Row 0 <code>[1,2,3]</code> becomes Column 0 <code>[1,4]</code>, 
    <br>Row 1 <code>[4,5,6]</code> becomes Column 1 <code>[2,5]</code>, 
    <br>and Row 2 becomes Column 2 <code>[3,6]</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3 2
10 20
30 40
50 60
Output: 
10 30 50
20 40 60</pre>
      <p><b>Explanation:</b> The 3x2 matrix becomes a 2x3 matrix. Original columns become rows in the transposed version.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "1 4 \n2 5 \n3 6", "stdinput": "2 3\n1 2 3\n4 5 6" },
      { "id": 2, "input": [], "expected": "10 30 50 \n20 40 60", "stdinput": "3 2\n10 20\n30 40\n50 60" },
      { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
      { "id": 4, "input": [], "expected": "5 7 \n6 8", "stdinput": "2 2\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "1 5 9 13 \n2 6 10 14 \n3 7 11 15 \n4 8 12 16", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
      { "id": 6, "input": [], "expected": "2 5 8 \n3 6 9 \n4 7 10", "stdinput": "3 3\n2 3 4\n5 6 7\n8 9 10" },
      { "id": 7, "input": [], "expected": "1 4 \n2 5 \n3 6", "stdinput": "2 3\n1 2 3\n4 5 6" },
      { "id": 8, "input": [], "expected": "11 16 26 36 46 \n12 22 27 37 47 \n13 23 33 38 48 \n14 24 34 44 49 \n15 25 35 45 55", "stdinput": "5 5\n11 12 13 14 15\n16 22 23 24 25\n26 27 33 34 35\n36 37 38 44 45\n46 47 48 49 55" },
      { "id": 9, "input": [], "expected": "9 3 5 \n1 8 6 \n2 4 7", "stdinput": "3 3\n9 1 2\n3 8 4\n5 6 7" }
    ],
  
    "templates": {
      "python": `row, col = map(int, input().split())
  
matrix = []
for i in range(row):
    matrix.append(list(map(int, input().split())))

for i in range(col):
    for j in range(row):
        print(matrix[j][i], end=" ")
    print()`,
              
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
          
          for (int i = 0; i < col; i++) {
              for (int j = 0; j < row; j++) {
                  System.out.print(matrix[j][i] + " ");
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
  let matrix = [];
  
  readline.on('line', (line) => {
      inputLines.push(line);
      lineCount++;
      
      if (lineCount === 1) {
          [row, col] = line.split(' ').map(Number);
      } else if (lineCount > 1 && lineCount <= row + 1) {
          matrix.push(line.split(' ').map(Number));
          
          if (lineCount === row + 1) {
              let output = '';
              for (let i = 0; i < col; i++) {
                  let line = '';
                  for (let j = 0; j < row; j++) {
                      line += matrix[j][i] + ' ';
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
      
      int matrix[row][col];
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cin >> matrix[i][j];
          }
      }
      
      for (int i = 0; i < col; i++) {
          for (int j = 0; j < row; j++) {
              cout << matrix[j][i] << " ";
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