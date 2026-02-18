module.exports = {
  "title": "Read N Numbers",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Read n numbers and print them in the same order.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read integer n (number of inputs)</li>
      <li>Use for loop to read n numbers</li>
      <li>Print each number on a separate line</li>
    </ul>
    <p><b>Multiple Input Concept:</b></p>
    <ul>
      <li>First input tells how many numbers follow</li>
      <li>Use loop to read exactly n numbers</li>
      <li>Print numbers in the same order as input</li>
    </ul>
    <p>This problem teaches basic multiple input handling with loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3
10
20
30
Output: 
10
20
30</pre>
    <p><b>Explanation:</b> Read 3 numbers and print them in order</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
1
2
3
4
5
Output: 
1
2
3
4
5</pre>
    <p><b>Explanation:</b> Read 5 numbers and print them in order</p>
  `,

  "conditions": `
    <ul>
      <li>First input n will be between 1 and 100</li>
      <li>Subsequent n numbers will be integers</li>
      <li>Use for loop to read n numbers</li>
      <li>Print each number on separate line in input order</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10\n20\n30", "stdinput": "3\n10\n20\n30" },
    { "id": 2, "input": [], "expected": "1\n2\n3\n4\n5", "stdinput": "5\n1\n2\n3\n4\n5" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 4, "input": [], "expected": "-5\n0\n5", "stdinput": "3\n-5\n0\n5" },
    { "id": 5, "input": [], "expected": "7\n8\n9\n10", "stdinput": "4\n7\n8\n9\n10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    num = int(input())\n    print(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            System.out.println(num);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    for (let i = 1; i <= n; i++) {\n        console.log(input[i]);\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        cout << num << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    num = int(input())\n    print(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            System.out.println(num);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    for (let i = 1; i <= n; i++) {\n        console.log(input[i]);\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        cout << num << endl;\n    }\n    return 0;\n}"
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