module.exports = {
  "title": "Star Right-Angled Triangle Pattern",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Print a right-angled triangle pattern with n rows, where each row contains stars equal to its row number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use nested for loops</li>
      <li>Print n rows in total</li>
      <li>First row: 1 star</li>
      <li>Second row: 2 stars</li>
      <li>Third row: 3 stars</li>
      <li>Continue this pattern until the nth row</li>
      <li>Stars separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>The pattern forms a right-angled triangle aligned to the left</li>
      <li>Each row contains one more star than the previous row</li>
      <li>The first row starts with 1 star</li>
      <li>The last row contains n stars</li>
    </ul>
    <p>This problem teaches nested loops with increasing inner loop iterations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
* 
* * 
* * * 
* * * * 
* * * * *</pre>
    <p><b>Explanation:</b> 5 rows with increasing number of stars in each row</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* 
* * 
* * *</pre>
    <p><b>Explanation:</b> 3 rows with increasing number of stars</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* \n* * \n* * * \n* * * * \n* * * * *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* \n* * \n* * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* \n* * \n* * * \n* * * *", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "* \n* * \n* * * \n* * * * \n* * * * * \n* * * * * *", "stdinput": "6" }
  ],

  "templates": {
    "python": "n = int(input())\n\n# TODO: Use nested loops to print a right-angled triangle pattern of *\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        // TODO: Use nested loops to print a right-angled triangle pattern of *\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    const size = parseInt(n);\n    \n    // TODO: Use nested loops to print a right-angled triangle pattern of *\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    // TODO: Use nested loops to print a right-angled triangle pattern of *\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(i + 1):\n        print(\"*\", end=\" \")\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j <= i; j++) {\n            row += '* ';\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j <= i; j++) {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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