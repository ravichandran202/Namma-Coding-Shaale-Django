module.exports = {
  "title": "List Methods – Sort Ascending",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Sort a list of numbers in ascending order using the built-in sort method.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display the sorted list in ascending order</li>
      <li><b>Built-in Method:</b> Use the list's <code>sort()</code> method for efficient sorting</li>
      <li><b>Ascending Order:</b> Sort from smallest to largest number</li>
    </ul>
    <p>This problem helps practice using built-in sorting methods and understanding ascending order.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
3 1 4 2 5
Output: [1, 2, 3, 4, 5]</pre>
    <p><b>Explanation:</b> The unsorted list <code>[3, 1, 4, 2, 5]</code> becomes <code>[1, 2, 3, 4, 5]</code> when sorted.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
10 5 15 0
Output: [0, 5, 10, 15]</pre>
    <p><b>Explanation:</b> Numbers are arranged from smallest to largest.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 2, 3, 4, 5]", "stdinput": "5\n3 1 4 2 5" },
    { "id": 2, "input": [], "expected": "[0, 5, 10, 15]", "stdinput": "4\n10 5 15 0" },
    { "id": 3, "input": [], "expected": "[-10, -5, -1]", "stdinput": "3\n-5 -10 -1" },
    { "id": 4, "input": [], "expected": "[5, 5, 5, 5]", "stdinput": "4\n5 5 5 5" },
    { "id": 5, "input": [], "expected": "[-100, 0, 100]", "stdinput": "3\n100 0 -100" },
    { "id": 6, "input": [], "expected": "[10]", "stdinput": "1\n10" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort()\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        System.out.println(Arrays.toString(nums));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => a - b);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n);\n    \n    cout << \"[\";\n    for (int i = 0; i < n; i++) {\n        cout << nums[i];\n        if (i < n - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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