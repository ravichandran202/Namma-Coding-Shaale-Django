module.exports = {
  "title": "Count Down to 1 – Recursive Countdown",
  "difficulty": "medium",
  "acceptance": "98%",

  "description": `
    <p>Create a recursive function to print numbers from N down to 1 in descending order.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a positive integer N</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read an integer N from input</li>
      <li>Create a recursive function called <code>countdown(n)</code></li>
      <li>The function should print numbers from N down to 1 (inclusive), one per line</li>
      <li>Use recursion with base case when n == 0</li>
      <li>Print the number first, then make the recursive call (to achieve descending order)</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
Output:
4
3
2
1</pre>
    <p><b>Explanation:</b> Recursive calls print numbers 4 down to 1</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
Output:
2
1</pre>
    <p><b>Explanation:</b> Prints numbers 2 down to 1</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "4\n3\n2\n1", 
      "stdinput": "4",
      "explanation": "Countdown from 4 to 1" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "2\n1", 
      "stdinput": "2",
      "explanation": "Countdown from 2 to 1" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1",
      "explanation": "Countdown from 1 to 1" 
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
      "expected": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1", 
      "stdinput": "10",
      "explanation": "Countdown from 10 to 1" 
    }
  ],

  "templates": {
    "python": "def countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n-1)\n\n# main code\nn = int(input())\ncountdown(n)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void countdown(int n) {\n        if (n == 0) {\n            return;\n        }\n        System.out.println(n);\n        countdown(n - 1);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        countdown(n);\n    }\n}",
    "javascript": "function countdown(n) {\n    if (n === 0) {\n        return;\n    }\n    console.log(n);\n    countdown(n - 1);\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    countdown(n);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nvoid countdown(int n) {\n    if (n == 0) {\n        return;\n    }\n    cout << n << endl;\n    countdown(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    countdown(n);\n    return 0;\n}"
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