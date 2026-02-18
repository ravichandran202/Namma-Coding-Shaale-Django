module.exports = {
  "title": "List Operations – Find Min",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Find the minimum element from a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated values</li>
      <li><b>Output Format:</b> Display a single integer representing the minimum value in the list</li>
    </ul>
    <p>This problem helps practice comparison operations and finding extreme values in datasets.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 25 15 30 20
Output: 10</pre>
    <p><b>Explanation:</b> Among the numbers <code>10, 25, 15, 30, 20</code>, the minimum value is <code>10</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-5 -2 -8
Output: -8</pre>
    <p><b>Explanation:</b> Among negative numbers, <code>-8</code> is the smallest (farthest from zero).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10", "stdinput": "5\n10 25 15 30 20" },
    { "id": 2, "input": [], "expected": "-8", "stdinput": "3\n-5 -2 -8" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 4, "input": [], "expected": "7", "stdinput": "4\n7 7 7 7" },
    { "id": 5, "input": [], "expected": "5", "stdinput": "6\n10 20 5 30 40 50" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nprint(min(nums))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int min = Integer.MAX_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num < min) {\n                min = num;\n            }\n        }\n        \n        System.out.println(min);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const min = Math.min(...nums);\n        console.log(min);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int min = INT_MAX;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num < min) {\n            min = num;\n        }\n    }\n    \n    cout << min << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nprint(min(nums))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int min = Integer.MAX_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num < min) {\n                min = num;\n            }\n        }\n        \n        System.out.println(min);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const min = Math.min(...nums);\n        console.log(min);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int min = INT_MAX;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num < min) {\n            min = num;\n        }\n    }\n    \n    cout << min << endl;\n    return 0;\n}"
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