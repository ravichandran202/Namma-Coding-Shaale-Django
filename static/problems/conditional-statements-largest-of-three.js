module.exports = {
  "title": "Largest of Three Numbers",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Find the largest of three numbers using conditional statements.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three integers as input</li>
      <li>Compare the three numbers to find the largest</li>
      <li>Print the largest number</li>
    </ul>
    <p><b>Comparison Logic:</b></p>
    <ul>
      <li>Check if first number is greater than or equal to both others</li>
      <li>If not, check if second number is greater than or equal to both others</li>
      <li>Otherwise, the third number is the largest</li>
    </ul>
    <p>This problem teaches nested conditional logic and comparison operations for finding maximum values.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 15
25
10
Output: 25</pre>
    <p><b>Explanation:</b> Among 15, 25, and 10, 25 is the largest number.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 8
8
5
Output: 8</pre>
    <p><b>Explanation:</b> When there are ties, the first occurrence of the largest value is printed.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three integers</li>
      <li>Numbers will be between -1000 and 1000</li>
      <li>Print the largest number as output</li>
      <li>Handle cases where numbers may be equal</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "25", "stdinput": "15\n25\n10" },
    { "id": 2, "input": [], "expected": "8", "stdinput": "8\n8\n5" },
    { "id": 3, "input": [], "expected": "-2", "stdinput": "-5\n-2\n-10" },
    { "id": 4, "input": [], "expected": "100", "stdinput": "100\n50\n100" },
    { "id": 5, "input": [], "expected": "45", "stdinput": "45\n30\n20" },
  ],

  "templates": {
    "python": "a = int(input())\nb = int(input())\nc = int(input())\n\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        \n        if (a >= b && a >= c) {\n            System.out.println(a);\n        } else if (b >= a && b >= c) {\n            System.out.println(b);\n        } else {\n            System.out.println(c);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [a, b, c] = input;\n        if (a >= b && a >= c) {\n            console.log(a);\n        } else if (b >= a && b >= c) {\n            console.log(b);\n        } else {\n            console.log(c);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    \n    if (a >= b && a >= c) {\n        std::cout << a << std::endl;\n    } else if (b >= a && b >= c) {\n        std::cout << b << std::endl;\n    } else {\n        std::cout << c << std::endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "a = int(input())\nb = int(input())\nc = int(input())\n\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        \n        if (a >= b && a >= c) {\n            System.out.println(a);\n        } else if (b >= a && b >= c) {\n            System.out.println(b);\n        } else {\n            System.out.println(c);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [a, b, c] = input;\n        if (a >= b && a >= c) {\n            console.log(a);\n        } else if (b >= a && b >= c) {\n            console.log(b);\n        } else {\n            console.log(c);\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    \n    if (a >= b && a >= c) {\n        std::cout << a << std::endl;\n    } else if (b >= a && b >= c) {\n        std::cout << b << std::endl;\n    } else {\n        std::cout << c << std::endl;\n    }\n    return 0;\n}"
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