module.exports = {
  "title": "Checkerboard Pattern",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>Print an n x n grid alternating between * and # in a checkerboard pattern.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Print n rows and n columns</li>
      <li>Alternate between * and # like a chessboard</li>
      <li>Start with * in the top-left corner</li>
      <li>Symbols separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>

    <p>This problem teaches coordinate-based conditional patterns.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
* # *
# * #
* # *</pre>
    <p><b>Explanation:</b> 3x3 checkerboard pattern starting with *</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: 
* # * #
# * # *
* # * #
# * # *</pre>
    <p><b>Explanation:</b> 4x4 checkerboard pattern</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "* # * \n# * # \n* # *", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "* # * # \n# * # * \n* # * # \n# * # *", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* # \n# *", "stdinput": "2" }
  ],

  "templates": {
    "python": "n = int(input()) \nfor i in range(n):\n    for j in range(n):\n        if (i + j) % 2 == 0:\n            print('*', end=' ')\n        else:\n            print('#', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if ((i + j) % 2 == 0) {\n                    System.out.print(\"* \");\n                } else {\n                    System.out.print(\"# \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if ((i + j) % 2 === 0) {\n                row += '* ';\n            } else {\n                row += '# ';\n            }\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if ((i + j) % 2 == 0) {\n                cout << \"* \";\n            } else {\n                cout << \"# \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input()) \nfor i in range(n):\n    for j in range(n):\n        if (i + j) % 2 == 0:\n            print('*', end=' ')\n        else:\n            print('#', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if ((i + j) % 2 == 0) {\n                    System.out.print(\"* \");\n                } else {\n                    System.out.print(\"# \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if ((i + j) % 2 === 0) {\n                row += '* ';\n            } else {\n                row += '# ';\n            }\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if ((i + j) % 2 == 0) {\n                cout << \"* \";\n            } else {\n                cout << \"# \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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