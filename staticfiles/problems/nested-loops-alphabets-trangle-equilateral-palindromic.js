module.exports = {
  "title": "Alphabet Pattern – Palindromic Letter Pyramid",
  "difficulty": "hard",
  "acceptance": "75%",

  "description": `
    <p>Print a centered pyramid pattern where each row forms a palindromic sequence of letters. Each row reads the same forwards and backwards, creating a symmetrical letter pattern.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains the palindrome <code>A</code> with maximum leading spaces</li>
      <li><b>Row 2:</b> Contains the palindrome <code>A B A</code> with fewer leading spaces</li>
      <li><b>Row 3:</b> Contains the palindrome <code>A B C B A</code> with even fewer leading spaces</li>
      <li><b>Row 4:</b> Contains the palindrome <code>A B C D C B A</code> with minimum leading spaces</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row starts from A, increases to the row's center letter, then decreases back to A</li>
      <li>The sequence is perfectly symmetrical around the center letter</li>
      <li>The center letter of each row equals the row's position in the alphabet</li>
      <li>The pyramid is perfectly centered</li>
    </ul>
    <p>This creates a beautiful pyramid pattern where each row is a perfect alphabetical palindrome, symmetrical around its center value.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
        A 
      A B A 
    A B C B A 
  A B C D C B A 
A B C D E D C B A </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>A B A</code>, 
    <br><b>Row 3:</b> <code>A B C B A</code>, 
    <br><b>Row 4:</b> <code>A B C D C B A</code>, 
    <br><b>Row 5:</b> <code>A B C D E D C B A</code>. 
    <br>Each row is a perfect palindrome.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
    A 
  A B A 
A B C B A </pre>
    <p><b>Explanation:</b> A pyramid with 3 rows where each row forms a palindromic sequence of letters.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "        A \n      A B A \n    A B C B A \n  A B C D C B A \nA B C D E D C B A", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "    A \n  A B A \nA B C B A", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "  A \nA B A", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "          A \n        A B A \n      A B C B A \n    A B C D C B A \n  A B C D E D C B A \nA B C D E F E D C B A", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "            A \n          A B A \n        A B C B A \n      A B C D C B A \n    A B C D E D C B A \n  A B C D E F E D C B A \nA B C D E F G F E D C B A", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "              A \n            A B A \n          A B C B A \n        A B C D C B A \n      A B C D E D C B A \n    A B C D E F E D C B A \n  A B C D E F G F E D C B A \nA B C D E F G H G F E D C B A", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "                A \n              A B A \n            A B C B A \n          A B C D C B A \n        A B C D E D C B A \n      A B C D E F E D C B A \n    A B C D E F G F E D C B A \n  A B C D E F G H G F E D C B A \nA B C D E F G H I H G F E D C B A", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "                  A \n                A B A \n              A B C B A \n            A B C D C B A \n          A B C D E D C B A \n        A B C D E F E D C B A \n      A B C D E F G F E D C B A \n    A B C D E F G H G F E D C B A \n  A B C D E F G H I H G F E D C B A \nA B C D E F G H I J I H G F E D C B A", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    for j in range(n - i):\n        print(' ', end=' ')\n    for k in range(1, i + 1):\n        print(chr(65 + k - 1), end=' ')\n    for k in range(i - 1, 0, -1):\n        print(chr(65 + k - 1), end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n - i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 1; k <= i; k++) {\n                System.out.print((char)('A' + k - 1) + \" \");\n            }\n            for (int k = i - 1; k >= 1; k--) {\n                System.out.print((char)('A' + k - 1) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n - i; j++) {\n            row += '  ';\n        }\n        for (let k = 1; k <= i; k++) {\n            row += String.fromCharCode(65 + k - 1) + ' ';\n        }\n        for (let k = i - 1; k >= 1; k--) {\n            row += String.fromCharCode(65 + k - 1) + ' ';\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 1; k <= i; k++) {\n            cout << (char)('A' + k - 1) << \" \";\n        }\n        for (int k = i - 1; k >= 1; k--) {\n            cout << (char)('A' + k - 1) << \" \";\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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