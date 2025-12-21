module.exports = {
  "title": "Print 1 to N",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Print numbers from 1 to N using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from 1 to N</li>
      <li>Print each number on a separate line</li>
    </ul>
    <p>This problem teaches for loop with dynamic range based on input.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
1
2
3</pre>
    <p><b>Explanation:</b> Numbers from 1 to 3 printed on separate lines</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 
1
2
3
4
5</pre>
    <p><b>Explanation:</b> Numbers from 1 to 5 printed on separate lines</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "1\n2\n3", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "1\n2\n3\n4\n5", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "1\n2\n3\n4\n5\n6\n7", "stdinput": "7" },
    { "id": 5, "input": [], "expected": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            System.out.println(i);\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        console.log(i);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        cout << i << endl;\n    }\n    return 0;\n}"
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