module.exports = {
  "title": "List Operations – Kth Largest Element",
  "difficulty": "medium",
  "acceptance": "78%",

  "description": `
    <p>Find the Kth largest element in a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the value of K (1-based position)</li>
      <li><b>Output Format:</b> Display a single integer representing the Kth largest element</li>
      <li><b>Kth Largest Definition:</b> When the list is sorted in descending order, the Kth largest is the element at position K (1-based)</li>
    </ul>
    <p>This problem helps practice sorting algorithms and understanding positional statistics in ordered lists.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
3 1 4 1 5 9
2
Output: 5</pre>
    <p><b>Explanation:</b> Sorted in descending order: <code>[9, 5, 4, 3, 1, 1]</code>. The 2nd largest element is <code>5</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
1
Output: 50</pre>
    <p><b>Explanation:</b> The 1st largest element is the maximum value <code>50</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5", "stdinput": "6\n3 1 4 1 5 9\n2" },
    { "id": 2, "input": [], "expected": "50", "stdinput": "5\n10 20 30 40 50\n1" },
    { "id": 3, "input": [], "expected": "7", "stdinput": "4\n7 7 7 7\n3" },
    { "id": 4, "input": [], "expected": "100", "stdinput": "5\n100 200 300 400 500\n5" },
    { "id": 5, "input": [], "expected": "-5", "stdinput": "4\n-10 -5 0 5\n3" },
    { "id": 6, "input": [], "expected": "999", "stdinput": "6\n100 200 300 400 500 999\n1" },
    { "id": 7, "input": [], "expected": "3", "stdinput": "5\n1 2 3 4 5\n3" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nnums.sort(reverse=True)\nprint(nums[k-1])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int k = scanner.nextInt();\n        Arrays.sort(nums);\n        System.out.println(nums[n - k]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const k = parseInt(inputLines[2]);\n        nums.sort((a, b) => b - a);\n        console.log(nums[k - 1]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int k;\n    cin >> k;\n    \n    sort(nums, nums + n, greater<int>());\n    cout << nums[k - 1] << endl;\n    return 0;\n}"
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