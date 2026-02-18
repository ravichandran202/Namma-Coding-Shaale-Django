module.exports = {
  "title": "Find Median ( Even Length )",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Find the median value of a list with an even number of elements.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list (guaranteed to be even)</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a floating-point number representing the median value</li>
      <li><b>Median:</b> the median is the average of the two middle elements when sorted</li>
    </ul>
    <p>This problem helps practice sorting algorithms and understanding statistical measures for even-sized datasets.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
Output: 25.0</pre>
    <p><b>Explanation:</b> After sorting: <code>[10, 20, 30, 40]</code>. The two middle elements are <code>20</code> and <code>30</code>, and their average is <code>25.0</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2
15 25
Output: 20.0</pre>
    <p><b>Explanation:</b> The two elements are <code>15</code> and <code>25</code>, and their average is <code>20.0</code>.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
6
1 2 3 4 5 6
Output: 3.5</pre>
    <p><b>Explanation:</b> After sorting: <code>[1, 2, 3, 4, 5, 6]</code>. The two middle elements are <code>3</code> and <code>4</code>, and their average is <code>3.5</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "25.0", "stdinput": "4\n10 20 30 40" },
    { "id": 2, "input": [], "expected": "20.0", "stdinput": "2\n15 25" },
    { "id": 3, "input": [], "expected": "3.5", "stdinput": "6\n1 2 3 4 5 6" },
    { "id": 4, "input": [], "expected": "20.0", "stdinput": "4\n10 15 25 30" },
    { "id": 5, "input": [], "expected": "-2.5", "stdinput": "4\n-5 -4 0 -1" },
    { "id": 6, "input": [], "expected": "8.0", "stdinput": "4\n5 6 10 11" },
    { "id": 7, "input": [], "expected": "0.0", "stdinput": "2\n-5 5" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nmid = len(nums) // 2\nmedian = (nums[mid - 1] + nums[mid]) / 2\nprint(median)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        int mid = n / 2;\n        double median = (nums[mid - 1] + nums[mid]) / 2.0;\n        System.out.println(median);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        const mid = n / 2;\n        const median = (nums[mid - 1] + nums[mid]) / 2;\n        console.log(median);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    int mid = n / 2;\n    double median = (nums[mid - 1] + nums[mid]) / 2.0;\n    cout << fixed << setprecision(1) << median << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nmid = len(nums) // 2\nmedian = (nums[mid - 1] + nums[mid]) / 2\nprint(median)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        int mid = n / 2;\n        double median = (nums[mid - 1] + nums[mid]) / 2.0;\n        System.out.println(median);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        const mid = n / 2;\n        const median = (nums[mid - 1] + nums[mid]) / 2;\n        console.log(median);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    int mid = n / 2;\n    double median = (nums[mid - 1] + nums[mid]) / 2.0;\n    cout << fixed << setprecision(1) << median << endl;\n    return 0;\n}"
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