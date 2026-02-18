module.exports = {
  "title": "Print Multiplication Table",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Create a function that takes a number as input and prints its multiplication table from 1 to 10.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a function called <code>print_table</code> that takes one parameter</li>
      <li>The function should print the multiplication table from 1 to 10</li>
      <li>Each result should be printed on a new line</li>
      <li>Call the function with the input number</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input is an integer</li>
      <li>Print each result on a separate line</li>
      <li>Print from 1 × n to 10 × n</li>
      <li>Function must be named exactly <code>print_table</code></li>
      <li>Print only the products, no multiplication expressions</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
Output:
5
10
15
20
25
30
35
40
45
50</pre>
    <p><b>Explanation:</b> Multiplication table of 5: 5×1=5, 5×2=10, ..., 5×10=50</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
Output:
2
4
6
8
10
12
14
16
18
20</pre>
    <p><b>Explanation:</b> Multiplication table of 2: 2×1=2, 2×2=4, ..., 2×10=20</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "5\n10\n15\n20\n25\n30\n35\n40\n45\n50", 
      "stdinput": "5",
      "explanation": "Multiplication table of 5" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20", 
      "stdinput": "2",
      "explanation": "Multiplication table of 2" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0\n0\n0\n0\n0\n0\n0\n0\n0\n0", 
      "stdinput": "0",
      "explanation": "Multiplication table of 0 (all zeros)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", 
      "stdinput": "1",
      "explanation": "Multiplication table of 1" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "10\n20\n30\n40\n50\n60\n70\n80\n90\n100", 
      "stdinput": "10",
      "explanation": "Multiplication table of 10" 
    }
  ],

  "templates": {
    "python": "def print_table(n):\n    for i in range(1, 11):\n        print(n * i)\n\n# Main code\nnum = int(input())\nprint_table(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_table(int n) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n * i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        print_table(num);\n    }\n}",
    "javascript": "function print_table(n) {\n    for (let i = 1; i <= 10; i++) {\n        console.log(n * i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    print_table(num);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_table(int n) {\n    for (int i = 1; i <= 10; i++) {\n        cout << n * i << endl;\n    }\n}\n\nint main() {\n    int num;\n    cin >> num;\n    print_table(num);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_table(n):\n    for i in range(1, 11):\n        print(n * i)\n\n# Main code\nnum = int(input())\nprint_table(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_table(int n) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n * i);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        print_table(num);\n    }\n}",
    "javascript": "function print_table(n) {\n    for (let i = 1; i <= 10; i++) {\n        console.log(n * i);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    print_table(num);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_table(int n) {\n    for (int i = 1; i <= 10; i++) {\n        cout << n * i << endl;\n    }\n}\n\nint main() {\n    int num;\n    cin >> num;\n    print_table(num);\n    return 0;\n}"
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