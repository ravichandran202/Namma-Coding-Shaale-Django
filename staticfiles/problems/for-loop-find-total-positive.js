module.exports = {
  "title": "Count Positives",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Read n numbers and count how many are positive.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read integer n (number of inputs)</li>
      <li>Use for loop to read n numbers</li>
      <li>Count numbers greater than 0</li>
      <li>Print the count of positive numbers</li>
    </ul>
    <p><b>Positive Number Concept:</b></p>
    <ul>
      <li>Positive numbers are greater than 0</li>
      <li>Zero is not positive</li>
      <li>Negative numbers are not positive</li>
      <li>Initialize counter to 0</li>
      <li>Increment counter for each positive number</li>
    </ul>
    <p>This problem teaches multiple input handling and conditional counting.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
5
1
-2
3
0
4
Output: 3</pre>
    <p><b>Explanation:</b> Positive numbers: 1, 3, 4 (3 numbers)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
3
-1
-2
-3
Output: 0</pre>
    <p><b>Explanation:</b> No positive numbers</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
4
10
20
30
40
Output: 4</pre>
    <p><b>Explanation:</b> All numbers are positive</p>
  `,

  "conditions": `
    <ul>
      <li>First input n will be between 1 and 100</li>
      <li>Subsequent n numbers will be integers between -1000 and 1000</li>
      <li>Use for loop to read n numbers</li>
      <li>Count numbers strictly greater than 0</li>
      <li>Print only the final count</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "5\n1\n-2\n3\n0\n4" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "3\n-1\n-2\n-3" },
    { "id": 3, "input": [], "expected": "4", "stdinput": "4\n10\n20\n30\n40" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "3\n-5\n0\n7" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "2\n1\n2" },
    { "id": 6, "input": [], "expected": "0", "stdinput": "1\n0" },
    { "id": 7, "input": [], "expected": "1", "stdinput": "1\n100" }
  ],

  "templates": {
    "python": "n = int(input())\ncount = 0\nfor i in range(n):\n    num = int(input())\n    if num > 0:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > 0) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let count = 0;\n    for (let i = 1; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num > 0) {\n            count++;\n        }\n    }\n    console.log(count);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > 0) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ncount = 0\nfor i in range(n):\n    num = int(input())\n    if num > 0:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            int num = scanner.nextInt();\n            if (num > 0) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n});\n\nreadline.on('close', () => {\n    const n = parseInt(input[0]);\n    let count = 0;\n    for (let i = 1; i <= n; i++) {\n        const num = parseInt(input[i]);\n        if (num > 0) {\n            count++;\n        }\n    }\n    console.log(count);\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    for (int i = 0; i < n; i++) {\n        int num;\n        cin >> num;\n        if (num > 0) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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