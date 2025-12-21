module.exports = {
  "title": "List Operations – Move Zeros",
  "difficulty": "hard",
  "acceptance": "80%",

  "description": `
    <p>Move all zero elements to the end of the list while maintaining the relative order of all non-zero elements.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display the modified list with all zeros moved to the end</li>
      <li><b>Zero Movement:</b> All zero values are moved to the end of the list</li>
    </ul>
    <p>This problem helps practice list filtering, element counting, and maintaining relative order during transformations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
7
0 1 0 3 12 0 5
Output: [1, 3, 12, 5, 0, 0, 0]</pre>
    <p><b>Explanation:</b> All zeros are moved to the end while non-zero elements <code>1, 3, 12, 5</code> maintain their relative order.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
5
0 0 0 0 1
Output: [1, 0, 0, 0, 0]</pre>
    <p><b>Explanation:</b> The single non-zero element <code>1</code> moves to the front, followed by all zeros.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[1, 3, 12, 5, 0, 0, 0]", "stdinput": "7\n0 1 0 3 12 0 5" },
    { "id": 2, "input": [], "expected": "[1, 0, 0, 0, 0]", "stdinput": "5\n0 0 0 0 1" },
    { "id": 3, "input": [], "expected": "[1, 2, 3, 4]", "stdinput": "4\n1 2 3 4" },
    { "id": 4, "input": [], "expected": "[0, 0, 0, 0, 0, 0]", "stdinput": "6\n0 0 0 0 0 0" },
    { "id": 5, "input": [], "expected": "[5, 10, 15, 0, 0]", "stdinput": "5\n0 5 0 10 15" },
    { "id": 6, "input": [], "expected": "[-5, 5, -3, 3, 0, 0]", "stdinput": "6\n0 -5 0 5 -3 3" },
    { "id": 7, "input": [], "expected": "[100, 200, 0]", "stdinput": "3\n0 100 200" },
    { "id": 8, "input": [], "expected": "[7, 8, 9, 0, 0, 0]", "stdinput": "6\n7 0 8 0 9 0" },
    { "id": 9, "input": [], "expected": "[25, 50, 75, 0]", "stdinput": "4\n25 0 50 75" }
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\nnon_zero = []\nzero_count = 0\nfor num in nums:\n    if num != 0:\n        non_zero.append(num)\n    else:\n        zero_count += 1\nresult = non_zero + [0] * zero_count\nprint(result)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> nonZero = new ArrayList<>();\n        int zeroCount = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num != 0) {\n                nonZero.add(num);\n            } else {\n                zeroCount++;\n            }\n        }\n        \n        for (int i = 0; i < zeroCount; i++) {\n            nonZero.add(0);\n        }\n        \n        System.out.println(nonZero);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const nonZero = nums.filter(num => num !== 0);\n        const zeroCount = nums.length - nonZero.length;\n        const result = nonZero.concat(Array(zeroCount).fill(0));\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> nonZero;\n    int zeroCount = 0;\n    \n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num != 0) {\n            nonZero.push_back(num);\n        } else {\n            zeroCount++;\n        }\n    }\n    \n    for (int i = 0; i < zeroCount; i++) {\n        nonZero.push_back(0);\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < nonZero.size(); i++) {\n        cout << nonZero[i];\n        if (i < nonZero.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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