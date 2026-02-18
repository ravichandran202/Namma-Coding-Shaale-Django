module.exports = {
  "title": "Star-Hash Two Lines",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Print one line of n stars, then one line of (n-1) hash symbols.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>First loop prints n stars with spaces</li>
      <li>Second loop prints (n-1) hash symbols with spaces</li>
    </ul>
    <p><b>Output Format:</b></p>
    <ul>
      <li>For n=5: first line 5 stars, second line 4 hashes</li>
      <li>First line: "* * * * *"</li>
      <li>Second line: "# # # #"</li>
      <li>Symbols separated by single spaces</li>
    </ul>
    <p>This problem teaches pattern variation and loop control.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
* * * * *
# # # #</pre>
    <p><b>Explanation:</b> First line: 5 stars, Second line: 4 hashes</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
* * *
# #</pre>
    <p><b>Explanation:</b> First line: 3 stars, Second line: 2 hashes</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "* * * * * \n# # # #", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "* * * \n# #", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "* * \n#", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "* * * * * * \n# # # # #", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "* * * * \n# # #", "stdinput": "4" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    print('*', end=' ')\nprint()\nfor j in range(n - 1):\n    print('#', end=' ')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.print(\"* \");\n        }\n        System.out.println();\n        for (int j = 0; j < n - 1; j++) {\n            System.out.print(\"# \");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let line1 = '';\n    for (let i = 0; i < n; i++) {\n        line1 += '* ';\n    }\n    let line2 = '';\n    for (let j = 0; j < n - 1; j++) {\n        line2 += '# ';\n    }\n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* \";\n    }\n    cout << endl;\n    for (int j = 0; j < n - 1; j++) {\n        cout << \"# \";\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    print('*', end=' ')\nprint()\nfor j in range(n - 1):\n    print('#', end=' ')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.print(\"* \");\n        }\n        System.out.println();\n        for (int j = 0; j < n - 1; j++) {\n            System.out.print(\"# \");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let line1 = '';\n    for (let i = 0; i < n; i++) {\n        line1 += '* ';\n    }\n    let line2 = '';\n    for (let j = 0; j < n - 1; j++) {\n        line2 += '# ';\n    }\n    console.log(line1.trim());\n    console.log(line2.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"* \";\n    }\n    cout << endl;\n    for (int j = 0; j < n - 1; j++) {\n        cout << \"# \";\n    }\n    return 0;\n}"
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