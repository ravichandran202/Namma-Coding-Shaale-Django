module.exports = {
  "title": "Sun Of N Natural Numbers",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Write a program that takes an integer N as input and calculates the sum of all numbers from 1 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from 1 to N</li>
      <li>Add each number to a running total</li>
      <li>Print the final sum after the loop</li>
    </ul>
    <p>This problem teaches while loops with accumulation and running totals.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 15</pre>
    <p><b>Explanation:</b> 1 + 2 + 3 + 4 + 5 = 15</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: 55</pre>
    <p><b>Explanation:</b> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "15", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "55", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "5050", "stdinput": "100" }
  ],

  "templates": {
    "python": "num = 1\ntotal = 0\nN = int(input())\nwhile num <= N:\n    total += num\n    num += 1\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int num = 1;\n        int total = 0;\n        while (num <= N) {\n            total += num;\n            num++;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let num = 1;\n    let total = 0;\n    while (num <= parseInt(N)) {\n        total += num;\n        num++;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int num = 1;\n    int total = 0;\n    while (num <= N) {\n        total += num;\n        num++;\n    }\n    cout << total << endl;\n    return 0;\n}"
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