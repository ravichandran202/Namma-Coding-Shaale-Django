module.exports = {
  "title": "Sum of Even Numbers",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Compute and print the sum of even numbers from 1 to N.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate even numbers</li>
      <li>Accumulate sum of even numbers</li>
      <li>Print the final sum</li>
    </ul>
    <p>This problem teaches selective accumulation with dynamic range.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: 12</pre>
    <p><b>Explanation:</b> Sum of 2+4+6 = 12</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: 30</pre>
    <p><b>Explanation:</b> Sum of 2+4+6+8+10 = 30</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "12", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "30", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "20", "stdinput": "8" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "1" }
  ],

  "templates": {
    "python": "n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    total += i\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        for (int i = 2; i <= n; i += 2) {\n            total += i;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let total = 0;\n    for (let i = 2; i <= n; i += 2) {\n        total += i;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int total = 0;\n    for (int i = 2; i <= n; i += 2) {\n        total += i;\n    }\n    cout << total << endl;\n    return 0;\n}"
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