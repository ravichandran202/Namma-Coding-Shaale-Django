module.exports = {
  "title": "ASCII to Character Converter",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Write a program that takes an ASCII value (integer) as input and prints the corresponding character.</p>
    <p><b>What is ASCII?</b></p>
    <p>ASCII (American Standard Code for Information Interchange) is a code that represents every character (letters, numbers, symbols) as a number that computers can understand. This is the reverse of the previous problem - here we convert numbers back to characters!</p>
    <p><b>Common ASCII Values:</b></p>
    <ul>
      <li>65 = 'A'</li>
      <li>97 = 'a'</li>
      <li>48 = '0'</li>
      <li>32 = ' ' (space)</li>
      <li>90 = 'Z'</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer ASCII value as input</li>
      <li>Convert the ASCII value to its corresponding character</li>
      <li>Print the character</li>
    </ul>
    <p>This problem teaches about character decoding and how computers convert numbers back to readable text.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 90
Output: Z</pre>
    <p><b>Explanation:</b> The ASCII value 90 corresponds to uppercase 'Z'.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 97
Output: a</pre>
    <p><b>Explanation:</b> The ASCII value 97 corresponds to lowercase 'a'.</p>
    
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer between 0 and 127 (standard ASCII range)</li>
      <li>Output should be the single character corresponding to the ASCII value</li>
      <li>Some ASCII values represent non-printable characters (like newline, tab)</li>
      <li>The input will always be a valid ASCII value</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Z", "stdinput": "90" },
    { "id": 2, "input": [], "expected": "a", "stdinput": "97" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "48" },
    { "id": 4, "input": [], "expected": "!", "stdinput": "33" },
    { "id": 5, "input": [], "expected": "%", "stdinput": "37" },
  ],

  "templates": {
    "python": "ascii_value = int(input())\nprint(chr(ascii_value))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int ascii_value = scanner.nextInt();\n        System.out.println((char) ascii_value);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (ascii_value) => {\n    console.log(String.fromCharCode(parseInt(ascii_value)));\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int ascii_value;\n    std::cin >> ascii_value;\n    std::cout << (char)ascii_value << std::endl;\n    return 0;\n}"
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