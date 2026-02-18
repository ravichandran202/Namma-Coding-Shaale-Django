module.exports = {
  "title": "Power Calculator",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Calculate x raised to the power y using a while loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integers: base (x) and exponent (y)</li>
      <li>Use while loop to multiply base repeatedly</li>
      <li>Handle positive exponents only</li>
      <li>Print the final result</li>
    </ul>
    <p><b>Mathematical Concept:</b></p>
    <ul>
      <li>x^y means x multiplied by itself y times</li>
      <li>Any number to power 0 is 1</li>
      <li>Example: 2^3 = 2 × 2 × 2 = 8</li>
    </ul>
    <p>This problem teaches exponentiation using iterative multiplication.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
2
3
Output: 8</pre>
    <p><b>Explanation:</b> 2 × 2 × 2 = 8</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
4
Output: 625</pre>
    <p><b>Explanation:</b> 5 × 5 × 5 × 5 = 625</p>
  `,

  "conditions": `
    <ul>
      <li>Base (x) will be between -10 and 10</li>
      <li>Exponent (y) will be between 0 and 10</li>
      <li>Handle negative bases correctly</li>
      <li>Output should be an integer</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "8", "stdinput": "2\n3" },
    { "id": 2, "input": [], "expected": "625", "stdinput": "5\n4" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "10\n0" },
    { "id": 4, "input": [], "expected": "9", "stdinput": "3\n2" },
    { "id": 5, "input": [], "expected": "1", "stdinput": "7\n0" },
    { "id": 6, "input": [], "expected": "-8", "stdinput": "-2\n3" }
  ],

  "templates": {
    "python": "x = int(input())\ny = int(input())\nresult = 1\nwhile y > 0:\n    result *= x\n    y -= 1\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        int y = scanner.nextInt();\n        int result = 1;\n        while (y > 0) {\n            result *= x;\n            y--;\n        }\n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.question('', (first) => {\n    input.push(first);\n    readline.question('', (second) => {\n        input.push(second);\n        const x = parseInt(input[0]);\n        const y = parseInt(input[1]);\n        let result = 1;\n        let count = y;\n        while (count > 0) {\n            result *= x;\n            count--;\n        }\n        console.log(result);\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int x, y;\n    std::cin >> x >> y;\n    int result = 1;\n    while (y > 0) {\n        result *= x;\n        y--;\n    }\n    std::cout << result << std::endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "x = int(input())\ny = int(input())\nresult = 1\nwhile y > 0:\n    result *= x\n    y -= 1\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        int y = scanner.nextInt();\n        int result = 1;\n        while (y > 0) {\n            result *= x;\n            y--;\n        }\n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet input = [];\nreadline.question('', (first) => {\n    input.push(first);\n    readline.question('', (second) => {\n        input.push(second);\n        const x = parseInt(input[0]);\n        const y = parseInt(input[1]);\n        let result = 1;\n        let count = y;\n        while (count > 0) {\n            result *= x;\n            count--;\n        }\n        console.log(result);\n        readline.close();\n    });\n});",
    "c++": "#include <iostream>\n\nint main() {\n    int x, y;\n    std::cin >> x >> y;\n    int result = 1;\n    while (y > 0) {\n        result *= x;\n        y--;\n    }\n    std::cout << result << std::endl;\n    return 0;\n}"
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