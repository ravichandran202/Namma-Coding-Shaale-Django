module.exports = {
  "title": "List Methods – Index",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>Find the index of the first occurrence of a specific value in a list using the built-in index method.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the target value to find</li>
      <li><b>Output Format:</b> Display a single integer representing the index of the first occurrence</li>
      <li><b>Built-in Method:</b> Use the list's <code>index()</code> method to find the position</li>
    </ul>
    <p>This problem helps practice using built-in list methods for searching and understanding zero-based indexing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
30
Output: 2</pre>
    <p><b>Explanation:</b> The value <code>30</code> is at index <code>2</code> in the list <code>[10, 20, 30, 40]</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
1 2 3 2 1
2
Output: 1</pre>
    <p><b>Explanation:</b> The first occurrence of <code>2</code> is at index <code>1</code>, not index <code>3</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2", "stdinput": "4\n10 20 30 40\n30" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "5\n1 2 3 2 1\n2" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "3\n100 200 300\n100" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "6\n5 10 15 20 25 30\n20" },
    { "id": 5, "input": [], "expected": "4", "stdinput": "5\n-5 -3 0 3 5\n5" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\nprint(nums.index(value))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int value = scanner.nextInt();\n        int index = -1;\n        \n        for (int i = 0; i < n; i++) {\n            if (nums[i] == value) {\n                index = i;\n                break;\n            }\n        }\n        \n        System.out.println(index);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        const index = nums.indexOf(value);\n        console.log(index);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int value;\n    cin >> value;\n    \n    int index = -1;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] == value) {\n            index = i;\n            break;\n        }\n    }\n    \n    cout << index << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\nprint(nums.index(value))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int value = scanner.nextInt();\n        int index = -1;\n        \n        for (int i = 0; i < n; i++) {\n            if (nums[i] == value) {\n                index = i;\n                break;\n            }\n        }\n        \n        System.out.println(index);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        const index = nums.indexOf(value);\n        console.log(index);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int value;\n    cin >> value;\n    \n    int index = -1;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] == value) {\n            index = i;\n            break;\n        }\n    }\n    \n    cout << index << endl;\n    return 0;\n}"
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