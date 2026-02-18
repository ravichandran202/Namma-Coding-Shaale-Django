module.exports = {
  "title": "Star-Hash Pattern",
  "difficulty": "Medium",
  "acceptance": "89%",

  "description": `
    <p>Print an alternating pattern of stars and hashes.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer N as input</li>
      <li>Print alternating * and # characters</li>
      <li>Start with * for odd positions and # for even positions</li>
      <li>Use while loop for iteration</li>
    </ul>
    <p><b>Pattern Logic:</b></p>
    <ul>
      <li>Position 1 (odd): *</li>
      <li>Position 2 (even): #</li>
      <li>Position 3 (odd): *</li>
      <li>Position 4 (even): #</li>
    </ul>
    <p>This problem teaches conditional logic within loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: *#*#*#</pre>
    <p><b>Explanation:</b> Alternating * and # for 6 positions</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: *#*#</pre>
    <p><b>Explanation:</b> Alternating * and # for 4 positions</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 3
Output: *#*</pre>
    <p><b>Explanation:</b> Alternating * and # for 3 positions</p>
  `,

  "conditions": `
    <ul>
      <li>Input N will be between 1 and 20</li>
      <li>Use while loop for iteration</li>
      <li>Use modulo operator to check odd/even positions</li>
      <li>Print * for odd positions, # for even positions</li>
      <li>Output should be in one line without spaces</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*#*#*#", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "*#*#", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "*#*", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "*#*#*#*#*#", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    if i % 2 == 1:\n        print('*', end='')\n    else:\n        print('#', end='')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            if (i % 2 == 1) {\n                System.out.print(\"*\");\n            } else {\n                System.out.print(\"#\");\n            }\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 1;\n    let output = '';\n    while (i <= n) {\n        if (i % 2 === 1) {\n            output += '*';\n        } else {\n            output += '#';\n        }\n        i++;\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        if (i % 2 == 1) {\n            cout << \"*\";\n        } else {\n            cout << \"#\";\n        }\n        i++;\n    }\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\ni = 1\nwhile i <= n:\n    if i % 2 == 1:\n        print('*', end='')\n    else:\n        print('#', end='')\n    i = i + 1",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        int i = 1;\n        while (i <= n) {\n            if (i % 2 == 1) {\n                System.out.print(\"*\");\n            } else {\n                System.out.print(\"#\");\n            }\n            i++;\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let i = 1;\n    let output = '';\n    while (i <= n) {\n        if (i % 2 === 1) {\n            output += '*';\n        } else {\n            output += '#';\n        }\n        i++;\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int i = 1;\n    while (i <= n) {\n        if (i % 2 == 1) {\n            cout << \"*\";\n        } else {\n            cout << \"#\";\n        }\n        i++;\n    }\n    return 0;\n}"
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