module.exports = {
  "title": "Sum of First N Numbers – Recursive Summation",
  "difficulty": "medium",
  "acceptance": "97%",

  "description": `
    <p>Create a recursive function to calculate the sum of numbers from 1 to N.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a positive integer N</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer N from input</li>
      <li>Create a recursive function called <code>find_sum(n)</code></li>
      <li>The function should return the sum of numbers from 1 to N</li>
      <li>Use recursion with base case when n == 1</li>
      <li>Recursive formula: sum(n) = n + sum(n-1)</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
Output:
15</pre>
    <p><b>Explanation:</b> 1+2+3+4+5 = 15</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10
Output:
55</pre>
    <p><b>Explanation:</b> 1+2+3+4+5+6+7+8+9+10 = 55</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "15", 
      "stdinput": "5",
      "explanation": "1+2+3+4+5 = 15" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "55", 
      "stdinput": "10",
      "explanation": "1 to 10 sum = 55" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Sum of 1 = 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0",
      "explanation": "Sum of 0 = 0 (but will return 0)" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "3", 
      "stdinput": "2",
      "explanation": "1+2 = 3" 
    }
  ],

  "templates": {
    "python": "def find_sum(n):\n    if n <= 1:\n        return n\n    return n + find_sum(n-1)\n\n# main code\nn = int(input())\nprint(find_sum(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int find_sum(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return n + find_sum(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(find_sum(n));\n    }\n}",
    "javascript": "function find_sum(n) {\n    if (n <= 1) {\n        return n;\n    }\n    return n + find_sum(n - 1);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(find_sum(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint find_sum(int n) {\n    if (n <= 1) {\n        return n;\n    }\n    return n + find_sum(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << find_sum(n) << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def find_sum(n):\n    if n <= 1:\n        return n\n    return n + find_sum(n-1)\n\n# main code\nn = int(input())\nprint(find_sum(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int find_sum(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return n + find_sum(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(find_sum(n));\n    }\n}",
    "javascript": "function find_sum(n) {\n    if (n <= 1) {\n        return n;\n    }\n    return n + find_sum(n - 1);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(find_sum(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint find_sum(int n) {\n    if (n <= 1) {\n        return n;\n    }\n    return n + find_sum(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << find_sum(n) << endl;\n    return 0;\n}"
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