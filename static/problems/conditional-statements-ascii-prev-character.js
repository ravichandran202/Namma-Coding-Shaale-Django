module.exports = {
  "title": "Character Predecessor",
  "difficulty": "easy",
  "acceptance": "99.2%",

  "description": `
    <p>Write a program that takes a character as input and prints the previous character in the ASCII sequence.</p>
    <p><b>What is the ASCII sequence?</b></p>
    <p>The ASCII sequence is the order in which characters are arranged by their numeric codes. Each character has a predecessor - the character that comes immediately before it:</p>
    <ul>
      <li>'B' → 'A'</li>
      <li>'C' → 'B'</li>
      <li>'2' → '1'</li>
      <li>'A' → '@'</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Print its previous character</li>
    </ul>
    <p>This problem teaches about ASCII sequencing and basic character arithmetic in reverse.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Z
Output: Y</pre>
    <p><b>Explanation:</b> 'Z' (90) → 89 → 'Y'</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: b
Output: a</pre>
    <p><b>Explanation:</b> 'b' (98) → = 97 → 'a'</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>Output should be exactly one character</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Y", "stdinput": "Z" },
    { "id": 2, "input": [], "expected": "a", "stdinput": "b" },
    { "id": 3, "input": [], "expected": "5", "stdinput": "6" },
    { "id": 4, "input": [], "expected": "@", "stdinput": "A" },
    { "id": 5, "input": [], "expected": "Y", "stdinput": "Z" },
  ],

  "templates": {
    "python": "char = input()\nprev_char = chr(ord(char) - 1)\nprint(prev_char)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        char prev_char = (char)(character - 1);\n        System.out.println(prev_char);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const prev_char = String.fromCharCode(char.charCodeAt(0) - 1);\n    console.log(prev_char);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    char prev_char = ch - 1;\n    std::cout << prev_char << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "char = input()\nprev_char = chr(ord(char) - 1)\nprint(prev_char)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        char prev_char = (char)(character - 1);\n        System.out.println(prev_char);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const prev_char = String.fromCharCode(char.charCodeAt(0) - 1);\n    console.log(prev_char);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    char prev_char = ch - 1;\n    std::cout << prev_char << std::endl;\n    return 0;\n}"
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