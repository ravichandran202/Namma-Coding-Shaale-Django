module.exports = {
    "title": "Multi-Line Introduction",
    "difficulty": "easy",
    "acceptance": "99.3%",
  
    "description": `
      <p>Write a program that prints three lines of personal information: your name, your age, and your favorite color. Each piece of information should appear on a separate line.</p>
      <p><b>Requirements:</b></p>
      <ul class="p-0 ">
        <li>Use three separate print statements</li>
        <li>Each value should appear on its own line</li>
        <li>Maintain the order: name, age, favorite color</li>
        <li>Use the values: <code>Name = "John"</code>, <code>Age = "25"</code>, <code>Color = "Blue"</code></li>
      </ul>
      <p>This problem teaches how to use multiple print statements and understand automatic line breaks in output.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <p>The output should look like:</p>
      <pre class="constraints">
John
25
Blue</pre>
      <p><b>Values to use:</b></p>
      <ul class="p-0">
        <li>Name: John</li>
        <li>Age: 25</li>
        <li>Favorite Color: Blue</li>
      </ul>
    `,
  
    "conditions": `
      <ul>
        <li>Must use exactly three print statements</li>
        <li>Output must be on three separate lines</li>
        <li>Order must be: name, age, favorite color</li>
        <li>Must use the specific values: "John", "25", "Blue"</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "John\n25\nBlue", "stdinput": "" },
    ],
  
    "templates": {
      "python": `print("John")\nprint("25")\nprint("Blue")`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("John");\n        System.out.println("25");\n        System.out.println("Blue");\n    }\n}`,
      "javascript": `console.log("John");\nconsole.log("25");\nconsole.log("Blue");`,
      "c++": `#include <iostream>\n\nint main() {\n    std::cout << "John" << std::endl;\n    std::cout << "25" << std::endl;\n    std::cout << "Blue" << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `print("John")\nprint("25")\nprint("Blue")`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("John");\n        System.out.println("25");\n        System.out.println("Blue");\n    }\n}`,
      "javascript": `console.log("John");\nconsole.log("25");\nconsole.log("Blue");`,
      "c++": `#include <iostream>\n\nint main() {\n    std::cout << "John" << std::endl;\n    std::cout << "25" << std::endl;\n    std::cout << "Blue" << std::endl;\n    return 0;\n}`
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