module.exports = {
  "title": "Odd Digit Sum",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Find the sum of all odd digits in a number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a numeric string as input</li>
      <li>Add to total if digit is odd</li>
      <li>Print the sum of odd digits</li>
    </ul>
    <p><b>Odd Digit Detection:</b></p>
    <ul>
      <li>Odd digits: 1, 3, 5, 7, 9</li>
      <li>Add only odd digits to total sum</li>
    </ul>
    <p>This problem teaches digit filtering and conditional summation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 123456
Output: 9</pre>
    <p><b>Explanation:</b> Odd digits: 1, 3, 5 → 1+3+5=9</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2468
Output: 0</pre>
    <p><b>Explanation:</b> No odd digits</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "9", "stdinput": "123456" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "2468" },
    { "id": 3, "input": [], "expected": "25", "stdinput": "13579" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "0" },
  ],

  "templates": {
    "python": "num = input()\ntotal = 0\nfor ch in num:\n    d = int(ch)\n    if d % 2 != 0:\n        total += d\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        int total = 0;\n        for (int i = 0; i < num.length(); i++) {\n            int d = num.charAt(i) - '0';\n            if (d % 2 != 0) {\n                total += d;\n            }\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let total = 0;\n    for (let i = 0; i < input.length; i++) {\n        const d = parseInt(input[i]);\n        if (d % 2 !== 0) {\n            total += d;\n        }\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    int total = 0;\n    for (char ch : num) {\n        int d = ch - '0';\n        if (d % 2 != 0) {\n            total += d;\n        }\n    }\n    cout << total << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = input()\ntotal = 0\nfor ch in num:\n    d = int(ch)\n    if d % 2 != 0:\n        total += d\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        int total = 0;\n        for (int i = 0; i < num.length(); i++) {\n            int d = num.charAt(i) - '0';\n            if (d % 2 != 0) {\n                total += d;\n            }\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let total = 0;\n    for (let i = 0; i < input.length; i++) {\n        const d = parseInt(input[i]);\n        if (d % 2 !== 0) {\n            total += d;\n        }\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    int total = 0;\n    for (char ch : num) {\n        int d = ch - '0';\n        if (d % 2 != 0) {\n            total += d;\n        }\n    }\n    cout << total << endl;\n    return 0;\n}"
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