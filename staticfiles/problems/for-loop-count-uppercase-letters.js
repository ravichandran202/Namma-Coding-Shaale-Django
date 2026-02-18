module.exports = {
  "title": "Uppercase Counter",
  "difficulty": "medium",
  "acceptance": "87%",

  "description": `
    <p>Count uppercase letters in the input string.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input</li>
      <li>Use for loop to iterate through each character</li>
      <li>Check if character is uppercase using ASCII range</li>
      <li>Count and print total uppercase letters</li>
    </ul>
    <p><b>Uppercase Detection:</b></p>
    <ul>
      <li>Uppercase letters: A-Z (ASCII 65-90)</li>
      <li>Check if character is between 'A' and 'Z'</li>
    </ul>
    <p>This problem teaches character classification using ASCII ranges.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: HeLLoWorlD
Output: 5</pre>
    <p><b>Explanation:</b> Uppercase letters: H, L, L, W, D (5 letters)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: PYTHON
Output: 6</pre>
    <p><b>Explanation:</b> All letters are uppercase</p>
    
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "5", "stdinput": "HeLLoWorlD" },
    { "id": 2, "input": [], "expected": "6", "stdinput": "PYTHON" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "lowercase" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "A" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "AbC" },
    { "id": 6, "input": [], "expected": "2", "stdinput": "Hello World" },
    { "id": 7, "input": [], "expected": "0", "stdinput": "123!@#" }
  ],

  "templates": {
    "python": "s = input()\ncount = 0\nfor ch in s:\n    if 'A' <= ch <= 'Z':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (ch >= 'A' && ch <= 'Z') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        if (input[i] >= 'A' && input[i] <= 'Z') {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int count = 0;\n    for (char ch : s) {\n        if (ch >= 'A' && ch <= 'Z') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\ncount = 0\nfor ch in s:\n    if 'A' <= ch <= 'Z':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (ch >= 'A' && ch <= 'Z') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        if (input[i] >= 'A' && input[i] <= 'Z') {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int count = 0;\n    for (char ch : s) {\n        if (ch >= 'A' && ch <= 'Z') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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