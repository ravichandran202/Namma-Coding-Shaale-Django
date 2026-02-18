module.exports = {
  "title": "List Operations – Count Frequencies",
  "difficulty": "hard",
  "acceptance": "78%",

  "description": `
    <p>Count and display the frequency of each unique element in the list, sorted by element value.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display each unique element with its frequency count, one per line, in ascending order of elements</li>
      <li><b>Frequency Counting:</b> Count how many times each unique element appears in the list</li>
    </ul>
    <p>This problem helps practice frequency analysis, sorting, and formatted output techniques.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
8
1 2 3 2 4 3 3 5
Output: 
1: 1
2: 2
3: 3
4: 1
5: 1</pre>
    <p><b>Explanation:</b> Element <code>1</code> appears once, <code>2</code> appears twice, <code>3</code> appears three times, etc.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
5 5 5 5 5
Output: 
5: 5</pre>
    <p><b>Explanation:</b> Only one unique element <code>5</code> that appears 5 times.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1: 1\n2: 2\n3: 3\n4: 1\n5: 1", "stdinput": "8\n1 2 3 2 4 3 3 5" },
    { "id": 2, "input": [], "expected": "5: 5", "stdinput": "5\n5 5 5 5 5" },
    { "id": 3, "input": [], "expected": "10: 1\n20: 1\n30: 1\n40: 1", "stdinput": "4\n10 20 30 40" },
    { "id": 4, "input": [], "expected": "-1: 3\n0: 2\n1: 2", "stdinput": "7\n-1 0 1 -1 0 1 -1" },
    { "id": 5, "input": [], "expected": "7: 2\n8: 1\n9: 3", "stdinput": "6\n7 8 9 7 9 9" },
    { "id": 6, "input": [], "expected": "100: 2\n200: 1\n300: 2", "stdinput": "5\n100 200 300 100 300" },
    { "id": 7, "input": [], "expected": "-5: 1\n-3: 2\n0: 1\n5: 1", "stdinput": "5\n-3 -5 0 5 -3" },
    { "id": 8, "input": [], "expected": "25: 1\n50: 2\n75: 1", "stdinput": "4\n50 25 75 50" },
    { "id": 9, "input": [], "expected": "1: 1\n2: 1\n3: 1", "stdinput": "3\n1 2 3" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nunique = []\nfor num in nums:\n    if num not in unique:\n        unique.append(num)\nunique.sort()\nfor num in unique:\n    print(f\"{num}: {nums.count(num)}\")",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> unique = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (!unique.contains(num)) {\n                unique.add(num);\n            }\n        }\n        \n        Collections.sort(unique);\n        \n        for (int num : unique) {\n            int count = Collections.frequency(nums, num);\n            System.out.println(num + \": \" + count);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const unique = [...new Set(nums)];\n        unique.sort((a, b) => a - b);\n        \n        for (const num of unique) {\n            const count = nums.filter(x => x === num).length;\n            console.log(`${num}: ${count}`);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <map>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    vector<int> unique;\n    for (int num : nums) {\n        if (find(unique.begin(), unique.end(), num) == unique.end()) {\n            unique.push_back(num);\n        }\n    }\n    \n    sort(unique.begin(), unique.end());\n    \n    for (int num : unique) {\n        int count = 0;\n        for (int n : nums) {\n            if (n == num) count++;\n        }\n        cout << num << \": \" << count << endl;\n    }\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nunique = []\nfor num in nums:\n    if num not in unique:\n        unique.append(num)\nunique.sort()\nfor num in unique:\n    print(f\"{num}: {nums.count(num)}\")",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        ArrayList<Integer> unique = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        for (int num : nums) {\n            if (!unique.contains(num)) {\n                unique.add(num);\n            }\n        }\n        \n        Collections.sort(unique);\n        \n        for (int num : unique) {\n            int count = Collections.frequency(nums, num);\n            System.out.println(num + \": \" + count);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const unique = [...new Set(nums)];\n        unique.sort((a, b) => a - b);\n        \n        for (const num of unique) {\n            const count = nums.filter(x => x === num).length;\n            console.log(`${num}: ${count}`);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <map>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    vector<int> unique;\n    for (int num : nums) {\n        if (find(unique.begin(), unique.end(), num) == unique.end()) {\n            unique.push_back(num);\n        }\n    }\n    \n    sort(unique.begin(), unique.end());\n    \n    for (int num : unique) {\n        int count = 0;\n        for (int n : nums) {\n            if (n == num) count++;\n        }\n        cout << num << \": \" << count << endl;\n    }\n    \n    return 0;\n}"
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