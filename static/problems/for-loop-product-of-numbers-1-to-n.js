module.exports = {
  "title": "Product Of Numbers",
  "difficulty": "medium",
  "acceptance": "88%",

  "description": `
    <p>Compute the product of all integers from 1 to n.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to multiply numbers from 1 to n</li>
      <li>Calculate product: 1 × 2 × 3 × ... × n</li>
      <li>Print the final product</li>
    </ul>

    <p>This problem teaches iterative multiplication and product calculation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 24</pre>
    <p><b>Explanation:</b> 1 × 2 × 3 × 4 = 24</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 120</pre>
    <p><b>Explanation:</b> 1 × 2 × 3 × 4 × 5 = 120</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 1
Output: 1</pre>
    <p><b>Explanation:</b> Product of numbers from 1 to 1 is 1</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "24", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "120", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "0" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "2" },
  ],

  "templates": {
    "python": "n = int(input())\nprod = 1\nfor i in range(1, n + 1):\n    prod *= i\nprint(prod)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        long prod = 1;\n        for (int i = 1; i <= n; i++) {\n            prod *= i;\n        }\n        System.out.println(prod);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let prod = 1;\n    for (let i = 1; i <= n; i++) {\n        prod *= i;\n    }\n    console.log(prod);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    long long prod = 1;\n    for (int i = 1; i <= n; i++) {\n        prod *= i;\n    }\n    cout << prod << endl;\n    return 0;\n}"
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