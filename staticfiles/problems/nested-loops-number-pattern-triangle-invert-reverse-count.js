module.exports = {
  "title": "Number Pattern – Reverse Descending Triangle",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Print an inverted triangular pattern where each row displays numbers in descending order, starting from a decreasing maximum value down to 1. The pattern creates a pyramid of numbers counting backwards.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains numbers from <code>n</code> down to <code>1</code> in reverse order</li>
      <li><b>Row 2:</b> Contains numbers from <code>n-1</code> down to <code>1</code> in reverse order</li>
      <li><b>Row 3:</b> Contains numbers from <code>n-2</code> down to <code>1</code> in reverse order</li>
      <li><b>Row 4:</b> Contains numbers from <code>n-3</code> down to <code>1</code> in reverse order</li>
      <li>This pattern continues until the final row which contains only <code>1</code></li>
      <li>Each row starts with the highest number for that row and counts down to 1</li>
      <li>The starting number decreases by one with each subsequent row</li>
    </ul>
    <p>This creates a descending triangular pattern where rows get progressively shorter and start from lower numbers as you move down.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
5 4 3 2 1 
4 3 2 1 
3 2 1 
2 1 
1 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1 has <code>5 4 3 2 1</code>, 
    <br>Row 2 has <code>4 3 2 1</code>, 
    <br>Row 3 has <code>3 2 1</code>, 
    <br>Row 4 has <code>2 1</code>,
    <br>Row 5 has <code>1</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
3 2 1 
2 1 
1 </pre>
    <p><b>Explanation:</b> An inverted triangle where each row shows numbers counting down from the row's starting value to 1.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "3 2 1 \n2 1 \n1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "6 5 4 3 2 1 \n5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "7 6 5 4 3 2 1 \n6 5 4 3 2 1 \n5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "8 7 6 5 4 3 2 1 \n7 6 5 4 3 2 1 \n6 5 4 3 2 1 \n5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "9 8 7 6 5 4 3 2 1 \n8 7 6 5 4 3 2 1 \n7 6 5 4 3 2 1 \n6 5 4 3 2 1 \n5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "10 9 8 7 6 5 4 3 2 1 \n9 8 7 6 5 4 3 2 1 \n8 7 6 5 4 3 2 1 \n7 6 5 4 3 2 1 \n6 5 4 3 2 1 \n5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1 \n1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n, 0, -1):\n    for j in range(i, 0, -1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 1; i--) {\n            for (int j = i; j >= 1; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = n; i >= 1; i--) {\n        let row = '';\n        for (let j = i; j >= 1; j--) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 1; i--) {\n        for (int j = i; j >= 1; j--) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n, 0, -1):\n    for j in range(i, 0, -1):\n        print(j, end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 1; i--) {\n            for (int j = i; j >= 1; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = n; i >= 1; i--) {\n        let row = '';\n        for (let j = i; j >= 1; j--) {\n            row += j + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 1; i--) {\n        for (int j = i; j >= 1; j--) {\n            cout << j << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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