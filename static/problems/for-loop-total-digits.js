module.exports = {
  "title": "Digit Counter",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Count the number of digits in a string using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input (may contain digits and other characters)</li>
      <li>Check if character is a digit using ASCII values</li>
      <li>Count and print total number of digits</li>
    </ul>
    <p><b>Digit Detection Methods:</b></p>
    <ul>
      <li><b>Method 1:</b> Use ASCII range: '0' to '9'</li>
    </ul>
    <p>This problem teaches character classification and ASCII manipulation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1A2B34C5
Output: 5</pre>
    <p><b>Explanation:</b> Digits found: 1, 2, 3, 4, 5 (5 digits)</p>

    <h3>Example 2</h3>
    <pre class="constraints">Input: NoDigitsHere
Output: 0</pre>
    <p><b>Explanation:</b> No digits in the string</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "5", "stdinput": "1A2B34C5" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "NoDigitsHere" },
    { "id": 3, "input": [], "expected": "3", "stdinput": "Hello123World" },
    { "id": 4, "input": [], "expected": "6", "stdinput": "123456" },
    { "id": 5, "input": [], "expected": "4", "stdinput": "a1b2c3d4" },
    { "id": 6, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 7, "input": [], "expected": "10", "stdinput": "0123456789" }
  ],

  "templates": {
    "python": "text = input()\ncount = 0\nfor ch in text:\n    if ch.isdigit():\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        int count = 0;\n        for (int i = 0; i < text.length(); i++) {\n            if (Character.isDigit(text.charAt(i))) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        if (!isNaN(parseInt(input[i]))) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    int count = 0;\n    for (char ch : text) {\n        if (isdigit(ch)) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "text = input()\ncount = 0\nfor ch in text:\n    if ch.isdigit():\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        int count = 0;\n        for (int i = 0; i < text.length(); i++) {\n            if (Character.isDigit(text.charAt(i))) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        if (!isNaN(parseInt(input[i]))) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    int count = 0;\n    for (char ch : text) {\n        if (isdigit(ch)) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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