module.exports = {
  "title": "Vertical Numbers",
  "difficulty": "Easy",
  "acceptance": "96%",

  "description": `
    <p>Print numbers from 1 to N in a single line.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print numbers from 1 to N in one line separated by spaces</li>
      <li>Use while loop for iteration</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=5: print "1 2 3 4 5"</li>
      <li>For N=3: print "1 2 3"</li>
    </ul>
    <p>This problem teaches number sequence generation and inline printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 1 2 3 4 5</pre>
    <p><b>Explanation:</b> Numbers from 1 to 5 printed in one line</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 1 2 3</pre>
    <p><b>Explanation:</b> Numbers from 1 to 3 printed in one line</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 20</li>
      <li>Use while loop for iteration</li>
      <li>Print numbers separated by spaces</li>
      <li>Start from 1 and go up to N</li>
      <li>Output should be in one line only</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 4 5", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "1 2 3", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 2 3 4 5 6 7", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "1 2 3 4 5 6 7 8 9 10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    print(i, end=' ')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 1;\n    let output = '';\n    while (i <= n) {\n        output += i + ' ';\n        i++;\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        cout << i << \" \";\n        i++;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    print(i, end=' ')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 1;\n    let output = '';\n    while (i <= n) {\n        output += i + ' ';\n        i++;\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        cout << i << \" \";\n        i++;\n    }\n    return 0;\n}"
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