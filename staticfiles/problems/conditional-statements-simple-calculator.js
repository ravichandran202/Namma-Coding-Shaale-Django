module.exports = {
  "title": "Basic Operations",
  "difficulty": "easy",
  "acceptance": "99.4%",

  "description": `
    <p>Perform basic arithmetic operations based on user's choice of operator.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read the operator as input (<code><b>+, -, *, /</b></code>)</li>
      <li>Read two numbers as input</li>
      <li>Perform the corresponding operation based on the operator</li>
      <li>Print the result of the operation</li>
      <li>If operator is invalid, print "Invalid operator"</li>
    </ul>
    <p>This problem teaches conditional statements for implementing a simple calculator with basic arithmetic operations.</p>
    <p><b>Operations:</b></p>
    <ul>
      <li>+ → Addition (num1 + num2)</li>
      <li>- → Subtraction (num1 - num2)</li>
      <li>* → Multiplication (num1 * num2)</li>
      <li>/ → Division (num1 / num2)</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
+
5
3
Output: 8</pre>
    <p><b>Explanation:</b> Operator is '+', so 5 + 3 = 8.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
*
4
6
Output: 24</pre>
    <p><b>Explanation:</b> Operator is '*', so 4 * 6 = 24.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
/
10
2
Output: 5.0</pre>
    <p><b>Explanation:</b> Operator is '/', so 10 / 2 = 5.0.</p>
    
    <h3>Example 4</h3>
    <pre class="constraints">Input:
%
5
3
Output: Invalid operator</pre>
    <p><b>Explanation:</b> Operator '%' is not supported, so "Invalid operator" is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Operator will be a single character</li>
      <li>Numbers will be valid integers</li>
      <li>For division, the second number will not be zero</li>
      <li>Supported operators: +, -, *, /</li>
      <li>For invalid operators, print "Invalid operator"</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "8", "stdinput": "+\n5\n3" },
    { "id": 2, "input": [], "expected": "24", "stdinput": "*\n4\n6" },
    { "id": 3, "input": [], "expected": "5.0", "stdinput": "/\n10\n2" },
    { "id": 4, "input": [], "expected": "Invalid operator", "stdinput": "%\n5\n3" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "-\n7\n5" },
    { "id": 6, "input": [], "expected": "15", "stdinput": "+\n10\n5" },
    { "id": 7, "input": [], "expected": "3.0", "stdinput": "/\n15\n5" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "-\n5\n5" },
    { "id": 9, "input": [], "expected": "100", "stdinput": "*\n10\n10" },
    { "id": 10, "input": [], "expected": "Invalid operator", "stdinput": "&\n1\n2" }
  ],

  "templates": {
    "python": `operator = input()\nnum1 = int(input())\nnum2 = int(input())\n\nif operator == \"+\":\n    print(num1 + num2)\nelif operator == \"-\":\n    print(num1 - num2)\nelif operator == \"*\":\n    print(num1 * num2)\nelif operator == \"/\":\n    print(num1 / num2)\nelse:\n    print(\"Invalid operator\")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String operator = scanner.nextLine();\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        switch (operator) {\n            case \"+\":\n                System.out.println(num1 + num2);\n                break;\n            case \"-\":\n                System.out.println(num1 - num2);\n                break;\n            case \"*\":\n                System.out.println(num1 * num2);\n                break;\n            case \"/\":\n                System.out.println((double)num1 / num2);\n                break;\n            default:\n                System.out.println(\"Invalid operator\");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (operator) => {\n    inputs.push(operator);\n    readline.question('', (first) => {\n        inputs.push(parseInt(first));\n        readline.question('', (second) => {\n            inputs.push(parseInt(second));\n            \n            const op = inputs[0];\n            const num1 = inputs[1];\n            const num2 = inputs[2];\n            \n            if (op === \"+\") {\n                console.log(num1 + num2);\n            } else if (op === \"-\") {\n                console.log(num1 - num2);\n            } else if (op === \"*\") {\n                console.log(num1 * num2);\n            } else if (op === \"/\") {\n                console.log(num1 / num2);\n            } else {\n                console.log(\"Invalid operator\");\n            }\n            readline.close();\n        });\n    });\n});`,
    "c++": `#include <iostream>\n#include <string>\n\nint main() {\n    std::string operator_;\n    int num1, num2;\n    std::cin >> operator_;\n    std::cin >> num1 >> num2;\n    \n    if (operator_ == \"+\") {\n        std::cout << num1 + num2 << std::endl;\n    } else if (operator_ == \"-\") {\n        std::cout << num1 - num2 << std::endl;\n    } else if (operator_ == \"*\") {\n        std::cout << num1 * num2 << std::endl;\n    } else if (operator_ == \"/\") {\n        std::cout << static_cast<double>(num1) / num2 << std::endl;\n    } else {\n        std::cout << \"Invalid operator\" << std::endl;\n    }\n    \n    return 0;\n}`
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