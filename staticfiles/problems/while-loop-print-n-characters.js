module.exports = {
  "title": "Alphabets",
  "difficulty": "easy",
  "acceptance": "99.3%",

  "description": `
    <p>Write a program that takes an integer N as input and prints uppercase letters from A to the Nth letter using ASCII values and a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input (N ≤ 26)</li>
      <li>Use a while loop to iterate from 'A' to the Nth letter</li>
      <li>Use ASCII values to generate the letters</li>
      <li>Print each letter on a separate line</li>
    </ul>
    <p>This problem teaches while loops with character manipulation using ASCII values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output:
A
B
C
D
E</pre>
    <p><b>Explanation:</b> The program prints first 5 uppercase letters: A to E</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A
B
C</pre>
    <p><b>Explanation:</b> The program prints first 3 uppercase letters: A to C</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A\nB\nC\nD\nE", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A\nB\nC", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "A\nB\nC\nD\nE\nF\nG", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ", "stdinput": "10" }
  ],

  "templates": {
    "python": "ch = 65\nN = int(input())\nwhile ch < 65 + N:\n    print(chr(ch))\n    ch += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        char ch = 'A';\n        int count = 0;\n        while (count < N) {\n            System.out.println(ch);\n            ch++;\n            count++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let ch = 65;\n    let count = 0;\n    while (count < parseInt(N)) {\n        console.log(String.fromCharCode(ch));\n        ch++;\n        count++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    char ch = 'A';\n    int count = 0;\n    while (count < N) {\n        cout << ch << endl;\n        ch++;\n        count++;\n    }\n    return 0;\n}"
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