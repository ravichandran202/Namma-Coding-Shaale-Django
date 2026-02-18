module.exports = {
  "title": "Print Numbers 1 to N – Recursive Printing",
  "difficulty": "medium",
  "acceptance": "98%",

  "description": `
    <p>Create a recursive function to print numbers from 1 to N in ascending order.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a positive integer N</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer N from input</li>
      <li>Create a recursive function called <code>print_numbers(n)</code></li>
      <li>The function should print numbers from 1 to N (inclusive), one per line</li>
      <li>Use recursion with base case when n == 0</li>
      <li>Make the recursive call first, then print the number (to achieve ascending order)</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
Output:
1
2
3
4
5</pre>
    <p><b>Explanation:</b> Recursive calls print numbers 1 to 5 in order</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
Output:
1
2
3</pre>
    <p><b>Explanation:</b> Prints numbers 1 to 3</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "1\n2\n3\n4\n5", 
      "stdinput": "5",
      "explanation": "Prints 1 to 5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "1\n2\n3", 
      "stdinput": "3",
      "explanation": "Prints 1 to 3" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Only prints 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "", 
      "stdinput": "0",
      "explanation": "N=0, prints nothing" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", 
      "stdinput": "10",
      "explanation": "Prints 1 to 10" 
    }
  ],

  "templates": {
    "python": "def print_numbers(n):\n    if n == 0:\n        return\n    print_numbers(n-1)\n    print(n)\n\n# main code\nn = int(input())\nprint_numbers(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_numbers(int n) {\n        if (n == 0) {\n            return;\n        }\n        print_numbers(n - 1);\n        System.out.println(n);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_numbers(n);\n    }\n}",
    "javascript": "function print_numbers(n) {\n    if (n === 0) {\n        return;\n    }\n    print_numbers(n - 1);\n    console.log(n);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_numbers(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_numbers(int n) {\n    if (n == 0) {\n        return;\n    }\n    print_numbers(n - 1);\n    cout << n << endl;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_numbers(n);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_numbers(n):\n    if n == 0:\n        return\n    print_numbers(n-1)\n    print(n)\n\n# main code\nn = int(input())\nprint_numbers(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_numbers(int n) {\n        if (n == 0) {\n            return;\n        }\n        print_numbers(n - 1);\n        System.out.println(n);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_numbers(n);\n    }\n}",
    "javascript": "function print_numbers(n) {\n    if (n === 0) {\n        return;\n    }\n    print_numbers(n - 1);\n    console.log(n);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_numbers(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_numbers(int n) {\n    if (n == 0) {\n        return;\n    }\n    print_numbers(n - 1);\n    cout << n << endl;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_numbers(n);\n    return 0;\n}"
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