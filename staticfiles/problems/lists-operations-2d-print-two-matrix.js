module.exports = {
  "title": "Print Two Matrices",
  "difficulty": "hard",
  "acceptance": "91%",

  "description": `
    <p>Given two matrices of the same size <code>M x N</code>, read both matrices and print them combined in a specific format where corresponding elements from both matrices are printed together.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>Read two matrices with identical dimensions</li>
      <li>Process both matrices element by element in the same order</li>
      <li>For each position <code>(i, j)</code>, take the element from the first matrix and combine it with the corresponding element from the second matrix</li>
      <li>The combination is done by printing both values together without any operator between them</li>
      <li>Maintain the same row and column structure as the original matrices</li>
    </ul>
    <p>This pattern creates a new representation where each position shows both corresponding values from the two input matrices side by side.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2 2
A B
C D

1 2
3 4
Output: 
A1 B2
C3 D4</pre>
    <p><b>Explanation:</b> 
    <br><b>Position (0,0):</b> <code>A</code> from first matrix + <code>1</code> from second matrix = <code>A1</code>. 
    <br><b>Position (0,1):</b> <code>B</code> + <code>2</code> = <code>B2</code>. 
    <br><b>Position (1,0):</b> <code>C</code> + <code>3</code> = <code>C3</code>. 
    <br><b>Position (1,1):</b> <code>D</code> + <code>4</code> = <code>D4</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2 3
X Y Z
P Q R

10 20 30
40 50 60
Output: 
X10 Y20 Z30
P40 Q50 R60</pre>
    <p><b>Explanation:</b> Each element from the first matrix is concatenated with the corresponding element from the second matrix, maintaining the original 2x3 grid structure.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A1 B2 \nC3 D4", "stdinput": "2 2\nA B\nC D\n1 2\n3 4" },
    { "id": 2, "input": [], "expected": "X10 Y20 Z30 \nP40 Q50 R60", "stdinput": "2 3\nX Y Z\nP Q R\n10 20 30\n40 50 60" },
    { "id": 3, "input": [], "expected": "H100", "stdinput": "1 1\nH\n100" },
    { "id": 4, "input": [], "expected": "W5 X6 \nY7 Z8", "stdinput": "2 2\nW X\nY Z\n5 6\n7 8" },
    { "id": 5, "input": [], "expected": "A1 B2 C3 D4 \nE5 F6 G7 H8 \nI9 J10 K11 L12 \nM13 N14 O15 P16", "stdinput": "4 4\nA B C D\nE F G H\nI J K L\nM N O P\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16" },
    { "id": 6, "input": [], "expected": "R2 G3 B4 \nC5 M6 Y7 \nK8 W9 L10", "stdinput": "3 3\nR G B\nC M Y\nK W L\n2 3 4\n5 6 7\n8 9 10" },
    { "id": 7, "input": [], "expected": "One1 Two2 Three3 \nFour4 Five5 Six6", "stdinput": "2 3\nOne Two Three\nFour Five Six\n1 2 3\n4 5 6" },
    { "id": 8, "input": [], "expected": "A11 B12 C13 D14 E15 \nF16 G22 H23 I24 J25 \nK26 L27 M33 N34 O35 \nP36 Q37 R38 S44 T45 \nU46 V47 W48 X49 Y55", "stdinput": "5 5\nA B C D E\nF G H I J\nK L M N O\nP Q R S T\nU V W X Y\n11 12 13 14 15\n16 22 23 24 25\n26 27 33 34 35\n36 37 38 44 45\n46 47 48 49 55" },
    { "id": 9, "input": [], "expected": "Red1 Blue2 Green3 \nYellow4 Purple5 Orange6", "stdinput": "2 3\nRed Blue Green\nYellow Purple Orange\n1 2 3\n4 5 6" }
  ],

  "templates": {
    "python": `row, col = map(int, input().split())

A = []
B = []

for i in range(row):
    A.append(input().split())
for i in range(row):
    B.append(input().split())

for i in range(row):
    for j in range(col):
        print(f"{A[i][j]}{B[i][j]}", end=" ")
    print()`,
            
    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int row = scanner.nextInt();
        int col = scanner.nextInt();
        scanner.nextLine(); // consume newline
        
        String[][] A = new String[row][col];
        String[][] B = new String[row][col];
        
        // Read first matrix
        for (int i = 0; i < row; i++) {
            String[] line = scanner.nextLine().split(" ");
            for (int j = 0; j < col; j++) {
                A[i][j] = line[j];
            }
        }
        
        // Read second matrix
        for (int i = 0; i < row; i++) {
            String[] line = scanner.nextLine().split(" ");
            for (int j = 0; j < col; j++) {
                B[i][j] = line[j];
            }
        }
        
        // Print combined matrices
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(A[i][j] + B[i][j] + " ");
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
        A.push(line.split(' '));
    } else if (lineCount > row + 1 && lineCount <= 2 * row + 1) {
        B.push(line.split(' '));
        
        if (lineCount === 2 * row + 1) {
            let output = '';
            for (let i = 0; i < row; i++) {
                let line = '';
                for (let j = 0; j < col; j++) {
                    line += A[i][j] + B[i][j] + ' ';
                }
                output += line + '\\n';
            }
            console.log(output);
            readline.close();
        }
    }
});`,

    "c++": `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int row, col;
    cin >> row >> col;
    cin.ignore(); // ignore newline
    
    vector<vector<string>> A(row, vector<string>(col));
    vector<vector<string>> B(row, vector<string>(col));
    
    // Read first matrix
    for (int i = 0; i < row; i++) {
        string line;
        getline(cin, line);
        int start = 0;
        for (int j = 0; j < col; j++) {
            size_t space = line.find(' ', start);
            if (space == string::npos) space = line.length();
            A[i][j] = line.substr(start, space - start);
            start = space + 1;
        }
    }
    
    // Read second matrix
    for (int i = 0; i < row; i++) {
        string line;
        getline(cin, line);
        int start = 0;
        for (int j = 0; j < col; j++) {
            size_t space = line.find(' ', start);
            if (space == string::npos) space = line.length();
            B[i][j] = line.substr(start, space - start);
            start = space + 1;
        }
    }
    
    // Print combined matrices
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cout << A[i][j] << B[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}`
  },


  "solutions": {
    "python": `row, col = map(int, input().split())

A = []
B = []

for i in range(row):
    A.append(input().split())
for i in range(row):
    B.append(input().split())

for i in range(row):
    for j in range(col):
        print(f"{A[i][j]}{B[i][j]}", end=" ")
    print()`,
            
    "java": `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int row = scanner.nextInt();
        int col = scanner.nextInt();
        scanner.nextLine(); // consume newline
        
        String[][] A = new String[row][col];
        String[][] B = new String[row][col];
        
        // Read first matrix
        for (int i = 0; i < row; i++) {
            String[] line = scanner.nextLine().split(" ");
            for (int j = 0; j < col; j++) {
                A[i][j] = line[j];
            }
        }
        
        // Read second matrix
        for (int i = 0; i < row; i++) {
            String[] line = scanner.nextLine().split(" ");
            for (int j = 0; j < col; j++) {
                B[i][j] = line[j];
            }
        }
        
        // Print combined matrices
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(A[i][j] + B[i][j] + " ");
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
        A.push(line.split(' '));
    } else if (lineCount > row + 1 && lineCount <= 2 * row + 1) {
        B.push(line.split(' '));
        
        if (lineCount === 2 * row + 1) {
            let output = '';
            for (let i = 0; i < row; i++) {
                let line = '';
                for (let j = 0; j < col; j++) {
                    line += A[i][j] + B[i][j] + ' ';
                }
                output += line + '\\n';
            }
            console.log(output);
            readline.close();
        }
    }
});`,

    "c++": `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int row, col;
    cin >> row >> col;
    cin.ignore(); // ignore newline
    
    vector<vector<string>> A(row, vector<string>(col));
    vector<vector<string>> B(row, vector<string>(col));
    
    // Read first matrix
    for (int i = 0; i < row; i++) {
        string line;
        getline(cin, line);
        int start = 0;
        for (int j = 0; j < col; j++) {
            size_t space = line.find(' ', start);
            if (space == string::npos) space = line.length();
            A[i][j] = line.substr(start, space - start);
            start = space + 1;
        }
    }
    
    // Read second matrix
    for (int i = 0; i < row; i++) {
        string line;
        getline(cin, line);
        int start = 0;
        for (int j = 0; j < col; j++) {
            size_t space = line.find(' ', start);
            if (space == string::npos) space = line.length();
            B[i][j] = line.substr(start, space - start);
            start = space + 1;
        }
    }
    
    // Print combined matrices
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cout << A[i][j] << B[i][j] << " ";
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