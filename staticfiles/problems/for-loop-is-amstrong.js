 module.exports = {
  "title": "Armstrong Checker",
  "difficulty": "hard",
  "acceptance": "80%",

  "description": `
    <p>Check whether the number is an Armstrong number (sum of cubes of digits equals the number).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Print True if Armstrong number, False otherwise</li>
    </ul>
    <p><b>Armstrong Number Concept:</b></p>
    <ul>
      <li>Armstrong number: sum of cubes of digits equals the number</li>
      <li>Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153</li>
      <li>Extract digits using modulo and division</li>
      <li>Calculate cube of each digit and sum</li>
    </ul>
    <p>This problem teaches digit manipulation and number properties.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 153
Output: True</pre>
    <p><b>Explanation:</b> 1³ + 5³ + 3³ = 1 + 125 + 27 = 153</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 123
Output: False</pre>
    <p><b>Explanation:</b> 1³ + 2³ + 3³ = 1 + 8 + 27 = 36 ≠ 123</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 370
Output: True</pre>
    <p><b>Explanation:</b> 3³ + 7³ + 0³ = 27 + 343 + 0 = 370</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "153" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "123" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "370" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "371" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "407" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "100" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "1" }
  ],

  "templates": {
    "python": "num = int(input())\ntemp = num\ntotal = 0\nwhile temp > 0:\n    d = temp % 10\n    total += d * d * d\n    temp //= 10\nprint(num == total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        int temp = num;\n        int total = 0;\n        while (temp > 0) {\n            int d = temp % 10;\n            total += d * d * d;\n            temp /= 10;\n        }\n        System.out.println(num == total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    let temp = num;\n    let total = 0;\n    while (temp > 0) {\n        const d = temp % 10;\n        total += d * d * d;\n        temp = Math.floor(temp / 10);\n    }\n    console.log(num === total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    int temp = num;\n    int total = 0;\n    while (temp > 0) {\n        int d = temp % 10;\n        total += d * d * d;\n        temp /= 10;\n    }\n    cout << (num == total ? \"True\" : \"False\") << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = int(input())\ntemp = num\ntotal = 0\nwhile temp > 0:\n    d = temp % 10\n    total += d * d * d\n    temp //= 10\nprint(num == total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        int temp = num;\n        int total = 0;\n        while (temp > 0) {\n            int d = temp % 10;\n            total += d * d * d;\n            temp /= 10;\n        }\n        System.out.println(num == total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    let temp = num;\n    let total = 0;\n    while (temp > 0) {\n        const d = temp % 10;\n        total += d * d * d;\n        temp = Math.floor(temp / 10);\n    }\n    console.log(num === total);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    int temp = num;\n    int total = 0;\n    while (temp > 0) {\n        int d = temp % 10;\n        total += d * d * d;\n        temp /= 10;\n    }\n    cout << (num == total ? \"True\" : \"False\") << endl;\n    return 0;\n}"
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