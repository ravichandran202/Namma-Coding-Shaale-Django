module.exports = {
  "title": "Print Table of N",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Print multiplication table of N from 1 to 10.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Use for loop to iterate from 1 to 10</li>
      <li>Print multiplication table format</li>
      <li>Each multiplication on a separate line</li>
    </ul>
    <p><b>Multiplication Table Concept:</b></p>
    <ul>
      <li>N × 1 = result</li>
      <li>N × 2 = result</li>
      <li>....</li>
      <li>N × 10 = result</li>
      <li>Format: <code> "N x i = result"</code></li>
    </ul>
    <p>This problem teaches formatted output with dynamic base number.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30</pre>
    <p><b>Explanation:</b> Multiplication table of 3 from 1 to 10</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: 
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70</pre>
    <p><b>Explanation:</b> Multiplication table of 7 from 1 to 10</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70", "stdinput": "7" },
    { "id": 3, "input": [], "expected": "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50\n10 x 6 = 60\n10 x 7 = 70\n10 x 8 = 80\n10 x 9 = 90\n10 x 10 = 100", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(n + \" x \" + i + \" = \" + (n * i));\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    for (let i = 1; i <= 10; i++) {\n        console.log(`${n} x ${i} = ${n * i}`);\n    }\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= 10; i++) {\n        cout << n << \" x \" << i << \" = \" << n * i << endl;\n    }\n    return 0;\n}"
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