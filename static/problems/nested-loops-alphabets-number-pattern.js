module.exports = {
  "title": "Mixed Alphabet-Number Pattern",
  "difficulty": "medium",
  "acceptance": "80%",

  "description": `
    <p>Print a right-angled triangle where each element combines a letter and a number in a specific pattern.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row Structure:</b> Each row contains combinations of letters and the row number</li>
      <li><b>Letter Sequence:</b> Letters start from <code>A</code> in each row and increase alphabetically across the row</li>
      <li><b>Number Pattern:</b> All elements in a row use the same number, which is the row number</li>
      <li><b>Growing Pattern:</b> First row has 1 element, second row has 2 elements, continuing up to n elements in the last row</li>
      <li><b>Element Format:</b> Each position shows a letter followed by its row number (e.g., <code>A1</code>, <code>B2</code>, <code>C3</code>)</li>
      <li>The triangle grows diagonally downward with increasing complexity</li>
    </ul>
    <p>This creates a triangular pattern where both the letter sequence and row numbers contribute to the visual structure.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
A1 
A2 B2 
A3 B3 C3 
A4 B4 C4 D4 
A5 B5 C5 D5 E5 </pre>
    <p><b>Explanation:</b> 
    <br>Row 1 has <code>A1</code>, 
    <br>Row 2 has <code>A2 B2</code>, 
    <br>Row 3 has <code>A3 B3 C3</code>, and so on. 
    <br>Letters increase within each row, while the number matches the row number.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A1 
A2 B2 
A3 B3 C3 </pre>
    <p><b>Explanation:</b> A 3-row triangle showing the pattern where each row combines increasing letters with the fixed row number.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A1 \nA2 B2", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A1", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5 \nA6 B6 C6 D6 E6 F6", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5 \nA6 B6 C6 D6 E6 F6 \nA7 B7 C7 D7 E7 F7 G7", "stdinput": "7" },
    { "id": 7, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5 \nA6 B6 C6 D6 E6 F6 \nA7 B7 C7 D7 E7 F7 G7 \nA8 B8 C8 D8 E8 F8 G8 H8", "stdinput": "8" },
    { "id": 8, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5 \nA6 B6 C6 D6 E6 F6 \nA7 B7 C7 D7 E7 F7 G7 \nA8 B8 C8 D8 E8 F8 G8 H8 \nA9 B9 C9 D9 E9 F9 G9 H9 I9", "stdinput": "9" },
    { "id": 9, "input": [], "expected": "A1 \nA2 B2 \nA3 B3 C3 \nA4 B4 C4 D4 \nA5 B5 C5 D5 E5 \nA6 B6 C6 D6 E6 F6 \nA7 B7 C7 D7 E7 F7 G7 \nA8 B8 C8 D8 E8 F8 G8 H8 \nA9 B9 C9 D9 E9 F9 G9 H9 I9 \nA10 B10 C10 D10 E10 F10 G10 H10 I10 J10", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\n\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(chr(65 + j - 1) + str(i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((char)(65 + j - 1) + \"\" + i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += String.fromCharCode(65 + j - 1) + i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << (char)(65 + j - 1) << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\n\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(chr(65 + j - 1) + str(i), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        \n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((char)(65 + j - 1) + \"\" + i + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            row += String.fromCharCode(65 + j - 1) + i + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << (char)(65 + j - 1) << i << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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