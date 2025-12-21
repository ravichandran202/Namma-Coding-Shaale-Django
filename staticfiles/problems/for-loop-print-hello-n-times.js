module.exports = {
  "title": "Hello Repeater N",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print the word "Hello" N times using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate N times</li>
      <li>Print "Hello" on each iteration</li>
      <li>Each "Hello" on a separate line</li>
    </ul>
    <p>This problem teaches repetition with dynamic input using for loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
Hello
Hello
Hello</pre>
    <p><b>Explanation:</b> "Hello" printed 3 times on separate lines</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 
Hello
Hello
Hello
Hello
Hello</pre>
    <p><b>Explanation:</b> "Hello" printed 5 times on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Hello\nHello\nHello", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "Hello\nHello\nHello\nHello\nHello", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "Hello", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "Hello\nHello\nHello\nHello", "stdinput": "4" },
    { "id": 5, "input": [], "expected": "Hello\nHello\nHello\nHello\nHello\nHello\nHello", "stdinput": "7" }
  ],

  "templates": {
    "python": "n = int(input())\nfor _ in range(n):\n    print(\"Hello\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            System.out.println(\"Hello\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 0; i < n; i++) {\n        console.log(\"Hello\");\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        cout << \"Hello\" << endl;\n    }\n    return 0;\n}"
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