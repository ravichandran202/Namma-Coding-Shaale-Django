module.exports = {
  "title": "Factorial",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Write a program that takes an integer N as input and calculates its factorial using a while loop.</p>
    <p><b>What is factorial?</b></p>
    <p>Factorial of a number N (written as N!) is the product of all positive integers from 1 to N:</p>
    <ul>
      <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
      <li>4! = 4 × 3 × 2 × 1 = 24</li>
      <li>3! = 3 × 2 × 1 = 6</li>
      <li>1! = 1</li>
      <li>0! = 1 (by definition)</li>
    </ul>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use a while loop to multiply numbers from 1 to N</li>
      <li>Calculate the factorial product</li>
      <li>Print the final factorial value</li>
    </ul>
    <p>This problem teaches while loops with accumulation and mathematical operations.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 120</pre>
    <p><b>Explanation:</b> 5 × 4 × 3 × 2 × 1 = 120</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 0
Output: 1</pre>
    <p><b>Explanation:</b> By definition, factorial of 0 is 1</p>

    <h3>Example 4</h3>
    <pre class="constraints">Input: 1
Output: 1</pre>
    <p><b>Explanation:</b> 1 × 1 = 1</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "120", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "24", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "2" },
  ],

  "templates": {
    "python": "n = int(input())\nfact = 1\ni = 1\nwhile i <= n:\n    fact *= i\n    i += 1\nprint(fact)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        long fact = 1;\n        int i = 1;\n        while (i <= n) {\n            fact *= i;\n            i++;\n        }\n        System.out.println(fact);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let fact = 1;\n    let i = 1;\n    while (i <= parseInt(n)) {\n        fact *= i;\n        i++;\n    }\n    console.log(fact);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long fact = 1;\n    int i = 1;\n    while (i <= n) {\n        fact *= i;\n        i++;\n    }\n    cout << fact << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfact = 1\ni = 1\nwhile i <= n:\n    fact *= i\n    i += 1\nprint(fact)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        long fact = 1;\n        int i = 1;\n        while (i <= n) {\n            fact *= i;\n            i++;\n        }\n        System.out.println(fact);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (n) => {\n    let fact = 1;\n    let i = 1;\n    while (i <= parseInt(n)) {\n        fact *= i;\n        i++;\n    }\n    console.log(fact);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long fact = 1;\n    int i = 1;\n    while (i <= n) {\n        fact *= i;\n        i++;\n    }\n    cout << fact << endl;\n    return 0;\n}"
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