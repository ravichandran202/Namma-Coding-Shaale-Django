module.exports = {
  "title": "List Operations – Find Max",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>Find the maximum element from a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated values</li>
      <li><b>Output Format:</b> Display a single integer representing the maximum value in the list</li>
    </ul>
    <p>This problem helps practice comparison operations and finding extreme values in datasets.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 25 15 30 20
Output: 30</pre>
    <p><b>Explanation:</b> Among the numbers <code>10, 25, 15, 30, 20</code>, the maximum value is <code>30</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-5 -2 -8
Output: -2</pre>
    <p><b>Explanation:</b> Among negative numbers, <code>-2</code> is the largest (closest to zero).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30", "stdinput": "5\n10 25 15 30 20" },
    { "id": 2, "input": [], "expected": "-2", "stdinput": "3\n-5 -2 -8" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 4, "input": [], "expected": "7", "stdinput": "4\n7 7 7 7" },
    { "id": 5, "input": [], "expected": "99", "stdinput": "6\n10 20 99 30 40 50" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "3\n-10 0 -5" },
    { "id": 7, "input": [], "expected": "1000", "stdinput": "5\n100 200 300 400 1000" },
    { "id": 8, "input": [], "expected": "-1", "stdinput": "4\n-5 -10 -1 -20" },
    { "id": 9, "input": [], "expected": "45", "stdinput": "3\n45 45 45" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nprint(max(nums))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int max = Integer.MIN_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > max) {\n                max = num;\n            }\n        }\n        \n        System.out.println(max);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const max = Math.max(...nums);\n        console.log(max);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int max = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > max) {\n            max = num;\n        }\n    }\n    \n    cout << max << endl;\n    return 0;\n}"
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