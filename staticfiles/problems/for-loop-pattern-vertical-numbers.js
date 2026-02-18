module.exports = {
  "title": "Numbers in a Line",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Print n rows, each containing numbers 1 to 5 with spaces.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to print n rows</li>
      <li>Each row contains numbers 1 to 5 separated by spaces</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Output Format:</b></p>
    <ul>
      <li>For n=3: 3 rows of numbers 1-5</li>
      <li>Each row: <code>"1 2 3 4 5"</code></li>
      <li>Numbers separated by single spaces</li>
    </ul>
    <p>This problem teaches repeated pattern printing with loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5</pre>
    <p><b>Explanation:</b> 3 rows, each with numbers <code>"1 2 3 4 5"</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 2
Output: 
1 2 3 4 5
1 2 3 4 5</pre>
    <p><b>Explanation:</b> 2 rows, each with numbers <code>"1 2 3 4 5"</code></p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1 2 3 4 5\n1 2 3 4 5", "stdinput": "2" },
    { "id": 3, "input": [], "expected": "1 2 3 4 5", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5", "stdinput": "5" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    print(\"1 2 3 4 5\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.println(\"1 2 3 4 5\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 0; i < n; i++) {\n        console.log('1 2 3 4 5');\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"1 2 3 4 5\" << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n):\n    print(\"1 2 3 4 5\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.println(\"1 2 3 4 5\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 0; i < n; i++) {\n        console.log('1 2 3 4 5');\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"1 2 3 4 5\" << endl;\n    }\n    return 0;\n}"
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