module.exports = {
  "title": "ASCII Printer",
  "difficulty": "medium",
  "acceptance": "83%",

  "description": `
    <p>Print ASCII values of all characters in the input string.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input</li>
      <li>Convert each character to its ASCII value</li>
      <li>Print each ASCII value on a separate line</li>
      <li>Do not use built-in methods - use character iteration</li>
    </ul>
    <p><b>ASCII Concept:</b></p>
    <ul>
      <li>ASCII (American Standard Code for Information Interchange)</li>
      <li>Each character has a numeric code</li>
      <li>'a' = 97, 'b' = 98, 'A' = 65, '0' = 48</li>
      <li>Use character iteration to process each character</li>
    </ul>
    <p>This problem teaches ASCII conversion and character encoding without built-in functions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: abc
Output: 
97
98
99</pre>
    <p><b>Explanation:</b> ASCII values of 'a', 'b', 'c'</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: ABC
Output: 
65
66
67</pre>
    <p><b>Explanation:</b> ASCII values of 'A', 'B', 'C'</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 123
Output: 
49
50
51</pre>
    <p><b>Explanation:</b> ASCII values of '1', '2', '3'</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "97\n98\n99", "stdinput": "abc" },
    { "id": 2, "input": [], "expected": "65\n66\n67", "stdinput": "ABC" },
    { "id": 3, "input": [], "expected": "49\n50\n51", "stdinput": "123" },
    { "id": 4, "input": [], "expected": "72\n101\n108\n108\n111", "stdinput": "Hello" },
    { "id": 5, "input": [], "expected": "33", "stdinput": "!" },
    { "id": 6, "input": [], "expected": "32", "stdinput": " " },
    { "id": 7, "input": [], "expected": "90", "stdinput": "Z" }
  ],

  "templates": {
    "python": "text = input()\nfor ch in text:\n    print(ord(ch))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        for (int i = 0; i < text.length(); i++) {\n            System.out.println((int) text.charAt(i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    for (let i = 0; i < input.length; i++) {\n        console.log(input.charCodeAt(i));\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    for (int i = 0; i < text.length(); i++) {\n        cout << (int) text[i] << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "text = input()\nfor ch in text:\n    print(ord(ch))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        for (int i = 0; i < text.length(); i++) {\n            System.out.println((int) text.charAt(i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    for (let i = 0; i < input.length; i++) {\n        console.log(input.charCodeAt(i));\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    for (int i = 0; i < text.length(); i++) {\n        cout << (int) text[i] << endl;\n    }\n    return 0;\n}"
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