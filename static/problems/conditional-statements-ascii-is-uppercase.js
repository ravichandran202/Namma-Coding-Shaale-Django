module.exports = {
  "title": "Uppercase Letter Detector",
  "difficulty": "easy",
  "acceptance": "99.7%",

  "description": `
    <p>Write a program that takes a character as input and checks if it is an uppercase letter (A-Z) using ASCII values.</p>
    <p><b>What are ASCII values for uppercase letters?</b></p>
    <p>In the ASCII system, uppercase letters A-Z are represented by numbers 65 to 90:</p>
    <ul>
      <li>'A' = 65</li>
      <li>'B' = 66</li>
      <li>...</li>
      <li>'Z' = 90</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Print True if it's uppercase, False otherwise</li>
    </ul>
    <p>This problem teaches about ASCII ranges and character classification using numerical values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: G
Output: True</pre>
    <p><b>Explanation:</b> 'G' has ASCII value 71, which is between 65 and 90.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: g
Output: False</pre>
    <p><b>Explanation:</b> 'g' has ASCII value 103, which is NOT between 65 and 90.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 5
Output: False</pre>
    <p><b>Explanation:</b> '5' has ASCII value 53, which is NOT between 65 and 90.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
      <li>Output should be exactly "True" or "False" (Python boolean)</li>
      <li>Lowercase letters, digits, and symbols should return False</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "G" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "g" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "5" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "Z" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "A" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "a" },
  ],

  "templates": {
    "python": "char = input()\nascii_val = ord(char)\nprint(65 <= ascii_val <= 90)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= 65 && ascii_val <= 90);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const ascii_val = char.charCodeAt(0);\n    console.log(ascii_val >= 65 && ascii_val <= 90);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= 65 && ascii_val <= 90) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
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