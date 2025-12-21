module.exports = {
  "title": "Factorial",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Find the factorial of a given number using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to multiply numbers from 1 to N</li>
      <li>Calculate factorial: N! = 1 × 2 × 3 × ... × N</li>
      <li>Print the final factorial value</li>
    </ul>
    <p><b>Factorial Concept:</b></p>
    <ul>
      <li>Factorial of 0 is 1</li>
      <li>Factorial of 5 = 1 × 2 × 3 × 4 × 5 = 120</li>
    </ul>
    <p>This problem teaches factorial calculation and iterative multiplication.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 120</pre>
    <p><b>Explanation:</b> 5! = 1 × 2 × 3 × 4 × 5 = 120</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 24</pre>
    <p><b>Explanation:</b> 4! = 1 × 2 × 3 × 4 = 24</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "120", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "24", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 7, "input": [], "expected": "3628800", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(fact)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        long fact = 1;\n        for (int i = 1; i <= n; i++) {\n            fact *= i;\n        }\n        System.out.println(fact);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let fact = 1;\n    for (let i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    console.log(fact);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long fact = 1;\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    cout << fact << endl;\n    return 0;\n}"
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