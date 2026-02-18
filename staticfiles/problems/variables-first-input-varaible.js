module.exports = {
    "title": "First Variable",
    "difficulty": "easy",
    "acceptance": "99.9%",
  
    "description": `
      <p>Create a variable called <code>name</code> and assign it a string value from user input. Then print the value of the variable.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create a variable named <code>name</code></li>
        <li>Use <code>input()</code> to get a value from the user</li>
        <li>Assign the input value to the variable</li>
        <li>Print the value stored in the variable</li>
      </ul>
      <p>This problem teaches basic variable assignment and input handling in programming.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: Alice
Output: Alice</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: Bob
Output: Bob</pre>
    `,
  
    "conditions": `
      <ul>
        <li>The variable must be named exactly <code>name</code></li>
        <li>Must use input() function to get the value</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Alice", "stdinput": "Alice" },
      { "id": 2, "input": [], "expected": "Bob", "stdinput": "Bob" },
      { "id": 3, "input": [], "expected": "Charlie", "stdinput": "Charlie" },
      { "id": 4, "input": [], "expected": "Diana", "stdinput": "Diana" },
      { "id": 5, "input": [], "expected": "Ethan", "stdinput": "Ethan" },
    ],
  
    "templates": {
      "python": `name = input()\nprint(name)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        System.out.println(name);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    console.log(name);\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::getline(std::cin, name);\n    std::cout << name << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `name = input()\nprint(name)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String name = scanner.nextLine();\n        System.out.println(name);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (name) => {\n    console.log(name);\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::getline(std::cin, name);\n    std::cout << name << std::endl;\n    return 0;\n}`
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