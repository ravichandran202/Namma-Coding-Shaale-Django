module.exports = {
  "title": "Forward Counter",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Write a program that takes an integer N as input and prints all numbers from 1 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from 1 to N</li>
      <li>Print each number on a separate line</li>
      <li>Stop when you reach N</li>
    </ul>
    <p>This problem teaches while loops with user-defined range limits.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
1
2
3
4
5</pre>
    <p><b>Explanation:</b> The program prints numbers from 1 to 5.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1
2
3</pre>
    <p><b>Explanation:</b> The program prints numbers from 1 to 3.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n2\n3\n4\n5", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "1\n2\n3", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n2\n3\n4\n5\n6\n7", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    print(i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            System.out.println(i);\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let i = 1;\n    while (i <= parseInt(n)) {\n        console.log(i);\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        cout << i << endl;\n        i++;\n    }\n    return 0;\n}"
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