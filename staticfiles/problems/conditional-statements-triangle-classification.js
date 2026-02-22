module.exports = {
  "title": "Triangle Classification",
  "difficulty": "medium",
  "acceptance": "80%",

  "description": `
    <p>Classify a triangle based on its side lengths.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read three integers representing triangle sides</li>
      <li>Determine the type of triangle based on side equality</li>
      <li>Print the corresponding triangle classification</li>
    </ul>
    <p><b>Triangle Types:</b></p>
    <ul>
      <li>Equilateral: All three sides are equal</li>
      <li>Isosceles: Exactly two sides are equal</li>
      <li>Scalene: All three sides are different</li>
    </ul>
    <p>This problem teaches logical conditions and geometric classification using side comparisons.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
5
3
Output: Isosceles</pre>
    <p><b>Explanation:</b> Two sides (5 and 5) are equal, making it an isosceles triangle.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
4
4
Output: Equilateral</pre>
    <p><b>Explanation:</b> All three sides are equal, making it an equilateral triangle.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 3
4
5
Output: Scalene</pre>
    <p><b>Explanation:</b> All three sides are different, making it a scalene triangle.</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 7
7
2
Output: Isosceles</pre>
    <p><b>Explanation:</b> Two sides (7 and 7) are equal, making it an isosceles triangle.</p>
  `,

  "conditions": `
    <ul>
      <li>Input will be three positive integers</li>
      <li>Side lengths will be between 1 and 1000</li>
      <li>Assume the input forms a valid triangle</li>
      <li>Output must be exactly one of: "Equilateral", "Isosceles", or "Scalene" (case-sensitive)</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Isosceles", "stdinput": "5\n5\n3" },
    { "id": 2, "input": [], "expected": "Equilateral", "stdinput": "4\n4\n4" },
    { "id": 3, "input": [], "expected": "Scalene", "stdinput": "3\n4\n5" },
    { "id": 4, "input": [], "expected": "Isosceles", "stdinput": "7\n7\n2" },
    { "id": 5, "input": [], "expected": "Equilateral", "stdinput": "10\n10\n10" },
  ],

  "templates": {
    "python": "a = int(input())\nb = int(input())\nc = int(input())\n\n# TODO: Classify the triangle and print the result\n# Equilateral, Isosceles, or Scalene\n",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        \n        // TODO: Classify the triangle and print the result\n        // Equilateral, Isosceles, or Scalene\n        \n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [a, b, c] = input;\n        \n        // TODO: Classify the triangle and print the result\n        // Equilateral, Isosceles, or Scalene\n        \n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    \n    // TODO: Classify the triangle and print the result\n    // Equilateral, Isosceles, or Scalene\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "a = int(input())\nb = int(input())\nc = int(input())\n\nif a == b == c:\n    print(\"Equilateral\")\nelif a == b or b == c or a == c:\n    print(\"Isosceles\")\nelse:\n    print(\"Scalene\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        \n        if (a == b && b == c) {\n            System.out.println(\"Equilateral\");\n        } else if (a == b || b == c || a == c) {\n            System.out.println(\"Isosceles\");\n        } else {\n            System.out.println(\"Scalene\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.on('line', (line) => {\n    input.push(parseInt(line));\n    if (input.length === 3) {\n        const [a, b, c] = input;\n        if (a === b && b === c) {\n            console.log(\"Equilateral\");\n        } else if (a === b || b === c || a === c) {\n            console.log(\"Isosceles\");\n        } else {\n            console.log(\"Scalene\");\n        }\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int a, b, c;\n    std::cin >> a >> b >> c;\n    \n    if (a == b && b == c) {\n        std::cout << \"Equilateral\" << std::endl;\n    } else if (a == b || b == c || a == c) {\n        std::cout << \"Isosceles\" << std::endl;\n    } else {\n        std::cout << \"Scalene\" << std::endl;\n    }\n    return 0;\n}"
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