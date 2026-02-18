module.exports = {
  "title": "List Operations – Count Positive",
  "difficulty": "easy",
  "acceptance": "89%",

  "description": `
    <p>Count how many positive numbers are present in a list of integers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the count of positive numbers</li>
    </ul>
    <p>This problem helps practice basic conditional counting and understanding number properties.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
-2 5 -1 0 3 7
Output: 3</pre>
    <p><b>Explanation:</b> The positive numbers are <code>5, 3, 7</code>, so the count is <code>3</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
-1 -2 -3 -4
Output: 0</pre>
    <p><b>Explanation:</b> There are no positive numbers in the list, so the count is zero.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "6\n-2 5 -1 0 3 7" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "4\n-1 -2 -3 -4" },
    { "id": 3, "input": [], "expected": "5", "stdinput": "5\n1 2 3 4 5" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "3\n0 0 0" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "5\n-10 20 -30 40 -50" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "1\n-100" },
    { "id": 9, "input": [], "expected": "3", "stdinput": "5\n0 1 0 2 0 3" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\ncount = 0\nfor num in nums:\n    if num > 0:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > 0) {\n                count++;\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        \n        let count = 0;\n        for (let num of nums) {\n            if (num > 0) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > 0) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\ncount = 0\nfor num in nums:\n    if num > 0:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > 0) {\n                count++;\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        \n        let count = 0;\n        for (let num of nums) {\n            if (num > 0) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > 0) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
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