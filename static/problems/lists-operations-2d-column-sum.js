module.exports = {
  "title": "Column Sum",
  "difficulty": "hard",
  "acceptance": "93%",

  "description": `
    <p>Given a matrix of size <code>M x N</code>, calculate and print the sum of elements in each column separately.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>Process the matrix column by column from left to right</li>
      <li>For each column, add up all the elements in that column</li>
    </ul>
    <p>This pattern calculates vertical sums down the matrix, giving you the total of each individual column.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3 3
1 2 3
4 5 6
7 8 9
Output: 
12
15
18</pre>
    <p><b>Explanation:</b> 
    <br><b>Column 0:</b> <code>1 + 4 + 7 = 12</code>, 
    <br><b>Column 1:</b> <code>2 + 5 + 8 = 15</code>, 
    <br><b>Column 2:</b> <code>3 + 6 + 9 = 18</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 3
10 20 30
40 50 60
Output: 
50
70
90</pre>
    <p><b>Explanation:</b> 
    <br><b>Column 0:</b> <code>10 + 40 = 50</code>, 
    <br><b>Column 1:</b> <code>20 + 50 = 70</code>, 
    <br><b>Column 2:</b> <code>30 + 60 = 90</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "12\n15\n18", "stdinput": "3 3\n1 2 3\n4 5 6\n7 8 9" },
    { "id": 2, "input": [], "expected": "50\n70\n90", "stdinput": "2 3\n10 20 30\n40 50 60" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1 1\n100" },
    { "id": 4, "input": [], "expected": "12\n14", "stdinput": "2 2\n5 6\n7 8" },
    { "id": 5, "input": [], "expected": "28\n32\n36\n40", "stdinput": "4 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
    { "id": 6, "input": [], "expected": "15\n18\n21", "stdinput": "3 3\n2 3 4\n5 6 7\n8 9 10" },
    { "id": 7, "input": [], "expected": "8\n7\n6", "stdinput": "3 3\n0 1 2\n3 0 4\n5 6 0" },
    { "id": 8, "input": [], "expected": "135\n145\n155\n165\n175", "stdinput": "5 5\n11 12 13 14 15\n16 22 23 24 25\n26 27 33 34 35\n36 37 38 44 45\n46 47 48 49 55" },
    { "id": 9, "input": [], "expected": "17\n15\n13", "stdinput": "3 3\n9 1 2\n3 8 4\n5 6 7" }
  ],

  "templates": {
    "python": `row, col = tuple(map(int, input().split()))

matrix = []
for i in range(row):
    r = list(map(int, input().split()))
    matrix.append(r)

for j in range(col):
    my_sum = 0
    for i in range(row):
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
        
        for (int j = 0; j < col; j++) {
            int sum = 0;
            for (int i = 0; i < row; i++) {
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
            for (let j = 0; j < col; j++) {
                let sum = 0;
                for (let i = 0; i < row; i++) {
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
    
    for (int j = 0; j < col; j++) {
        int sum = 0;
        for (int i = 0; i < row; i++) {
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