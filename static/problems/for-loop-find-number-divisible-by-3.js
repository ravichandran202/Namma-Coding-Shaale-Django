module.exports = {
  "title": "Divisible by 3",
  "difficulty": "medium",
  "acceptance": "81%",

  "description": `
    <p>Print all numbers from 1 to n divisible by 3.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to iterate from 1 to n</li>
      <li>Print numbers divisible by 3 on separate lines</li>
    </ul>
    <p><b>Divisibility Concept:</b></p>
    <ul>
      <li>Numbers: 3, 6, 9, 12, 15, ...</li>
      <li>Print only numbers that satisfy the condition</li>
    </ul>
    <p>This problem teaches divisibility checking and conditional printing.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 10
Output: 
3
6
9</pre>
    <p><b>Explanation:</b> Numbers divisible by 3 between 1-10: 3, 6, 9</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 15
Output: 
3
6
9
12
15</pre>
    <p><b>Explanation:</b> Numbers divisible by 3 between 1-15: 3, 6, 9, 12, 15</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 2
Output: </pre>
    <p><b>Explanation:</b> No numbers divisible by 3 between 1-2</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "3\n6\n9", "stdinput": "10" },
    { "id": 2, "input": [], "expected": "3\n6\n9\n12\n15", "stdinput": "15" },
    { "id": 3, "input": [], "expected": "", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "3\n6\n9\n12\n15\n18", "stdinput": "18" },
    { "id": 5, "input": [], "expected": "3", "stdinput": "3" },
    { "id": 6, "input": [], "expected": "3\n6", "stdinput": "6" },
    { "id": 7, "input": [], "expected": "3\n6\n9\n12\n15\n18\n21\n24\n27\n30", "stdinput": "30" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        print(i)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            if (i % 3 == 0) {\n                System.out.println(i);\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= n; i++) {\n        if (i % 3 === 0) {\n            console.log(i);\n        }\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 3 == 0) {\n            cout << i << endl;\n        }\n    }\n    return 0;\n}"
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