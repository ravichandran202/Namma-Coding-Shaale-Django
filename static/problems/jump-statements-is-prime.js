module.exports = {
  "title": "Prime Number Check",
  "difficulty": "hard",
  "acceptance": "85%",

  "description": `
    <p>Write a program that checks whether a given number is a prime number or not. <br> A prime number is a natural number greater than <code>1</code> that has no positive divisors other than <code>1</code> and itself.</p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single integer <code>n</code> where <code>n ≥ 1</code></li>
      <li>The number can be any positive integer</li>
    </ul>
    
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
7
Output:
Prime</pre>
    <p><b>Explanation:</b> 7 is only divisible by 1 and 7, so it's a prime number.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
10
Output:
Not Prime</pre>
    <p><b>Explanation:</b> 10 is divisible by 1, 2, 5, and 10, so it's not a prime number.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "Prime", 
      "stdinput": "7",
      "explanation": "7 is a prime number" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "Not Prime", 
      "stdinput": "10",
      "explanation": "10 is not prime (divisible by 2 and 5)" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "Not Prime", 
      "stdinput": "1",
      "explanation": "1 is not prime by definition" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "Prime", 
      "stdinput": "2",
      "explanation": "2 is the smallest prime number" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "Prime", 
      "stdinput": "17",
      "explanation": "17 is a prime number" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "Not Prime", 
      "stdinput": "25",
      "explanation": "25 is not prime (divisible by 5)" 
    }
  ],

  "templates": {
    "python": "def is_prime(n):\n    if n < 2:\n        return False\n    if n == 2:\n        return True\n    if n % 2 == 0:\n        return False\n    \n    i = 3\n    while i * i <= n:\n        if n % i == 0:\n            return False\n        i += 2\n    return True\n\n# main code\nn = int(input())\nif is_prime(n):\n    print(\"Prime\")\nelse:\n    print(\"Not Prime\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean is_prime(int n) {\n        if (n < 2) {\n            return false;\n        }\n        if (n == 2) {\n            return true;\n        }\n        if (n % 2 == 0) {\n            return false;\n        }\n        \n        for (int i = 3; i * i <= n; i += 2) {\n            if (n % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        if (is_prime(n)) {\n            System.out.println(\"Prime\");\n        } else {\n            System.out.println(\"Not Prime\");\n        }\n    }\n}",
    "javascript": "function is_prime(n) {\n    if (n < 2) {\n        return false;\n    }\n    if (n === 2) {\n        return true;\n    }\n    if (n % 2 === 0) {\n        return false;\n    }\n    \n    for (let i = 3; i * i <= n; i += 2) {\n        if (n % i === 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    if (is_prime(n)) {\n        console.log(\"Prime\");\n    } else {\n        console.log(\"Not Prime\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool is_prime(int n) {\n    if (n < 2) {\n        return false;\n    }\n    if (n == 2) {\n        return true;\n    }\n    if (n % 2 == 0) {\n        return false;\n    }\n    \n    for (int i = 3; i * i <= n; i += 2) {\n        if (n % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    if (is_prime(n)) {\n        cout << \"Prime\" << endl;\n    } else {\n        cout << \"Not Prime\" << endl;\n    }\n    return 0;\n}"
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