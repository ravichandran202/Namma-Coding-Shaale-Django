module.exports = {
  "title": "User Name Input",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Write a program that asks the user for their name using input() and then prints the name.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Use the <code>input()</code> function to read the user's name</li>
      <li>Print exactly what the user entered</li>
      <li>The program should output the name without any additional text</li>
    </ul>
    <p>This problem teaches basic input/output operations in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Ravi
Output: Ravi</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Sarah
Output: Sarah</pre>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: John
Output: John</pre>
  `,

  "conditions": `
    <ul>
      <li>The input will be a string containing only alphabetical characters</li>
      <li>Output must exactly match the input</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Ravi", "stdinput": "Ravi" },
    { "id": 2, "input": [], "expected": "Sarah", "stdinput": "Sarah" },
    { "id": 3, "input": [], "expected": "John", "stdinput": "John" },
    { "id": 4, "input": [], "expected": "Emily", "stdinput": "Emily" },
    { "id": 5, "input": [], "expected": "Michael", "stdinput": "Michael" }
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