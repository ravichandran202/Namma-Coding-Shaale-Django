module.exports = module.exports = {
  "title": "Plus Sign Letters",
  "difficulty": "medium",
  "acceptance": "76%",

  "description": `
    <p>Print an <code>n x n</code> grid where letters form a plus sign pattern in the center, with dashes everywhere else.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Center Row:</b> The middle row contains letters from <code>A</code> onward</li>
      <li><b>Center Column:</b> The middle column contains letters corresponding to row number</li>
      <li><b>Dashes:</b> All other cells contain <code>-</code></li>
      <li>Works for both even and odd <code>n</code></li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
- - A - - 
- - B - - 
C D E F G 
- - D - - 
- - E - - </pre>

    <h3>Example 2 (corrected)</h3>
    <pre class="constraints">Input: 4
Output: 
- - A - 
- - B - 
C D E F 
- - D - </pre>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "- - A - - \n- - B - - \nC D E F G \n- - D - - \n- - E - -", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "- - A - \n- - B - \nC D E F \n- - D -", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "- A - \nB C D \n- D -", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "A B \n- D", "stdinput": "2" },
    { "id": 5, "input": [], "expected": "A", "stdinput": "1" },

    { "id": 6, "input": [], "expected": "- - - A - - \n- - - B - - \n- - - C - - \nD E F G H I \n- - - H - - \n- - - I - -", "stdinput": "6" },

    { "id": 7, "input": [], "expected": "- - - - A - - - \n- - - - B - - - \n- - - - C - - - \n- - - - D - - - \nE F G H I J K L \n- - - - K - - - \n- - - - L - - - \n- - - - M - - -", "stdinput": "8" },

    { "id": 8, "input": [], "expected": "- - - - A - - - - \n- - - - B - - - - \n- - - - C - - - - \n- - - - D - - - - \nE F G H I J K L M \n- - - - K - - - - \n- - - - L - - - - \n- - - - M - - - - \n- - - - N - - - -", "stdinput": "9" },

    { "id": 9, "input": [], "expected": "- - A - - - \n- - B - - - \n- - C - - - \nD E F G H I \n- - H - - - \n- - I - - -", "stdinput": "6" }
  ],

  "templates": {
    "python": "n = int(input())\nmid = n // 2\n\nfor i in range(n):\n    for j in range(n):\n        if i == mid:\n            print(chr(65 + j), end=' ')\n        elif j == mid:\n            print(chr(65 + i), end=' ')\n        else:\n            print('-', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int mid = n / 2;\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == mid) {\n                    System.out.print((char)(65 + j) + \" \");\n                } else if (j == mid) {\n                    System.out.print((char)(65 + i) + \" \");\n                } else {\n                    System.out.print(\"- \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    const mid = Math.floor(n / 2);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === mid) {\n                row += String.fromCharCode(65 + j) + ' ';\n            } else if (j === mid) {\n                row += String.fromCharCode(65 + i) + ' ';\n            } else {\n                row += '- ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int mid = n / 2;\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == mid) {\n                cout << (char)(65 + j) << \" \";\n            } else if (j == mid) {\n                cout << (char)(65 + i) << \" \";\n            } else {\n                cout << \"- \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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
