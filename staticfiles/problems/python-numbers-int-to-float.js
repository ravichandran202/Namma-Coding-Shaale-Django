module.exports = {
    "title": "Integer to Float",
    "difficulty": "easy",
    "acceptance": "99.7%",
  
    "description": `
      <p>Convert an integer to a floating-point number and print both the converted value and its type.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read an integer from input</li>
        <li>Convert the integer to a float</li>
        <li>Print the converted floating-point value</li>
        <li>Print the data type of the converted value</li>
      </ul>
      <p>This problem teaches how to convert integers to floating-point numbers and understand the difference between these numeric data types.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 7
Output:
7.0
&lt;class 'float'&gt;</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 42
Output:
42.0
&lt;class 'float'&gt;</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be a valid integer string</li>
        <li>Must print both the converted value and its type</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "7.0\n<class 'float'>", "stdinput": "7" },
      { "id": 2, "input": [], "expected": "42.0\n<class 'float'>", "stdinput": "42" },
      { "id": 3, "input": [], "expected": "100.0\n<class 'float'>", "stdinput": "100" },
      { "id": 4, "input": [], "expected": "0.0\n<class 'float'>", "stdinput": "0" },
      { "id": 5, "input": [], "expected": "-5.0\n<class 'float'>", "stdinput": "-5" },
    ],
  
    "templates": {
      "python": `number = int(input())\nconverted = float(number)\nprint(converted)\nprint(type(converted))`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        double converted = (double) number;\n        System.out.println(converted);\n        System.out.println(((Object)converted).getClass().getName());\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const number = parseInt(input);\n    const converted = parseFloat(number);\n    console.log(converted.toFixed(1));\n    console.log(typeof converted);\n    readline.close();\n});`,
      "c++": `#include <iostream>\n#include <string>\n#include <typeinfo>\n\nint main() {\n    int number;\n    std::cin >> number;\n    double converted = static_cast<double>(number);\n    std::cout << converted << std::endl;\n    std::cout << typeid(converted).name() << std::endl;\n    return 0;\n}`
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