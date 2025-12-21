module.exports = {
  "title": "Second Max ( No Duplicates )",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Find the second largest element in a list of numbers.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the second largest number</li>
    </ul>
    <p>This problem helps practice sorting algorithms and understanding how to find specific positions in ordered sequences.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 25 15 30 20
Output: 25</pre>
    <p><b>Explanation:</b>The second largest is <code>25</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
100 200 500 300
Output: 300</pre>
    <p><b>Explanation:</b>The second largest is <code>200</code></p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "25", "stdinput": "5\n10 25 15 30 20" },
    { "id": 2, "input": [], "expected": "300", "stdinput": "4\n100 200 500 300" },
    { "id": 3, "input": [], "expected": "-10", "stdinput": "3\n-5 -10 -15" },
    { "id": 4, "input": [], "expected": "5", "stdinput": "6\n1 2 3 5 7" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "4\n-10 -5 0 5" },
    { "id": 7, "input": [], "expected": "999", "stdinput": "3\n100 999 1000" },
    { "id": 9, "input": [], "expected": "2", "stdinput": "3\n1 2 3" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nprint(nums[-2])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        System.out.println(nums[n - 2]);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        console.log(nums[n - 2]);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    cout << nums[n - 2] << endl;\n    return 0;\n}"
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