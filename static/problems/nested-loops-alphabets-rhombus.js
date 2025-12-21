module.exports = {
  "title": "Alphabet Pattern – Tilted Letter Rhombus",
  "difficulty": "medium",
  "acceptance": "79%",

  "description": `
    <p>Print a tilted rhombus pattern using sequential letters from <code>A</code> onward. The rhombus appears to be sliding to the right as it moves down.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>n-1</code> leading spaces followed by the complete alphabet sequence from <code>A</code> to the nth letter</li>
      <li><b>Row 2:</b> Contains <code>n-2</code> leading spaces followed by the same alphabet sequence</li>
      <li><b>Row 3:</b> Contains <code>n-3</code> leading spaces followed by the same alphabet sequence</li>
      <li><b>Row 4:</b> Contains <code>n-4</code> leading spaces followed by the same alphabet sequence</li>
      <li>This pattern continues until the final row which has no leading spaces</li>
      <li>Each row contains the complete alphabet sequence from A to the nth letter</li>
      <li>The number of leading spaces decreases by two with each row</li>
      <li>The shape maintains constant width but shifts position</li>
    </ul>
    <p>This creates a rhombus (parallelogram) shape where each row has the same sequence of letters but starts at different horizontal positions.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
      A B C D 
    A B C D 
  A B C D 
A B C D </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> 6 spaces + <code>A B C D</code>, 
    <br><b>Row 2:</b> 4 spaces + <code>A B C D</code>, 
    <br><b>Row 3:</b> 2 spaces + <code>A B C D</code>, 
    <br><b>Row 4:</b> 0 spaces + <code>A B C D</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
    A B C 
  A B C 
A B C </pre>
    <p><b>Explanation:</b> A tilted rhombus with 3 rows, each containing the sequence A B C but starting at different positions.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "      A B C D \n    A B C D \n  A B C D \nA B C D", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "    A B C \n  A B C \nA B C", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "  A B \nA B", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "        A B C D E \n      A B C D E \n    A B C D E \n  A B C D E \nA B C D E", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "          A B C D E F \n        A B C D E F \n      A B C D E F \n    A B C D E F \n  A B C D E F \nA B C D E F", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "            A B C D E F G \n          A B C D E F G \n        A B C D E F G \n      A B C D E F G \n    A B C D E F G \n  A B C D E F G \nA B C D E F G", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "              A B C D E F G H \n            A B C D E F G H \n          A B C D E F G H \n        A B C D E F G H \n      A B C D E F G H \n    A B C D E F G H \n  A B C D E F G H \nA B C D E F G H", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "                A B C D E F G H I \n              A B C D E F G H I \n            A B C D E F G H I \n          A B C D E F G H I \n        A B C D E F G H I \n      A B C D E F G H I \n    A B C D E F G H I \n  A B C D E F G H I \nA B C D E F G H I", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "                  A B C D E F G H I J \n                A B C D E F G H I J \n              A B C D E F G H I J \n            A B C D E F G H I J \n          A B C D E F G H I J \n        A B C D E F G H I J \n      A B C D E F G H I J \n    A B C D E F G H I J \n  A B C D E F G H I J \nA B C D E F G H I J", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n - i - 1):\n        print(' ', end=' ')\n    for k in range(n):\n        print(chr(65 + k), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 0; k < n; k++) {\n                System.out.print((char)('A' + k) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n - i - 1; j++) {\n            row += '  ';\n        }\n        for (let k = 0; k < n; k++) {\n            row += String.fromCharCode(65 + k) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            cout << \"  \";\n        }\n        for (int k = 0; k < n; k++) {\n            cout << (char)('A' + k) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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