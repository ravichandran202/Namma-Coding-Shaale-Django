module.exports = {
  "title": "List Methods – Insert Element at Given Position",
  "difficulty": "easy",
  "acceptance": "90%",

  "description": `
    <p>Insert an element at a specific position in a list using the built-in insert method.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the original list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Third Input:</b> The third line contains the index position where to insert</li>
      <li><b>Fourth Input:</b> The fourth line contains the value to insert</li>
      <li><b>Output Format:</b> Display the updated list after inserting the element</li>
      <li><b>Built-in Method:</b> Use the list's <code>insert()</code> method to add the element at the specified position</li>
    </ul>
    <p>This problem helps practice using the insert method and understanding list indexing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
3
1 3 4
1
2
Output: [1, 2, 3, 4]</pre>
    <p><b>Explanation:</b> The value <code>2</code> is inserted at index <code>1</code>, between <code>1</code> and <code>3</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
2
10 20
0
5
Output: [5, 10, 20]</pre>
    <p><b>Explanation:</b> The value <code>5</code> is inserted at the beginning (index 0).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 2, 3, 4]", "stdinput": "3\n1 3 4\n1\n2" },
    { "id": 2, "input": [], "expected": "[5, 10, 20]", "stdinput": "2\n10 20\n0\n5" },
    { "id": 3, "input": [], "expected": "[1, 2, 3, 4]", "stdinput": "3\n1 2 3\n3\n4" },
    { "id": 4, "input": [], "expected": "[10, 15, 20, 25, 30]", "stdinput": "4\n10 20 25 30\n1\n15" },
    { "id": 5, "input": [], "expected": "[0, 1, 2, 3]", "stdinput": "3\n1 2 3\n0\n0" },
    { "id": 6, "input": [], "expected": "[100, 200, 300, 400, 500]", "stdinput": "4\n100 300 400 500\n1\n200" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nindex = int(input())\nvalue = int(input())\nnums.insert(index, value)\nprint(nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            nums.add(scanner.nextInt());\n        }\n        \n        int index = scanner.nextInt();\n        int value = scanner.nextInt();\n        nums.add(index, value);\n        \n        System.out.println(nums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 4) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const index = parseInt(inputLines[2]);\n        const value = parseInt(inputLines[3]);\n        \n        nums.splice(index, 0, value);\n        console.log(JSON.stringify(nums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        nums.push_back(num);\n    }\n    \n    int index, value;\n    cin >> index >> value;\n    \n    nums.insert(nums.begin() + index, value);\n    \n    cout << \"[\";\n    for (int i = 0; i < nums.size(); i++) {\n        cout << nums[i];\n        if (i < nums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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