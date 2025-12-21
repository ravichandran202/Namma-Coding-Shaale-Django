module.exports = {
  "title": "Vertical Stars",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Print n rows, each containing exactly 5 stars with spaces.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to print n rows</li>
      <li>Each row contains exactly 5 stars separated by spaces</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Output Format:</b></p>
    <ul>
      <li>For n=3: 3 rows of 5 stars each</li>
      <li>Each row: <code>"* * * * *"</code></li>
      <li>Stars separated by single spaces</li>
    </ul>
    <p>This problem teaches nested loop concepts and pattern printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
* * * * *
* * * * *
* * * * *</pre>
    <p><b>Explanation:</b> 3 rows, each with 5 stars</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
* * * * *
* * * * *</pre>
    <p><b>Explanation:</b> 2 rows, each with 5 stars</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "* * * * *\n* * * * *", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "* * * * *", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *\n* * * * *", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *\n* * * * *\n* * * * *", "stdinput": "5" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    print('* * * * *')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.println(\"* * * * *\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 0; i < n; i++) {\n        console.log('* * * * *');\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* * * * *\" << endl;\n    }\n    return 0;\n}"
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