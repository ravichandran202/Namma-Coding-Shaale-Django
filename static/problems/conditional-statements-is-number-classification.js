module.exports = {
  "title": "Number Classification",
  "difficulty": "hard",
  "acceptance": "83%",

  "description": `
    <p>Classify a number based on its sign (positive/negative/zero) and parity (even/odd).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Determine if the number is positive, negative, or zero</li>
      <li>Check if the number is even or odd (for non-zero numbers)</li>
      <li>Print the appropriate classification</li>
    </ul>
    <p><b>Classification Categories:</b></p>
    <ul>
      <li>Zero → "Zero"</li>
      <li>Positive Even → <code>"Positive Even"</code></li>
      <li>Positive Odd →  <code>"Positive Odd"</code></li>
      <li>Negative Even → <code>"Negative Even"</code></li>
      <li>Negative Odd →  <code>"Negative Odd"</code></li>
    </ul>
    <p>This problem teaches nested conditional logic and combination of multiple classification criteria.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: -8
Output: Negative Even</pre>
    <p><b>Explanation:</b> -8 is negative and divisible by 2, so it's classified as "Negative Even".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: Positive Odd</pre>
    <p><b>Explanation:</b> 7 is positive and not divisible by 2, so it's classified as "Positive Odd".</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be an integer</li>
      <li>Check for zero first, then positive/negative, then even/odd</li>
      <li>Output must be exactly one of: "Zero", "Positive Even", "Positive Odd", "Negative Even", "Negative Odd"</li>
      <li>Consider 0 as neither positive nor negative</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Negative Even", "stdinput": "-8" },
    { "id": 2, "input": [], "expected": "Positive Odd", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "Zero", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "Negative Odd", "stdinput": "-15" },
    { "id": 5, "input": [], "expected": "Positive Even", "stdinput": "12" },
    { "id": 6, "input": [], "expected": "Negative Even", "stdinput": "-100" },
    { "id": 7, "input": [], "expected": "Positive Odd", "stdinput": "25" },
    { "id": 8, "input": [], "expected": "Negative Odd", "stdinput": "-33" },
    { "id": 9, "input": [], "expected": "Positive Even", "stdinput": "48" },
    { "id": 10, "input": [], "expected": "Negative Even", "stdinput": "-64" }
  ],

  "templates": {
    "python": "num = int(input())\n\nif num == 0:\n    print(\"Zero\")\nelif num > 0:\n    if num % 2 == 0:\n        print(\"Positive Even\")\n    else:\n        print(\"Positive Odd\")\nelse:\n    if num % 2 == 0:\n        print(\"Negative Even\")\n    else:\n        print(\"Negative Odd\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        \n        if (num == 0) {\n            System.out.println(\"Zero\");\n        } else if (num > 0) {\n            if (num % 2 == 0) {\n                System.out.println(\"Positive Even\");\n            } else {\n                System.out.println(\"Positive Odd\");\n            }\n        } else {\n            if (num % 2 == 0) {\n                System.out.println(\"Negative Even\");\n            } else {\n                System.out.println(\"Negative Odd\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (num) => {\n    const number = parseInt(num);\n    if (number === 0) {\n        console.log(\"Zero\");\n    } else if (number > 0) {\n        if (number % 2 === 0) {\n            console.log(\"Positive Even\");\n        } else {\n            console.log(\"Positive Odd\");\n        }\n    } else {\n        if (number % 2 === 0) {\n            console.log(\"Negative Even\");\n        } else {\n            console.log(\"Negative Odd\");\n        }\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int num;\n    std::cin >> num;\n    \n    if (num == 0) {\n        std::cout << \"Zero\" << std::endl;\n    } else if (num > 0) {\n        if (num % 2 == 0) {\n            std::cout << \"Positive Even\" << std::endl;\n        } else {\n            std::cout << \"Positive Odd\" << std::endl;\n        }\n    } else {\n        if (num % 2 == 0) {\n            std::cout << \"Negative Even\" << std::endl;\n        } else {\n            std::cout << \"Negative Odd\" << std::endl;\n        }\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "num = int(input())\n\nif num == 0:\n    print(\"Zero\")\nelif num > 0:\n    if num % 2 == 0:\n        print(\"Positive Even\")\n    else:\n        print(\"Positive Odd\")\nelse:\n    if num % 2 == 0:\n        print(\"Negative Even\")\n    else:\n        print(\"Negative Odd\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        \n        if (num == 0) {\n            System.out.println(\"Zero\");\n        } else if (num > 0) {\n            if (num % 2 == 0) {\n                System.out.println(\"Positive Even\");\n            } else {\n                System.out.println(\"Positive Odd\");\n            }\n        } else {\n            if (num % 2 == 0) {\n                System.out.println(\"Negative Even\");\n            } else {\n                System.out.println(\"Negative Odd\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (num) => {\n    const number = parseInt(num);\n    if (number === 0) {\n        console.log(\"Zero\");\n    } else if (number > 0) {\n        if (number % 2 === 0) {\n            console.log(\"Positive Even\");\n        } else {\n            console.log(\"Positive Odd\");\n        }\n    } else {\n        if (number % 2 === 0) {\n            console.log(\"Negative Even\");\n        } else {\n            console.log(\"Negative Odd\");\n        }\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int num;\n    std::cin >> num;\n    \n    if (num == 0) {\n        std::cout << \"Zero\" << std::endl;\n    } else if (num > 0) {\n        if (num % 2 == 0) {\n            std::cout << \"Positive Even\" << std::endl;\n        } else {\n            std::cout << \"Positive Odd\" << std::endl;\n        }\n    } else {\n        if (num % 2 == 0) {\n            std::cout << \"Negative Even\" << std::endl;\n        } else {\n            std::cout << \"Negative Odd\" << std::endl;\n        }\n    }\n    return 0;\n}"
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