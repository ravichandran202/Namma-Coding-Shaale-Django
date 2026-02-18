module.exports = {
  "title": "Return Factorial",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>Create a function that takes a number as input and returns its factorial.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a non-negative integer</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a function called <code>calculate_factorial</code> that takes one parameter</li>
      <li>The function should calculate the factorial of the number</li>
      <li>Factorial of n (n!) = 1 × 2 × 3 × ... × n</li>
      <li>Factorial of 0 is 1</li>
      <li>The function should return the factorial result</li>
      <li>Call the function with the input number and print the returned value</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input is a non-negative integer (0 or positive)</li>
      <li>Function must <b>return</b> the factorial, not print it</li>
      <li>Function must be named exactly <code>calculate_factorial</code></li>
      <li>0! = 1 by definition</li>
      <li>Main code should call the function and print the result</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
Output:
120</pre>
    <p><b>Explanation:</b> Function returns 5! = 1 × 2 × 3 × 4 × 5 = 120</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
0
Output:
1</pre>
    <p><b>Explanation:</b> Function returns 0! = 1</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "120", 
      "stdinput": "5",
      "explanation": "Returns 5! = 120" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1", 
      "stdinput": "0",
      "explanation": "Returns 0! = 1" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Returns 1! = 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "2", 
      "stdinput": "2",
      "explanation": "Returns 2! = 2" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "6", 
      "stdinput": "3",
      "explanation": "Returns 3! = 6" 
    }
  ],

  "templates": {
    "python": "def calculate_factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\n# Main code\nnum = int(input())\nresult = calculate_factorial(num)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static long calculate_factorial(int n) {\n        long result = 1;\n        for (int i = 1; i <= n; i++) {\n            result *= i;\n        }\n        return result;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        long result = calculate_factorial(num);\n        System.out.println(result);\n    }\n}",
    "javascript": "function calculate_factorial(n) {\n    let result = 1;\n    for (let i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    const result = calculate_factorial(num);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nlong long calculate_factorial(int n) {\n    long long result = 1;\n    for (int i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nint main() {\n    int num;\n    cin >> num;\n    long long result = calculate_factorial(num);\n    cout << result << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def calculate_factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\n# Main code\nnum = int(input())\nresult = calculate_factorial(num)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static long calculate_factorial(int n) {\n        long result = 1;\n        for (int i = 1; i <= n; i++) {\n            result *= i;\n        }\n        return result;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        long result = calculate_factorial(num);\n        System.out.println(result);\n    }\n}",
    "javascript": "function calculate_factorial(n) {\n    let result = 1;\n    for (let i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    const result = calculate_factorial(num);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nlong long calculate_factorial(int n) {\n    long long result = 1;\n    for (int i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nint main() {\n    int num;\n    cin >> num;\n    long long result = calculate_factorial(num);\n    cout << result << endl;\n    return 0;\n}"
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