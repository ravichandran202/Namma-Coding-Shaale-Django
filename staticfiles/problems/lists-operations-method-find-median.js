module.exports = {
  "title": "Find Median ( Odd Length )",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Find the median value of a list with an odd number of elements.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list (guaranteed to be odd)</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the median value</li>
      <li><b>Median:</b> the median is the middle element when list is sorted</li>
    </ul>
    <p>This problem helps practice sorting algorithms and understanding statistical measures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
Output: 30</pre>
    <p><b>Explanation:</b> After sorting: <code>[10, 20, 30, 40, 50]</code>. The middle element is <code>30</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
15 5 25
Output: 15</pre>
    <p><b>Explanation:</b> After sorting: <code>[5, 15, 25]</code>. The middle element is <code>15</code>.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
1
100
Output: 100</pre>
    <p><b>Explanation:</b> With only one element, that element is the median.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30", "stdinput": "5\n10 20 30 40 50" },
    { "id": 2, "input": [], "expected": "15", "stdinput": "3\n15 5 25" },
    { "id": 3, "input": [], "expected": "100", "stdinput": "1\n100" },
    { "id": 4, "input": [], "expected": "20", "stdinput": "5\n10 15 20 25 30" },
    { "id": 5, "input": [], "expected": "-5", "stdinput": "3\n-10 -5 0" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "3\n-1 0 1" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nmid = len(nums) // 2\nprint(nums[mid])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        int mid = n / 2;\n        System.out.println(nums[mid]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        const mid = Math.floor(n / 2);\n        console.log(nums[mid]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    int mid = n / 2;\n    cout << nums[mid] << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nmid = len(nums) // 2\nprint(nums[mid])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        int mid = n / 2;\n        System.out.println(nums[mid]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        const mid = Math.floor(n / 2);\n        console.log(nums[mid]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    int mid = n / 2;\n    cout << nums[mid] << endl;\n    return 0;\n}"
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