module.exports = {
    "title": "Swap Two Values",
    "difficulty": "easy",
    "acceptance": "96.5%",
  
    "description": `
      <p>Write a program that takes two variables as input, swaps their values, and prints the result.</p>
      <p><b>Requirements:</b></p>
      <ul>
        <li>Read two values (integers or strings) from input</li>
        <li>Swap the values of the two variables</li>
        <li>Print the first variable (now holding the second value)</li>
        <li>Print the second variable (now holding the first value)</li>
      </ul>
      <p>This problem demonstrates variable assignment and the logic of swapping data. In Python, try using the tuple unpacking method: <code>a, b = b, a</code>.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
5
10
Output:
10
5</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
100
200
Output:
200
100</pre>
      
      <h3>Example 3</h3>
      <pre class="constraints">Input:
-5
3
Output:
3
-5</pre>
    `,
  
    "conditions": `
      <ul>
        <li>Input values will be valid integers or strings</li>
        <li>Output must be printed on separate lines</li>
      </ul>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "10\n5", "stdinput": "5\n10" },
      { "id": 2, "input": [], "expected": "200\n100", "stdinput": "100\n200" },
      { "id": 3, "input": [], "expected": "3\n-5", "stdinput": "-5\n3" },
      { "id": 4, "input": [], "expected": "0\n1", "stdinput": "1\n0" },
      { "id": 5, "input": [], "expected": "99\n11", "stdinput": "11\n99" },
    ],
  
    "templates": {
      "python": `a = input()\nb = input()\n\n# Swap the values\na, b = b, a\n\nprint(a)\nprint(b)`,
      "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        \n        // Swapping using a temporary variable\n        int temp = a;\n        a = b;\n        b = temp;\n        \n        System.out.println(a);\n        System.out.println(b);\n    }\n}`,
      "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n});\n\nreadline.on('close', () => {\n    if (lines.length >= 2) {\n        let a = lines[0];\n        let b = lines[1];\n        \n        // Swapping using array destructuring\n        [a, b] = [b, a];\n        \n        console.log(a);\n        console.log(b);\n    }\n});`,
      "c++": `#include <iostream>\n#include <utility>\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    \n    // Built-in swap function\n    std::swap(a, b);\n    \n    std::cout << a << std::endl;\n    std::cout << b << std::endl;\n    return 0;\n}`
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