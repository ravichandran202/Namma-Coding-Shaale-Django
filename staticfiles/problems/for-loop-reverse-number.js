module.exports = {
  "title": "Reverse Number",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Reverse the digits of a number using a loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Print the reversed number</li>
    </ul>

    <p>This problem teaches digit extraction and number manipulation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1234
Output: 4321</pre>
    <p><b>Explanation:</b> Digits reversed: 1,2,3,4 → 4,3,2,1</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 100
Output: 1</pre>
    <p><b>Explanation:</b> 100 reversed is 001 which is 1</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4321", "stdinput": "1234" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "100" },
    { "id": 3, "input": [], "expected": "7", "stdinput": "7" },
    { "id": 4, "input": [], "expected": "98765", "stdinput": "56789" },
    { "id": 5, "input": [], "expected": "21", "stdinput": "12" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "0" },
  ],

  "templates": {
    "python": "num = int(input())\nrev = 0\nwhile num > 0:\n    rem = num % 10\n    rev = rev * 10 + rem\n    num //= 10\nprint(rev)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        int rev = 0;\n        while (num > 0) {\n            int rem = num % 10;\n            rev = rev * 10 + rem;\n            num /= 10;\n        }\n        System.out.println(rev);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let num = parseInt(input);\n    let rev = 0;\n    while (num > 0) {\n        let rem = num % 10;\n        rev = rev * 10 + rem;\n        num = Math.floor(num / 10);\n    }\n    console.log(rev);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    int rev = 0;\n    while (num > 0) {\n        int rem = num % 10;\n        rev = rev * 10 + rem;\n        num /= 10;\n    }\n    cout << rev << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = int(input())\nrev = 0\nwhile num > 0:\n    rem = num % 10\n    rev = rev * 10 + rem\n    num //= 10\nprint(rev)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        int rev = 0;\n        while (num > 0) {\n            int rem = num % 10;\n            rev = rev * 10 + rem;\n            num /= 10;\n        }\n        System.out.println(rev);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let num = parseInt(input);\n    let rev = 0;\n    while (num > 0) {\n        let rem = num % 10;\n        rev = rev * 10 + rem;\n        num = Math.floor(num / 10);\n    }\n    console.log(rev);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    int rev = 0;\n    while (num > 0) {\n        int rem = num % 10;\n        rev = rev * 10 + rem;\n        num /= 10;\n    }\n    cout << rev << endl;\n    return 0;\n}"
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