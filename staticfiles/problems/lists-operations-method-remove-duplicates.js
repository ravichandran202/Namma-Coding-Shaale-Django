module.exports = {
  "title": "List Methods – Unique Elements",
  "difficulty": "hard",
  "acceptance": "82%",

  "description": `
    <p>Remove all duplicate values from a list while keeping only the first occurrence of each element.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a list containing only unique elements in their original order of first appearance</li>
    </ul>
    <p>This problem helps practice duplicate removal algorithms and order preservation techniques.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
7
1 2 3 2 4 3 5
Output: [1, 2, 3, 4, 5]</pre>
    <p><b>Explanation:</b> The elements <code>2</code> and <code>3</code> appear multiple times, but only their first occurrences are kept.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
Output: [10, 20, 30, 40, 50]</pre>
    <p><b>Explanation:</b> All elements are already unique, so the output is identical to the input.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 2, 3, 4, 5]", "stdinput": "7\n1 2 3 2 4 3 5" },
    { "id": 2, "input": [], "expected": "[10, 20, 30, 40, 50]", "stdinput": "5\n10 20 30 40 50" },
    { "id": 3, "input": [], "expected": "[5]", "stdinput": "6\n5 5 5 5 5 5" },
    { "id": 4, "input": [], "expected": "[1, 2, 3, 4, 5]", "stdinput": "8\n1 2 1 3 2 4 3 5" },
    { "id": 5, "input": [], "expected": "[100, 200, 300]", "stdinput": "5\n100 200 100 300 200" },
    { "id": 6, "input": [], "expected": "[-5, -3, -1, 0]", "stdinput": "6\n-5 -3 -1 0 -3 -1" },
    { "id": 7, "input": [], "expected": "[7, 8, 9]", "stdinput": "4\n7 8 9 7" },
    { "id": 8, "input": [], "expected": "[25, 50, 75]", "stdinput": "6\n25 50 75 25 50 75" },
    { "id": 9, "input": [], "expected": "[1]", "stdinput": "3\n1 1 1" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nresult = []\nfor num in nums:\n    if num not in result:\n        result.append(num)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> result = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (!result.contains(num)) {\n                result.add(num);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const result = [];\n        \n        for (const num of nums) {\n            if (!result.includes(num)) {\n                result.push(num);\n            }\n        }\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    vector<int> result;\n    \n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    for (int num : nums) {\n        if (find(result.begin(), result.end(), num) == result.end()) {\n            result.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << result[i];\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nresult = []\nfor num in nums:\n    if num not in result:\n        result.append(num)\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> result = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (!result.contains(num)) {\n                result.add(num);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const result = [];\n        \n        for (const num of nums) {\n            if (!result.includes(num)) {\n                result.push(num);\n            }\n        }\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    vector<int> result;\n    \n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    for (int num : nums) {\n        if (find(result.begin(), result.end(), num) == result.end()) {\n            result.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < result.size(); i++) {\n        cout << result[i];\n        if (i < result.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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