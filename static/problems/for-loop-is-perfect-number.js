 module.exports = {
  "title": "Perfect Number Checker",
  "difficulty": "hard",
  "acceptance": "79%",

  "description": `
    <p>Check if a number equals the sum of its proper divisors.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Print True if perfect number, False otherwise</li>
    </ul>
    <p><b>Perfect Number Concept:</b></p>
    <ul>
      <li>Perfect number: sum of proper divisors equals the number</li>
      <li>Proper divisors: divisors excluding the number itself</li>
      <li>Example: 6 = 1 + 2 + 3</li>
      <li>Check divisibility for numbers from 1 to n-1</li>
    </ul>
    <p>This problem teaches divisor calculation and number properties.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: True</pre>
    <p><b>Explanation:</b> Proper divisors: 1,2,3 → 1+2+3=6</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 28
Output: True</pre>
    <p><b>Explanation:</b> Proper divisors: 1,2,4,7,14 → 1+2+4+7+14=28</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 10
Output: False</pre>
    <p><b>Explanation:</b> Proper divisors: 1,2,5 → 1+2+5=8 ≠ 10</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "True", "stdinput": "28" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "10" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "12" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "496" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "1" },
    { "id": 7, "input": [], "expected": "False", "stdinput": "100" }
  ],

  "templates": {
    "python": "n = int(input())\ns = 0\nfor i in range(1, n):\n    if n % i == 0:\n        s += i\nprint(s == n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int s = 0;\n        for (int i = 1; i < n; i++) {\n            if (n % i == 0) {\n                s += i;\n            }\n        }\n        System.out.println(s == n);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let s = 0;\n    for (let i = 1; i < n; i++) {\n        if (n % i === 0) {\n            s += i;\n        }\n    }\n    console.log(s === n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int s = 0;\n    for (int i = 1; i < n; i++) {\n        if (n % i == 0) {\n            s += i;\n        }\n    }\n    cout << (s == n ? \"True\" : \"False\") << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ns = 0\nfor i in range(1, n):\n    if n % i == 0:\n        s += i\nprint(s == n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int s = 0;\n        for (int i = 1; i < n; i++) {\n            if (n % i == 0) {\n                s += i;\n            }\n        }\n        System.out.println(s == n);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let s = 0;\n    for (let i = 1; i < n; i++) {\n        if (n % i === 0) {\n            s += i;\n        }\n    }\n    console.log(s === n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int s = 0;\n    for (int i = 1; i < n; i++) {\n        if (n % i == 0) {\n            s += i;\n        }\n    }\n    cout << (s == n ? \"True\" : \"False\") << endl;\n    return 0;\n}"
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