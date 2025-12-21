module.exports = {
  "title": "Multiply Three Numbers",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Create a function that takes three numbers as input and returns their product.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing three integers separated by spaces</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read three integers from input</li>
      <li>Create a function called <code>multiply_three</code> that takes three parameters</li>
      <li>The function should multiply the three numbers together</li>
      <li>The function should return the product</li>
      <li>Call the function with the input numbers and print the returned value</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
2 3 4
Output:
24</pre>
    <p><b>Explanation:</b> Function returns <code>2 × 3 × 4 = 24</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5 6 2
Output:
60</pre>
    <p><b>Explanation:</b> Function returns <code>5 × 6 × 2 = 60</code></p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "24", 
      "stdinput": "2 3 4",
      "explanation": "Returns 2 × 3 × 4 = 24" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "60", 
      "stdinput": "5 6 2",
      "explanation": "Returns 5 × 6 × 2 = 60" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0 5 10",
      "explanation": "Returns 0 × 5 × 10 = 0" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "1", 
      "stdinput": "1 1 1",
      "explanation": "Returns 1 × 1 × 1 = 1" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "-24", 
      "stdinput": "2 3 -4",
      "explanation": "Returns 2 × 3 × -4 = -24" 
    }
  ],

  "templates": {
    "python": "def multiply_three(a, b, c):\n    return a * b * c\n\n# Main code\na, b, c = map(int, input().split())\nresult = multiply_three(a, b, c)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int multiply_three(int a, int b, int c) {\n        return a * b * c;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int c = scanner.nextInt();\n        int result = multiply_three(a, b, c);\n        System.out.println(result);\n    }\n}",
    "javascript": "function multiply_three(a, b, c) {\n    return a * b * c;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b, c] = input.split(' ').map(Number);\n    const result = multiply_three(a, b, c);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint multiply_three(int a, int b, int c) {\n    return a * b * c;\n}\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    int result = multiply_three(a, b, c);\n    cout << result << endl;\n    return 0;\n}"
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