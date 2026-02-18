module.exports = {
  "title": "Alternate Character Printer",
  "difficulty": "medium",
  "acceptance": "81%",

  "description": `
    <p>Print every alternate character from a given string.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input</li>
      <li>Print characters at even indices (0, 2, 4, ...)</li>
      <li>Print all characters on the same line without spaces</li>
    </ul>

    <p>This problem teaches string indexing and step iteration.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: abcdef
Output: ace</pre>
    <p><b>Explanation:</b> Characters at indices 0,2,4: a,c,e</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Python
Output: Pto</pre>
    <p><b>Explanation:</b> Characters at indices 0,2,4: P,t,o</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "ace", "stdinput": "abcdef" },
    { "id": 2, "input": [], "expected": "Pto", "stdinput": "Python" },
    { "id": 3, "input": [], "expected": "Hlo", "stdinput": "Hello" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "A" },
    { "id": 5, "input": [], "expected": "13", "stdinput": "1234" },
    { "id": 6, "input": [], "expected": "13579", "stdinput": "1234567890" }
  ],

  "templates": {
    "python": "s = input()\nfor i in range(0, len(s), 2):\n    print(s[i], end='')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.next();\n        for (int i = 0; i < s.length(); i += 2) {\n            System.out.print(s.charAt(i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let result = '';\n    for (let i = 0; i < input.length; i += 2) {\n        result += input[i];\n    }\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    for (int i = 0; i < s.length(); i += 2) {\n        cout << s[i];\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\nfor i in range(0, len(s), 2):\n    print(s[i], end='')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.next();\n        for (int i = 0; i < s.length(); i += 2) {\n            System.out.print(s.charAt(i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let result = '';\n    for (let i = 0; i < input.length; i += 2) {\n        result += input[i];\n    }\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    for (int i = 0; i < s.length(); i += 2) {\n        cout << s[i];\n    }\n    return 0;\n}"
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