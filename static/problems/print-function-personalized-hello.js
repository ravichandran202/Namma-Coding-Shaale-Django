module.exports = {
    "title": "Personal Hello",
    "difficulty": "easy",
    "acceptance": "99.5%",
  
    "description": `
      <p>Update a program that prints a greeting with your name. Use two print statements: one for "Hello" and one for your name, but they should appear on the same line.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Use two separate print statements</li>
        <li>The output should appear on a single line: "Hello, Sarah!"</li>
        <li>Modify the print function behavior to prevent automatic line breaks</li>
      </ul>
      <p>This problem teaches how to control output formatting and manage line endings in print statements.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <pre class="constraints">The output should look like:
  Hello, Sarah!</pre>
      <p>Without the modification, the two print statements would normally produce:</p>
      <pre class="constraints">Hello, 
  Sarah!</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Must use exactly two print statements</li>
        <li>Output must be on a single line</li>
        <li>The greeting format should be "Hello, Name!"</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Hello, Sarah!", "stdinput": "" },
      { "id": 2, "input": [], "expected": "Hello, Sarah!", "stdinput": "" },
      { "id": 3, "input": [], "expected": "Hello, Sarah!", "stdinput": "" }
    ],
  
    "templates": {
      "python": `print("Hello, ", end="")\nprint("Sarah!")`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.print("Hello, ");\n        System.out.print("Sarah!");\n    }\n}`,
      "javascript": `process.stdout.write("Hello, ");\nprocess.stdout.write("Sarah!");`,
      "c++": `#include <iostream>\n\nint main() {\n    std::cout << "Hello, ";\n    std::cout << "Sarah!";\n    return 0;\n}`
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