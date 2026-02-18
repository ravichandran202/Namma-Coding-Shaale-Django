module.exports = {
  "title": "Print Even or Odd – Conditional Function",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Create a function that takes a number as input and prints whether it is even or odd.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer from input</li>
      <li>Create a function called <code>print_even_odd</code> that takes one parameter</li>
      <li>The function should check if the number is even or odd</li>
      <li>Print <code>"Even"</code> if the number is even, <code>"Odd"</code> if it is odd</li>
      <li>Call the function with the input number</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input is an integer (can be positive, negative, or zero)</li>
      <li>Print exactly <code>"Even"</code> or <code>"Odd"</code> (case-sensitive)</li>
      <li>Zero is considered an even number</li>
      <li>Function must be named exactly <code>print_even_odd</code></li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
7
Output:
Odd</pre>
    <p><b>Explanation:</b> 7 is not divisible by 2, so it's odd</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10
Output:
Even</pre>
    <p><b>Explanation:</b> 10 is divisible by 2, so it's even</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Odd", 
      "stdinput": "7",
      "explanation": "7 is odd" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Even", 
      "stdinput": "10",
      "explanation": "10 is even" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Even", 
      "stdinput": "0",
      "explanation": "0 is even" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Even", 
      "stdinput": "-4",
      "explanation": "-4 is even" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Odd", 
      "stdinput": "-7",
      "explanation": "-7 is odd" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Even", 
      "stdinput": "100",
      "explanation": "100 is even" 
    }
  ],

  "templates": {
    "python": "def print_even_odd(n):\n    if n % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\n\n# Main code\nnum = int(input())\nprint_even_odd(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_even_odd(int n) {\n        if (n % 2 == 0) {\n            System.out.println(\"Even\");\n        } else {\n            System.out.println(\"Odd\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        print_even_odd(num);\n    }\n}",
    "javascript": "function print_even_odd(n) {\n    if (n % 2 === 0) {\n        console.log(\"Even\");\n    } else {\n        console.log(\"Odd\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    print_even_odd(num);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_even_odd(int n) {\n    if (n % 2 == 0) {\n        cout << \"Even\" << endl;\n    } else {\n        cout << \"Odd\" << endl;\n    }\n}\n\nint main() {\n    int num;\n    cin >> num;\n    print_even_odd(num);\n    return 0;\n}"
  },


  "solutions": {
    "python": "def print_even_odd(n):\n    if n % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\n\n# Main code\nnum = int(input())\nprint_even_odd(num)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void print_even_odd(int n) {\n        if (n % 2 == 0) {\n            System.out.println(\"Even\");\n        } else {\n            System.out.println(\"Odd\");\n        }\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int num = scanner.nextInt();\n        print_even_odd(num);\n    }\n}",
    "javascript": "function print_even_odd(n) {\n    if (n % 2 === 0) {\n        console.log(\"Even\");\n    } else {\n        console.log(\"Odd\");\n    }\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const num = parseInt(input);\n    print_even_odd(num);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid print_even_odd(int n) {\n    if (n % 2 == 0) {\n        cout << \"Even\" << endl;\n    } else {\n        cout << \"Odd\" << endl;\n    }\n}\n\nint main() {\n    int num;\n    cin >> num;\n    print_even_odd(num);\n    return 0;\n}"
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