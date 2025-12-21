module.exports = {
  "title": "Digit Counter",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `2
    <p>Write a program that takes an integer as input and counts how many digits it has using a while loop.</p>
    <p><b>How to count digits?</b></p>
    <p>We can count digits by repeatedly dividing the number by 10 until it becomes 0:</p>
    <ul>
      <li>1234 ÷ 10 = 123 (1 digit counted)</li>
      <li>123 ÷ 10 = 12 (2 digits counted)</li>
      <li>12 ÷ 10 = 1 (3 digits counted)</li>
      <li>1 ÷ 10 = 0 (4 digits counted)</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Use a while loop to repeatedly divide by 10</li>
      <li>Count how many times you can divide before reaching 0</li>
      <li>Print the total digit count</li>
    </ul>
    <p>This problem teaches while loops with integer division and counting operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1234
Output: 4</pre>
    <p><b>Explanation:</b> 1234 has 4 digits (1, 2, 3, 4)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 98765
Output: 5</pre>
    <p><b>Explanation:</b> 98765 has 5 digits (9, 8, 7, 6, 5)</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 0
Output: 1</pre>
    <p><b>Explanation:</b> 0 is considered to have 1 digit</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "1234" },
    { "id": 2, "input": [], "expected": "5", "stdinput": "98765" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 6, "input": [], "expected": "3", "stdinput": "100" },
  ],

  "templates": {
    "python": "n = int(input())\ncount = 0\nif n == 0:\n    count = 1\nelse:\n    n = abs(n)\n    while n > 0:\n        n //= 10\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int count = 0;\n        \n        if (n == 0) {\n            count = 1;\n        } else {\n            n = Math.abs(n);\n            while (n > 0) {\n                n /= 10;\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let num = parseInt(n);\n    let count = 0;\n    \n    if (num === 0) {\n        count = 1;\n    } else {\n        num = Math.abs(num);\n        while (num > 0) {\n            num = Math.floor(num / 10);\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int count = 0;\n    \n    if (n == 0) {\n        count = 1;\n    } else {\n        n = abs(n);\n        while (n > 0) {\n            n /= 10;\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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