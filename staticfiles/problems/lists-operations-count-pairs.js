module.exports = {
  "title": "List Operations – Count Pairs",
  "difficulty": "hard",
  "acceptance": "76%",

  "description": `
    <p>Count how many numbers in the list have their next consecutive number (n+1) also present in the list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a single integer representing the count of numbers that have their consecutive successor in the list</li>
      <li><b>Consecutive Counting:</b> For each number, check if (number + 1) exists in the list</li>
    </ul>
    <p>This problem helps practice counting algorithms and understanding relationships between elements in a dataset.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
1 2 3 5 6 10
Output: 3</pre>
    <p><b>Explanation:</b> The numbers that have their consecutive successors are: <code>1</code> (has 2), <code>2</code> (has 3), <code>5</code> (has 6), <code>6</code> </p>
    `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "6\n1 2 3 5 6 10" },
    { "id": 2, "input": [], "expected": "3", "stdinput": "4\n10 11 12 13" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "3\n7 8 9" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "4\n1 3 5 7" },
    { "id": 5, "input": [], "expected": "4", "stdinput": "5\n1 2 3 4 5" },
    { "id": 6, "input": [], "expected": "2", "stdinput": "4\n-3 -2 0 1" },
    { "id": 7, "input": [], "expected": "1", "stdinput": "3\n5 6 8" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "2\n10 20" },
    { "id": 9, "input": [], "expected": "3", "stdinput": "6\n2 3 4 6 7 9" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\ncount = 0\nfor num in nums:\n    if num + 1 in nums:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (nums[j] == nums[i] + 1) {\n                    count++;\n                    break;\n                }\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    readline.question('', (numsStr) => {\n        const nums = numsStr.split(' ').map(Number);\n        let count = 0;\n        \n        for (let num of nums) {\n            if (nums.includes(num + 1)) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (nums[j] == nums[i] + 1) {\n                count++;\n                break;\n            }\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\ncount = 0\nfor num in nums:\n    if num + 1 in nums:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (nums[j] == nums[i] + 1) {\n                    count++;\n                    break;\n                }\n            }\n        }\n        \n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    readline.question('', (numsStr) => {\n        const nums = numsStr.split(' ').map(Number);\n        let count = 0;\n        \n        for (let num of nums) {\n            if (nums.includes(num + 1)) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (nums[j] == nums[i] + 1) {\n                count++;\n                break;\n            }\n        }\n    }\n    \n    cout << count << endl;\n    return 0;\n}"
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