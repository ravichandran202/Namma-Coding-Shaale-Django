module.exports = {
  "title": "List Methods – Remove Last Element",
  "difficulty": "easy",
  "acceptance": "91%",

  "description": `
    <p>Remove and print the last element from a list using the built-in pop method, then print the updated list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display the removed element on the first line, and the updated list on the second line</li>
      <li><b>Built-in Method:</b> Use the list's <code>pop()</code> method without arguments to remove the last element</li>
    </ul>
    <p>This problem helps practice using the pop method and understanding how list modification works.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
Output: 
40
[10, 20, 30]</pre>
    <p><b>Explanation:</b> The last element <code>40</code> is removed and printed, then the updated list <code>[10, 20, 30]</code> is displayed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
1
100
Output: 
100
[]</pre>
    <p><b>Explanation:</b> The single element <code>100</code> is removed, leaving an empty list.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
3
5 10 15
Output: 
15
[5, 10]</pre>
    <p><b>Explanation:</b> The last element <code>15</code> is removed, leaving <code>[5, 10]</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "40\n[10, 20, 30]", "stdinput": "4\n10 20 30 40" },
    { "id": 2, "input": [], "expected": "100\n[]", "stdinput": "1\n100" },
    { "id": 3, "input": [], "expected": "15\n[5, 10]", "stdinput": "3\n5 10 15" },
    { "id": 4, "input": [], "expected": "0\n[-5, -3, -1]", "stdinput": "4\n-5 -3 -1 0" },
    { "id": 5, "input": [], "expected": "99\n[1, 2, 3]", "stdinput": "4\n1 2 3 99" },
    { "id": 6, "input": [], "expected": "50\n[10, 20, 30, 40]", "stdinput": "5\n10 20 30 40 50" },
    { "id": 7, "input": [], "expected": "7\n[1, 3, 5]", "stdinput": "4\n1 3 5 7" },
    { "id": 8, "input": [], "expected": "1000\n[100, 200, 300]", "stdinput": "4\n100 200 300 1000" },
    { "id": 9, "input": [], "expected": "-1\n[-10, -5]", "stdinput": "3\n-10 -5 -1" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nremoved = nums.pop()\nprint(removed)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int removed = nums.remove(nums.size() - 1);\n        System.out.println(removed);\n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const removed = nums.pop();\n        console.log(removed);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int removed = nums.back();\n    nums.pop_back();\n    \n    cout << removed << endl;\n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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