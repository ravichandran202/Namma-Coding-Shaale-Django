module.exports = {
  "title": "Password Strength Validator",
  "difficulty": "Easy",
  "acceptance": "99.1%",

  "description": `
    <p>Determine the strength of a password based on its length.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a password string as input</li>
      <li>Check the length of the password</li>
      <li>Print the corresponding strength based on the length condition</li>
    </ul>
    <p><b>Strength Conditions:</b></p>
    <ul>
      <li>Length ≥ 8 characters → <code>"Strong"</code></li>
      <li>Length < 8 characters → <code>"Weak"</code></li>
    </ul>
    <p>This problem teaches string length checking and basic conditional logic for security validation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: hello123
Output: Strong</pre>
    <p><b>Explanation:</b> "hello123" has 8 characters, so it meets the minimum length requirement for "Strong".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: pass
Output: Weak</pre>
    <p><b>Explanation:</b> "pass" has only 4 characters, which is less than 8, so it's classified as "Weak".</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a string containing alphanumeric characters</li>
      <li>String length will be between 1 and 100 characters</li>
      <li>Check length using string length function</li>
      <li>Output must be exactly one of: "Strong" or "Weak" (case-sensitive)</li>
      <li>No whitespace trimming required - count all characters including spaces</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Strong", "stdinput": "hello123" },
    { "id": 2, "input": [], "expected": "Weak", "stdinput": "pass" },
    { "id": 3, "input": [], "expected": "Strong", "stdinput": "secure123" },
    { "id": 4, "input": [], "expected": "Weak", "stdinput": "123" },
    { "id": 5, "input": [], "expected": "Weak", "stdinput": "abc" },
    { "id": 6, "input": [], "expected": "Strong", "stdinput": "verylongpassword123" },
  ],

  "templates": {
    "python": "password = input()\n\n# TODO: Check the password length and print \"Strong\" or \"Weak\"\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String password = scanner.nextLine();\n        \n        // TODO: Check the password length and print \"Strong\" or \"Weak\"\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (password) => {\n    \n    // TODO: Check the password length and print \"Strong\" or \"Weak\"\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string password;\n    std::getline(std::cin, password);\n    \n    // TODO: Check the password length and print \"Strong\" or \"Weak\"\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "password = input()\nif len(password) >= 8:\n    print(\"Strong\")\nelse:\n    print(\"Weak\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String password = scanner.nextLine();\n        if (password.length() >= 8) {\n            System.out.println(\"Strong\");\n        } else {\n            System.out.println(\"Weak\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (password) => {\n    if (password.length >= 8) {\n        console.log(\"Strong\");\n    } else {\n        console.log(\"Weak\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string password;\n    std::getline(std::cin, password);\n    if (password.length() >= 8) {\n        std::cout << \"Strong\" << std::endl;\n    } else {\n        std::cout << \"Weak\" << std::endl;\n    }\n    return 0;\n}"
  },

  "wrapCode": function (lang, userCode, input) {
    switch (lang) {
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