module.exports = {
  "title": "List Methods – Reverse Sort",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Sort a list of numbers in descending order using the built-in sort method with reverse parameter.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display the sorted list in descending order</li>
      <li><b>Built-in Method:</b> Use the list's <code>sort()</code> method with parameter</li>
    </ul>
    <p>This problem helps practice using advanced sorting parameters and understanding descending order.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
3 1 4 2 5
Output: [5, 4, 3, 2, 1]</pre>
    <p><b>Explanation:</b> The unsorted list <code>[3, 1, 4, 2, 5]</code> becomes <code>[5, 4, 3, 2, 1]</code> when sorted in descending order.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
10 5 15 0
Output: [15, 10, 5, 0]</pre>
    <p><b>Explanation:</b> Numbers are arranged from largest to smallest.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[5, 4, 3, 2, 1]", "stdinput": "5\n3 1 4 2 5" },
    { "id": 2, "input": [], "expected": "[15, 10, 5, 0]", "stdinput": "4\n10 5 15 0" },
    { "id": 3, "input": [], "expected": "[-1, -5, -10]", "stdinput": "3\n-5 -10 -1" },
    { "id": 4, "input": [], "expected": "[3, 2, 1]", "stdinput": "3\n1 2 3" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort(reverse=True)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\nimport java.util.Collections;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        Collections.sort(nums, Collections.reverseOrder());\n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => b - a);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n, greater<int>());\n    \n    cout << \"[\";\n    for (int i = 0; i < n; i++) {\n        cout << nums[i];\n        if (i < n - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnums.sort(reverse=True)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\nimport java.util.Collections;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        Collections.sort(nums, Collections.reverseOrder());\n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        nums.sort((a, b) => b - a);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    sort(nums, nums + n, greater<int>());\n    \n    cout << \"[\";\n    for (int i = 0; i < n; i++) {\n        cout << nums[i];\n        if (i < n - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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