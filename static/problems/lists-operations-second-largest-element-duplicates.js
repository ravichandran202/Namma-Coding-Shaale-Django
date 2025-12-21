module.exports = {
  "title": "List Operations – Second Largest (Duplicates)",
  "difficulty": "hard",
  "acceptance": "68%",

  "description": `
    <p>Find the second largest unique element in a list, ignoring duplicate values.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> single integer representing the second largest unique value</li>
    </ul>
    <p>This problem helps practice working with unique values and understanding how duplicates affect statistical measures.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
7
10 30 25 30 20 25 15
Output: 25</pre>
    <p><b>Explanation:</b> Unique values: <code>[10, 15, 20, 25, 30]</code>.  Second largest is <code>25</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
100 100 200 200 300
Output: 200</pre>
    <p><b>Explanation:</b> Unique values: <code>[100, 200, 300]</code>.  Second largest is <code>200</code>.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "25", "stdinput": "7\n10 30 25 30 20 25 15" },
    { "id": 2, "input": [], "expected": "200", "stdinput": "5\n100 100 200 200 300" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "6\n-10 -5 -10 0 -5 5" },
    { "id": 4, "input": [], "expected": "88", "stdinput": "8\n10 20 88 99 100 88 99 100" },
    { "id": 5, "input": [], "expected": "50", "stdinput": "6\n10 50 100 10 50 100" },
    { "id": 6, "input": [], "expected": "-5", "stdinput": "5\n-10 -10 -5 -5 0" },
    { "id": 7, "input": [], "expected": "999", "stdinput": "4\n500 999 1000 1000" },
    { "id": 8, "input": [], "expected": "2", "stdinput": "5\n1 1 2 2 3" },
    { "id": 9, "input": [], "expected": "75", "stdinput": "7\n25 50 75 100 25 50 75" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nunique_nums = list(set(nums))\nunique_nums.sort()\nprint(unique_nums[-2])",
    "java": "import java.util.Scanner;\nimport java.util.Arrays;\nimport java.util.HashSet;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        HashSet<Integer> uniqueSet = new HashSet<>();\n        \n        for (int i = 0; i < n; i++) {\n            uniqueSet.add(scanner.nextInt());\n        }\n        \n        ArrayList<Integer> uniqueList = new ArrayList<>(uniqueSet);\n        Collections.sort(uniqueList);\n        \n        if (uniqueList.size() >= 2) {\n            System.out.println(uniqueList.get(uniqueList.size() - 2));\n        } else {\n            System.out.println(\"No second largest unique value\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const uniqueNums = [...new Set(nums)];\n        uniqueNums.sort((a, b) => a - b);\n        \n        if (uniqueNums.length >= 2) {\n            console.log(uniqueNums[uniqueNums.length - 2]);\n        } else {\n            console.log(\"No second largest unique value\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <set>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    set<int> uniqueSet;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        uniqueSet.insert(num);\n    }\n    \n    vector<int> uniqueNums(uniqueSet.begin(), uniqueSet.end());\n    sort(uniqueNums.begin(), uniqueNums.end());\n    \n    if (uniqueNums.size() >= 2) {\n        cout << uniqueNums[uniqueNums.size() - 2] << endl;\n    } else {\n        cout << \"No second largest unique value\" << endl;\n    }\n    \n    return 0;\n}"
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