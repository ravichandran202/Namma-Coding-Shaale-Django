module.exports = {
  "title": "List Operations – Next Consecutive",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Check if the next consecutive number (n+1) of a given target number is present in the list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the target number to check</li>
      <li><b>Output Format:</b> Display "True" if the next consecutive number (target + 1) exists in the list, otherwise display "False"</li>
    </ul>
    <p>This problem helps practice list membership checking and basic arithmetic operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1 2 3 5 7
2
Output: True</pre>
    <p><b>Explanation:</b> The target is <code>2</code>, and its next consecutive number <code>3</code> exists in the list.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
25
Output: False</pre>
    <p><b>Explanation:</b> The target is <code>25</code>, and its next consecutive number <code>26</code> does not exist in the list.</p>

  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\n1 2 3 5 7\n2" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "4\n10 20 30 40\n25" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "3\n5 6 7\n6" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "4\n1 3 5 7\n7" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "6\n10 11 12 13 14 15\n14" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nif target + 1 in nums:\n    print(\"True\")\nelse:\n    print(\"False\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int[] nums = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            nums[i] = scanner.nextInt();\n        }\n        \n        int target = scanner.nextInt();\n        boolean found = false;\n        \n        for (int num : nums) {\n            if (num == target + 1) {\n                found = true;\n                break;\n            }\n        }\n        \n        System.out.println(found ? \"True\" : \"No\");\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const target = parseInt(inputLines[2]);\n        \n        if (nums.includes(target + 1)) {\n            console.log(\"True\");\n        } else {\n            console.log(\"No\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    int nums[n];\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n    \n    int target;\n    cin >> target;\n    \n    bool found = false;\n    for (int i = 0; i < n; i++) {\n        if (nums[i] == target + 1) {\n            found = true;\n            break;\n        }\n    }\n    \n    cout << (found ? \"True\" : \"No\") << endl;\n    return 0;\n}"
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