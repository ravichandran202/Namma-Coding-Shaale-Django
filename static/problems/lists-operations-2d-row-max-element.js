module.exports = {
    "title": "Row Maximum",
    "difficulty": "Medium",
    "acceptance": "87%",
  
    "description": `
      <p>Given a matrix of size <code>M x N</code>, find and print the maximum value from each row separately.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>Process the matrix row by row from top to bottom</li>
        <li>For each row, examine all elements in that row to find the largest value</li>
        <li>After processing one complete row, print the maximum value found in that row</li>
      </ul>
      <p>This pattern identifies the peak value in each horizontal line of the matrix, giving you the highest number from every row.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
3 3
1 2 3
7 5 6
4 9 8
Output: 
3
7
9</pre>
    <p><b>Explanation:</b> 
    <br><b>Row 0:</b> Maximum is <code>3</code>, 
    <br><b>Row 1:</b> Maximum is <code>7</code>, 
    <br><b>Row 2:</b> Maximum is <code>9</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 4
10 25 15 30
45 20 35 40
Output: 
30
45</pre>
      <p><b>Explanation:</b> 
      <br><b>Row 0:</b> Maximum is <code>30</code>, 
      <br><b>Row 1:</b> Maximum is <code>45</code>.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "3\n7\n9", "stdinput": "3 3\n1 2 3\n7 5 6\n4 9 8" },
      { "id": 2, "input": [], "expected": "30\n45", "stdinput": "2 4\n10 25 15 30\n45 20 35 40" },
      { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
      { "id": 4, "input": [], "expected": "6\n8", "stdinput": "2 2\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "4\n8\n12\n16", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
    ],
  
    "templates": {
      "python": `row, col = map(int, input().split())
  
matrix = []
for i in range(row):
    matrix.append(list(map(int, input().split())))

for i in range(row):
    print(max(matrix[i]))`,
            
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
              int maxVal = matrix[i][0];
              for (int j = 1; j < col; j++) {
                  if (matrix[i][j] > maxVal) {
                      maxVal = matrix[i][j];
                  }
              }
              System.out.println(maxVal);
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
                  let maxVal = matrix[i][0];
                  for (let j = 1; j < col; j++) {
                      if (matrix[i][j] > maxVal) {
                          maxVal = matrix[i][j];
                      }
                  }
                  console.log(maxVal);
              }
              readline.close();
          }
      }
  });`,
  
      "c++": `#include <iostream>
  #include <algorithm>
  #include <vector>
  using namespace std;
  
  int main() {
      int row, col;
      cin >> row >> col;
      
      vector<vector<int>> matrix(row, vector<int>(col));
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cin >> matrix[i][j];
          }
      }
      
      for (int i = 0; i < row; i++) {
          int maxVal = matrix[i][0];
          for (int j = 1; j < col; j++) {
              if (matrix[i][j] > maxVal) {
                  maxVal = matrix[i][j];
              }
          }
          cout << maxVal << endl;
      }
      
      return 0;
  }`
    },

  
    "solutions": {
      "python": `row, col = map(int, input().split())
  
matrix = []
for i in range(row):
    matrix.append(list(map(int, input().split())))

for i in range(row):
    print(max(matrix[i]))`,
            
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
              int maxVal = matrix[i][0];
              for (int j = 1; j < col; j++) {
                  if (matrix[i][j] > maxVal) {
                      maxVal = matrix[i][j];
                  }
              }
              System.out.println(maxVal);
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
                  let maxVal = matrix[i][0];
                  for (let j = 1; j < col; j++) {
                      if (matrix[i][j] > maxVal) {
                          maxVal = matrix[i][j];
                      }
                  }
                  console.log(maxVal);
              }
              readline.close();
          }
      }
  });`,
  
      "c++": `#include <iostream>
  #include <algorithm>
  #include <vector>
  using namespace std;
  
  int main() {
      int row, col;
      cin >> row >> col;
      
      vector<vector<int>> matrix(row, vector<int>(col));
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              cin >> matrix[i][j];
          }
      }
      
      for (int i = 0; i < row; i++) {
          int maxVal = matrix[i][0];
          for (int j = 1; j < col; j++) {
              if (matrix[i][j] > maxVal) {
                  maxVal = matrix[i][j];
              }
          }
          cout << maxVal << endl;
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