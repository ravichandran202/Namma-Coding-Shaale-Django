module.exports = {
    "title": "Greet User",
    "difficulty": "easy",
    "acceptance": "99.8%",
  
    "description": `
      <p>Write a program that asks the user for their name using input() and then prints: Hello, &lt;name&gt;</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Use the <code>input()</code> function to read the user's name</li>
        <li>Print the greeting in the format: <code>"Hello, &lt;name&gt;"</code></li>
        <li>The program should work for any name entered by the user</li>
      </ul>
      <p>This problem teaches basic input/output operations and string concatenation in programming.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: Ravi
Output: Hello, Ravi</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: Sarah
Output: Hello, Sarah</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input: John
Output: Hello, John</pre>
    `,
  
    "conditions": `
      <ul>
        <li>The input will be a string containing only alphabetical characters</li>
        <li>The name length will be between 1 and 50 characters</li>
        <li>Output must exactly match the format <code>"Hello, &lt;name&gt;"</code></li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello, Ravi", "stdinput": "Ravi" },
      { "id": 2, "input": [], "expected": "Hello, Sarah", "stdinput": "Sarah" },
      { "id": 3, "input": [], "expected": "Hello, John", "stdinput": "John" },
      { "id": 4, "input": [], "expected": "Hello, Emily", "stdinput": "Emily" },
      { "id": 5, "input": [], "expected": "Hello, Michael", "stdinput": "Michael" }
    ],
  
    "templates": {
      "python": `name = input()\nprint("Hello, " + name + "!")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        System.out.println("Hello, " + name + "!");\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    console.log("Hello, " + name + "!");\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::getline(std::cin, name);\n    std::cout << "Hello, " << name << "!" << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `name = input()\nprint("Hello, " + name + "!")`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        System.out.println("Hello, " + name + "!");\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    console.log("Hello, " + name + "!");\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::getline(std::cin, name);\n    std::cout << "Hello, " << name << "!" << std::endl;\n    return 0;\n}`
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