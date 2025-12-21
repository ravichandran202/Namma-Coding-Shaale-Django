module.exports = {
    "title": "First Variable",
    "difficulty": "easy",
    "acceptance": "99.9%",
  
    "description": `
      <p>Create a variable called <code>name</code> and assign it your name as a string. Then print the value "Alice".</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create a variable named <code>name</code></li>
        <li>Assign a value to <code>"Alice"</code></li>
        <li>Print the value stored in the variable</li>
      </ul>
      <p>This problem teaches basic variable assignment and string data type handling in programming.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <pre class="constraints">Output:
Alice</pre>
    `,
  
    "conditions": `
      <ul>
        <li>The variable must be named exactly <code>name</code></li>
        <li>The value must be a string (text enclosed in quotes)</li>
        <li>No input is required - the value should be hardcoded in the program</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "Alice", "stdinput": "" },
    ],
  
    "templates": {
      "python": `name = "Alice"\nprint(name)`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        String name = "Alice";\n        System.out.println(name);\n    }\n}`,
      "javascript": `let name = "Alice";\nconsole.log(name);`,
      "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = "Alice";\n    std::cout << name << std::endl;\n    return 0;\n}`
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