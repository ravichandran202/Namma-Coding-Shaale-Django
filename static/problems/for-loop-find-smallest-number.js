module.exports = {
  "title": "Minimum Finder",
  "difficulty": "medium",
  "acceptance": "83%",

  "description": `
    <p>Read n numbers and print the smallest one.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read integer n (number of inputs)</li>
      <li>Use for loop to read n numbers</li>
      <li>Track the minimum number encountered</li>
      <li>Print the smallest number</li>
    </ul>

    <p>This problem teaches minimum tracking and comparison logic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
10
5
8
2
Output: 2</pre>
    <p><b>Explanation:</b> Smallest number among 10,5,8,2 is 2</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-5
0
5
Output: -5</pre>
    <p><b>Explanation:</b> Smallest number is -5</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "2", "stdinput": "4\n10\n5\n8\n2" },
    { "id": 2, "input": [], "expected": "-5", "stdinput": "3\n-5\n0\n5" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 5, "input": [], "expected": "-10", "stdinput": "3\n-5\n-10\n-3" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "2\n0\n100" }
  ],

  "templates": {
    "python": "n = int(input())\nmin_num = int(input())\nfor i in range(n - 1):\n    num = int(input())\n    if num < min_num:\n        min_num = num\nprint(min_num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int minNum = scanner.nextInt();\n        for (int i = 1; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num < minNum) {\n                minNum = num;\n            }\n        }\n        System.out.println(minNum);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let minNum = parseInt(input[1]);\n    for (let i = 2; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num < minNum) {\n            minNum = num;\n        }\n    }\n    console.log(minNum);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int minNum;\n    cin >> minNum;\n    for (int i = 1; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num < minNum) {\n            minNum = num;\n        }\n    }\n    cout << minNum << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nmin_num = int(input())\nfor i in range(n - 1):\n    num = int(input())\n    if num < min_num:\n        min_num = num\nprint(min_num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int minNum = scanner.nextInt();\n        for (int i = 1; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num < minNum) {\n                minNum = num;\n            }\n        }\n        System.out.println(minNum);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let minNum = parseInt(input[1]);\n    for (let i = 2; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num < minNum) {\n            minNum = num;\n        }\n    }\n    console.log(minNum);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int minNum;\n    cin >> minNum;\n    for (int i = 1; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num < minNum) {\n            minNum = num;\n        }\n    }\n    cout << minNum << endl;\n    return 0;\n}"
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