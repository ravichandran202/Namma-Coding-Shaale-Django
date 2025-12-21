module.exports = {
  "title": "Lowercase Letter Detector",
  "difficulty": "Easy",
  "acceptance": "99.6%",

  "description": `
    <p>Write a program that takes a character as input and checks if it is a lowercase letter (a-z) using ASCII values.</p>
    <p><b>What are ASCII values for lowercase letters?</b></p>
    <p>In the ASCII system, lowercase letters a-z are represented by numbers 97 to 122:</p>
    <ul>
      <li>'a' = 97</li>
      <li>'b' = 98</li>
      <li>...</li>
      <li>'z' = 122</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Convert the character to its ASCII value</li>
      <li>Check if the ASCII value is between 97 and 122 (inclusive)</li>
      <li>Print True if it's lowercase, False otherwise</li>
    </ul>
    <p>This problem teaches about ASCII ranges and character classification for lowercase letters.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: m
Output: True</pre>
    <p><b>Explanation:</b> 'm' has ASCII value 109, which is between 97 and 122.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: M
Output: False</pre>
    <p><b>Explanation:</b> 'M' has ASCII value 77, which is NOT between 97 and 122.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 5
Output: False</pre>
    <p><b>Explanation:</b> '5' has ASCII value 53, which is NOT between 97 and 122.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
      <li>Only characters a-z should return True</li>
      <li>Uppercase letters, digits, and symbols should return False</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "m" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "M" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "z" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "A" },
  ],

  "templates": {
    "python": "char = input()\nascii_val = ord(char)\nprint(97 <= ascii_val <= 122)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= 97 && ascii_val <= 122);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const ascii_val = char.charCodeAt(0);\n    console.log(ascii_val >= 97 && ascii_val <= 122);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= 97 && ascii_val <= 122) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
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