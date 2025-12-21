module.exports = {
  "title": "Character Successor",
  "difficulty": "easy",
  "acceptance": "99.3%",

  "description": `
    <p>Write a program that takes a character as input and prints the next character in the ASCII sequence.</p>
    <p><b>What is the ASCII sequence?</b></p>
    <p>The ASCII sequence is the order in which characters are arranged by their numeric codes. Each character has a successor - the character that comes immediately after it:</p>
    <ul>
      <li>'A' → 'B'</li>
      <li>'B' → 'C'</li>
      <li>'1' → '2'</li>
      <li>'!' → '"'</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Print the next character</li>
    </ul>
    <p>This problem teaches about ASCII sequencing and basic character arithmetic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: B
Output: C</pre>
    <p><b>Explanation:</b> 'B' → 'C'</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: a
Output: b</pre>
    <p><b>Explanation:</b> 'a' → 'b'</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>Output should be exactly one character</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "C", "stdinput": "B" },
    { "id": 2, "input": [], "expected": "b", "stdinput": "a" },
    { "id": 3, "input": [], "expected": "6", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "@" },
    { "id": 5, "input": [], "expected": "Z", "stdinput": "Y" },
    { "id": 6, "input": [], "expected": "z", "stdinput": "y" },
  ],

  "templates": {
    "python": "char = input()\nnext_char = chr(ord(char) + 1)\nprint(next_char)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        char next_char = (char)(character + 1);\n        System.out.println(next_char);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const next_char = String.fromCharCode(char.charCodeAt(0) + 1);\n    console.log(next_char);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    char next_char = ch + 1;\n    std::cout << next_char << std::endl;\n    return 0;\n}"
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