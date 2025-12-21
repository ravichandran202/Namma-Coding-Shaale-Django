module.exports = {
  "title": "Horizontal Stars",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print stars in a single horizontal line.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print N stars in one line separated by spaces</li>
      <li>Use while loop for iteration</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=5: print <code>"* * * * *"</code></li>
      <li>For N=3: print <code>"* * *"</code></li>
    </ul>
    <p>This problem teaches basic loop iteration and inline printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: * * * * *</pre>
    <p><b>Explanation:</b> 5 stars printed in one line</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: * * *</pre>
    <p><b>Explanation:</b> 3 stars printed in one line</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 20</li>
      <li>Use while loop for iteration</li>
      <li>Print stars separated by spaces</li>
      <li>Output should be in one line only</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * * * *", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ni = 0\nwhile i < n:\n    print('* ', end='')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 0;\n        while (i < n) {\n            System.out.print(\"* \");\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 0;\n    let output = '';\n    while (i < n) {\n        output += '* ';\n        i++;\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 0;\n    while (i < n) {\n        cout << \"* \";\n        i++;\n    }\n    return 0;\n}"
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