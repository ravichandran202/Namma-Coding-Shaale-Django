module.exports = {
    "title": "Boxed Message",
    "difficulty": "easy",
    "acceptance": "98.5%",
  
    "description": `
      <p>Create a simple box around the word "WELCOME" using asterisks (*). The box should have a top and bottom border of asterisks, with the word in the middle also surrounded by asterisks on both sides.</p>
      <p><b>Requirements:</b></p>
      <ul class="p-0 ">
        <li>Use three separate print statements</li>
        <li>Top and bottom borders should be 9 asterisks</li>
        <li>Middle line should have the format: "* WELCOME *"</li>
        <li>Maintain proper spacing around the word</li>
      </ul>
      <p>This problem teaches string formatting and visual output organization.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <p>The output should look like:</p>
      <pre class="constraints">
*********
* WELCOME *
*********</pre>
      <p><b>Pattern details:</b></p>
      <ul class="p-0">
        <li>Top border: 9 asterisks</li>
        <li>Middle: Asterisk, space, "WELCOME", space, asterisk</li>
        <li>Bottom border: 9 asterisks</li>
      </ul>
    `,
  
    "conditions": `
      <ul>
        <li>Must use exactly three print statements</li>
        <li>Top and bottom lines must have exactly 9 asterisks</li>
        <li>Middle line must be exactly "* WELCOME *"</li>
        <li>Spacing around "WELCOME" must be maintained</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "*********\n* WELCOME *\n*********", "stdinput": "" },
    ],
  
    "templates": {
      "python": `print("*********")\nprint("* WELCOME *")\nprint("*********")`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("*********");\n        System.out.println("* WELCOME *");\n        System.out.println("*********");\n    }\n}`,
      "javascript": `console.log("*********");\nconsole.log("* WELCOME *");\nconsole.log("*********");`,
      "c++": `#include <iostream>\n\nint main() {\n    std::cout << "*********" << std::endl;\n    std::cout << "* WELCOME *" << std::endl;\n    std::cout << "*********" << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `print("*********")\nprint("* WELCOME *")\nprint("*********")`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("*********");\n        System.out.println("* WELCOME *");\n        System.out.println("*********");\n    }\n}`,
      "javascript": `console.log("*********");\nconsole.log("* WELCOME *");\nconsole.log("*********");`,
      "c++": `#include <iostream>\n\nint main() {\n    std::cout << "*********" << std::endl;\n    std::cout << "* WELCOME *" << std::endl;\n    std::cout << "*********" << std::endl;\n    return 0;\n}`
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