module.exports ={
  "title": "Star Pattern – Pyramid",
  "difficulty": "hard",
  "acceptance": "87%",

  "description": `
    <p>Print a pyramid pattern using stars with odd-numbered rows. The pyramid is perfectly centered and grows by two stars per row.</p>
    <p><b>Pattern Details:</b></p>
    <ul>
      <li><b>Row 1:</b> Contains the highest number of leading spaces followed by <code>1</code> star</li>
      <li><b>Row 2:</b> Contains fewer leading spaces followed by <code>3</code> stars</li>
      <li><b>Row 3:</b> Contains even fewer leading spaces followed by <code>5</code> stars</li>
      <li><b>Row 4:</b> Contains even fewer leading spaces followed by <code>7</code> stars</li>
      <li>This pattern continues until the final row which has the most stars</li>
      <li>Each row has an odd number of stars: 1, 3, 5, 7, etc.</li>
      <li>The number of stars increases by 2 with each row</li>
      <li>The pyramid is perfectly centered and symmetrical</li>
    </ul>
    <p>This creates a classic pyramid shape where each level is wider than the previous one by exactly two stars, maintaining perfect symmetry.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 5
Output: 
         * 
       * * * 
     * * * * * 
   * * * * * * * 
 * * * * * * * * * </pre>
    <p><b>Explanation:</b> 
    <br>Row 1: 8 spaces + 1 star, 
    <br>Row 2: 6 spaces + 3 stars, 
    <br>Row 3: 4 spaces + 5 stars, 
    <br>Row 4: 2 spaces + 7 stars, 
    <br>Row 5: 0 spaces + 9 stars.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 3
Output: 
     * 
   * * * 
 * * * * * </pre>
    <p><b>Explanation:</b> A pyramid with 3 rows showing odd-numbered stars: 1, 3, and 5 stars respectively.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "         * \n       * * * \n     * * * * * \n   * * * * * * * \n * * * * * * * * *", "stdinput": "5" },
    { "id": 2, "input": [], "expected": "     * \n   * * * \n * * * * *", "stdinput": "3" },
    { "id": 3, "input": [], "expected": " *", "stdinput": "1" },
    { "id": 4, "input": [], "expected": "           * \n         * * * \n       * * * * * \n     * * * * * * * \n   * * * * * * * * * \n * * * * * * * * * * *", "stdinput": "6" },
    { "id": 5, "input": [], "expected": "             * \n           * * * \n         * * * * * \n       * * * * * * * \n     * * * * * * * * * \n   * * * * * * * * * * * \n * * * * * * * * * * * * *", "stdinput": "7" },
    { "id": 6, "input": [], "expected": "               * \n             * * * \n           * * * * * \n         * * * * * * * \n       * * * * * * * * * \n     * * * * * * * * * * * \n   * * * * * * * * * * * * * \n * * * * * * * * * * * * * * *", "stdinput": "8" },
    { "id": 7, "input": [], "expected": "                 * \n               * * * \n             * * * * * \n           * * * * * * * \n         * * * * * * * * * \n       * * * * * * * * * * * \n     * * * * * * * * * * * * * \n   * * * * * * * * * * * * * * * \n * * * * * * * * * * * * * * * * *", "stdinput": "9" },
    { "id": 8, "input": [], "expected": "                   * \n                 * * * \n               * * * * * \n             * * * * * * * \n           * * * * * * * * * \n         * * * * * * * * * * * \n       * * * * * * * * * * * * * \n     * * * * * * * * * * * * * * * \n   * * * * * * * * * * * * * * * * * \n * * * * * * * * * * * * * * * * * * *", "stdinput": "10" }
  ],
  
  

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    print(' ' * (2 * (n - i)), end='')\n    for j in range(2 * i - 1):\n        print('* ', end='')\n    print()",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 != 0) {\n                for (int s = 1; s <= n - i; s++) {\n                    System.out.print(\"  \");\n                }\n                for (int j = 1; j <= i; j++) {\n                    System.out.print(\"* \");\n                }\n                System.out.println();\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        if (i % 2 !== 0) {\n            let row = '';\n            for (let s = 1; s <= n - i; s++) {\n                row += '  ';\n            }\n            for (let j = 1; j <= i; j++) {\n                row += '* ';\n            }\n            output += row + '\\n';\n        }\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 != 0) {\n            for (int s = 1; s <= n - i; s++) {\n                cout << \"  \";\n            }\n            for (int j = 1; j <= i; j++) {\n                cout << \"* \";\n            }\n            cout << endl;\n        }\n    }\n    return 0;\n}"
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