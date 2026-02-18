module.exports = {
  "title": "Print Sum of Two Numbers",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Create a function that takes two numbers as input and prints their sum.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing two integers separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read two integers from input</li>
      <li>Create a function called <code>print_sum</code> that takes two parameters</li>
      <li>The function should calculate and print the sum of the two numbers</li>
      <li>Call the function with the input numbers</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Both inputs are integers</li>
      <li>Print only the sum, no additional text</li>
      <li>Function must be named exactly <code>print_sum</code></li>
      <li>The sum should be printed as an integer</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5 3
Output:
8</pre>
    <p><b>Explanation:</b> The function takes 5 and 3, calculates <code>5 + 3 = 8</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10 20
Output:
30</pre>
    <p><b>Explanation:</b> The function takes 10 and 20, calculates <code>10 + 20 = 30</code></p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "8", 
      "stdinput": "5 3",
      "explanation": "5 + 3 = 8" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "30", 
      "stdinput": "10 20",
      "explanation": "10 + 20 = 30" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0 0",
      "explanation": "0 + 0 = 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "-5", 
      "stdinput": "5 -10",
      "explanation": "5 + (-10) = -5" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "100", 
      "stdinput": "50 50",
      "explanation": "50 + 50 = 100" 
    }
  ],

  "templates": {
    "python": "def print_sum(a, b):\n    print(a + b)\n\n# Main code\na, b = map(int, input().split())\nprint_sum(a, b)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_sum(int a, int b) {\n        System.out.println(a + b);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        print_sum(a, b);\n    }\n}",
    "javascript": "function print_sum(a, b) {\n    console.log(a + b);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    print_sum(a, b);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_sum(int a, int b) {\n    cout << a + b << endl;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    print_sum(a, b);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_sum(a, b):\n    print(a + b)\n\n# Main code\na, b = map(int, input().split())\nprint_sum(a, b)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_sum(int a, int b) {\n        System.out.println(a + b);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        print_sum(a, b);\n    }\n}",
    "javascript": "function print_sum(a, b) {\n    console.log(a + b);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    print_sum(a, b);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_sum(int a, int b) {\n    cout << a + b << endl;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    print_sum(a, b);\n    return 0;\n}"
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