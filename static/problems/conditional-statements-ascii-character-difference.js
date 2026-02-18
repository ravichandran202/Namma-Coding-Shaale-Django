module.exports = {
  "title": "Character Calculator",
  "difficulty": "Easy",
  "acceptance": "99.4%",

  "description": `
    <p>Write a program that takes two characters as input and calculates the difference between their ASCII values.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two characters as input</li>
      <li>Calculate the difference</li>
      <li>Print the difference as an integer</li>
    </ul>
    <p>This problem teaches about ASCII value differences and basic arithmetic operations with character codes.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A
a
Output: 32</pre>
    <p><b>Explanation:</b> 'A' = 65, 'a' = 97  = 32</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: a
A
Output: -32</pre>
    <p><b>Explanation:</b> 'a' = 97, 'A' = 65  = -32</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly two characters</li>
      <li>Each character can be any printable ASCII character</li>
      <li>Output should be an integer (can be positive, negative, or zero)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "32", "stdinput": "A\na" },
    { "id": 2, "input": [], "expected": "-32", "stdinput": "a\nA" },
    { "id": 3, "input": [], "expected": "9", "stdinput": "0\n9" },
    { "id": 4, "input": [], "expected": "31", "stdinput": "!\n@" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "A\nA" },
  ],

  "templates": {
    "python": "char1 = input()\nchar2 = input()\ndifference = ord(char2) - ord(char1)\nprint(difference)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char char1 = scanner.next().charAt(0);\n        char char2 = scanner.next().charAt(0);\n        int difference = (int) char2 - (int) char1;\n        System.out.println(difference);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 2) {\n        const char1 = input[0];\n        const char2 = input[1];\n        const difference = char2.charCodeAt(0) - char1.charCodeAt(0);\n        console.log(difference);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char char1, char2;\n    std::cin >> char1 >> char2;\n    int difference = (int)char2 - (int)char1;\n    std::cout << difference << std::endl;\n    return 0;\n}"
  },


  "solutions": {
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