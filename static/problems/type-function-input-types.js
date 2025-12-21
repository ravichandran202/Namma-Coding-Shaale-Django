module.exports = {
    "title": "Text Type Finder",
    "difficulty": "easy",
    "acceptance": "99.7%",
  
    "description": `
      <p>Check and print the data type of the input text.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read input from the user</li>
        <li>Use the <code>type()</code> function to determine its data type</li>
        <li>Print the result of the <code>type()</code> function</li>
      </ul>
      <p>This problem teaches that all input from the user is treated as string data type by default, regardless of what is entered.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: Hello
Output: &lt;class 'str'&gt;</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 123
Output: &lt;class 'str'&gt;</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input: 3.14
Output: &lt;class 'str'&gt;</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Must use the <code>type()</code> function</li>
        <li>Must read input from the user</li>
        <li>The input can be any text (letters, numbers, symbols)</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "<class 'str'>", "stdinput": "Hello" },
      { "id": 2, "input": [], "expected": "<class 'str'>", "stdinput": "123" },
      { "id": 3, "input": [], "expected": "<class 'str'>", "stdinput": "3.14" },
      { "id": 4, "input": [], "expected": "<class 'str'>", "stdinput": "Python" },
      { "id": 5, "input": [], "expected": "<class 'str'>", "stdinput": "42" },
    ],
  
    "templates": {
      "python": `text = input()\nprint(type(text))`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        System.out.println(text.getClass().getName());\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    console.log(typeof text);\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n#include <typeinfo>\n\nint main() {\n    std::string text;\n    std::getline(std::cin, text);\n    std::cout << typeid(text).name() << std::endl;\n    return 0;\n}`
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