module.exports = {
  "title": "List Operations – Any Consecutive",
  "difficulty": "hard",
  "acceptance": "83%",

  "description": `
    <p>Check if the list contains any two consecutive numbers (numbers that differ by 1).</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display "Yes" if any two consecutive numbers exist in the list, otherwise display "No"</li>
    </ul>
    <p>This problem helps practice nested checking and understanding mathematical relationships between numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1 3 4 7 10
Output: Yes</pre>
    <p><b>Explanation:</b> The numbers <code>3</code> and <code>4</code> are consecutive (differ by 1).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
1 3 5 7
Output: No</pre>
    <p><b>Explanation:</b> No two numbers in the list differ by exactly 1.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Yes", "stdinput": "5\n1 3 4 7 10" },
    { "id": 2, "input": [], "expected": "No", "stdinput": "4\n1 3 5 7" },
    { "id": 3, "input": [], "expected": "Yes", "stdinput": "6\n10 11 20 21 30 31" },
    { "id": 4, "input": [], "expected": "Yes", "stdinput": "3\n-5 -4 0" },
    { "id": 5, "input": [], "expected": "No", "stdinput": "3\n100 102 104" },
    { "id": 6, "input": [], "expected": "Yes", "stdinput": "4\n5 6 8 9" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nfound = False\nfor num in nums:\n    if num + 1 in nums:\n        found = True\n        break\nif found:\n    print(\"Yes\")\nelse:\n    print(\"No\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        boolean found = false;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i != j && nums[j] == nums[i] + 1) {\n                    found = true;\n                    break;\n                }\n            }\n            if (found) break;\n        }\n        \n        System.out.println(found ? \"Yes\" : \"No\");\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    readline.question('', (numsStr) => {\n        const nums = numsStr.split(' ').map(Number);\n        let found = false;\n        \n        for (let num of nums) {\n            if (nums.includes(num + 1)) {\n                found = true;\n                break;\n            }\n        }\n        \n        console.log(found ? \"Yes\" : \"No\");\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    bool found = false;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i != j && nums[j] == nums[i] + 1) {\n                found = true;\n                break;\n            }\n        }\n        if (found) break;\n    }\n    \n    cout << (found ? \"Yes\" : \"No\") << endl;\n    return 0;\n}"
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