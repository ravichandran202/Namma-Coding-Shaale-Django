module.exports = {
  "title": "Star Pattern – Plus Sign",
  "difficulty": "easy",
  "acceptance": "87%",

  "description": `
    <p>Print a plus sign pattern using stars. The plus sign is formed by a vertical line and a horizontal line intersecting at the center.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Center Row:</b> Completely filled with stars</li>
      <li><b>Center Column:</b> All positions filled with stars</li>
      <li><b>Other Positions:</b> All positions are empty (spaces)</li>
      <li>The plus sign is perfectly centered</li>
      <li>The pattern forms a symmetrical cross shape</li>
      <li>Both arms of the plus sign have equal length</li>
    </ul>
    <p>This creates a plus sign where the horizontal and vertical lines intersect at the center, forming a symmetrical cross pattern.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
  *  
  *  
*****
  *  
  *  </pre>
    <p><b>Explanation:</b> Middle row: all stars. Middle column: all stars. All other positions: spaces. The plus sign is centered in a 5x5 grid.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 7
Output: 
   *   
   *   
   *   
*******
   *   
   *   
   *   </pre>
    <p><b>Explanation:</b> A 7x7 plus sign with the center row and center column filled with stars.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "  *  \n  *  \n*****\n  *  \n  *  ", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "   *   \n   *   \n   *   \n*******\n   *   \n   *   \n   *   ", "stdinput": "7" },
    { "id": 3, "input": [], "expected": " * \n***\n * ", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "    *    \n    *    \n    *    \n    *    \n*********\n    *    \n    *    \n    *    \n    *    ", "stdinput": "9" },
    { "id": 5, "input": [], "expected": "     *     \n     *     \n     *     \n     *     \n     *     \n***********\n     *     \n     *     \n     *     \n     *     \n     *     ", "stdinput": "11" },
    { "id": 6, "input": [], "expected": "      *      \n      *      \n      *      \n      *      \n      *      \n      *      \n*************\n      *      \n      *      \n      *      \n      *      \n      *      \n      *      ", "stdinput": "13" },
    { "id": 7, "input": [], "expected": "       *       \n       *       \n       *       \n       *       \n       *       \n       *       \n       *       \n***************\n       *       \n       *       \n       *       \n       *       \n       *       \n       *       \n       *       ", "stdinput": "15" },
    { "id": 8, "input": [], "expected": "        *        \n        *        \n        *        \n        *        \n        *        \n        *        \n        *        \n        *        \n*****************\n        *        \n        *        \n        *        \n        *        \n        *        \n        *        \n        *        \n        *        ", "stdinput": "17" },
    { "id": 9, "input": [], "expected": "         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n*******************\n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         \n         *         ", "stdinput": "19" }
  ],

  "templates": {
    "python": "n = int(input())\nmid = n // 2\nfor i in range(n):\n    for j in range(n):\n        if i == mid or j == mid:\n            print('*', end='')\n        else:\n            print(' ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int mid = n / 2;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == mid || j == mid) {\n                    System.out.print(\"*\");\n                } else {\n                    System.out.print(\" \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    const mid = Math.floor(n / 2);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === mid || j === mid) {\n                row += '*';\n            } else {\n                row += ' ';\n            }\n        }\n        output += row + '\\n';\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int mid = n / 2;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == mid || j == mid) {\n                cout << \"*\";\n            } else {\n                cout << \" \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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