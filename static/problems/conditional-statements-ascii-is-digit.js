module.exports = {
  "title": "Digit Detector",
  "difficulty": "Easy",
  "acceptance": "99.5%",

  "description": `
    <p>Write a program that takes a character as input and checks if it is a digit (0-9) using ASCII values.</p>
    <p><b>What are ASCII values for digits?</b></p>
    <p>In the ASCII system, digits 0-9 are represented by numbers 48 to 57:</p>
    <ul>
      <li>'0' = 48</li>
      <li>'1' = 49</li>
      <li>...</li>
      <li>'9' = 57</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a single character as input</li>
      <li>Convert the character to its ASCII value</li>
      <li>Check if the ASCII value is between 48 and 57 (inclusive)</li>
      <li>Print True if it's a digit, False otherwise</li>
    </ul>
    <p>This problem teaches about ASCII ranges and character classification for numeric digits.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 7
Output: True</pre>
    <p><b>Explanation:</b> '7' has ASCII value 55, which is between 48 and 57.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: a
Output: False</pre>
    <p><b>Explanation:</b> 'a' has ASCII value 97, which is NOT between 48 and 57.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be exactly one character</li>
      <li>The character can be any printable ASCII character</li>
      <li>Only characters 0-9 should return True</li>
      <li>Letters and symbols should return False</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "7" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "a" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "Z" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "9" },
  ],

  "templates": {
    "python": "char = input()\nascii_val = ord(char)\nprint(48 <= ascii_val <= 57)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= 48 && ascii_val <= 57);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const ascii_val = char.charCodeAt(0);\n    console.log(ascii_val >= 48 && ascii_val <= 57);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= 48 && ascii_val <= 57) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "char = input()\nascii_val = ord(char)\nprint(48 <= ascii_val <= 57)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        char character = scanner.next().charAt(0);\n        int ascii_val = (int) character;\n        System.out.println(ascii_val >= 48 && ascii_val <= 57);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (char) => {\n    const ascii_val = char.charCodeAt(0);\n    console.log(ascii_val >= 48 && ascii_val <= 57);\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    char ch;\n    std::cin >> ch;\n    int ascii_val = (int)ch;\n    std::cout << ((ascii_val >= 48 && ascii_val <= 57) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}"
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