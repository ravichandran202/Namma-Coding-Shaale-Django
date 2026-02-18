module.exports = {
    "title": "Sum of the diagonal and cross-diagonal elements",
    "difficulty": "medium",
    "acceptance": "88%",
  
    "description": `
      <p>Given an <code>N x N</code> square matrix, calculate and print the sum of all elements that lie on either the main diagonal or the cross-diagonal.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li>The main diagonal runs from top-left to bottom-right (where <code>i = j</code>)</li>
        <li>The cross-diagonal runs from top-right to bottom-left (where <code>i + j = N-1</code>)</li>
        <li>Elements that belong to both diagonals (center element in odd-sized matrices) are counted only once</li>
        <li>For each position <code>(i, j)</code> in the matrix, check if it satisfies either condition</li>
        <li>Add the element's value to the total sum if it's on either diagonal</li>
        <li>The result is a single number representing the combined sum</li>
      </ul>
      <p>This pattern calculates the sum of all elements that form an 'X' shape across the matrix, combining both diagonal directions.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
25</pre>
      <p><b>Explanation:</b> Diagonal elements: <code>1, 5, 9</code>. Cross-diagonal elements: <code>3, 5, 7</code>. Combined unique elements: <code>1, 3, 5, 7, 9</code>. Sum = <code>1 + 3 + 5 + 7 + 9 = 25</code>.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
2 2
10 20
30 40
Output: 
100</pre>
      <p><b>Explanation:</b> Diagonal elements: <code>10, 40</code>. Cross-diagonal elements: <code>20, 30</code>. All elements are unique. Sum = <code>10 + 20 + 30 + 40 = 100</code>.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "25", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
      { "id": 2, "input": [], "expected": "100", "stdinput": "2 2\n10 20\n30 40" },
      { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
      { "id": 4, "input": [], "expected": "26", "stdinput": "2 2\n5 6\n7 8" },
      { "id": 5, "input": [], "expected": "68", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
    ],
  
    "templates": {
      "python": `row, col = tuple(map(int, input().split()))
  
matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

my_sum = 0
for i in range(row):
    for j in range(col):
        if i == col - j - 1 or i == j:
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
          
          int sum = 0;
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  if (i == j || i == col - j - 1) {
                      sum += matrix[i][j];
                  }
              }
          }
          System.out.println(sum);
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
              let sum = 0;
              for (let i = 0; i < row; i++) {
                  for (let j = 0; j < col; j++) {
                      if (i === j || i === col - j - 1) {
                          sum += matrix[i][j];
                      }
                  }
              }
              console.log(sum);
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
      
      int sum = 0;
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              if (i == j || i == col - j - 1) {
                  sum += matrix[i][j];
              }
          }
      }
      cout << sum << endl;
      
      return 0;
  }`
    },

  
    "solutions": {
      "python": `row, col = tuple(map(int, input().split()))
  
matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

my_sum = 0
for i in range(row):
    for j in range(col):
        if i == col - j - 1 or i == j:
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
          
          int sum = 0;
          for (int i = 0; i < row; i++) {
              for (int j = 0; j < col; j++) {
                  if (i == j || i == col - j - 1) {
                      sum += matrix[i][j];
                  }
              }
          }
          System.out.println(sum);
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
              let sum = 0;
              for (let i = 0; i < row; i++) {
                  for (let j = 0; j < col; j++) {
                      if (i === j || i === col - j - 1) {
                          sum += matrix[i][j];
                      }
                  }
              }
              console.log(sum);
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
      
      int sum = 0;
      for (int i = 0; i < row; i++) {
          for (int j = 0; j < col; j++) {
              if (i == j || i == col - j - 1) {
                  sum += matrix[i][j];
              }
          }
      }
      cout << sum << endl;
      
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