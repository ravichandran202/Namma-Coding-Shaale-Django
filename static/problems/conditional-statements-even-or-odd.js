module.exports = {
  "title": "Even or Odd",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Check if a number is even or odd and print the result.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer input</li>
      <li>Use modulus operator to check if number is divisible by 2</li>
      <li>If even, print "Even"</li>
      <li>If odd, print "Odd"</li>
    </ul>
    <p>This problem teaches if-else conditional statements and modulus operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 7
Output: Odd</pre>
    <p><b>Explanation:</b> 7 % 2 = 1 (not divisible by 2), so "Odd" is printed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: Even</pre>
    <p><b>Explanation:</b> 4 % 2 = 0 (divisible by 2), so "Even" is printed.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
Output: Even</pre>
    <p><b>Explanation:</b> 0 % 2 = 0 (divisible by 2), so "Even" is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Use modulus operator % to check divisibility by 2</li>
      <li>Output must be exactly "Even" or "Odd" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Odd", "stdinput": "7" },
    { "id": 2, "input": [], "expected": "Even", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "Even", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "Even", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "Odd", "stdinput": "15" },
    { "id": 6, "input": [], "expected": "Even", "stdinput": "-8" },
  ],

  "templates": {
    "python": `number = int(input())\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number % 2 == 0) {\n            System.out.println("Even");\n        } else {\n            System.out.println("Odd");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num % 2 === 0) {\n        console.log("Even");\n    } else {\n        console.log("Odd");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number % 2 == 0) {\n        std::cout << "Even" << std::endl;\n    } else {\n        std::cout << "Odd" << std::endl;\n    }\n    return 0;\n}`
  },


  "solutions": {
    "python": `number = int(input())\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number % 2 == 0) {\n            System.out.println("Even");\n        } else {\n            System.out.println("Odd");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num % 2 === 0) {\n        console.log("Even");\n    } else {\n        console.log("Odd");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number % 2 == 0) {\n        std::cout << "Even" << std::endl;\n    } else {\n        std::cout << "Odd" << std::endl;\n    }\n    return 0;\n}`
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