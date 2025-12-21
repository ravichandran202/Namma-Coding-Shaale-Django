module.exports = {
    "title": "Row Sum",
    "difficulty": "medium",
    "acceptance": "95%",
  
    "description": `
      <p>Given a matrix of size <code>M x N</code>, calculate and print the sum of elements in each row separately.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>Process the matrix row by row from top to bottom</li>
        <li>For each row, add up all the elements in that row</li>
      </ul>
      <p>This pattern calculates horizontal sums across the matrix, giving you the total of each individual row.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
6
15
24</pre>
    <p><b>Explanation:</b> 
    <br><b>Row 0:</b> <code>1 + 2 + 3 = 6</code>, 
    <br><b>Row 1:</b> <code>4 + 5 + 6 = 15</code>, 
    <br><b>Row 2:</b> <code>7 + 8 + 9 = 24</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 3
10 20 30
40 50 60
Output: 
60
150</pre>
      <p><b>Explanation:</b> 
      <br><b>Row 0:</b> <code>10 + 20 + 30 = 60</code>, 
      <br><b>Row 1:</b> <code>40 + 50 + 60 = 150</code>.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "6\n15\n24", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
      { "id": 2, "input": [], "expected": "60\n150", "stdinput": "2 3\n10 20 30\n40 50 60" },
      { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
      { "id": 4, "input": [], "expected": "11\n15", "stdinput": "2 2\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "10\n26\n42\n58", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
    ],
  
    "templates": {
      "python": `row, col = tuple(map(int, input().split()))
  
matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

for i in range(row):
    my_sum = 0
    for j in range(col):
        my_sum += matrix[i][j]
    print(my_sum)`,
            
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
              int sum = 0;
              for (int j = 0; j < col; j++) {
                  sum += matrix[i][j];
              }
              System.out.println(sum);
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
                  let sum = 0;
                  for (let j = 0; j < col; j++) {
                      sum += matrix[i][j];
                  }
                  console.log(sum);
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
          int sum = 0;
          for (int j = 0; j < col; j++) {
              sum += matrix[i][j];
          }
          cout << sum << endl;
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