module.exports = {
  "title": "List Methods – Remove",
  "difficulty": "easy",
  "acceptance": "89%",

  "description": `
    <p>Remove the first occurrence of a specific value from a list using the built-in remove method.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the value to remove</li>
      <li><b>Output Format:</b> Display the updated list after removing the first occurrence of the value</li>
      <li><b>Built-in Method:</b> Use the list's <code>remove()</code> method to delete the first occurrence</li>
    </ul>
    <p>This problem helps practice using the remove method and understanding how it affects list structure.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1 2 3 2 4
2
Output: [1, 3, 2, 4]</pre>
    <p><b>Explanation:</b> The first occurrence of <code>2</code> (at index 1) is removed, leaving <code>[1, 3, 2, 4]</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
10 20 30 40
30
Output: [10, 20, 40]</pre>
    <p><b>Explanation:</b> The value <code>30</code> is removed from the list.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
3
5 5 5
5
Output: [5, 5]</pre>
    <p><b>Explanation:</b> Only the first occurrence of <code>5</code> is removed, leaving two remaining.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 3, 2, 4]", "stdinput": "5\n1 2 3 2 4\n2" },
    { "id": 2, "input": [], "expected": "[10, 20, 40]", "stdinput": "4\n10 20 30 40\n30" },
    { "id": 3, "input": [], "expected": "[5, 5]", "stdinput": "3\n5 5 5\n5" },
    { "id": 4, "input": [], "expected": "[2, 4, 6, 8]", "stdinput": "5\n1 2 4 6 8\n1" },
    { "id": 5, "input": [], "expected": "[-5, 0, 5]", "stdinput": "4\n-10 -5 0 5\n-10" },
    { "id": 6, "input": [], "expected": "[10, 30, 50]", "stdinput": "4\n10 20 30 50\n20" },
    { "id": 7, "input": [], "expected": "[2, 3, 4]", "stdinput": "4\n1 2 3 4\n1" },
    { "id": 8, "input": [], "expected": "[100, 300]", "stdinput": "3\n100 200 300\n200" },
    { "id": 9, "input": [], "expected": "[7, 8, 9]", "stdinput": "4\n6 7 8 9\n6" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\nnums.remove(value)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int value = scanner.nextInt();\n        nums.remove(Integer.valueOf(value));\n        \n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        const index = nums.indexOf(value);\n        if (index !== -1) {\n            nums.splice(index, 1);\n        }\n        \n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int value;\n    cin >> value;\n    \n    auto it = find(nums.begin(), nums.end(), value);\n    if (it != nums.end()) {\n        nums.erase(it);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nvalue = int(input())\nnums.remove(value)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int value = scanner.nextInt();\n        nums.remove(Integer.valueOf(value));\n        \n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const value = parseInt(inputLines[2]);\n        \n        const index = nums.indexOf(value);\n        if (index !== -1) {\n            nums.splice(index, 1);\n        }\n        \n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int value;\n    cin >> value;\n    \n    auto it = find(nums.begin(), nums.end(), value);\n    if (it != nums.end()) {\n        nums.erase(it);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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