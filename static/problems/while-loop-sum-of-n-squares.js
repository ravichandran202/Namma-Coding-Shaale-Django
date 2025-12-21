module.exports = {
  "title": "Number Squares",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Write a program that takes an integer N as input and prints the squares of all numbers from 1 to N using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to iterate from 1 to N</li>
      <li>For each number, calculate its square (number × number)</li>
      <li>Print each square on a separate line</li>
    </ul>
    <p>This problem teaches while loops with mathematical operations and formatted output.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
1
4
9
16
25</pre>
    <p><b>Explanation:</b> The program prints squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
1
4
9</pre>
    <p><b>Explanation:</b> The program prints squares: 1²=1, 2²=4, 3²=9</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "1\n4\n9\n16\n25", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "1\n4\n9", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n4\n9\n16\n25\n36\n49", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "1\n4\n9\n16\n25\n36\n49\n64\n81\n100", "stdinput": "10" }
  ],

  "templates": {
    "python": "i = 1\nN = int(input())\nwhile i <= N:\n    print(i * i)\n    i += 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int N = scanner.nextInt();\n        int i = 1;\n        while (i <= N) {\n            System.out.println(i * i);\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (N) => {\n    let i = 1;\n    while (i <= parseInt(N)) {\n        console.log(i * i);\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin >> N;\n    int i = 1;\n    while (i <= N) {\n        cout << i * i << endl;\n        i++;\n    }\n    return 0;\n}"
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