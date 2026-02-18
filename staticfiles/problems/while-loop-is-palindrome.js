module.exports = {
  "title": "Palindrome Checker",
  "difficulty": "hard",
  "acceptance": "85%",

  "description": `
    <p>Check if a number reads the same forwards and backwards.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a positive integer as input</li>
      <li>Reverse the number using while loop</li>
      <li>Compare original number with reversed number</li>
      <li>Print "Palindrome" if they match, otherwise "Not Palindrome"</li>
    </ul>
    <p><b>Palindrome Examples:</b></p>
    <ul>
      <li>121 → reads same forwards and backwards</li>
      <li>1331 → reads same forwards and backwards</li>
      <li>12321 → reads same forwards and backwards</li>
    </ul>
    <p>This problem teaches number reversal and palindrome logic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 121
Output: Palindrome</pre>
    <p><b>Explanation:</b> 121 reads same forwards and backwards</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 123
Output: Not Palindrome</pre>
    <p><b>Explanation:</b> 123 backwards is 321, which is different</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "Palindrome", "stdinput": "121" },
    { "id": 2, "input": [], "expected": "Not Palindrome", "stdinput": "123" },
    { "id": 3, "input": [], "expected": "Palindrome", "stdinput": "1331" },
    { "id": 4, "input": [], "expected": "Palindrome", "stdinput": "12321" },
    { "id": 5, "input": [], "expected": "Palindrome", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "Not Palindrome", "stdinput": "1234" },
    { "id": 7, "input": [], "expected": "Palindrome", "stdinput": "1221" },
    { "id": 8, "input": [], "expected": "Not Palindrome", "stdinput": "12345" },
    { "id": 9, "input": [], "expected": "Palindrome", "stdinput": "99999" },
    { "id": 10, "input": [], "expected": "Not Palindrome", "stdinput": "123456" }
  ],

  "templates": {
    "python": "n = int(input())\ntemp = n\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(\"Palindrome\" if temp == rev else \"Not Palindrome\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int temp = n;\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + n % 10;\n            n /= 10;\n        }\n        System.out.println(temp == rev ? \"Palindrome\" : \"Not Palindrome\");\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let temp = n;\n    let rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n = Math.floor(n / 10);\n    }\n    console.log(temp === rev ? \"Palindrome\" : \"Not Palindrome\");\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int temp = n;\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    if (temp == rev) {\n        std::cout << \"Palindrome\" << std::endl;\n    } else {\n        std::cout << \"Not Palindrome\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ntemp = n\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(\"Palindrome\" if temp == rev else \"Not Palindrome\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int temp = n;\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + n % 10;\n            n /= 10;\n        }\n        System.out.println(temp == rev ? \"Palindrome\" : \"Not Palindrome\");\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let temp = n;\n    let rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n = Math.floor(n / 10);\n    }\n    console.log(temp === rev ? \"Palindrome\" : \"Not Palindrome\");\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int temp = n;\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    if (temp == rev) {\n        std::cout << \"Palindrome\" << std::endl;\n    } else {\n        std::cout << \"Not Palindrome\" << std::endl;\n    }\n    return 0;\n}"
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