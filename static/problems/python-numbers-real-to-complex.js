module.exports = {
    "title": "Real to Complex",
    "difficulty": "easy",
    "acceptance": "99.3%",
  
    "description": `
      <p>Convert an integer to a complex number and print both the converted value and its type.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read an integer from input</li>
        <li>Convert the integer to a complex number using <code>complex()</code></li>
        <li>Print the converted complex value</li>
        <li>Print the data type of the converted value</li>
      </ul>
      <p>This problem teaches how to convert real numbers to complex numbers, where the imaginary part becomes 0j.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 4
Output:
(4+0j)
&lt;class 'complex'&gt;</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 7
Output:
(7+0j)
&lt;class 'complex'&gt;</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input: -2
Output:
(-2+0j)
&lt;class 'complex'&gt;</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Input will be a valid integer</li>
        <li>Must print both the converted value and its type</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "(4+0j)\n<class 'complex'>", "stdinput": "4" },
      { "id": 2, "input": [], "expected": "(7+0j)\n<class 'complex'>", "stdinput": "7" },
      { "id": 3, "input": [], "expected": "(-2+0j)\n<class 'complex'>", "stdinput": "-2" },
      { "id": 4, "input": [], "expected": "0j\n<class 'complex'>", "stdinput": "0" },
      { "id": 5, "input": [], "expected": "(15+0j)\n<class 'complex'>", "stdinput": "15" },
    ],
  
    "templates": {
      "python": `number = int(input())\nconverted = complex(number)\nprint(converted)\nprint(type(converted))`,
      "java": `// Note: Java doesn't have built-in complex numbers, using string representation\nimport java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        String converted = \"(\" + number + \"+0j)\";\n        System.out.println(converted);\n        System.out.println(\"class java.lang.String\");\n    }\n}`,
      "javascript": `// Note: JavaScript doesn't have built-in complex numbers\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const number = parseInt(input);\n    const converted = {real: number, imag: 0, toString: function() { return \"(\" + this.real + \"+0j)\"; }};\n    console.log(converted.toString());\n    console.log(typeof converted);\n    readline.close();\n});`,
      "c++": `// Note: C++ doesn't have built-in complex numbers in standard library\n#include <iostream>\n#include <string>\n#include <typeinfo>\n\nint main() {\n    int number;\n    std::cin >> number;\n    std::string converted = \"(\" + std::to_string(number) + \"+0j)\";\n    std::cout << converted << std::endl;\n    std::cout << typeid(converted).name() << std::endl;\n    return 0;\n}`
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