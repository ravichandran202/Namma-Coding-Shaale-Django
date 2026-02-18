module.exports = {
  "title": "Digit Greater Than 5",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Count how many digits in a number are greater than 5.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a numeric string as input</li>
      <li>Use for loop to iterate through each digit</li>
      <li>Count digits greater than 5</li>
      <li>Print the total count</li>
    </ul>
    <p><b>Digit Filtering Logic:</b></p>
    <ul>
      <li>Digits greater than 5: 6, 7, 8, 9</li>
      <li>Check if digit > 5</li>
    </ul>
    <p>This problem teaches digit filtering and conditional counting.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 647352
Output: 3</pre>
    <p><b>Explanation:</b> Digits > 5: 6,7,6 (3 digits)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 12345
Output: 0</pre>
    <p><b>Explanation:</b> No digits greater than 5</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a numeric string (digits only)</li>
      <li>String length will be between 1 and 100</li>
      <li>Use for loop to iterate through digits</li>
      <li>Count digits strictly greater than 5</li>
      <li>Print only the count as integer</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2", "stdinput": "647352" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "12345" },
    { "id": 3, "input": [], "expected": "4", "stdinput": "6789" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "5" },
    { "id": 6, "input": [], "expected": "3", "stdinput": "768" },
    { "id": 7, "input": [], "expected": "5", "stdinput": "67896" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "0" }
  ],

  "templates": {
    "python": "num = input()\ncount = 0\nfor ch in num:\n    if int(ch) > 5:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        int count = 0;\n        for (int i = 0; i < num.length(); i++) {\n            int digit = num.charAt(i) - '0';\n            if (digit > 5) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        const digit = parseInt(input[i]);\n        if (digit > 5) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    int count = 0;\n    for (char ch : num) {\n        int digit = ch - '0';\n        if (digit > 5) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = input()\ncount = 0\nfor ch in num:\n    if int(ch) > 5:\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        int count = 0;\n        for (int i = 0; i < num.length(); i++) {\n            int digit = num.charAt(i) - '0';\n            if (digit > 5) {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        const digit = parseInt(input[i]);\n        if (digit > 5) {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    int count = 0;\n    for (char ch : num) {\n        int digit = ch - '0';\n        if (digit > 5) {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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