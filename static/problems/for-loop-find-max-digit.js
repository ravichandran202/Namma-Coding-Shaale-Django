module.exports = {
  "title": "Max Digit Finder",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Find the largest digit in a number using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a numeric string as input</li>
      <li>Use for loop to iterate through each digit character</li>
      <li>Track the maximum digit encountered</li>
      <li>Print the largest digit</li>
    </ul>
    <p>This problem teaches character comparison and maximum tracking.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 49215
Output: 9</pre>
    <p><b>Explanation:</b> Among digits 4,9,2,1,5 the largest is 9</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 123456789
Output: 9</pre>
    <p><b>Explanation:</b> Among digits 1-9 the largest is 9</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 000
Output: 0</pre>
    <p><b>Explanation:</b> All digits are 0, so largest is 0</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a numeric string (digits only)</li>
      <li>Use for loop to iterate through digits</li>
      <li>Find and print the maximum digit</li>
      <li>Output should be a single digit character</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "9", "stdinput": "49215" },
    { "id": 2, "input": [], "expected": "9", "stdinput": "123456789" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "000" },
    { "id": 4, "input": [], "expected": "7", "stdinput": "70123" },
    { "id": 5, "input": [], "expected": "8", "stdinput": "888" },
    { "id": 6, "input": [], "expected": "5", "stdinput": "54321" },
    { "id": 7, "input": [], "expected": "6", "stdinput": "612345" }
  ],

  "templates": {
    "python": "num = input()\nmax_digit = '0'\nfor ch in num:\n    if ch > max_digit:\n        max_digit = ch\nprint(max_digit)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        char maxDigit = '0';\n        for (int i = 0; i < num.length(); i++) {\n            if (num.charAt(i) > maxDigit) {\n                maxDigit = num.charAt(i);\n            }\n        }\n        System.out.println(maxDigit);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let maxDigit = '0';\n    for (let i = 0; i < input.length; i++) {\n        if (input[i] > maxDigit) {\n            maxDigit = input[i];\n        }\n    }\n    console.log(maxDigit);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    char maxDigit = '0';\n    for (char ch : num) {\n        if (ch > maxDigit) {\n            maxDigit = ch;\n        }\n    }\n    cout << maxDigit << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = input()\nmax_digit = '0'\nfor ch in num:\n    if ch > max_digit:\n        max_digit = ch\nprint(max_digit)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String num = scanner.next();\n        char maxDigit = '0';\n        for (int i = 0; i < num.length(); i++) {\n            if (num.charAt(i) > maxDigit) {\n                maxDigit = num.charAt(i);\n            }\n        }\n        System.out.println(maxDigit);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let maxDigit = '0';\n    for (let i = 0; i < input.length; i++) {\n        if (input[i] > maxDigit) {\n            maxDigit = input[i];\n        }\n    }\n    console.log(maxDigit);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string num;\n    cin >> num;\n    char maxDigit = '0';\n    for (char ch : num) {\n        if (ch > maxDigit) {\n            maxDigit = ch;\n        }\n    }\n    cout << maxDigit << endl;\n    return 0;\n}"
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