module.exports = {
  "title": "List Operations – Find Duplicates",
  "difficulty": "medium",
  "acceptance": "79%",

  "description": `
    <p>Find all elements that appear more than once in a list and display them in sorted order.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a list containing all duplicate elements in ascending order</li>
      <li><b>Duplicate Definition:</b> An element is duplicate if it appears more than once in the list</li>
    </ul>
    <p>This problem helps practice duplicate detection, list manipulation, and sorting algorithms.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
8
1 2 3 2 4 5 3 6
Output: [2, 3]</pre>
    <p><b>Explanation:</b> The elements <code>2</code> and <code>3</code> appear more than once, and they are displayed in sorted order.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
6
1 2 3 4 5 6
Output: []</pre>
    <p><b>Explanation:</b> All elements are unique, so no duplicates exist.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[2, 3]", "stdinput": "8\n1 2 3 2 4 5 3 6" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "6\n1 2 3 4 5 6" },
    { "id": 3, "input": [], "expected": "[1, 3, 5]", "stdinput": "7\n5 5 5 3 3 1 1" },
    { "id": 4, "input": [], "expected": "[10, 20]", "stdinput": "5\n10 10 20 20 30" },
    { "id": 5, "input": [], "expected": "[7]", "stdinput": "6\n1 3 5 7 7 9" },
    { "id": 6, "input": [], "expected": "[-5, -3]", "stdinput": "7\n-5 -3 -1 -5 -3 0 2" },
    { "id": 7, "input": [], "expected": "[100]", "stdinput": "4\n50 100 100 150" },
    { "id": 8, "input": [], "expected": "[2, 4, 6]", "stdinput": "8\n1 2 2 3 4 4 5 6 6" },
    { "id": 9, "input": [], "expected": "[]", "stdinput": "3\n10 20 30" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nduplicates = []\nfor num in nums:\n    if nums.count(num) > 1 and num not in duplicates:\n        duplicates.append(num)\nduplicates.sort()\nprint(duplicates)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> duplicates = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (Collections.frequency(nums, num) > 1 && !duplicates.contains(num)) {\n                duplicates.add(num);\n            }\n        }\n        \n        Collections.sort(duplicates);\n        System.out.println(duplicates);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const duplicates = [];\n        \n        for (let num of nums) {\n            if (nums.filter(x => x === num).length > 1 && !duplicates.includes(num)) {\n                duplicates.push(num);\n            }\n        }\n        \n        duplicates.sort((a, b) => a - b);\n        console.log(JSON.stringify(duplicates));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    vector<int> duplicates;\n    for (int i = 0; i < n; i++) {\n        int count = 0;\n        for (int j = 0; j < n; j++) {\n            if (nums[j] == nums[i]) {\n                count++;\n            }\n        }\n        if (count > 1 && find(duplicates.begin(), duplicates.end(), nums[i]) == duplicates.end()) {\n            duplicates.push_back(nums[i]);\n        }\n    }\n    \n    sort(duplicates.begin(), duplicates.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < duplicates.size(); i++) {\n        cout << duplicates[i];\n        if (i < duplicates.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nduplicates = []\nfor num in nums:\n    if nums.count(num) > 1 and num not in duplicates:\n        duplicates.append(num)\nduplicates.sort()\nprint(duplicates)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> duplicates = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (Collections.frequency(nums, num) > 1 && !duplicates.contains(num)) {\n                duplicates.add(num);\n            }\n        }\n        \n        Collections.sort(duplicates);\n        System.out.println(duplicates);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const duplicates = [];\n        \n        for (let num of nums) {\n            if (nums.filter(x => x === num).length > 1 && !duplicates.includes(num)) {\n                duplicates.push(num);\n            }\n        }\n        \n        duplicates.sort((a, b) => a - b);\n        console.log(JSON.stringify(duplicates));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    vector<int> duplicates;\n    for (int i = 0; i < n; i++) {\n        int count = 0;\n        for (int j = 0; j < n; j++) {\n            if (nums[j] == nums[i]) {\n                count++;\n            }\n        }\n        if (count > 1 && find(duplicates.begin(), duplicates.end(), nums[i]) == duplicates.end()) {\n            duplicates.push_back(nums[i]);\n        }\n    }\n    \n    sort(duplicates.begin(), duplicates.end());\n    \n    cout << \"[\";\n    for (int i = 0; i < duplicates.size(); i++) {\n        cout << duplicates[i];\n        if (i < duplicates.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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