module.exports =  {
  "title": "Simple Arithmetic Operations",
  "difficulty": "easy",
  "acceptance": "99.8%",

  "description": `
    <p>Write a program that takes two integer numbers as input and performs all basic arithmetic operations: addition, subtraction, multiplication, and division.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read two integer inputs</li>
      <li>Perform addition, subtraction, multiplication, and division</li>
      <li>Print all operations with their results in the specified format</li>
      <li>For division, show the result as a float</li>
    </ul>
    <p>This problem teaches all basic arithmetic operations with integers and formatted output in programming.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 
10
3
Output:
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3.3333333333333335</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
2
Output:
5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.5</pre>
  `,

  "conditions": `
    <ul>
      <li>Input will be two valid integers</li>
      <li>The second number will not be zero for division</li>
      <li>Numbers can be positive, negative, or zero</li>
      <li>Output must follow the exact format shown in examples</li>
      <li>Division result should be shown as a float</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10 + 3 = 13\n10 - 3 = 7\n10 * 3 = 30\n10 / 3 = 3.3333333333333335", "stdinput": "10\n3" },
    { "id": 2, "input": [], "expected": "5 + 2 = 7\n5 - 2 = 3\n5 * 2 = 10\n5 / 2 = 2.5", "stdinput": "5\n2" },
    { "id": 3, "input": [], "expected": "8 + 4 = 12\n8 - 4 = 4\n8 * 4 = 32\n8 / 4 = 2.0", "stdinput": "8\n4" },
    { "id": 4, "input": [], "expected": "0 + 5 = 5\n0 - 5 = -5\n0 * 5 = 0\n0 / 5 = 0.0", "stdinput": "0\n5" },
    { "id": 5, "input": [], "expected": "-6 + 3 = -3\n-6 - 3 = -9\n-6 * 3 = -18\n-6 / 3 = -2.0", "stdinput": "-6\n3" },
    { "id": 6, "input": [], "expected": "15 + 3 = 18\n15 - 3 = 12\n15 * 3 = 45\n15 / 3 = 5.0", "stdinput": "15\n3" },
    { "id": 7, "input": [], "expected": "100 + 50 = 150\n100 - 50 = 50\n100 * 50 = 5000\n100 / 50 = 2.0", "stdinput": "100\n50" },
    { "id": 8, "input": [], "expected": "1 + 1 = 2\n1 - 1 = 0\n1 * 1 = 1\n1 / 1 = 1.0", "stdinput": "1\n1" },
    { "id": 9, "input": [], "expected": "-10 + -5 = -15\n-10 - -5 = -5\n-10 * -5 = 50\n-10 / -5 = 2.0", "stdinput": "-10\n-5" },
    { "id": 10, "input": [], "expected": "7 + 2 = 9\n7 - 2 = 5\n7 * 2 = 14\n7 / 2 = 3.5", "stdinput": "7\n2" }
  ],

  "templates": {
    "python": `num1 = int(input())\nnum2 = int(input())\n\nprint(f"{num1} + {num2} = {num1 + num2}")\nprint(f"{num1} - {num2} = {num1 - num2}")\nprint(f"{num1} * {num2} = {num1 * num2}")\nprint(f"{num1} / {num2} = {num1 / num2}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        System.out.println(num1 + \" + \" + num2 + \" = \" + (num1 + num2));\n        System.out.println(num1 + \" - \" + num2 + \" = \" + (num1 - num2));\n        System.out.println(num1 + \" * \" + num2 + \" = \" + (num1 * num2));\n        System.out.println(num1 + \" / \" + num2 + \" = \" + ((double)num1 / num2));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] + \" + \" + inputs[1] + \" = \" + (inputs[0] + inputs[1]));\n        console.log(inputs[0] + \" - \" + inputs[1] + \" = \" + (inputs[0] - inputs[1]));\n        console.log(inputs[0] + \" * \" + inputs[1] + \" = \" + (inputs[0] * inputs[1]));\n        console.log(inputs[0] + \" / \" + inputs[1] + \" = \" + (inputs[0] / inputs[1]));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int num1, num2;\n    std::cin >> num1 >> num2;\n    \n    std::cout << num1 << \" + \" << num2 << \" = \" << (num1 + num2) << std::endl;\n    std::cout << num1 << \" - \" << num2 << \" = \" << (num1 - num2) << std::endl;\n    std::cout << num1 << \" * \" << num2 << \" = \" << (num1 * num2) << std::endl;\n    std::cout << num1 << \" / \" << num2 << \" = \" << std::fixed << std::setprecision(15) << (static_cast<double>(num1) / num2) << std::endl;\n    \n    return 0;\n}`
  },


  "solutions": {
    "python": `num1 = int(input())\nnum2 = int(input())\n\nprint(f"{num1} + {num2} = {num1 + num2}")\nprint(f"{num1} - {num2} = {num1 - num2}")\nprint(f"{num1} * {num2} = {num1 * num2}")\nprint(f"{num1} / {num2} = {num1 / num2}")`,
    "java": `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num1 = scanner.nextInt();\n        int num2 = scanner.nextInt();\n        \n        System.out.println(num1 + \" + \" + num2 + \" = \" + (num1 + num2));\n        System.out.println(num1 + \" - \" + num2 + \" = \" + (num1 - num2));\n        System.out.println(num1 + \" * \" + num2 + \" = \" + (num1 * num2));\n        System.out.println(num1 + \" / \" + num2 + \" = \" + ((double)num1 / num2));\n    }\n}`,
    "javascript": `const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet inputs = [];\nreadline.question('', (first) => {\n    inputs.push(parseInt(first));\n    readline.question('', (second) => {\n        inputs.push(parseInt(second));\n        console.log(inputs[0] + \" + \" + inputs[1] + \" = \" + (inputs[0] + inputs[1]));\n        console.log(inputs[0] + \" - \" + inputs[1] + \" = \" + (inputs[0] - inputs[1]));\n        console.log(inputs[0] + \" * \" + inputs[1] + \" = \" + (inputs[0] * inputs[1]));\n        console.log(inputs[0] + \" / \" + inputs[1] + \" = \" + (inputs[0] / inputs[1]));\n        readline.close();\n    });\n});`,
    "c++": `#include <iostream>\n#include <iomanip>\n\nint main() {\n    int num1, num2;\n    std::cin >> num1 >> num2;\n    \n    std::cout << num1 << \" + \" << num2 << \" = \" << (num1 + num2) << std::endl;\n    std::cout << num1 << \" - \" << num2 << \" = \" << (num1 - num2) << std::endl;\n    std::cout << num1 << \" * \" << num2 << \" = \" << (num1 * num2) << std::endl;\n    std::cout << num1 << \" / \" << num2 << \" = \" << std::fixed << std::setprecision(15) << (static_cast<double>(num1) / num2) << std::endl;\n    \n    return 0;\n}`
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