module.exports = {
    "title": "Identify the Type",
    "difficulty": "easy",
    "acceptance": "99.8%",
  
    "description": `
      <p>Use the <code>type()</code> function to check and print the data type of the value <code>42</code>.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Create a variable and assign the value <code>42</code> to it</li>
        <li>Use the <code>type()</code> function to determine its data type</li>
        <li>Print the result of the <code>type()</code> function</li>
      </ul>
      <p>This problem teaches how to identify data types in programming, which is essential for debugging and understanding how different values are stored.</p>
    `,
  
    "examples": `
      <h3>Example</h3>
      <pre class="constraints">Output: &lt;class 'int'&gt;</pre>
      <p>The output shows that 42 is an integer data type in Python.</p>
    `,
  
    "conditions": `
      <ul>
        <li>Must use the <code>type()</code> function</li>
        <li>Must assign the value <code>42</code> to a variable</li>
        <li>No input is required</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "<class 'int'>", "stdinput": "" },
    ],
  
    "templates": {
      "python": `x = 42\nprint(type(x))`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        int x = 42;\n        System.out.println(x.getClass().getName());\n    }\n}`,
      "javascript": `let x = 42;\nconsole.log(typeof x);`,
      "c++": `#include <iostream>\n#include <typeinfo>\n\nint main() {\n    int x = 42;\n    std::cout << typeid(x).name() << std::endl;\n    return 0;\n}`
    },

  
    "solutions": {
      "python": `x = 42\nprint(type(x))`,
      "java": `public class Main {\n    public static void main(String[] args) {\n        int x = 42;\n        System.out.println(x.getClass().getName());\n    }\n}`,
      "javascript": `let x = 42;\nconsole.log(typeof x);`,
      "c++": `#include <iostream>\n#include <typeinfo>\n\nint main() {\n    int x = 42;\n    std::cout << typeid(x).name() << std::endl;\n    return 0;\n}`
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