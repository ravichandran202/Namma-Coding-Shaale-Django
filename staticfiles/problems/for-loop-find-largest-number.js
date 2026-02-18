module.exports ={
  "title": "Maximum Finder",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Find the largest number among n inputs.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read integer n (number of inputs)</li>
      <li>Use for loop to read n numbers</li>
      <li>Track the maximum number encountered</li>
      <li>Print the largest number</li>
    </ul>

    <p>This problem teaches maximum tracking and comparison logic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
4
8
2
10
Output: 10</pre>
    <p><b>Explanation:</b> Largest number among 4,8,2,10 is 10</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-1
-5
-3
Output: -1</pre>
    <p><b>Explanation:</b> Largest number is -1</p>
    
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "10", "stdinput": "4\n4\n8\n2\n10" },
    { "id": 2, "input": [], "expected": "-1", "stdinput": "3\n-1\n-5\n-3" },
    { "id": 3, "input": [], "expected": "50", "stdinput": "1\n50" },
    { "id": 4, "input": [], "expected": "100", "stdinput": "5\n10\n20\n30\n40\n100" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "3\n-10\n-5\n0" },
  ],

  "templates": {
    "python": "n = int(input())\nmax_num = int(input())\nfor i in range(n - 1):\n    num = int(input())\n    if num > max_num:\n        max_num = num\nprint(max_num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int maxNum = scanner.nextInt();\n        for (int i = 1; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > maxNum) {\n                maxNum = num;\n            }\n        }\n        System.out.println(maxNum);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let maxNum = parseInt(input[1]);\n    for (let i = 2; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num > maxNum) {\n            maxNum = num;\n        }\n    }\n    console.log(maxNum);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int maxNum;\n    cin >> maxNum;\n    for (int i = 1; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > maxNum) {\n            maxNum = num;\n        }\n    }\n    cout << maxNum << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nmax_num = int(input())\nfor i in range(n - 1):\n    num = int(input())\n    if num > max_num:\n        max_num = num\nprint(max_num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int maxNum = scanner.nextInt();\n        for (int i = 1; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > maxNum) {\n                maxNum = num;\n            }\n        }\n        System.out.println(maxNum);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let maxNum = parseInt(input[1]);\n    for (let i = 2; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num > maxNum) {\n            maxNum = num;\n        }\n    }\n    console.log(maxNum);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int maxNum;\n    cin >> maxNum;\n    for (int i = 1; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > maxNum) {\n            maxNum = num;\n        }\n    }\n    cout << maxNum << endl;\n    return 0;\n}"
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