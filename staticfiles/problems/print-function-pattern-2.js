module.exports = {
  "title": "Simple Pattern",
  "difficulty": "easy",
  "acceptance": "99.2%",

  "description": `
      <p>Print a simple pyramid pattern using asterisks that increases to a peak and then decreases back down.</p>
      <p><b>Requirements:</b></p>
      <ul class="p-0 ">
        <li>Use five separate print statements</li>
        <li>Pattern should start with one asterisk</li>
        <li>Increase by one asterisk each line until reaching three asterisks</li>
        <li>Then decrease by one asterisk each line back to one asterisk</li>
        <li>Maintain the exact pattern sequence</li>
      </ul>
      <p>This problem teaches pattern recognition and sequential output formatting.</p>
    `,

  "examples": `
      <h3>Example</h3>
      <p>The output should look like:</p>
      <pre class="constraints">
*
**
***
**
*</pre>
      <p><b>Pattern details:</b></p>
      <ul class="p-0">
        <li>Line 1: 1 asterisk</li>
        <li>Line 2: 2 asterisks</li>
        <li>Line 3: 3 asterisks</li>
        <li>Line 4: 2 asterisks</li>
        <li>Line 5: 1 asterisk</li>
      </ul>
    `,

  "conditions": `
      <ul>
        <li>Must use exactly five print statements</li>
        <li>Pattern must follow the sequence: 1, 2, 3, 2, 1 asterisks</li>
        <li>Each line must contain only asterisks with no extra spaces</li>
        <li>Output must match the exact pattern shown</li>
      </ul>
    `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*\n**\n***\n**\n*", "stdinput": "" },
  ],

  "templates": {
    "python": `# Write your code here`,
    "java": `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
    "javascript": `// Write your code here`,
    "c++": `#include <iostream>

int main() {
    // Write your code here
    return 0;
}`
  },


  "solutions": {
    "python": `print("*")\nprint("**")\nprint("***")\nprint("**")\nprint("*")`,
    "java": `public class Main {\n    public static void main(String[] args) {\n        System.out.println("*");\n        System.out.println("**");\n        System.out.println("***");\n        System.out.println("**");\n        System.out.println("*");\n    }\n}`,
    "javascript": `console.log("*");\nconsole.log("**");\nconsole.log("***");\nconsole.log("**");\nconsole.log("*");`,
    "c++": `#include <iostream>\n\nint main() {\n    std::cout << "*" << std::endl;\n    std::cout << "**" << std::endl;\n    std::cout << "***" << std::endl;\n    std::cout << "**" << std::endl;\n    std::cout << "*" << std::endl;\n    return 0;\n}`
  },

  "wrapCode": function (lang, userCode, input) {
    switch (lang) {
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