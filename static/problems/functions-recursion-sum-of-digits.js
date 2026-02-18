module.exports = {
  "title": "Sum of Digits – Recursive",
  "difficulty": "hard",
  "acceptance": "97%",

  "description": `
    <p>Create a recursive function to calculate the sum of digits of a number.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer (can be positive, negative, or zero)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a recursive function called <code>sum_digits(n)</code></li>
      <li>The function should return the sum of digits of the absolute value of the number</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
123
Output:
6</pre>
    <p><b>Explanation:</b> 1 + 2 + 3 = 6</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
-456
Output:
15</pre>
    <p><b>Explanation:</b> 4 + 5 + 6 = 15 (ignoring minus sign)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "6", 
      "stdinput": "123",
      "explanation": "1+2+3=6" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "15", 
      "stdinput": "-456",
      "explanation": "4+5+6=15" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0",
      "explanation": "Sum of digits of 0 is 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "5", 
      "stdinput": "5",
      "explanation": "Single digit 5" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "10", 
      "stdinput": "1234",
      "explanation": "1+2+3+4=10" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "45", 
      "stdinput": "123456789",
      "explanation": "Sum of digits 1-9 = 45" 
    }
  ],

  "templates": {
    "python": "def sum_digits(n):\n    n = abs(n)\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n // 10)\n\n# main code\nn = int(input())\nprint(sum_digits(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int sum_digits(int n) {\n        n = Math.abs(n);\n        if (n == 0) {\n            return 0;\n        }\n        return (n % 10) + sum_digits(n / 10);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(sum_digits(n));\n    }\n}",
    "javascript": "function sum_digits(n) {\n    n = Math.abs(n);\n    if (n === 0) {\n        return 0;\n    }\n    return (n % 10) + sum_digits(Math.floor(n / 10));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(sum_digits(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint sum_digits(int n) {\n    n = abs(n);\n    if (n == 0) {\n        return 0;\n    }\n    return (n % 10) + sum_digits(n / 10);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << sum_digits(n) << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def sum_digits(n):\n    n = abs(n)\n    if n == 0:\n        return 0\n    return (n % 10) + sum_digits(n // 10)\n\n# main code\nn = int(input())\nprint(sum_digits(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int sum_digits(int n) {\n        n = Math.abs(n);\n        if (n == 0) {\n            return 0;\n        }\n        return (n % 10) + sum_digits(n / 10);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(sum_digits(n));\n    }\n}",
    "javascript": "function sum_digits(n) {\n    n = Math.abs(n);\n    if (n === 0) {\n        return 0;\n    }\n    return (n % 10) + sum_digits(Math.floor(n / 10));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(sum_digits(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint sum_digits(int n) {\n    n = abs(n);\n    if (n == 0) {\n        return 0;\n    }\n    return (n % 10) + sum_digits(n / 10);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << sum_digits(n) << endl;\n    return 0;\n}"
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