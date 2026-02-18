module.exports = {
  "title": "Positive, Negative, or Zero",
  "difficulty": "easy",
  "acceptance": "99.5%",

  "description": `
    <p>Check if a number is positive, negative, or zero and print the corresponding result.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a number as input</li>
      <li>Check if the number is greater than 0 (positive)</li>
      <li>Check if the number is less than 0 (negative)</li>
      <li>If neither, the number must be zero</li>
      <li>Print "Positive", "Negative", or "Zero" accordingly</li>
    </ul>
    <p>This problem teaches comprehensive number classification using if-elif-else statements.</p>
    <p><b>Note:</b> Positive numbers are greater than 0, negative numbers are less than 0, and zero is exactly 0.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: -3
Output: Negative</pre>
    <p><b>Explanation:</b> -3 is less than 0, so "Negative" is printed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: Positive</pre>
    <p><b>Explanation:</b> 5 is greater than 0, so "Positive" is printed.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
Output: Zero</pre>
    <p><b>Explanation:</b> 0 is neither positive nor negative, so "Zero" is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be a valid integer</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must be exactly "Positive", "Negative", or "Zero" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Negative", "stdinput": "-3" },
    { "id": 2, "input": [], "expected": "Positive", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "Zero", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "Positive", "stdinput": "10" },
    { "id": 5, "input": [], "expected": "Negative", "stdinput": "-15" },
  ],

  "templates": {
    "python": `number = int(input())\nif number > 0:\n    print("Positive")\nelif number < 0:\n    print("Negative")\nelse:\n    print("Zero")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number > 0) {\n            System.out.println("Positive");\n        } else if (number < 0) {\n            System.out.println("Negative");\n        } else {\n            System.out.println("Zero");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num > 0) {\n        console.log("Positive");\n    } else if (num < 0) {\n        console.log("Negative");\n    } else {\n        console.log("Zero");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number > 0) {\n        std::cout << "Positive" << std::endl;\n    } else if (number < 0) {\n        std::cout << "Negative" << std::endl;\n    } else {\n        std::cout << "Zero" << std::endl;\n    }\n    return 0;\n}`
  },


  "solutions": {
    "python": `number = int(input())\nif number > 0:\n    print("Positive")\nelif number < 0:\n    print("Negative")\nelse:\n    print("Zero")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number > 0) {\n            System.out.println("Positive");\n        } else if (number < 0) {\n            System.out.println("Negative");\n        } else {\n            System.out.println("Zero");\n        }\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num > 0) {\n        console.log("Positive");\n    } else if (num < 0) {\n        console.log("Negative");\n    } else {\n        console.log("Zero");\n    }\n    readline.close();\n});`,
    "c++": `#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number > 0) {\n        std::cout << "Positive" << std::endl;\n    } else if (number < 0) {\n        std::cout << "Negative" << std::endl;\n    } else {\n        std::cout << "Zero" << std::endl;\n    }\n    return 0;\n}`
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