module.exports = {
  "title": "Even Sum",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Write a program that takes an integer N as input and calculates the sum of all even numbers from 2 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate through even numbers from 2 to N</li>
      <li>Add each even number to a running total</li>
      <li>Print the final sum after the loop</li>
    </ul>
    <p>This problem teaches while loops with step increments and accumulation of even numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10
Output: 30</pre>
    <p><b>Explanation:</b> 2 + 4 + 6 + 8 + 10 = 30</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 6
Output: 12</pre>
    <p><b>Explanation:</b> 2 + 4 + 6 = 12</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "30", "stdinput": "10" },
    { "id": 2, "input": [], "expected": "12", "stdinput": "6" },
    { "id": 3, "input": [], "expected": "2", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "2550", "stdinput": "100" }
  ],

  "templates": {
    "python": "i = 2\ntotal = 0\nN = int(input())\nwhile i <= N:\n    total += i\n    i += 2\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int i = 2;\n        int total = 0;\n        while (i <= N) {\n            total += i;\n            i += 2;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let i = 2;\n    let total = 0;\n    while (i <= parseInt(N)) {\n        total += i;\n        i += 2;\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int i = 2;\n    int total = 0;\n    while (i <= N) {\n        total += i;\n        i += 2;\n    }\n    cout << total << endl;\n    return 0;\n}"
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