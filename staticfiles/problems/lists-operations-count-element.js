module.exports = {
  "title": "Count Element",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Count how many times a specific value appears in a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated values</li>
      <li><b>Third Input:</b> The third line contains the target value to count</li>
      <li><b>Output Format:</b> Display a single integer representing how many times the target value appears</li>
    </ul>
    <p>This problem helps practice list iteration, conditional logic, and counting algorithms.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1 2 2 3 2
2
Output: 3</pre>
    <p><b>Explanation:</b> The value <code>2</code> appears three times in the list <code>[1, 2, 2, 3, 2]</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
25
Output: 0</pre>
    <p><b>Explanation:</b> The value <code>25</code> does not appear in the list, so the count is zero.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "5\n1 2 2 3 2\n2" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "4\n10 20 30 40\n25" },
    { "id": 3, "input": [], "expected": "3", "stdinput": "3\n5 5 5\n5" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "6\n1 2 1 2 1 2\n1" },
    { "id": 5, "input": [], "expected": "1", "stdinput": "5\n10 15 20 25 30\n15" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "3\n100 200 300\n400" },
    { "id": 7, "input": [], "expected": "2", "stdinput": "4\n7 8 7 9\n7" },
    { "id": 8, "input": [], "expected": "4", "stdinput": "8\n1 1 1 1 2 3 4 5\n1" },
    { "id": 9, "input": [], "expected": "0", "stdinput": "1\n50\n51" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\n\ncount = 0\nfor ele in nums:\n    if ele == value:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int value = scanner.nextInt();\n        int count = 0;\n        \n        for (int num : nums) {\n            if (num == value) {\n                count++;\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        let count = 0;\n        for (let num of nums) {\n            if (num === value) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int value;\n    cin >> value;\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] == value) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\n\ncount = 0\nfor ele in nums:\n    if ele == value:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int value = scanner.nextInt();\n        int count = 0;\n        \n        for (int num : nums) {\n            if (num == value) {\n                count++;\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        let count = 0;\n        for (let num of nums) {\n            if (num === value) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int value;\n    cin >> value;\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] == value) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
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