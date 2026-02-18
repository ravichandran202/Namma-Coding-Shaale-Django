module.exports = {
  "title": "Fibonacci Sequence – Recursive",
  "difficulty": "hard",
  "acceptance": "90%",

  "description": `
    <p>Create a recursive function to find the N-th Fibonacci number.</p>
    <p>The Fibonacci sequence starts with <code>0</code> and <code>1</code>. Each subsequent number is the sum of the two preceding numbers.</p>
    <p>Sequence: <code>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</code></p>
    
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing an integer <code>n</code> (0-based position)</li>
    </ul>
    
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer <code>n</code> from input</li>
      <li>Create a recursive function called <code>fibonacci(n)</code></li>
      <li>The function should return the N-th Fibonacci number</li>
      <li>Use the recursive definition: <code>fib(n) = fib(n-1) + fib(n-2)</code></li>
      <li>Handle base cases for <code>n = 0</code> and <code>n = 1</code></li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
6
Output:
8</pre>
    <p><b>Explanation:</b> Position 6 in Fibonacci sequence: 
    <br><code>0</code> (position 0), 
    <code>1</code> (1), 
    <code>1</code> (2), 
    <code>2</code> (3), 
    <code>3</code> (4), 
    <code>5</code> (5), 
    <code>8</code> (6)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
0
Output:
0</pre>
    <p><b>Explanation:</b> Position 0 is always Fibonacci number 0 (starting point of sequence)</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input:
1
Output:
1</pre>
    <p><b>Explanation:</b> Position 1 is always Fibonacci number 1 (second number in sequence)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "8", 
      "stdinput": "6",
      "explanation": "Position 6 → Fibonacci number 8" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0",
      "explanation": "Position 0 → Fibonacci number 0" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Position 1 → Fibonacci number 1" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "3", 
      "stdinput": "4",
      "explanation": "Position 4 → Fibonacci number 3" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "55", 
      "stdinput": "10",
      "explanation": "Position 10 → Fibonacci number 55" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "21", 
      "stdinput": "8",
      "explanation": "Position 8 → Fibonacci number 21" 
    }
  ],

  "templates": {
    "python": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# main code\nn = int(input())\nprint(fibonacci(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int fibonacci(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}",
    "javascript": "function fibonacci(n) {\n    if (n <= 1) {\n        return n;\n    }\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(fibonacci(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) {\n        return n;\n    }\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fibonacci(n) << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# main code\nn = int(input())\nprint(fibonacci(n))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int fibonacci(int n) {\n        if (n <= 1) {\n            return n;\n        }\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}",
    "javascript": "function fibonacci(n) {\n    if (n <= 1) {\n        return n;\n    }\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    console.log(fibonacci(n));\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) {\n        return n;\n    }\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << fibonacci(n) << endl;\n    return 0;\n}"
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