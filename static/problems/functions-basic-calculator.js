module.exports = {
  "title": "Basic Arithmetic Calculator",
  "difficulty": "medium",
  "acceptance": "98%",

  "description": `
    <p>Create four separate functions for basic arithmetic operations: addition, subtraction, multiplication, and division.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing two integers separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read two integers from input</li>
      <li>Create four separate functions:</li>
      <ul>
        <li><code>add_numbers(num1, num2)</code> - returns sum of two numbers</li>
        <li><code>subtract_numbers(num1, num2)</code> - returns difference (first minus second)</li>
        <li><code>multiply_numbers(num1, num2)</code> - returns product of two numbers</li>
        <li><code>divide_numbers(num1, num2)</code> - returns division result (first divided by second)</li>
      </ul>
      <li>Each function should take two numbers as parameters and return the result</li>
      <li>Call all four functions with the input numbers and print the results with labels</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10 5
Output:
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2.0</pre>
    <p><b>Explanation:</b> Four functions calculate: 10+5=15, 10-5=5, 10×5=50, 10÷5=2.0</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
8 4
Output:
Addition: 12
Subtraction: 4
Multiplication: 32
Division: 2.0</pre>
    <p><b>Explanation:</b> 8+4=12, 8-4=4, 8×4=32, 8÷4=2.0</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2.0", 
      "stdinput": "10 5",
      "explanation": "10+5=15, 10-5=5, 10×5=50, 10÷5=2.0" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Addition: 12\nSubtraction: 4\nMultiplication: 32\nDivision: 2.0", 
      "stdinput": "8 4",
      "explanation": "8+4=12, 8-4=4, 8×4=32, 8÷4=2.0" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Addition: 100\nSubtraction: 0\nMultiplication: 2500\nDivision: 1.0", 
      "stdinput": "50 50",
      "explanation": "50+50=100, 50-50=0, 50×50=2500, 50÷50=1.0" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Addition: 33\nSubtraction: -1\nMultiplication: 272\nDivision: 0.9411764705882353", 
      "stdinput": "16 17",
      "explanation": "16+17=33, 16-17=-1, 16×17=272, 16÷17≈0.941" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "Addition: 200\nSubtraction: 0\nMultiplication: 10000\nDivision: 1.0", 
      "stdinput": "100 100",
      "explanation": "100+100=200, 100-100=0, 100×100=10000, 100÷100=1.0" 
    },
  ],

  "templates": {
    "python": "def add_numbers(num1, num2):\n    return num1 + num2\n\ndef subtract_numbers(num1, num2):\n    return num1 - num2\n\ndef multiply_numbers(num1, num2):\n    return num1 * num2\n\ndef divide_numbers(num1, num2):\n    return num1 / num2\n\n# Main code\na, b = map(int, input().split())\nprint(\"Addition:\", add_numbers(a, b))\nprint(\"Subtraction:\", subtract_numbers(a, b))\nprint(\"Multiplication:\", multiply_numbers(a, b))\nprint(\"Division:\", divide_numbers(a, b))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int add_numbers(int num1, int num2) {\n        return num1 + num2;\n    }\n    \n    public static int subtract_numbers(int num1, int num2) {\n        return num1 - num2;\n    }\n    \n    public static int multiply_numbers(int num1, int num2) {\n        return num1 * num2;\n    }\n    \n    public static double divide_numbers(int num1, int num2) {\n        return (double) num1 / num2;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        \n        System.out.println(\"Addition: \" + add_numbers(a, b));\n        System.out.println(\"Subtraction: \" + subtract_numbers(a, b));\n        System.out.println(\"Multiplication: \" + multiply_numbers(a, b));\n        System.out.println(\"Division: \" + divide_numbers(a, b));\n    }\n}",
    "javascript": "function add_numbers(num1, num2) {\n    return num1 + num2;\n}\n\nfunction subtract_numbers(num1, num2) {\n    return num1 - num2;\n}\n\nfunction multiply_numbers(num1, num2) {\n    return num1 * num2;\n}\n\nfunction divide_numbers(num1, num2) {\n    return num1 / num2;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    console.log(\"Addition: \" + add_numbers(a, b));\n    console.log(\"Subtraction: \" + subtract_numbers(a, b));\n    console.log(\"Multiplication: \" + multiply_numbers(a, b));\n    console.log(\"Division: \" + divide_numbers(a, b));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint add_numbers(int num1, int num2) {\n    return num1 + num2;\n}\n\nint subtract_numbers(int num1, int num2) {\n    return num1 - num2;\n}\n\nint multiply_numbers(int num1, int num2) {\n    return num1 * num2;\n}\n\ndouble divide_numbers(int num1, int num2) {\n    return static_cast<double>(num1) / num2;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    \n    cout << \"Addition: \" << add_numbers(a, b) << endl;\n    cout << \"Subtraction: \" << subtract_numbers(a, b) << endl;\n    cout << \"Multiplication: \" << multiply_numbers(a, b) << endl;\n    cout << fixed << setprecision(1);\n    cout << \"Division: \" << divide_numbers(a, b) << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "def add_numbers(num1, num2):\n    return num1 + num2\n\ndef subtract_numbers(num1, num2):\n    return num1 - num2\n\ndef multiply_numbers(num1, num2):\n    return num1 * num2\n\ndef divide_numbers(num1, num2):\n    return num1 / num2\n\n# Main code\na, b = map(int, input().split())\nprint(\"Addition:\", add_numbers(a, b))\nprint(\"Subtraction:\", subtract_numbers(a, b))\nprint(\"Multiplication:\", multiply_numbers(a, b))\nprint(\"Division:\", divide_numbers(a, b))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int add_numbers(int num1, int num2) {\n        return num1 + num2;\n    }\n    \n    public static int subtract_numbers(int num1, int num2) {\n        return num1 - num2;\n    }\n    \n    public static int multiply_numbers(int num1, int num2) {\n        return num1 * num2;\n    }\n    \n    public static double divide_numbers(int num1, int num2) {\n        return (double) num1 / num2;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        \n        System.out.println(\"Addition: \" + add_numbers(a, b));\n        System.out.println(\"Subtraction: \" + subtract_numbers(a, b));\n        System.out.println(\"Multiplication: \" + multiply_numbers(a, b));\n        System.out.println(\"Division: \" + divide_numbers(a, b));\n    }\n}",
    "javascript": "function add_numbers(num1, num2) {\n    return num1 + num2;\n}\n\nfunction subtract_numbers(num1, num2) {\n    return num1 - num2;\n}\n\nfunction multiply_numbers(num1, num2) {\n    return num1 * num2;\n}\n\nfunction divide_numbers(num1, num2) {\n    return num1 / num2;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    console.log(\"Addition: \" + add_numbers(a, b));\n    console.log(\"Subtraction: \" + subtract_numbers(a, b));\n    console.log(\"Multiplication: \" + multiply_numbers(a, b));\n    console.log(\"Division: \" + divide_numbers(a, b));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint add_numbers(int num1, int num2) {\n    return num1 + num2;\n}\n\nint subtract_numbers(int num1, int num2) {\n    return num1 - num2;\n}\n\nint multiply_numbers(int num1, int num2) {\n    return num1 * num2;\n}\n\ndouble divide_numbers(int num1, int num2) {\n    return static_cast<double>(num1) / num2;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    \n    cout << \"Addition: \" << add_numbers(a, b) << endl;\n    cout << \"Subtraction: \" << subtract_numbers(a, b) << endl;\n    cout << \"Multiplication: \" << multiply_numbers(a, b) << endl;\n    cout << fixed << setprecision(1);\n    cout << \"Division: \" << divide_numbers(a, b) << endl;\n    \n    return 0;\n}"
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