module.exports = {
  "title": "Even Digit Sum",
  "difficulty": "medium",
  "acceptance": "84%",

  "description": `
    <p>Calculate the sum of even digits in a given number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a positive integer as input</li>
      <li>Extract each digit using modulo and division</li>
      <li>Check if digit is even using modulo 2</li>
      <li>Sum only the even digits</li>
      <li>Print the total sum</li>
    </ul>
    <p><b>Process:</b></p>
    <ul>
      <li>For 2468: all digits even → 2+4+6+8=20</li>
      <li>For 1357: no even digits → sum=0</li>
      <li>For 1234: even digits 2,4 → 2+4=6</li>
    </ul>
    <p>This problem teaches digit filtering and conditional summation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 2468
Output: 20</pre>
    <p><b>Explanation:</b> 2 + 4 + 6 + 8 = 20</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 1357
Output: 0</pre>
    <p><b>Explanation:</b> No even digits, so sum is 0</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "20", "stdinput": "2468" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "1357" },
    { "id": 3, "input": [], "expected": "6", "stdinput": "1234" },
    { "id": 4, "input": [], "expected": "20", "stdinput": "8642" },
    { "id": 5, "input": [], "expected": "12", "stdinput": "246" },
  ],

  "templates": {
    "python": "n = int(input())\ntotal = 0\nwhile n > 0:\n    digit = n % 10\n    if digit % 2 == 0:\n        total += digit\n    n //= 10\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) {\n                total += digit;\n            }\n            n /= 10;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let total = 0;\n    while (n > 0) {\n        const digit = n % 10;\n        if (digit % 2 === 0) {\n            total += digit;\n        }\n        n = Math.floor(n / 10);\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int total = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 == 0) {\n            total += digit;\n        }\n        n /= 10;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ntotal = 0\nwhile n > 0:\n    digit = n % 10\n    if digit % 2 == 0:\n        total += digit\n    n //= 10\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit % 2 == 0) {\n                total += digit;\n            }\n            n /= 10;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let total = 0;\n    while (n > 0) {\n        const digit = n % 10;\n        if (digit % 2 === 0) {\n            total += digit;\n        }\n        n = Math.floor(n / 10);\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int total = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit % 2 == 0) {\n            total += digit;\n        }\n        n /= 10;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}"
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