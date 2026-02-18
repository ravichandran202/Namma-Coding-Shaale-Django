module.exports = {
  "title": "Squares 1..N",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Print squares of numbers from 1 to N.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from 1 to N</li>
      <li>Calculate and print square of each number</li>
      <li>Each square on a separate line</li>
    </ul>
    <p><b>Squares Concept:</b></p>
    <ul>
      <li>Square of n = n × n</li>
      <li>1²=1, 2²=4, 3²=9, 4²=16, ...</li>
      <li>Calculate square inside the loop</li>
      <li>Print result immediately for each number</li>
    </ul>
    <p>This problem teaches mathematical operations with dynamic range.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
1
4
9
16</pre>
    <p><b>Explanation:</b> Squares of numbers 1 through 4</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1
4
9</pre>
    <p><b>Explanation:</b> Squares of numbers 1 through 3</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n4\n9\n16", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "1\n4\n9", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n4\n9\n16\n25", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "1\n4\n9\n16\n25\n36", "stdinput": "6" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(i * i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            System.out.println(i * i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        console.log(i * i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        cout << i * i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(i * i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            System.out.println(i * i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        console.log(i * i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        cout << i * i << endl;\n    }\n    return 0;\n}"
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