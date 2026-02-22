module.exports = {
    "title": "Sum of Integer and Float",
    "difficulty": "easy",
    "acceptance": "99.6%",
  
    "description": `
      <p>Read one integer and one float number, then print their sum.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read one integer input</li>
        <li>Read one float input</li>
        <li>Calculate the sum of the integer and float</li>
        <li>Print the result</li>
      </ul>
      <p>This problem teaches how to perform arithmetic operations between different numeric data types.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
5
3.5
Output: 8.5</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
10
2.5
Output: 12.5</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
-3
1.5
Output: -1.5</pre>
    `,
  
    "conditions": `
      <ul>
        <li>First input will be a valid integer</li>
        <li>Second input will be a valid float</li>
        <li>Numbers can be positive, negative, or zero</li>
        <li>Result will be a float value</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "8.5", "stdinput": "5\n3.5" },
      { "id": 2, "input": [], "expected": "12.5", "stdinput": "10\n2.5" },
      { "id": 3, "input": [], "expected": "-1.5", "stdinput": "-3\n1.5" },
      { "id": 4, "input": [], "expected": "7.0", "stdinput": "7\n0.0" },
      { "id": 5, "input": [], "expected": "0.0", "stdinput": "0\n0.0" },
      { "id": 6, "input": [], "expected": "15.75", "stdinput": "10\n5.75" },
      { "id": 7, "input": [], "expected": "-10.2", "stdinput": "-5\n-5.2" },
      { "id": 8, "input": [], "expected": "3.14", "stdinput": "1\n2.14" },
      { "id": 9, "input": [], "expected": "100.5", "stdinput": "100\n0.5" },
      { "id": 10, "input": [], "expected": "-7.8", "stdinput": "-10\n2.2" }
    ],
  
    "templates": {
      "python": `# TODO: Read first interger number\n\n# TODO: Read second float number\n\n# TODO: Calculate and print the sum of the integer and the float\n`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        double b = scanner.nextDouble();\n        \n        // TODO: Calculate and print the sum of the integer and the float\n        \n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        \n        // TODO: Calculate and print the sum of the integer and the float\n        \n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int a;\n    double b;\n    std::cin >> a >> b;\n    \n    // TODO: Calculate and print the sum of the integer and the float\n    \n    return 0;\n}`
    },

  
    "solutions": {
      "python": `a = int(input())\nb = float(input())\nresult = a + b\nprint(result)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        double b = scanner.nextDouble();\n        double result = a + b;\n        System.out.println(result);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseFloat(second));\n        const result = inputs[0] + inputs[1];\n        console.log(result);\n        readline.close();\n    });\n});`,
      "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int a;\n    double b;\n    std::cin >> a >> b;\n    double result = a + b;\n    std::cout << result << std::endl;\n    return 0;\n}`
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