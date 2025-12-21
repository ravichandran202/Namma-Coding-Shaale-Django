module.exports = {
  "title": "Inverted Right-Angled Triangle Pattern",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Print an inverted right-angled triangle pattern with n rows, where each row contains decreasing number of stars.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use nested for loops</li>
      <li>Print n rows in total</li>
      <li>First row: n stars</li>
      <li>Second row: n-1 stars</li>
      <li>Third row: n-2 stars</li>
      <li>Continue this pattern until the last row with 1 star</li>
      <li>Stars separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>The pattern forms an inverted right-angled triangle aligned to the left</li>
      <li>Each row contains one less star than the previous row</li>
      <li>The first row starts with n stars</li>
      <li>The last row contains 1 star</li>
    </ul>
    <p>This problem teaches nested loops with decreasing inner loop iterations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
* * * * * 
* * * * 
* * * 
* * 
*</pre>
    <p><b>Explanation:</b> 5 rows with decreasing number of stars in each row</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * * 
* * 
*</pre>
    <p><b>Explanation:</b> 3 rows with decreasing number of stars</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * \n* * * * \n* * * \n* * \n*", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * * \n* * \n*", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * * * \n* * * \n* * \n*", "stdinput": "4" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i):\n        print(\"*\", end=\" \")\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i; j++) {\n            row += '* ';\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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