module.exports = {
  "title": "Alphabet Pattern – Continuous Centered Pyramid",
  "difficulty": "hard",
  "acceptance": "76%",

  "description": `
    <p>Print a centered pyramid pattern filled with consecutive letters of the alphabet. The letters continue uninterrupted across rows, creating a continuous sequence throughout the pyramid.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> letter starting from <code>A</code> with maximum leading spaces</li>
      <li><b>Row 2:</b> Contains <code>3</code> letters continuing the sequence with fewer leading spaces</li>
      <li><b>Row 3:</b> Contains <code>5</code> letters continuing the sequence with even fewer leading spaces</li>
      <li><b>Row 4:</b> Contains <code>7</code> letters continuing the sequence with minimum leading spaces</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Each row has an odd number of letters: 1, 3, 5, 7, etc.</li>
      <li>Letters are consecutive alphabet characters in a continuous sequence</li>
      <li>The pyramid is perfectly centered and symmetrical</li>
      <li>The sequence continues uninterrupted across rows</li>
    </ul>
    <p>This creates a centered pyramid where each level is wider than the previous one by exactly two letters, maintaining perfect symmetry and continuous alphabetical progression.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
      A 
    B C D 
  E F G H I 
J K L M N O P </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> <code>A</code>, 
    <br><b>Row 2:</b> <code>B C D</code>, 
    <br><b>Row 3:</b> <code>E F G H I</code>, 
    <br><b>Row 4:</b> <code>J K L M N O P</code>. 
    <br>All letters are consecutive in the alphabet.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
    A 
  B C D 
E F G H I </pre>
    <p><b>Explanation:</b> A centered pyramid with 3 rows showing consecutive letters in increasing order.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "      A \n    B C D \n  E F G H I \nJ K L M N O P", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "    A \n  B C D \nE F G H I", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "  A \nB C D", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "        A \n      B C D \n    E F G H I \n  J K L M N O P \nQ R S T U V W X Y", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "          A \n        B C D \n      E F G H I \n    J K L M N O P \n  Q R S T U V W X Y \nZ [ \\ ] ^ _ ` a b c d", "stdinput": "6" },
  ],

  "templates": {
    "python": "n = int(input())\nletter = 65\nfor i in range(1, n + 1):\n    for j in range(n - i):\n        print(' ', end=' ')\n    for k in range(2 * i - 1):\n        print(chr(letter), end=' ')\n        letter += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int letter = 65;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n - i; j++) {\n                System.out.print(\"  \");\n            }\n            for (int k = 1; k <= 2 * i - 1; k++) {\n                System.out.print((char)letter + \" \");\n                letter++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let letter = 65;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= n - i; j++) {\n            row += '  ';\n        }\n        for (let k = 1; k <= 2 * i - 1; k++) {\n            row += String.fromCharCode(letter) + ' ';\n            letter++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int letter = 65;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << \"  \";\n        }\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << (char)letter << \" \";\n            letter++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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