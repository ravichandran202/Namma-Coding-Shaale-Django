module.exports = {
  "title": "Simple Calculator with Match Case",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Implement a basic calculator that performs arithmetic operations using pattern matching.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two numbers as floating-point inputs</li>
      <li>Read an arithmetic operation as string input</li>
      <li>Use match-case statement to perform the appropriate operation</li>
      <li>Handle division by zero and invalid operations gracefully</li>
    </ul>
    <p><b>Supported Operations:</b></p>
    <ul>
      <li>Addition (+)        → <code>num1 + num2</code></li>
      <li>Subtraction (-)     → <code>num1 - num2</code></li>
      <li>Multiplication (*)  → <code>num1 × num2</code></li>
      <li>Division (/)        → <code>num1 ÷ num2 (with zero check)</code></li>
      <li>Any other operation → <code>"Invalid operation"</code></li>
    </ul>
    <p>This problem teaches pattern matching for operation selection and exception handling for edge cases like division by zero.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
5
*
Output: 50.0</pre>
    <p><b>Explanation:</b> Operation "*" matches multiplication: 10 × 5 = 50.0</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 
15
3
/
Output: 5.0</pre>
    <p><b>Explanation:</b> Operation "/" matches division: 15 ÷ 3 = 5.0</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 
8
0
/
Output: Error: Division by zero</pre>
    <p><b>Explanation:</b> Division by zero is detected and handled with an error message.</p>
  `,

  "conditions": `
    <ul>
      <li>Numbers will be floating-point values</li>
      <li>Operation will be a single character string</li>
      <li>Use match-case statement for operation selection</li>
      <li>Handle division by zero with specific error message</li>
      <li>Output must be the result (for valid operations) or appropriate error message</li>
      <li>Print results with floating-point precision</li>
      <li>Supported operations: <code>+, -, *, /</code></li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "50.0", "stdinput": "10\n5\n*" },
    { "id": 2, "input": [], "expected": "5.0", "stdinput": "15\n3\n/" },
    { "id": 3, "input": [], "expected": "Error: Division by zero", "stdinput": "8\n0\n/" },
    { "id": 4, "input": [], "expected": "Invalid operation", "stdinput": "12\n4\n%" },
    { "id": 5, "input": [], "expected": "17.0", "stdinput": "10\n7\n+" },
    { "id": 6, "input": [], "expected": "3.0", "stdinput": "8\n5\n-" },
    { "id": 7, "input": [], "expected": "24.0", "stdinput": "6\n4\n*" },
    { "id": 8, "input": [], "expected": "2.5", "stdinput": "5\n2\n/" },
    { "id": 9, "input": [], "expected": "Error: Division by zero", "stdinput": "10\n0\n/" },
    { "id": 10, "input": [], "expected": "Invalid operation", "stdinput": "3\n4\nx" }
  ],

  "templates": {
    "python": "num1 = float(input())\nnum2 = float(input())\noperation = input()\n\nmatch operation:\n    case \"+\":\n        print(num1 + num2)\n    case \"-\":\n        print(num1 - num2)\n    case \"*\":\n        print(num1 * num2)\n    case \"/\":\n        if num2 != 0:\n            print(num1 / num2)\n        else:\n            print(\"Error: Division by zero\")\n    case _:\n        print(\"Invalid operation\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double num1 = scanner.nextDouble();\n        double num2 = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String operation = scanner.nextLine();\n        \n        switch (operation) {\n            case \"+\":\n                System.out.println(num1 + num2);\n                break;\n            case \"-\":\n                System.out.println(num1 - num2);\n                break;\n            case \"*\":\n                System.out.println(num1 * num2);\n                break;\n            case \"/\":\n                if (num2 != 0) {\n                    System.out.println(num1 / num2);\n                } else {\n                    System.out.println(\"Error: Division by zero\");\n                }\n                break;\n            default:\n                System.out.println(\"Invalid operation\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const num1 = parseFloat(input[0]);\n        const num2 = parseFloat(input[1]);\n        const operation = input[2];\n        \n        switch (operation) {\n            case \"+\":\n                console.log(num1 + num2);\n                break;\n            case \"-\":\n                console.log(num1 - num2);\n                break;\n            case \"*\":\n                console.log(num1 * num2);\n                break;\n            case \"/\":\n                if (num2 !== 0) {\n                    console.log(num1 / num2);\n                } else {\n                    console.log(\"Error: Division by zero\");\n                }\n                break;\n            default:\n                console.log(\"Invalid operation\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    double num1, num2;\n    std::string operation;\n    std::cin >> num1 >> num2 >> operation;\n    \n    if (operation == \"+\") {\n        std::cout << num1 + num2 << std::endl;\n    } else if (operation == \"-\") {\n        std::cout << num1 - num2 << std::endl;\n    } else if (operation == \"*\") {\n        std::cout << num1 * num2 << std::endl;\n    } else if (operation == \"/\") {\n        if (num2 != 0) {\n            std::cout << num1 / num2 << std::endl;\n        } else {\n            std::cout << \"Error: Division by zero\" << std::endl;\n        }\n    } else {\n        std::cout << \"Invalid operation\" << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "num1 = float(input())\nnum2 = float(input())\noperation = input()\n\nmatch operation:\n    case \"+\":\n        print(num1 + num2)\n    case \"-\":\n        print(num1 - num2)\n    case \"*\":\n        print(num1 * num2)\n    case \"/\":\n        if num2 != 0:\n            print(num1 / num2)\n        else:\n            print(\"Error: Division by zero\")\n    case _:\n        print(\"Invalid operation\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        double num1 = scanner.nextDouble();\n        double num2 = scanner.nextDouble();\n        scanner.nextLine(); // consume newline\n        String operation = scanner.nextLine();\n        \n        switch (operation) {\n            case \"+\":\n                System.out.println(num1 + num2);\n                break;\n            case \"-\":\n                System.out.println(num1 - num2);\n                break;\n            case \"*\":\n                System.out.println(num1 * num2);\n                break;\n            case \"/\":\n                if (num2 != 0) {\n                    System.out.println(num1 / num2);\n                } else {\n                    System.out.println(\"Error: Division by zero\");\n                }\n                break;\n            default:\n                System.out.println(\"Invalid operation\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(line);\n    if (input.length === 3) {\n        const num1 = parseFloat(input[0]);\n        const num2 = parseFloat(input[1]);\n        const operation = input[2];\n        \n        switch (operation) {\n            case \"+\":\n                console.log(num1 + num2);\n                break;\n            case \"-\":\n                console.log(num1 - num2);\n                break;\n            case \"*\":\n                console.log(num1 * num2);\n                break;\n            case \"/\":\n                if (num2 !== 0) {\n                    console.log(num1 / num2);\n                } else {\n                    console.log(\"Error: Division by zero\");\n                }\n                break;\n            default:\n                console.log(\"Invalid operation\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <string>\n\nint main() {\n    double num1, num2;\n    std::string operation;\n    std::cin >> num1 >> num2 >> operation;\n    \n    if (operation == \"+\") {\n        std::cout << num1 + num2 << std::endl;\n    } else if (operation == \"-\") {\n        std::cout << num1 - num2 << std::endl;\n    } else if (operation == \"*\") {\n        std::cout << num1 * num2 << std::endl;\n    } else if (operation == \"/\") {\n        if (num2 != 0) {\n            std::cout << num1 / num2 << std::endl;\n        } else {\n            std::cout << \"Error: Division by zero\" << std::endl;\n        }\n    } else {\n        std::cout << \"Invalid operation\" << std::endl;\n    }\n    return 0;\n}"
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