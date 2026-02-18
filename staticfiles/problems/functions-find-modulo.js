module.exports = {
  "title": "Find Remainder",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Create a function that takes two numbers as input and returns the remainder when the first number is divided by the second.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing two integers separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read two integers from input</li>
      <li>Create a function called <code>find_remainder</code> that takes two parameters</li>
      <li>The function should calculate the remainder when the first number is divided by the second</li>
      <li>The function should return the remainder</li>
      <li>Call the function with the input numbers and print the returned value</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10 3
Output:
1</pre>
    <p><b>Explanation:</b> Function returns remainder of <code>10 ÷ 3</code>, which is 1</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
15 4
Output:
3</pre>
    <p><b>Explanation:</b> Function returns remainder of <code>15 ÷ 4</code>, which is 3</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "1", 
      "stdinput": "10 3",
      "explanation": "Returns remainder of 10 ÷ 3 = 1" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "3", 
      "stdinput": "15 4",
      "explanation": "Returns remainder of 15 ÷ 4 = 3" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "12 3",
      "explanation": "Returns remainder of 12 ÷ 3 = 0 (exact division)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "2", 
      "stdinput": "17 5",
      "explanation": "Returns remainder of 17 ÷ 5 = 2" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "0", 
      "stdinput": "0 7",
      "explanation": "Returns remainder of 0 ÷ 7 = 0" 
    }
  ],

  "templates": {
    "python": "def find_remainder(a, b):\n    return a % b\n\n# Main code\na, b = map(int, input().split())\nresult = find_remainder(a, b)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int find_remainder(int a, int b) {\n        return a % b;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int result = find_remainder(a, b);\n        System.out.println(result);\n    }\n}",
    "javascript": "function find_remainder(a, b) {\n    return a % b;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    const result = find_remainder(a, b);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint find_remainder(int a, int b) {\n    return a % b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    int result = find_remainder(a, b);\n    cout << result << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def find_remainder(a, b):\n    return a % b\n\n# Main code\na, b = map(int, input().split())\nresult = find_remainder(a, b)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int find_remainder(int a, int b) {\n        return a % b;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int a = scanner.nextInt();\n        int b = scanner.nextInt();\n        int result = find_remainder(a, b);\n        System.out.println(result);\n    }\n}",
    "javascript": "function find_remainder(a, b) {\n    return a % b;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const [a, b] = input.split(' ').map(Number);\n    const result = find_remainder(a, b);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint find_remainder(int a, int b) {\n    return a % b;\n}\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    int result = find_remainder(a, b);\n    cout << result << endl;\n    return 0;\n}"
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