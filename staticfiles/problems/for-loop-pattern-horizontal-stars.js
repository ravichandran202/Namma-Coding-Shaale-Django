module.exports = {
  "title": "Horizontal Stars",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print n stars in a single horizontal line with spaces between them.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to print n stars</li>
      <li>Print stars in one line separated by spaces</li>
      <li>No newline after the last star</li>
    </ul>
    <p><b>Output Format:</b></p>
    <ul>
      <li>For n=5: <code>"* * * * *"</code></li>
      <li>For n=3: <code>"* * *"</code></li>
      <li>Stars separated by single spaces</li>
    </ul>
    <p>This problem teaches inline printing and loop iteration.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: * * * * *</pre>
    <p><b>Explanation:</b> 5 stars printed in one line with spaces</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: * * *</pre>
    <p><b>Explanation:</b> 3 stars printed in one line with spaces</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * * * *", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    print('* ', end='')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.print(\"* \");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        output += '* ';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* \";\n    }\n    return 0;\n}"
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