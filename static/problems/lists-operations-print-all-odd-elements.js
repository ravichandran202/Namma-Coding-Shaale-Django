module.exports = {
  "title": "List Operations – Filter Odd",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>Extract all odd numbers from a list of integers and display them as a new list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a list containing only the odd numbers from the original list</li>
    </ul>
    <p>This problem helps practice conditional filtering and list comprehension techniques.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
1 2 3 4 5 6
Output: [1, 3, 5]</pre>
    <p><b>Explanation:</b> From the list <code>[1, 2, 3, 4, 5, 6]</code>, the odd numbers <code>1, 3, 5</code> are extracted.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
2 4 6 8
Output: []</pre>
    <p><b>Explanation:</b> When all numbers are even, the result is an empty list.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 3, 5]", "stdinput": "6\n1 2 3 4 5 6" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "4\n2 4 6 8" },
    { "id": 3, "input": [], "expected": "[-3, -1, 1]", "stdinput": "5\n-3 -2 -1 0 1" },
    { "id": 4, "input": [], "expected": "[7]", "stdinput": "1\n7" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nodd_nums = []\nfor num in nums:\n    if num % 2 != 0:\n        odd_nums.append(num)\nprint(odd_nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> oddNums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 != 0) {\n                oddNums.add(num);\n            }\n        }\n        \n        System.out.println(oddNums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const oddNums = nums.filter(num => num % 2 !== 0);\n        console.log(JSON.stringify(oddNums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> oddNums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 != 0) {\n            oddNums.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < oddNums.size(); i++) {\n        cout << oddNums[i];\n        if (i < oddNums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nodd_nums = []\nfor num in nums:\n    if num % 2 != 0:\n        odd_nums.append(num)\nprint(odd_nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> oddNums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 != 0) {\n                oddNums.add(num);\n            }\n        }\n        \n        System.out.println(oddNums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const oddNums = nums.filter(num => num % 2 !== 0);\n        console.log(JSON.stringify(oddNums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> oddNums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 != 0) {\n            oddNums.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < oddNums.size(); i++) {\n        cout << oddNums[i];\n        if (i < oddNums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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