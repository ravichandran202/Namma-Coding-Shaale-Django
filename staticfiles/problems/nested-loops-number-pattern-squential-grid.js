module.exports =  {
  "title": "Number Pattern – Sequential Grid",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Print an <code>n x n</code> grid filled with consecutive numbers starting from <code>1</code> and increasing left to right, top to bottom. The numbers fill the grid in reading order, like text on a page.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Numbers <code>1</code> to <code>n</code></li>
      <li><b>Row 2:</b> Numbers <code>n+1</code> to <code>2n</code></li>
      <li><b>Row 3:</b> Numbers <code>2n+1</code> to <code>3n</code></li>
      <li>Continue this pattern until <b>Row n</b></li>
      <li>Numbers increase continuously from <code>1</code> to <code>n×n</code></li>
      <li>Each row picks up where the previous row left off</li>
    </ul>
    <p>This pattern creates a natural number sequence that flows across rows, similar to how we read text - left to right, then top to bottom.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1 2 3 
4 5 6 
7 8 9 </pre>
    <p><b>Explanation:</b> Numbers fill the grid sequentially: Row 1 has <code>1 2 3</code>, Row 2 continues with <code>4 5 6</code>, and Row 3 completes with <code>7 8 9</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
1 2 
3 4 </pre>
    <p><b>Explanation:</b> A 2x2 grid filled with numbers <code>1</code> through <code>4</code>. Row 1 has <code>1 2</code> and Row 2 continues with <code>3 4</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 \n4 5 6 \n7 8 9", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1 2 \n3 4", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 2 3 4 \n5 6 7 8 \n9 10 11 12 \n13 14 15 16", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "1 2 3 4 5 \n6 7 8 9 10 \n11 12 13 14 15 \n16 17 18 19 20 \n21 22 23 24 25", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "1 2 3 4 5 6 \n7 8 9 10 11 12 \n13 14 15 16 17 18 \n19 20 21 22 23 24 \n25 26 27 28 29 30 \n31 32 33 34 35 36", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "1 2 3 4 5 6 7 \n8 9 10 11 12 13 14 \n15 16 17 18 19 20 21 \n22 23 24 25 26 27 28 \n29 30 31 32 33 34 35 \n36 37 38 39 40 41 42 \n43 44 45 46 47 48 49", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "1 2 3 4 5 6 7 8 \n9 10 11 12 13 14 15 16 \n17 18 19 20 21 22 23 24 \n25 26 27 28 29 30 31 32 \n33 34 35 36 37 38 39 40 \n41 42 43 44 45 46 47 48 \n49 50 51 52 53 54 55 56 \n57 58 59 60 61 62 63 64", "stdinput": "8" },
    { "id": 9, "input": [], "expected": "1 2 3 4 5 6 7 8 9 \n10 11 12 13 14 15 16 17 18 \n19 20 21 22 23 24 25 26 27 \n28 29 30 31 32 33 34 35 36 \n37 38 39 40 41 42 43 44 45 \n46 47 48 49 50 51 52 53 54 \n55 56 57 58 59 60 61 62 63 \n64 65 66 67 68 69 70 71 72 \n73 74 75 76 77 78 79 80 81", "stdinput": "9" }
  ],

  "templates": {
    "python": "n = int(input())\ncount = 0\nfor i in range(n):\n    for j in range(n):\n        count += 1\n        print(count, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                count++;\n                System.out.print(count + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let count = 0;\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            count++;\n            row += count + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            count++;\n            cout << count << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ncount = 0\nfor i in range(n):\n    for j in range(n):\n        count += 1\n        print(count, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                count++;\n                System.out.print(count + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let count = 0;\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            count++;\n            row += count + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            count++;\n            cout << count << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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