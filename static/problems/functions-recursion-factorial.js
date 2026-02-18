module.exports = {
  "title": "Factorial of N – Recursive Factorial",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Create a recursive function to calculate the factorial of a number N.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a non-negative integer N</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer N from input</li>
      <li>Create a recursive function called <code>factorial(n)</code></li>
      <li>The function should return the factorial of N (N!)</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
Output:
120</pre>
    <p><b>Explanation:</b> 5! = 5×4×3×2×1 = 120</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
0
Output:
1</pre>
    <p><b>Explanation:</b> 0! = 1 by mathematical definition</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "120", 
      "stdinput": "5",
      "explanation": "5! = 120" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1", 
      "stdinput": "0",
      "explanation": "0! = 1" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "1! = 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "2", 
      "stdinput": "2",
      "explanation": "2! = 2" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "6", 
      "stdinput": "3",
      "explanation": "3! = 6" 
    }
  ],

  "templates": {
    "python": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\n# main code\nn = int(input())\nprint(factorial(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static long factorial(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n * factorial(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(factorial(n));\n    }\n}",
    "javascript": "function factorial(n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(factorial(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nlong long factorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\n# main code\nn = int(input())\nprint(factorial(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static long factorial(int n) {\n        if (n <= 1) {\n            return 1;\n        }\n        return n * factorial(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(factorial(n));\n    }\n}",
    "javascript": "function factorial(n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(factorial(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nlong long factorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}"
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