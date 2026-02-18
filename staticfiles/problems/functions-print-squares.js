module.exports = {
  "title": "Print Square",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Create a function that takes a number as input and prints its square.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a function called <code>print_square</code> that takes one parameter</li>
      <li>The function should calculate and print the square of the number (number multiplied by itself)</li>
      <li>Call the function with the input number</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input is an integer</li>
      <li>Print only the square value, no additional text</li>
      <li>Function must be named exactly <code>print_square</code></li>
      <li>The square should be printed as an integer</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
Output:
16</pre>
    <p><b>Explanation:</b> The function takes 4, calculates <code>4 × 4 = 16</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
Output:
25</pre>
    <p><b>Explanation:</b> The function takes 5, calculates <code>5 × 5 = 25</code></p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "16", 
      "stdinput": "4",
      "explanation": "4 × 4 = 16" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "25", 
      "stdinput": "5",
      "explanation": "5 × 5 = 25" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0",
      "explanation": "0 × 0 = 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "1 × 1 = 1" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "100", 
      "stdinput": "10",
      "explanation": "10 × 10 = 100" 
    }
  ],

  "templates": {
    "python": "def print_square(num):\n    print(num * num)\n\n# Main code\nn = int(input())\nprint_square(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_square(int num) {\n        System.out.println(num * num);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_square(n);\n    }\n}",
    "javascript": "function print_square(num) {\n    console.log(num * num);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_square(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_square(int num) {\n    cout << num * num << endl;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_square(n);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_square(num):\n    print(num * num)\n\n# Main code\nn = int(input())\nprint_square(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_square(int num) {\n        System.out.println(num * num);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        print_square(n);\n    }\n}",
    "javascript": "function print_square(num) {\n    console.log(num * num);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    print_square(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_square(int num) {\n    cout << num * num << endl;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    print_square(n);\n    return 0;\n}"
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