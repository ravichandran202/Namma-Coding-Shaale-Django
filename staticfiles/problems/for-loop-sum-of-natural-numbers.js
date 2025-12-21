module.exports = {
  "title": "Sum of N natural numbers",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Compute and print the sum of numbers from 1 to N using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from 1 to N</li>
      <li>Print the final sum</li>
    </ul>
    <p>This problem teaches accumulation with dynamic range.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 10</pre>
    <p><b>Explanation:</b> Sum of 1+2+3+4 = 10</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 15</pre>
    <p><b>Explanation:</b> Sum of 1+2+3+4+5 = 15</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "15", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "55", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "21", "stdinput": "6" }
  ],

  "templates": {
    "python": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        for (int i = 1; i <= n; i++) {\n            total += i;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let total = 0;\n    for (let i = 1; i <= n; i++) {\n        total += i;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int total = 0;\n    for (int i = 1; i <= n; i++) {\n        total += i;\n    }\n    cout << total << endl;\n    return 0;\n}"
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