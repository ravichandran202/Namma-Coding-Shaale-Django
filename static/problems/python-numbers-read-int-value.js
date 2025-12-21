module.exports = {
    "title": "Read Integer",
    "difficulty": "easy",
    "acceptance": "99.7%",
  
    "description": `
      <p>Read a value from input, convert it to integer, and print its value and type.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read input from the user</li>
        <li>Convert the input to integer</li>
        <li>Print the integer value</li>
        <li>Print the data type of the converted value</li>
      </ul>
      <p>This problem teaches how to convert string input to integer and verify the data type conversion.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 7
Output:
7
&lt;class 'int'&gt;</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 42
Output:
42
&lt;class 'int'&gt;</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be a valid integer string</li>
        <li>Must print both the value and its type</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "7\n<class 'int'>", "stdinput": "7" },
      { "id": 2, "input": [], "expected": "42\n<class 'int'>", "stdinput": "42" },
      { "id": 3, "input": [], "expected": "100\n<class 'int'>", "stdinput": "100" },
      { "id": 4, "input": [], "expected": "0\n<class 'int'>", "stdinput": "0" },
      { "id": 5, "input": [], "expected": "-5\n<class 'int'>", "stdinput": "-5" },
    ],
  
    "templates": {
      "python": `number = int(input())\nprint(number)\nprint(type(number))`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        System.out.println(number);\n        System.out.println(number.getClass().getName());\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const number = parseInt(input);\n    console.log(number);\n    console.log(typeof number);\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n#include <typeinfo>\n\nint main() {\n    int number;\n    std::cin >> number;\n    std::cout << number << std::endl;\n    std::cout << typeid(number).name() << std::endl;\n    return 0;\n}`
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