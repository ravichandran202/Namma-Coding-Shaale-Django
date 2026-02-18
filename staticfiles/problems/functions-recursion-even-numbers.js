module.exports = {
  "title": "Print Even Numbers – Recursive",
  "difficulty": "medium",
  "acceptance": "96%",

  "description": `
    <p>Create a recursive function to print all even numbers from 1 to N.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a positive integer N</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer N from input</li>
      <li>Create a recursive function called <code>print_evens(n)</code></li>
      <li>The function should print even numbers from 1 to N (inclusive), one per line</li>
      <li>Use recursion with base case when n == 0</li>
      <li>Make recursive call first, then check if current n is even and print it</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10
Output:
2
4
6
8
10</pre>
    <p><b>Explanation:</b> Even numbers from 1 to 10: 2, 4, 6, 8, 10</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
Output:
2
4</pre>
    <p><b>Explanation:</b> Even numbers from 1 to 5: 2, 4</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "2\n4\n6\n8\n10", 
      "stdinput": "10",
      "explanation": "Even numbers 2-10" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "2\n4", 
      "stdinput": "5",
      "explanation": "Even numbers 2, 4" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "2", 
      "stdinput": "2",
      "explanation": "Only even number 2" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "", 
      "stdinput": "1",
      "explanation": "No even numbers in 1" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "", 
      "stdinput": "0",
      "explanation": "No even numbers" 
    }
  ],

  "templates": {
    "python": "def print_evens(n):\n    if n == 0:\n        return\n    print_evens(n-1)\n    if n % 2 == 0:\n        print(n)\n\n# main code\nn = int(input())\nprint_evens(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_evens(int n) {\n        if (n == 0) {\n            return;\n        }\n        print_evens(n - 1);\n        if (n % 2 == 0) {\n            System.out.println(n);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_evens(n);\n    }\n}",
    "javascript": "function print_evens(n) {\n    if (n === 0) {\n        return;\n    }\n    print_evens(n - 1);\n    if (n % 2 === 0) {\n        console.log(n);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_evens(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_evens(int n) {\n    if (n == 0) {\n        return;\n    }\n    print_evens(n - 1);\n    if (n % 2 == 0) {\n        cout << n << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_evens(n);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_evens(n):\n    if n == 0:\n        return\n    print_evens(n-1)\n    if n % 2 == 0:\n        print(n)\n\n# main code\nn = int(input())\nprint_evens(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_evens(int n) {\n        if (n == 0) {\n            return;\n        }\n        print_evens(n - 1);\n        if (n % 2 == 0) {\n            System.out.println(n);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_evens(n);\n    }\n}",
    "javascript": "function print_evens(n) {\n    if (n === 0) {\n        return;\n    }\n    print_evens(n - 1);\n    if (n % 2 === 0) {\n        console.log(n);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_evens(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_evens(int n) {\n    if (n == 0) {\n        return;\n    }\n    print_evens(n - 1);\n    if (n % 2 == 0) {\n        cout << n << endl;\n    }\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_evens(n);\n    return 0;\n}"
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