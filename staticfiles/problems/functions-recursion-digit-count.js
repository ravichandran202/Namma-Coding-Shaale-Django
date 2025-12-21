module.exports = {
  "title": "Count Digits",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create a recursive function to count the number of digits in a number.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer (can be positive, negative, or zero)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a recursive function called <code>count_digits(n)</code></li>
      <li>The function should return the number of digits in the absolute value of the number</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
1234
Output:
4</pre>
    <p><b>Explanation:</b> 1234 has 4 digits</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
-567
Output:
3</pre>
    <p><b>Explanation:</b> -567 has 3 digits (ignoring minus sign)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "4", 
      "stdinput": "1234",
      "explanation": "1234 has 4 digits" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "3", 
      "stdinput": "-567",
      "explanation": "-567 has 3 digits" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "0",
      "explanation": "0 has 1 digit" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1", 
      "stdinput": "7",
      "explanation": "Single digit" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "6", 
      "stdinput": "123456",
      "explanation": "6 digits" 
    }
  ],

  "templates": {
    "python": "def count_digits(n):\n    n = abs(n)\n    if n == 0:\n        return 1  # Special case for 0\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)\n\n# main code\nn = int(input())\nprint(count_digits(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int count_digits(int n) {\n        n = Math.abs(n);\n        if (n == 0) {\n            return 1;  // Special case for 0\n        }\n        if (n < 10) {\n            return 1;\n        }\n        return 1 + count_digits(n / 10);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(count_digits(n));\n    }\n}",
    "javascript": "function count_digits(n) {\n    n = Math.abs(n);\n    if (n === 0) {\n        return 1;  // Special case for 0\n    }\n    if (n < 10) {\n        return 1;\n    }\n    return 1 + count_digits(Math.floor(n / 10));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(count_digits(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint count_digits(int n) {\n    n = abs(n);\n    if (n == 0) {\n        return 1;  // Special case for 0\n    }\n    if (n < 10) {\n        return 1;\n    }\n    return 1 + count_digits(n / 10);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << count_digits(n) << endl;\n    return 0;\n}"
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