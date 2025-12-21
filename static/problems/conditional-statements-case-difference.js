module.exports = {
  "title": "Case Difference Calculator",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Write a program that takes two characters as input and calculates the difference between their ASCII values.</p>
    <p><b>What is the ASCII difference between uppercase and lowercase?</b></p>
    <p>In the ASCII system, there's a consistent 32-value difference between uppercase and lowercase letters:</p>
    <ul>
      <li>'A' = 65, 'a' = 97 → Difference: 32</li>
      <li>'B' = 66, 'b' = 98 → Difference: 32</li>
      <li>'Z' = 90, 'z' = 122 → Difference: 32</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two characters as input</li>
      <li>Print their difference as an integer</li>
    </ul>
    <p>This problem teaches about ASCII value differences and basic arithmetic operations with character codes.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A
a
Output: 32</pre>
    <p><b>Explanation:</b> 'A' = 65, 'a' = 97 → 97 - 65 = 32</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: a
A
Output: -32</pre>
    <p><b>Explanation:</b> 'a' = 97, 'A' = 65 → 65 - 97 = -32</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
9
Output: 9</pre>
    <p><b>Explanation:</b> '0' = 48, '9' = 57 → 57 - 48 = 9</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly two characters</li>
      <li>Each character can be any printable ASCII character</li>
      <li>Use the ord() function to get ASCII values</li>
      <li>Output should be an integer (can be positive, negative, or zero)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "32", "stdinput": "A\na" },
    { "id": 2, "input": [], "expected": "-32", "stdinput": "a\nA" },
    { "id": 3, "input": [], "expected": "9", "stdinput": "0\n9" },
    { "id": 4, "input": [], "expected": "31", "stdinput": "!\n@" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "A\nA" },
    { "id": 6, "input": [], "expected": "25", "stdinput": "A\nZ" },
  ],

  "templates": {
    "python": "char1 = input()\nchar2 = input()\ndifference = ord(char2) - ord(char1)\nprint(difference)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char char1 = scanner.next().charAt(0);\n        char char2 = scanner.next().charAt(0);\n        int difference = (int) char2 - (int) char1;\n        System.out.println(difference);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const char1 = input[0];\n        const char2 = input[1];\n        const difference = char2.charCodeAt(0) - char1.charCodeAt(0);\n        console.log(difference);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char char1, char2;\n    std::cin >> char1 >> char2;\n    int difference = (int)char2 - (int)char1;\n    std::cout << difference << std::endl;\n    return 0;\n}"
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