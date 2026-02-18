module.exports = {
  "title": "Number Pattern – Reverse Floyd's Triangle",
  "difficulty": "hard",
  "acceptance": "86%",

  "description": `
    <p>Print an inverted Floyd's Triangle where numbers are arranged in descending order, filling the triangle from the highest number down to 1. The pattern creates a reverse triangular arrangement of consecutive numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains the highest <code>n</code> numbers in descending order</li>
      <li><b>Row 2:</b> Contains the next <code>n-1</code> numbers in descending order</li>
      <li><b>Row 3:</b> Contains the next <code>n-2</code> numbers in descending order</li>
      <li><b>Row 4:</b> Contains the next <code>n-3</code> numbers in descending order</li>
      <li>This pattern continues until the final row which contains only the number <code>1</code></li>
      <li>Numbers are consecutive and decrease from the total count down to 1</li>
      <li>Each row picks up where the previous row left off, counting backwards</li>
      <li>The total numbers printed equals the triangular number for n</li>
    </ul>
    <p>This creates an inverted version of Floyd's Triangle where numbers count down from the maximum value to 1 in a triangular pattern.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
10 9 8 7 
6 5 4 
3 2 
1 </pre>
    <p><b>Explanation:</b> Total numbers = 1+2+3+4 = 10. 
<br>Row 1: <code>10 9 8 7</code>, 
<br>Row 2: <code>6 5 4</code>, 
<br>Row 3: <code>3 2</code>, 
<br>Row 4: <code>1</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
6 5 4 
3 2 
1 </pre>
    <p><b>Explanation:</b> Total numbers = 1+2+3 = 6. 
    <br>Row 1: <code>6 5 4</code>, 
    <br>Row 2: <code>3 2</code>, 
    <br>Row 3: <code>1</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "6 5 4 \n3 2 \n1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "21 20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "28 27 26 25 24 23 22 \n21 20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "36 35 34 33 32 31 30 29 \n28 27 26 25 24 23 22 \n21 20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "45 44 43 42 41 40 39 38 37 \n36 35 34 33 32 31 30 29 \n28 27 26 25 24 23 22 \n21 20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "55 54 53 52 51 50 49 48 47 46 \n45 44 43 42 41 40 39 38 37 \n36 35 34 33 32 31 30 29 \n28 27 26 25 24 23 22 \n21 20 19 18 17 16 \n15 14 13 12 11 \n10 9 8 7 \n6 5 4 \n3 2 \n1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ntotal_numbers = n * (n + 1) // 2\nfor i in range(n, 0, -1):\n    for j in range(i):\n        print(total_numbers, end=' ')\n        total_numbers -= 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int totalNumbers = n * (n + 1) / 2;\n        for (int i = n; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(totalNumbers + \" \");\n                totalNumbers--;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let totalNumbers = n * (n + 1) / 2;\n    let output = '';\n    for (let i = n; i >= 1; i--) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += totalNumbers + ' ';\n            totalNumbers--;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int totalNumbers = n * (n + 1) / 2;\n    for (int i = n; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) {\n            cout << totalNumbers << \" \";\n            totalNumbers--;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ntotal_numbers = n * (n + 1) // 2\nfor i in range(n, 0, -1):\n    for j in range(i):\n        print(total_numbers, end=' ')\n        total_numbers -= 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int totalNumbers = n * (n + 1) / 2;\n        for (int i = n; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(totalNumbers + \" \");\n                totalNumbers--;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let totalNumbers = n * (n + 1) / 2;\n    let output = '';\n    for (let i = n; i >= 1; i--) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += totalNumbers + ' ';\n            totalNumbers--;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int totalNumbers = n * (n + 1) / 2;\n    for (int i = n; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) {\n            cout << totalNumbers << \" \";\n            totalNumbers--;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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