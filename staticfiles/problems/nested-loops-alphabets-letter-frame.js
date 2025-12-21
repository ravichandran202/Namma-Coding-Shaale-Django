module.exports = {
  "title": "Alphabet Pattern – Letter Frame Square",
  "difficulty": "medium",
  "acceptance": "89%",

  "description": `
    <p>Print an <code>n x n</code> square where the border is filled with letter <code>A</code> and the interior is filled with letter <code>B</code>, creating a framed letter pattern.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Border:</b> All positions on the outer boundary contain letter <code>A</code></li>
      <li><b>First Row:</b> Completely filled with <code>A</code></li>
      <li><b>Last Row:</b> Completely filled with <code>A</code></li>
      <li><b>First Column:</b> All positions filled with <code>A</code></li>
      <li><b>Last Column:</b> All positions filled with <code>A</code></li>
      <li><b>Interior:</b> All positions contain letter <code>B</code></li>
      <li>The square has equal width and height</li>
      <li>Creates a clear border with different interior letters</li>
    </ul>
    <p>This creates a square frame where the border uses one letter and the interior uses a different letter, making it appear as a picture frame made of letters.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A A A A 
A B B A 
A B B A 
A A A A </pre>
    <p><b>Explanation:</b> 
    <br>Top and bottom rows: all <code>A</code>s. 
    <br>Left and right columns: all <code>A</code>s. 
    <br>Interior: all <code>B</code>s.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A A A 
A B A 
A A A </pre>
    <p><b>Explanation:</b> A 3x3 letter frame with <code>A</code> border and <code>B</code> center.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A A A A \nA B B A \nA B B A \nA A A A", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A A A \nA B A \nA A A", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A A \nA A", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A A A A A \nA B B B A \nA B B B A \nA B B B A \nA A A A A", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A A A A A A \nA B B B B A \nA B B B B A \nA B B B B A \nA B B B B A \nA A A A A A", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A A A A A A A \nA B B B B B A \nA B B B B B A \nA B B B B B A \nA B B B B B A \nA B B B B B A \nA A A A A A A", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A A A A A A A A \nA B B B B B B A \nA B B B B B B A \nA B B B B B B A \nA B B B B B B A \nA B B B B B B A \nA B B B B B B A \nA A A A A A A A", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A A A A A A A A A \nA B B B B B B B A \nA B B B B B B B A \nA B B B B B B B A \nA B B B B B B B A \nA B B B B B B B A \nA B B B B B B B A \nA B B B B B B B A \nA A A A A A A A A", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A A A A A A A A A A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA B B B B B B B B A \nA A A A A A A A A A", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == 0 or i == n - 1 or j == 0 or j == n - 1:\n            print('A', end=' ')\n        else:\n            print('B', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                    System.out.print(\"A \");\n                } else {\n                    System.out.print(\"B \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {\n                row += 'A ';\n            } else {\n                row += 'B ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {\n                cout << \"A \";\n            } else {\n                cout << \"B \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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