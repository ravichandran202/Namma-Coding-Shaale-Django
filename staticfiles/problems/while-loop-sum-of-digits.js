module.exports = {
  "title": "Digit Sum",
  "difficulty": "easy",
  "acceptance": "91%",

  "description": `
    <p>Calculate the sum of all digits in a given number using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a positive integer as input</li>
      <li>Extract each digit using modulo and division operations</li>
      <li>Sum all digits using a while loop</li>
      <li>Print the total sum</li>
    </ul>
    <p><b>Example Process:</b></p>
    <ul>
      <li>For input 123: 1 + 2 + 3 = 6</li>
      <li>For input 987: 9 + 8 + 7 = 24</li>
      <li>For input 100: 1 + 0 + 0 = 1</li>
    </ul>
    <p>This problem teaches digit extraction and while loop iteration.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 123
Output: 6</pre>
    <p><b>Explanation:</b> 1 + 2 + 3 = 6</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 987
Output: 24</pre>
    <p><b>Explanation:</b> 9 + 8 + 7 = 24</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "6", "stdinput": "123" },
    { "id": 2, "input": [], "expected": "24", "stdinput": "987" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "100" },
    { "id": 4, "input": [], "expected": "0", "stdinput": "0" },
    { "id": 5, "input": [], "expected": "45", "stdinput": "123456789" },
  ],

  "templates": {
    "python": "n = int(input())\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        while (n > 0) {\n            total += n % 10;\n            n /= 10;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let total = 0;\n    while (n > 0) {\n        total += n % 10;\n        n = Math.floor(n / 10);\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int total = 0;\n    while (n > 0) {\n        total += n % 10;\n        n /= 10;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ntotal = 0\nwhile n > 0:\n    total += n % 10\n    n //= 10\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int total = 0;\n        while (n > 0) {\n            total += n % 10;\n            n /= 10;\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let total = 0;\n    while (n > 0) {\n        total += n % 10;\n        n = Math.floor(n / 10);\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int total = 0;\n    while (n > 0) {\n        total += n % 10;\n        n /= 10;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}"
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