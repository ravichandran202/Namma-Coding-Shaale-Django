module.exports = {
  "title": "List Methods – Pop Index",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Remove and return an element at a specific index position using the built-in pop method with index parameter.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the index position to remove</li>
      <li><b>Output Format:</b> Display the removed element on the first line, and the updated list on the second line</li>
      <li><b>Built-in Method:</b> Use the list's <code>pop(index)</code> method to remove element at specific position</li>
    </ul>
    <p>This problem helps practice using the pop method with index parameter and understanding list manipulation at specific positions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
10 20 30 40 50
2
Output: 
30
[10, 20, 40, 50]</pre>
    <p><b>Explanation:</b> The element at index <code>2</code> (value <code>30</code>) is removed and printed, then the updated list <code>[10, 20, 40, 50]</code> is displayed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
1 2 3 4
0
Output: 
1
[2, 3, 4]</pre>
    <p><b>Explanation:</b> The first element (index <code>0</code>) is removed.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input: 
3
100 200 300
2
Output: 
300
[100, 200]</pre>
    <p><b>Explanation:</b> The last element (index <code>2</code>) is removed.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30\n[10, 20, 40, 50]", "stdinput": "5\n10 20 30 40 50\n2" },
    { "id": 2, "input": [], "expected": "1\n[2, 3, 4]", "stdinput": "4\n1 2 3 4\n0" },
    { "id": 3, "input": [], "expected": "300\n[100, 200]", "stdinput": "3\n100 200 300\n2" },
    { "id": 4, "input": [], "expected": "25\n[10, 20, 30, 40]", "stdinput": "5\n10 20 25 30 40\n2" },
    { "id": 5, "input": [], "expected": "-5\n[-10, 0, 5]", "stdinput": "4\n-10 -5 0 5\n1" },
    { "id": 6, "input": [], "expected": "50\n[10, 20, 30, 40]", "stdinput": "5\n10 20 30 40 50\n4" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nindex = int(input())\nremoved = nums.pop(index)\nprint(removed)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int index = scanner.nextInt();\n        int removed = nums.remove(index);\n        \n        System.out.println(removed);\n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const index = parseInt(inputLines[2]);\n        \n        const removed = nums.splice(index, 1)[0];\n        console.log(removed);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int index;\n    cin >> index;\n    \n    int removed = nums[index];\n    nums.erase(nums.begin() + index);\n    \n    cout << removed << endl;\n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nindex = int(input())\nremoved = nums.pop(index)\nprint(removed)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int index = scanner.nextInt();\n        int removed = nums.remove(index);\n        \n        System.out.println(removed);\n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 3) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const index = parseInt(inputLines[2]);\n        \n        const removed = nums.splice(index, 1)[0];\n        console.log(removed);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int index;\n    cin >> index;\n    \n    int removed = nums[index];\n    nums.erase(nums.begin() + index);\n    \n    cout << removed << endl;\n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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