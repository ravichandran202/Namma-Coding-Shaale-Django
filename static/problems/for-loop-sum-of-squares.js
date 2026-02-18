module.exports = {
  "title": "Sum of Squares",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Compute and print the sum of squares of numbers from 1 to n.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from 1 to N</li>
      <li>Calculate total sum of each squared number</li>
      <li>Print the final sum</li>
    </ul>
    <p><b>Sum of Squares Formula:</b></p>
    <ul>
      <li><code>1² + 2² + 3² + ... + N²</code> = <code>N(N+1)(2N+1)/6</code></li>
    </ul>
    <p>This problem teaches mathematical series summation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 30</pre>
    <p><b>Explanation:</b> 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 14</pre>
    <p><b>Explanation:</b> 1² + 2² + 3² = 1 + 4 + 9 = 14</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "14", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "55", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "5", "stdinput": "2" },
    { "id": 6, "input": [], "expected": "91", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "140", "stdinput": "7" },
    { "id": 8, "input": [], "expected": "385", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i * i\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        for (int i = 1; i <= n; i++) {\n            total += i * i;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let total = 0;\n    for (let i = 1; i <= n; i++) {\n        total += i * i;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int total = 0;\n    for (int i = 1; i <= n; i++) {\n        total += i * i;\n    }\n    cout << total << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i * i\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        for (int i = 1; i <= n; i++) {\n            total += i * i;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let total = 0;\n    for (let i = 1; i <= n; i++) {\n        total += i * i;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int total = 0;\n    for (int i = 1; i <= n; i++) {\n        total += i * i;\n    }\n    cout << total << endl;\n    return 0;\n}"
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