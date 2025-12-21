module.exports =  {
  "title": "Simple Password Verification",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Take a password as input and check if it matches the correct password.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read password as string input</li>
      <li>Check if password matches "hello123"</li>
      <li>If password matches, print True</li>
      <li>If password doesn't match, print False</li>
    </ul>
    <p>This problem teaches string comparison and basic authentication logic in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: hello123
Output: True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: password
Output: False</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: Hello123
Output: False</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a string</li>
      <li>Password comparison is case-sensitive</li>
      <li>Correct password is "hello123"</li>
      <li>Output must be exactly True or False (boolean)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "hello123" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "password" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "Hello123" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "hello12" },
  ],

  "templates": {
    "python": `password = input()\ncorrect_password = "hello123"\nprint(password == correct_password)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String password = scanner.nextLine();\n        String correct_password = "hello123";\n        System.out.println(password.equals(correct_password));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (password) => {\n    const correct_password = "hello123";\n    console.log(password === correct_password);\n    readline.close();\n});`,
    "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string password;\n    std::getline(std::cin, password);\n    std::string correct_password = "hello123";\n    std::cout << std::boolalpha << (password == correct_password) << std::endl;\n    return 0;\n}`
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