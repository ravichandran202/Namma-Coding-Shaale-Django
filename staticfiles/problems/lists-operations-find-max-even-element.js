module.exports = {
  "title": "List Operations – Max Even",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Find the maximum even number from a list of integers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the largest even number in the list</li>
    </ul>
    <p>This problem helps practice combining filtering conditions with finding extreme values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
3 8 15 22 9 14
Output: 22</pre>
    <p><b>Explanation:</b> The even numbers are <code>8, 22, 14</code>, and the maximum among them is <code>22</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
Output: 50</pre>
    <p><b>Explanation:</b> All numbers are even, so the maximum is the largest number <code>50</code>.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "22", "stdinput": "6\n3 8 15 22 9 14" },
    { "id": 2, "input": [], "expected": "50", "stdinput": "5\n10 20 30 40 50" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "4\n-4 -2 0 2" },
    { "id": 4, "input": [], "expected": "4", "stdinput": "3\n2 4 4" },
    { "id": 5, "input": [], "expected": "102", "stdinput": "4\n99 100 101 102" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\neven_nums = []\nfor num in nums:\n    if num % 2 == 0:\n        even_nums.append(num)\nprint(max(even_nums))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int maxEven = Integer.MIN_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0 && num > maxEven) {\n                maxEven = num;\n            }\n        }\n        \n        System.out.println(maxEven);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const evenNums = nums.filter(num => num % 2 === 0);\n        const maxEven = Math.max(...evenNums);\n        console.log(maxEven);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int maxEven = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 == 0 && num > maxEven) {\n            maxEven = num;\n        }\n    }\n    \n    cout << maxEven << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\neven_nums = []\nfor num in nums:\n    if num % 2 == 0:\n        even_nums.append(num)\nprint(max(even_nums))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int maxEven = Integer.MIN_VALUE;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0 && num > maxEven) {\n                maxEven = num;\n            }\n        }\n        \n        System.out.println(maxEven);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const evenNums = nums.filter(num => num % 2 === 0);\n        const maxEven = Math.max(...evenNums);\n        console.log(maxEven);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int maxEven = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 == 0 && num > maxEven) {\n            maxEven = num;\n        }\n    }\n    \n    cout << maxEven << endl;\n    return 0;\n}"
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