module.exports = {
  "title": "Vertical Stars",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Print a square pattern of stars with N rows and 5 columns.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print N rows, each containing 5 stars separated by spaces</li>
      <li>Use while loop for iteration</li>
    </ul>
    <p><b>Example:</b></p>
    <ul>
      <li>For N=3: print 3 rows of 5 stars each</li>
      <li>For N=5: print 5 rows of 5 stars each</li>
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
    <pre class="constraints">Input: 5
Output: 
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *</pre>
    <p><b>Explanation:</b> 5 rows, each with 5 stars</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 10</li>
      <li>Use while loop for iteration</li>
      <li>Each row should have exactly 5 stars separated by spaces</li>
      <li>Print each row on a separate line</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *\n* * * * *\n* * * * *", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "* * * * *", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * *\n* * * * *", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "* * * * *\n* * * * *\n* * * * *\n* * * * *", "stdinput": "4" }
  ],

  "templates": {
    "python": "n = int(input())\ni = 0\nwhile i < n:\n    print('* * * * *')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 0;\n        while (i < n) {\n            System.out.println(\"* * * * *\");\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 0;\n    while (i < n) {\n        console.log('* * * * *');\n        i++;\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 0;\n    while (i < n) {\n        cout << \"* * * * *\" << endl;\n        i++;\n    }\n    return 0;\n}"
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