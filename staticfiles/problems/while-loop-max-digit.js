module.exports = {
  "title": "Max Digit",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Find the largest digit in a given number.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a positive integer as input</li>
      <li>Extract each digit using modulo and division</li>
      <li>Track the largest digit encountered</li>
      <li>Print the maximum digit</li>
    </ul>
    <p><b>Process:</b></p>
    <ul>
      <li>For 4732: digits are 4,7,3,2 → largest is 7</li>
      <li>For 999: digits are 9,9,9 → largest is 9</li>
      <li>For 100: digits are 1,0,0 → largest is 1</li>
    </ul>
    <p>This problem teaches digit extraction and comparison logic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4732
Output: 7</pre>
    <p><b>Explanation:</b> Among 4,7,3,2 the largest is 7</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 999
Output: 9</pre>
    <p><b>Explanation:</b> All digits are 9, so largest is 9</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 100
Output: 1</pre>
    <p><b>Explanation:</b> Among 1,0,0 the largest is 1</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 58291
Output: 9</pre>
    <p><b>Explanation:</b> Among 5,8,2,9,1 the largest is 9</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "7", "stdinput": "4732" },
    { "id": 2, "input": [], "expected": "9", "stdinput": "999" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "100" },
    { "id": 4, "input": [], "expected": "9", "stdinput": "58291" },
    { "id": 5, "input": [], "expected": "6", "stdinput": "612345" },
  ],

  "templates": {
    "python": "n = int(input())\nlargest = 0\nwhile n > 0:\n    digit = n % 10\n    if digit > largest:\n        largest = digit\n    n //= 10\nprint(largest)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int largest = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > largest) {\n                largest = digit;\n            }\n            n /= 10;\n        }\n        System.out.println(largest);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let largest = 0;\n    while (n > 0) {\n        const digit = n % 10;\n        if (digit > largest) {\n            largest = digit;\n        }\n        n = Math.floor(n / 10);\n    }\n    console.log(largest);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int largest = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit > largest) {\n            largest = digit;\n        }\n        n /= 10;\n    }\n    std::cout << largest << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nlargest = 0\nwhile n > 0:\n    digit = n % 10\n    if digit > largest:\n        largest = digit\n    n //= 10\nprint(largest)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int largest = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            if (digit > largest) {\n                largest = digit;\n            }\n            n /= 10;\n        }\n        System.out.println(largest);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let n = parseInt(input);\n    let largest = 0;\n    while (n > 0) {\n        const digit = n % 10;\n        if (digit > largest) {\n            largest = digit;\n        }\n        n = Math.floor(n / 10);\n    }\n    console.log(largest);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int n;\n    std::cin >> n;\n    int largest = 0;\n    while (n > 0) {\n        int digit = n % 10;\n        if (digit > largest) {\n            largest = digit;\n        }\n        n /= 10;\n    }\n    std::cout << largest << std::endl;\n    return 0;\n}"
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