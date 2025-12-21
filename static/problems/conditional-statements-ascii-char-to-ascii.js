module.exports = {
  "title": "Character to ASCII Converter",
  "difficulty": "easy",
  "acceptance": "99.9%",

  "description": `
    <p>Write a program that takes a single character as input and prints its ASCII value.</p>
    <p><b>What is ASCII?</b></p>
    <p>ASCII (American Standard Code for Information Interchange) is a code that represents every character (letters, numbers, symbols) as a number that computers can understand. For example:</p>
    <ul>
      <li>'A' = 65</li>
      <li>'a' = 97</li>
      <li>'0' = 48</li>
      <li>' ' (space) = 32</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Convert the character to its ASCII value</li>
      <li>Print the ASCII value</li>
    </ul>
    <p>This problem teaches about character encoding and how computers represent text as numbers.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: A
Output: 65</pre>
    <p><b>Explanation:</b> The ASCII value of uppercase 'A' is 65.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: a
Output: 97</pre>
    <p><b>Explanation:</b> The ASCII value of lowercase 'a' is 97.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
      <li>Output should be the integer ASCII value</li>
      <li>No need to handle empty input or multiple characters</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "65", "stdinput": "A" },
    { "id": 2, "input": [], "expected": "97", "stdinput": "a" },
    { "id": 3, "input": [], "expected": "53", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "33", "stdinput": "!" },
    { "id": 5, "input": [], "expected": "32", "stdinput": " " },
  ],

  "templates": {
    "python": "char = input()\nprint(ord(char))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        System.out.println((int) character);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    console.log(char.charCodeAt(0));\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    std::cout << (int)ch << std::endl;\n    return 0;\n}"
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