module.exports = {
  "title": "List Operations – Calculate Range",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Calculate the range of a list of numbers, which is the difference between the maximum and minimum values.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the range of the list</li>
      <li><b>Range:</b> The range is calculated as <code>maximum value - minimum value</code></li>
    </ul>
    <p>This problem helps practice using built-in functions and understanding statistical dispersion measures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 25 15 30 20
Output: 20</pre>
    <p><b>Explanation:</b> Maximum is <code>30</code>, minimum is <code>10</code>, so range is <code>30 - 10 = 20</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-5 0 5
Output: 10</pre>
    <p><b>Explanation:</b> Maximum is <code>5</code>, minimum is <code>-5</code>, so range is <code>5 - (-5) = 10</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "20", "stdinput": "5\n10 25 15 30 20" },
    { "id": 2, "input": [], "expected": "10", "stdinput": "3\n-5 0 5" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "4\n7 7 7 7" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "1\n100" },
    { "id": 5, "input": [], "expected": "90", "stdinput": "4\n10 20 30 100" },
    { "id": 6, "input": [], "expected": "15", "stdinput": "3\n-10 -5 5" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nrange_val = max(nums) - min(nums)\nprint(range_val)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int max = Integer.MIN_VALUE;\n        int min = Integer.MAX_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > max) max = num;\n            if (num < min) min = num;\n        }\n        \n        int range = max - min;\n        System.out.println(range);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const max = Math.max(...nums);\n        const min = Math.min(...nums);\n        const range = max - min;\n        console.log(range);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int max_val = INT_MIN;\n    int min_val = INT_MAX;\n    \n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > max_val) max_val = num;\n        if (num < min_val) min_val = num;\n    }\n    \n    int range = max_val - min_val;\n    cout << range << endl;\n    return 0;\n}"
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