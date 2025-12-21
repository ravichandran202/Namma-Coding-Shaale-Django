module.exports = {
  "title": "X Pattern",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Print an n x n grid where both diagonals form an X pattern with stars, and all other positions have hashes.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use nested for loops</li>
      <li>Print n rows and n columns</li>
      <li>Main diagonal and reverse diagonal positions print *</li>
      <li>All other positions print #</li>
      <li>Symbols separated by spaces in each row</li>
      <li>Each row on a separate line</li>
    </ul>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li>Forms an X shape with stars</li>
      <li>Positions where diagonal position : *</li>
      <li>All other positions: #</li>
    </ul>
    <p>This problem teaches multiple diagonal pattern recognition.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 3
Output: 
* # *
# * #
* # *</pre>
    <p><b>Explanation:</b> Both diagonals form an X pattern</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 5
Output: 
* # # # *
# * # * #
# # * # #
# * # * #
* # # # *</pre>
    <p><b>Explanation:</b> 5x5 grid with X pattern</p>
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "* # * \n# * # \n* # *", "stdinput": "3" },
    { "id": 2, "input": [], "expected": "* # # # * \n# * # * # \n# # * # # \n# * # * # \n* # # # *", "stdinput": "5" },
    { "id": 3, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "* * \n* *", "stdinput": "2" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(n):\n    for j in range(n):\n        if i == j or i == n - j - 1:\n            print('*', end=' ')\n        else:\n            print('#', end=' ')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j || i == n - j - 1) {\n                    System.out.print(\"* \");\n                } else {\n                    System.out.print(\"# \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 0; i < n; i++) {\n        let row = '';\n        for (let j = 0; j < n; j++) {\n            if (i === j || i === n - j - 1) {\n                row += '* ';\n            } else {\n                row += '# ';\n            }\n        }\n        output += row.trim() + '\\n';\n    }\n    console.log(output.trim());\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == j || i == n - j - 1) {\n                cout << \"* \";\n            } else {\n                cout << \"# \";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}"
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