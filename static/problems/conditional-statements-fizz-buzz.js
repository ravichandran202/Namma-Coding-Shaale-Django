module.exports = {
  "title": "FIZZ BUZZ",
  "difficulty": "easy",
  "acceptance": "99.2%",

  "description": `
    <p>Print the output based on the divisibility conditions.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer as input</li>
      <li>Check divisibility by 3 and/or 5</li>
      <li>Print the corresponding output based on the conditions</li>
    </ul>
    <p><b>Divisibility Conditions:</b></p>
    <ul>
      <li>Divisible by both 3 and 5 → <code>"FIZZ BUZZ"</code></li>
      <li>Divisible by 5 only → <code>"FIZZ"</code></li>
      <li>Divisible by 3 only → <code>"BUZZ"</code></li>
      <li>Not divisible by either → <code>"Not divisible by both"</code></li>
    </ul>
    <p>This problem teaches conditional statements and modulo operations for number classification.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 15
Output: FIZZ BUZZ</pre>
    <p><b>Explanation:</b> 15 is divisible by both 3 and 5, so "FIZZ BUZZ" is printed.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 10
Output: FIZZ</pre>
    <p><b>Explanation:</b> 10 is divisible by 5 but not by 3, so "FIZZ" is printed.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 9
Output: BUZZ</pre>
    <p><b>Explanation:</b> 9 is divisible by 3 but not by 5, so "BUZZ" is printed.</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 7
Output: Not divisible by both</pre>
    <p><b>Explanation:</b> 7 is not divisible by 3 or 5, so "Not divisible by both" is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Input number will be an integer between 1 and 1000</li>
      <li>Check divisibility using modulo operator (%)</li>
      <li>Output must be exactly one of: "FIZZ BUZZ", "FIZZ", "BUZZ", or "Not divisible by both" (case-sensitive)</li>
      <li>The "both divisible" condition should be checked first</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "FIZZ BUZZ", "stdinput": "15" },
    { "id": 2, "input": [], "expected": "FIZZ", "stdinput": "10" },
    { "id": 3, "input": [], "expected": "BUZZ", "stdinput": "9" },
    { "id": 4, "input": [], "expected": "Not divisible by both", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "FIZZ BUZZ", "stdinput": "30" },
    { "id": 6, "input": [], "expected": "BUZZ", "stdinput": "12" },
    { "id": 7, "input": [], "expected": "Not divisible by both", "stdinput": "22" },
  ],

  "templates": {
    "python": "number = int(input())\n\n# TODO: Check divisibility by 3 and 5, and print the appropriate result\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        \n        // TODO: Check divisibility by 3 and 5, and print the appropriate result\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    \n    // TODO: Check divisibility by 3 and 5, and print the appropriate result\n    \n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    \n    // TODO: Check divisibility by 3 and 5, and print the appropriate result\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "number = int(input())\nif number % 3 == 0 and number % 5 == 0:\n    print(\"FIZZ BUZZ\")\nelif number % 5 == 0:\n    print(\"FIZZ\")\nelif number % 3 == 0:\n    print(\"BUZZ\")\nelse:\n    print(\"Not divisible by both\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int number = scanner.nextInt();\n        if (number % 3 == 0 && number % 5 == 0) {\n            System.out.println(\"FIZZ BUZZ\");\n        } else if (number % 5 == 0) {\n            System.out.println(\"FIZZ\");\n        } else if (number % 3 == 0) {\n            System.out.println(\"BUZZ\");\n        } else {\n            System.out.println(\"Not divisible by both\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (number) => {\n    const num = parseInt(number);\n    if (num % 3 === 0 && num % 5 === 0) {\n        console.log(\"FIZZ BUZZ\");\n    } else if (num % 5 === 0) {\n        console.log(\"FIZZ\");\n    } else if (num % 3 === 0) {\n        console.log(\"BUZZ\");\n    } else {\n        console.log(\"Not divisible by both\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int number;\n    std::cin >> number;\n    if (number % 3 == 0 && number % 5 == 0) {\n        std::cout << \"FIZZ BUZZ\" << std::endl;\n    } else if (number % 5 == 0) {\n        std::cout << \"FIZZ\" << std::endl;\n    } else if (number % 3 == 0) {\n        std::cout << \"BUZZ\" << std::endl;\n    } else {\n        std::cout << \"Not divisible by both\" << std::endl;\n    }\n    return 0;\n}"
  },

  "wrapCode": function (lang, userCode, input) {
    switch (lang) {
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