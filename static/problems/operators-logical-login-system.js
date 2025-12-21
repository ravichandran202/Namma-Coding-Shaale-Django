module.exports =  {
  "title": "User Authentication",
  "difficulty": "easy",
  "acceptance": "99.6%",

  "description": `
    <p>Check if login credentials are correct. The username must be "admin" AND password must be "1234".</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read username as input</li>
      <li>Read password as input</li>
      <li>Check if username is exactly "admin"</li>
      <li>Check if password is exactly "1234"</li>
      <li>If both credentials match, print True</li>
      <li>Otherwise, print False</li>
    </ul>
    <p>This problem teaches string comparison and logical AND operations for authentication systems.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
admin
1234
Output: True</pre>
    <p><b>Explanation:</b> Both username ("admin") and password ("1234") are correct.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
admin
wrong
Output: False</pre>
    <p><b>Explanation:</b> Username is correct but password is incorrect.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
user
1234
Output: False</pre>
    <p><b>Explanation:</b> Password is correct but username is incorrect.</p>
  `,

  "conditions": `
    <ul>
      <li>Username and password will be strings</li>
      <li>Correct username is "admin" and password is "1234"</li>
      <li>Output must be exactly True or False (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "admin\n1234" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "admin\nwrong" },
    { "id": 3, "input": [], "expected": "False", "stdinput": "user\n1234" },
  ],

  "templates": {
    "python": `username = input()\npassword = input()\nlogin_success = username == "admin" and password == "1234"\nprint(login_success)`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String username = scanner.nextLine();\n        String password = scanner.nextLine();\n        boolean login_success = username.equals("admin") && password.equals("1234");\n        System.out.println(login_success);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (username) => {\n    inputs.push(username);\n    readline.question('', (password) => {\n        inputs.push(password);\n        const login_success = inputs[0] === "admin" && inputs[1] === "1234";\n        console.log(login_success);\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string username, password;\n    std::getline(std::cin, username);\n    std::getline(std::cin, password);\n    bool login_success = (username == "admin" && password == "1234");\n    std::cout << std::boolalpha << login_success << std::endl;\n    return 0;\n}`
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