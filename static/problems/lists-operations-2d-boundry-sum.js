module.exports = {
    "title": "Boundary Sum",
    "difficulty": "hard",
    "acceptance": "86%",
  
    "description": `
      <p>Given a matrix of size <code>M x N</code>, calculate and print the sum of all boundary elements. Boundary elements are those that lie on the outer edges of the matrix.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>Boundary elements include all elements in the first row and last row</li>
        <li>Boundary elements include all elements in the first column and last column</li>
      </ul>
      <p>This pattern calculates the sum of the matrix's perimeter, including all elements that form the outer border of the matrix.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
40</pre>
    <p><b>Explanation:</b> Boundary elements: 
    <br>First row <code>1, 2, 3</code>, 
    <br>last row <code>7, 8, 9</code>, 
    <br>first column <code>4, 7</code>, 
    <br>last column <code>6, 9</code>. 
    <br>Total = <code>1+2+3+4+6+7+8+9 = 40</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 4
10 20 30 40
50 60 70 80
Output: 
360</pre>
      <p><b>Explanation:</b> All elements are boundary elements in a 2x4 matrix. Total = <code>10+20+30+40+50+60+70+80 = 360</code>.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "40", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
      { "id": 2, "input": [], "expected": "360", "stdinput": "2 4\n10 20 30 40\n50 60 70 80" },
      { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
      { "id": 4, "input": [], "expected": "26", "stdinput": "2 2\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "102", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
      { "id": 6, "input": [], "expected": "48", "stdinput": "3 3\n2 3 4\n5 6 7\n8 9 10" },
    ],
  
    "templates": {
      "python": `row, col = map(int, input().split())
  
matrix = []
for i in range(row):
    matrix.append(list(map(int, input().split())))

total = 0
for i in range(row):
    for j in range(col):
        if i == 0 or j == 0 or i == row - 1 or j == col - 1:
            total += matrix[i][j]

print(total)`,
            
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
          
          int total = 0;
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                      total += matrix[i][j];
                  }
              }
          }
          System.out.println(total);
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
              let total = 0;
              for (let i = 0; i < row; i++) {
                  for (let j = 0; j < col; j++) {
                      if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
                          total += matrix[i][j];
                      }
                  }
              }
              console.log(total);
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
      
      int total = 0;
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                  total += matrix[i][j];
              }
          }
      }
      cout << total << endl;
      
      return 0;
  }`
    },

  
    "solutions": {
      "python": `row, col = map(int, input().split())
  
matrix = []
for i in range(row):
    matrix.append(list(map(int, input().split())))

total = 0
for i in range(row):
    for j in range(col):
        if i == 0 or j == 0 or i == row - 1 or j == col - 1:
            total += matrix[i][j]

print(total)`,
            
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
          
          int total = 0;
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                      total += matrix[i][j];
                  }
              }
          }
          System.out.println(total);
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
              let total = 0;
              for (let i = 0; i < row; i++) {
                  for (let j = 0; j < col; j++) {
                      if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
                          total += matrix[i][j];
                      }
                  }
              }
              console.log(total);
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
      
      int total = 0;
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                  total += matrix[i][j];
              }
          }
      }
      cout << total << endl;
      
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