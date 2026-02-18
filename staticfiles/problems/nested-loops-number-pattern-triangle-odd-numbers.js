module.exports = {
  "title": "Number Pattern – Consecutive Odd Numbers Triangle",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Print a triangular pattern filled with consecutive odd numbers. The numbers start from 1 and increase by 2 with each step, creating a sequence of odd numbers in triangular formation.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> odd number starting from <code>1</code></li>
      <li><b>Row 2:</b> Contains <code>2</code> odd numbers continuing the sequence</li>
      <li><b>Row 3:</b> Contains <code>3</code> odd numbers continuing the sequence</li>
      <li><b>Row 4:</b> Contains <code>4</code> odd numbers continuing the sequence</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Numbers are consecutive odd integers: 1, 3, 5, 7, 9, etc.</li>
      <li>Each number is exactly 2 more than the previous number</li>
      <li>The sequence continues uninterrupted across rows</li>
    </ul>
    <p>This creates a triangular pattern where each row contains more odd numbers than the previous row, maintaining a continuous sequence of increasing odd integers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1 
3 5 
7 9 11 
13 15 17 19 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: <code>1</code>, 
    <br>Row 2: <code>3 5</code>, 
    <br>Row 3: <code>7 9 11</code>, 
    <br>Row 4: <code>13 15 17 19</code>. All numbers are consecutive odd integers.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1 
3 5 
7 9 11 </pre>
    <p><b>Explanation:</b> A triangular pattern with 3 rows showing consecutive odd numbers in increasing order.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1 \n3 5 \n7 9 11", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29 \n31 33 35 37 39 41", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29 \n31 33 35 37 39 41 \n43 45 47 49 51 53 55", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29 \n31 33 35 37 39 41 \n43 45 47 49 51 53 55 \n57 59 61 63 65 67 69 71", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29 \n31 33 35 37 39 41 \n43 45 47 49 51 53 55 \n57 59 61 63 65 67 69 71 \n73 75 77 79 81 83 85 87 89", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "1 \n3 5 \n7 9 11 \n13 15 17 19 \n21 23 25 27 29 \n31 33 35 37 39 41 \n43 45 47 49 51 53 55 \n57 59 61 63 65 67 69 71 \n73 75 77 79 81 83 85 87 89 \n91 93 95 97 99 101 103 105 107 109", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ncurrent = 1\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(current, end=' ')\n        current += 2\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int current = 1;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(current + \" \");\n                current += 2;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let current = 1;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += current + ' ';\n            current += 2;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int current = 1;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << current << \" \";\n            current += 2;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ncurrent = 1\nfor i in range(1, n + 1):\n    for j in range(i):\n        print(current, end=' ')\n        current += 2\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int current = 1;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(current + \" \");\n                current += 2;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let current = 1;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += current + ' ';\n            current += 2;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int current = 1;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << current << \" \";\n            current += 2;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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