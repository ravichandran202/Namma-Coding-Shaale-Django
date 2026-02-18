module.exports = {
  "title": "Print Maximum",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Create a function that takes two numbers as input and prints the larger one.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing two integers separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read two integers from input</li>
      <li>Create a function called <code>print_max</code> that takes two parameters</li>
      <li>The function should compare the two numbers and print the larger one</li>
      <li>If the numbers are equal, print either one (both are same)</li>
      <li>Call the function with the input numbers</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Both inputs are integers</li>
      <li>Print only the maximum value, no additional text</li>
      <li>Function must be named exactly <code>print_max</code></li>
      <li>For equal numbers, print that number</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
7 12
Output:
12</pre>
    <p><b>Explanation:</b> 12 is larger than 7, so print 12</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5 5
Output:
5</pre>
    <p><b>Explanation:</b> Both numbers are equal, print 5</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "12", 
      "stdinput": "7 12",
      "explanation": "12 > 7" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "5", 
      "stdinput": "5 5",
      "explanation": "Numbers are equal" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "10", 
      "stdinput": "10 3",
      "explanation": "10 > 3" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "-3", 
      "stdinput": "-3 -10",
      "explanation": "-3 > -10" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0 -5",
      "explanation": "0 > -5" 
    }
  ],

  "templates": {
    "python": "def print_max(a, b):\n    if a > b:\n        print(a)\n    else:\n        print(b)\n\n# Main code\nx, y = map(int, input().split())\nprint_max(x, y)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_max(int a, int b) {\n        if (a > b) {\n            System.out.println(a);\n        } else {\n            System.out.println(b);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        int y = scanner.nextInt();\n        print_max(x, y);\n    }\n}",
    "javascript": "function print_max(a, b) {\n    if (a > b) {\n        console.log(a);\n    } else {\n        console.log(b);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [x, y] = input.split(' ').map(Number);\n    print_max(x, y);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_max(int a, int b) {\n    if (a > b) {\n        cout << a << endl;\n    } else {\n        cout << b << endl;\n    }\n}\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    print_max(x, y);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_max(a, b):\n    if a > b:\n        print(a)\n    else:\n        print(b)\n\n# Main code\nx, y = map(int, input().split())\nprint_max(x, y)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_max(int a, int b) {\n        if (a > b) {\n            System.out.println(a);\n        } else {\n            System.out.println(b);\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        int y = scanner.nextInt();\n        print_max(x, y);\n    }\n}",
    "javascript": "function print_max(a, b) {\n    if (a > b) {\n        console.log(a);\n    } else {\n        console.log(b);\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [x, y] = input.split(' ').map(Number);\n    print_max(x, y);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_max(int a, int b) {\n    if (a > b) {\n        cout << a << endl;\n    } else {\n        cout << b << endl;\n    }\n}\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    print_max(x, y);\n    return 0;\n}"
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