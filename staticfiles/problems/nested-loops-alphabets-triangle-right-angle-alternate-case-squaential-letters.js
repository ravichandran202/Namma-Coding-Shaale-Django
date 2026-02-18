module.exports = {
  "title": "Alphabet Pattern – Mixed Case Sequential Triangle",
  "difficulty": "medium",
  "acceptance": "81%",

  "description": `
    <p>Print a triangular pattern with consecutive letters where odd-numbered rows use uppercase letters and even-numbered rows use lowercase letters, creating a continuous sequence throughout the triangle.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains <code>1</code> uppercase letter starting from <code>A</code></li>
      <li><b>Row 2:</b> Contains <code>2</code> lowercase letters continuing the sequence</li>
      <li><b>Row 3:</b> Contains <code>3</code> uppercase letters continuing the sequence</li>
      <li><b>Row 4:</b> Contains <code>4</code> lowercase letters continuing the sequence</li>
      <li>This pattern continues until <b>Row n</b></li>
      <li>Letters are consecutive alphabet characters in a continuous sequence</li>
      <li>Odd-numbered rows use uppercase letters</li>
      <li>Even-numbered rows use lowercase letters</li>
      <li>The sequence continues uninterrupted across rows</li>
    </ul>
    <p>This creates a triangular pattern with alternating case where the alphabetical sequence flows continuously from one row to the next.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 4
Output: 
A 
b c 
D E F 
g h i j </pre>
    <p><b>Explanation:</b> 
    <br><b>Row 1:</b> uppercase <code>A</code>, 
    <br><b>Row 2:</b> lowercase <code>b c</code>, 
    <br><b>Row 3:</b> uppercase <code>D E F</code>, 
    <br><b>Row 4:</b> lowercase <code>g h i j</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
A 
b c 
D E F </pre>
    <p><b>Explanation:</b> A triangular pattern with alternating case and continuous alphabetical sequence.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "A \nb c \nD E F \ng h i j", "stdinput": "4" },
    { "id": 2, "input": [], "expected": "A \nb c \nD E F", "stdinput": "3" },
    { "id": 3, "input": [], "expected": "A \nb c", "stdinput": "2" },
    { "id": 4, "input": [], "expected": "A \nb c \nD E F \ng h i j \nK L M N O", "stdinput": "5" },
    { "id": 5, "input": [], "expected": "A \nb c \nD E F \ng h i j \nK L M N O \np q r s t u", "stdinput": "6" },
    { "id": 6, "input": [], "expected": "A \nb c \nD E F \ng h i j \nK L M N O \np q r s t u \nV W X Y Z [ \\", "stdinput": "7" },
  ],

  "templates": {
    "python": "n = int(input())\nletter = 0\nfor i in range(1, n + 1):\n    for j in range(i):\n        if i % 2 == 1:\n            print(chr(65 + letter), end=' ')\n        else:\n            print(chr(97 + letter), end=' ')\n        letter += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int letter = 0;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (i % 2 == 1) {\n                    System.out.print((char)('A' + letter) + \" \");\n                } else {\n                    System.out.print((char)('a' + letter) + \" \");\n                }\n                letter++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let letter = 0;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            if (i % 2 === 1) {\n                row += String.fromCharCode(65 + letter) + ' ';\n            } else {\n                row += String.fromCharCode(97 + letter) + ' ';\n            }\n            letter++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int letter = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (i % 2 == 1) {\n                cout << (char)('A' + letter) << \" \";\n            } else {\n                cout << (char)('a' + letter) << \" \";\n            }\n            letter++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nletter = 0\nfor i in range(1, n + 1):\n    for j in range(i):\n        if i % 2 == 1:\n            print(chr(65 + letter), end=' ')\n        else:\n            print(chr(97 + letter), end=' ')\n        letter += 1\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int letter = 0;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                if (i % 2 == 1) {\n                    System.out.print((char)('A' + letter) + \" \");\n                } else {\n                    System.out.print((char)('a' + letter) + \" \");\n                }\n                letter++;\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let letter = 0;\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        let row = '';\n        for (let j = 1; j <= i; j++) {\n            if (i % 2 === 1) {\n                row += String.fromCharCode(65 + letter) + ' ';\n            } else {\n                row += String.fromCharCode(97 + letter) + ' ';\n            }\n            letter++;\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int letter = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            if (i % 2 == 1) {\n                cout << (char)('A' + letter) << \" \";\n            } else {\n                cout << (char)('a' + letter) << \" \";\n            }\n            letter++;\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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