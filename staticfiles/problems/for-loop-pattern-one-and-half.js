module.exports = {
  "title": "Star Pattern – Unequal Lines",
  "difficulty": "medium",
  "acceptance": "83%",

  "description": `
    <p>Print one line with n stars, then one line with half that many stars (n//2).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use two separate loops</li>
      <li>First loop prints n stars with spaces</li>
      <li>Second loop prints n//2 stars with spaces</li>
    </ul>
    <p><b>Output Format:</b></p>
    <ul>
      <li>For n=6: first line 6 stars, second line 3 stars</li>
      <li>For n=4: first line 4 stars, second line 2 stars</li>
      <li>Stars separated by single spaces</li>
    </ul>
    <p>This problem teaches integer division and pattern scaling.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: 
* * * * * *
* * *</pre>
    <p><b>Explanation:</b> First line: 6 stars, Second line: 3 stars (6//2)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
* * * *
* *</pre>
    <p><b>Explanation:</b> First line: 4 stars, Second line: 2 stars (4//2)</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * * \n* * *", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "* * * * \n* *", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "* * \n*", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "* * * * * * * * * * \n* * * * *", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    print('*', end=' ')\nprint()\nfor j in range(n // 2):\n    print('*', end=' ')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.print(\"* \");\n        }\n        System.out.println();\n        for (int j = 0; j < n / 2; j++) {\n            System.out.print(\"* \");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let line1 = '';\n    for (let i = 0; i < n; i++) {\n        line1 += '* ';\n    }\n    let line2 = '';\n    for (let j = 0; j < Math.floor(n / 2); j++) {\n        line2 += '* ';\n    }\n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* \";\n    }\n    cout << endl;\n    for (int j = 0; j < n / 2; j++) {\n        cout << \"* \";\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    print('*', end=' ')\nprint()\nfor j in range(n // 2):\n    print('*', end=' ')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.print(\"* \");\n        }\n        System.out.println();\n        for (int j = 0; j < n / 2; j++) {\n            System.out.print(\"* \");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let line1 = '';\n    for (let i = 0; i < n; i++) {\n        line1 += '* ';\n    }\n    let line2 = '';\n    for (let j = 0; j < Math.floor(n / 2); j++) {\n        line2 += '* ';\n    }\n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* \";\n    }\n    cout << endl;\n    for (int j = 0; j < n / 2; j++) {\n        cout << \"* \";\n    }\n    return 0;\n}"
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