module.exports = {
  "title": "List Operations – Filter Even",
  "difficulty": "easy",
  "acceptance": "92%",

  "description": `
    <p>Extract all even numbers from a list of integers and display them as a new list.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>First Input:</b> The first line contains the number of elements in the list</li>
      <li><b>Second Input:</b> The second line contains the numbers as space-separated integers</li>
      <li><b>Output Format:</b> Display a list containing only the even numbers from the original list</li>
    </ul>
    <p>This problem helps practice conditional filtering and working with mathematical properties of numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
6
1 2 3 4 5 6
Output: [2, 4, 6]</pre>
    <p><b>Explanation:</b> From the list <code>[1, 2, 3, 4, 5, 6]</code>, the even numbers <code>2, 4, 6</code> are extracted.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
4
1 3 5 7
Output: []</pre>
    <p><b>Explanation:</b> When all numbers are odd, the result is an empty list.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[2, 4, 6]", "stdinput": "6\n1 2 3 4 5 6" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "4\n1 3 5 7" },
    { "id": 3, "input": [], "expected": "[-4, -2, 0, 2, 4]", "stdinput": "5\n-4 -2 0 2 4" },
    { "id": 4, "input": [], "expected": "[0, 2]", "stdinput": "3\n0 1 2" },
    { "id": 5, "input": [], "expected": "[10, 12, 14]", "stdinput": "5\n9 10 11 12 14" },
  ],

  "templates": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\neven_nums = []\nfor num in nums:\n    if num % 2 == 0:\n        even_nums.append(num)\nprint(even_nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> evenNums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0) {\n                evenNums.add(num);\n            }\n        }\n        \n        System.out.println(evenNums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const evenNums = nums.filter(num => num % 2 === 0);\n        console.log(JSON.stringify(evenNums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> evenNums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 == 0) {\n            evenNums.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < evenNums.size(); i++) {\n        cout << evenNums[i];\n        if (i < evenNums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nnums = list(map(int, input().split()))\neven_nums = []\nfor num in nums:\n    if num % 2 == 0:\n        even_nums.append(num)\nprint(even_nums)",
    "java": "import java.util.Scanner;\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        ArrayList<Integer> evenNums = new ArrayList<>();\n        \n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num % 2 == 0) {\n                evenNums.add(num);\n            }\n        }\n        \n        System.out.println(evenNums);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputLines = [];\nreadline.on('line', (line) => {\n    inputLines.push(line);\n    if (inputLines.length === 2) {\n        const n = parseInt(inputLines[0]);\n        const nums = inputLines[1].split(' ').map(Number);\n        const evenNums = nums.filter(num => num % 2 === 0);\n        console.log(JSON.stringify(evenNums));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<int> evenNums;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num % 2 == 0) {\n            evenNums.push_back(num);\n        }\n    }\n    \n    cout << \"[\";\n    for (int i = 0; i < evenNums.size(); i++) {\n        cout << evenNums[i];\n        if (i < evenNums.size() - 1) cout << \", \";\n    }\n    cout << \"]\" << endl;\n    return 0;\n}"
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