module.exports = {
  "title": "Countdown N to 1",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Print numbers from N down to 1 using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from N down to 1</li>
      <li>Print each number on a separate line</li>
    </ul>
    <p>This problem teaches reverse iteration with dynamic input.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
4
3
2
1</pre>
    <p><b>Explanation:</b> Numbers from 4 down to 1 printed on separate lines</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
3
2
1</pre>
    <p><b>Explanation:</b> Numbers from 3 down to 1 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4\n3\n2\n1", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "3\n2\n1", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "7\n6\n5\n4\n3\n2\n1", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n, 0, -1):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 1; i--) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = n; i >= 1; i--) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 1; i--) {\n        cout << i << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nfor i in range(n, 0, -1):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = n; i >= 1; i--) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = n; i >= 1; i--) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = n; i >= 1; i--) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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