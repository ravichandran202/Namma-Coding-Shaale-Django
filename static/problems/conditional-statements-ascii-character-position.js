module.exports = {
  "title": "Letter Position",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Write a program that takes an uppercase letter as input and finds its position in the alphabet (A=1, B=2, ..., Z=26) using ASCII values.</p>
    <p><b>How to calculate letter position?</b></p>
    <ul>
      <li>'A' (65) = 1</li>
      <li>'B' (66) = 2</li>
      <li>'C' (67) = 3</li>
      <li>...</li>
      <li>'Z' (90) = 26</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an uppercase letter as input</li>
      <li>Print the position as an integer</li>
    </ul>
    <p>This problem teaches ASCII arithmetic for calculating letter positions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: D
Output: 4</pre>
    <p><b>Explanation:</b> 'D' (68) → 4</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: A
Output: 1</pre>
    <p><b>Explanation:</b> 'A' (65) → 1</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one uppercase letter (A-Z)</li>
      <li>The input is guaranteed to be an uppercase letter</li>
      <li>No need to validate if input is uppercase</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "D" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "A" },
    { "id": 3, "input": [], "expected": "26", "stdinput": "Z" },
    { "id": 4, "input": [], "expected": "13", "stdinput": "M" },
    { "id": 5, "input": [], "expected": "5", "stdinput": "E" },
  ],

  "templates": {
    "python": "char = input()\nposition = ord(char) - 64\nprint(position)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int position = (int)character - 64;\n        System.out.println(position);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const position = char.charCodeAt(0) - 64;\n    console.log(position);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int position = (int)ch - 64;\n    std::cout << position << std::endl;\n    return 0;\n}"
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