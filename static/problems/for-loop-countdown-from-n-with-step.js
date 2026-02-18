module.exports = {
  "title": "Count Down From N With Step 2",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Print numbers from N down to 0 decreasing by 2.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop with negative step</li>
      <li>Print numbers: N, N-2, N-4, ... down to 0</li>
      <li>Each number on a separate line</li>
    </ul>
    
    <p>This problem teaches complex range parameters with dynamic input.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 8
Output: 
8
6
4
2
0</pre>
    <p><b>Explanation:</b> Numbers from 8 down to 0 with step -2</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: 
7
5
3
1</pre>
    <p><b>Explanation:</b> Numbers from 7 down to 1 with step -2</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 100</li>
      <li>Use for loop with negative step</li>
      <li>Start from N, end at 0 or 1</li>
      <li>Decrease by 2 each step</li>
      <li>Each number on separate line</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "8\n6\n4\n2\n0", "stdinput": "8" },
    { "id": 2, "input": [], "expected": "7\n5\n3\n1", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "2\n0", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "10\n8\n6\n4\n2\n0", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n, -1, -2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 0; i -= 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = n; i >= 0; i -= 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 0; i -= 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n, -1, -2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 0; i -= 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = n; i >= 0; i -= 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 0; i -= 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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