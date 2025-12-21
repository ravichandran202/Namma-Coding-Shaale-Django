module.exports =  {
  "title": "Area of Circle",
  "difficulty": "easy",
  "acceptance": "99.2%",

  "description": `
    <p>Write a program that takes the radius of a circle as input and calculates its area.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read the radius as an integer input</li>
      <li>Use π (pi) value : <code>3.14</code></li>
      <li>Calculate area using formula: π × radius²</li>
      <li>Print the area formatted to 2 decimal places</li>
    </ul>
    <p>This problem teaches mathematical calculations and using constants</p>
    <pre class="constraints">Formula:
area = π × radius²</pre>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: Area of circle: 78.54</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: Area of circle: 153.94</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be a positive integer</li>
      <li>Use π (pi) value : <code>3.14</code></li>
      <li>Output must be formatted to 2 decimal places</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Area of circle: 78.50", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "Area of circle: 153.86", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "Area of circle: 3.14", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "Area of circle: 12.56", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "Area of circle: 314.00", "stdinput": "10" },
    { "id": 6, "input": [], "expected": "Area of circle: 0.00", "stdinput": "0" },
    { "id": 7, "input": [], "expected": "Area of circle: 1256.00", "stdinput": "20" },
    { "id": 8, "input": [], "expected": "Area of circle: 28.26", "stdinput": "3" },
    { "id": 9, "input": [], "expected": "Area of circle: 50.24", "stdinput": "4" },
    { "id": 10, "input": [], "expected": "Area of circle: 113.04", "stdinput": "6" }
  ],

  "templates": {
    "python": `radius = int(input())\narea = 3.14 * (radius ** 2)\nprint(f"Area of circle: {area:.2f}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int radius = scanner.nextInt();\n        double area = Math.PI * Math.pow(radius, 2);\n        System.out.printf(\"Area of circle: %.2f%n\", area);\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (radius) => {\n    const r = parseInt(radius);\n    const area = Math.PI * Math.pow(r, 2);\n    console.log(\"Area of circle: \" + area.toFixed(2));\n    readline.close();\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n#include <cmath>\n\nint main() {\n    int radius;\n    std::cin >> radius;\n    double area = M_PI * pow(radius, 2);\n    std::cout << std::fixed << std::setprecision(2);\n    std::cout << \"Area of circle: \" << area << std::endl;\n    return 0;\n}`
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