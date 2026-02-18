module.exports = {
  "title": "Odd 1 to N",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Print all odd numbers between 1 and N (inclusive).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop with step 2</li>
      <li>Print odd numbers from 1 up to N</li>
      <li>Each number on a separate line</li>
    </ul>
    <p>This problem teaches step iteration starting from odd numbers with dynamic range.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 8
Output: 
1
3
5
7</pre>
    <p><b>Explanation:</b> Odd numbers from 1 to 8: 1, 3, 5, 7</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 9
Output: 
1
3
5
7
9</pre>
    <p><b>Explanation:</b> Odd numbers from 1 to 9: 1, 3, 5, 7, 9</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "1\n3\n5\n7", "stdinput": "8" },
    { "id": 2, "input": [], "expected": "1\n3\n5\n7\n9", "stdinput": "9" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n3\n5\n7\n9\n11", "stdinput": "11" },
    { "id": 5, "input": [], "expected": "1\n3\n5", "stdinput": "5" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1, 2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i += 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(1, n + 1, 2):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i += 2) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i += 2) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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