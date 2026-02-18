module.exports = {
  "title": "Even 1 to N",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Print all even numbers between 1 and N (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print even numbers from 2 up to N</li>
      <li>Each number on a separate line</li>
    </ul>
    <p>This problem teaches step iteration with dynamic range.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 7
Output: 
2
4
6</pre>
    <p><b>Explanation:</b> Even numbers from 1 to 7: 2, 4, 6</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: 
2
4
6
8
10</pre>
    <p><b>Explanation:</b> Even numbers from 1 to 10: 2, 4, 6, 8, 10</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2\n4\n6", "stdinput": "7" },
    { "id": 2, "input": [], "expected": "2\n4\n6\n8\n10", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "2\n4\n6\n8\n10\n12", "stdinput": "12" },
    { "id": 5, "input": [], "expected": "", "stdinput": "1" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(2, n + 1, 2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 2; i <= n; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 2; i <= n; i += 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 2; i <= n; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(2, n + 1, 2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 2; i <= n; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 2; i <= n; i += 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 2; i <= n; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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