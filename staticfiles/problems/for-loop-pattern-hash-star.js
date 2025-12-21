module.exports = {
  "title": "Star-Hash Pattern",
  "difficulty": "medium",
  "acceptance": "89%",

  "description": `
    <p>Print alternating * and # characters for n positions (odd positions get *, even positions get #).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read an integer n as input</li>
      <li>Use for loop to iterate n times</li>
      <li>Print <code>*</code> for odd positions, <code>#</code> for even positions</li>
      <li>Print all characters in one line without spaces</li>
    </ul>
    <p><b>Pattern Logic:</b></p>
    <ul>
      <li>Position 1 (odd): <code>*</code></li>
      <li>Position 2 (even): <code>#</code></li>
      <li>Position 3 (odd): <code>*</code></li>
      <li>Position 4 (even): <code>#</code></li>
      <li>And so on...</li>
    </ul>
    <p>This problem teaches conditional logic within loops.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 6
Output: *#*#*#</pre>
    <p><b>Explanation:</b> Positions 1,3,5: <code>*</code>; Positions 2,4,6: <code>#</code></p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 4
Output: *#*#</pre>
    <p><b>Explanation:</b> Positions 1,3: <code>*</code>; Positions 2,4: <code>#</code></p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 3
Output: *#*</pre>
    <p><b>Explanation:</b> Positions 1,3: <code>*</code>; Position 2: <code>#</code></p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "*#*#*#", "stdinput": "6" },
    { "id": 2, "input": [], "expected": "*#*#", "stdinput": "4" },
    { "id": 3, "input": [], "expected": "*#*", "stdinput": "3" },
    { "id": 4, "input": [], "expected": "*", "stdinput": "1" },
    { "id": 5, "input": [], "expected": "*#*#*#*#*#", "stdinput": "10" }
  ],

  "templates": {
    "python": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 1:\n        print('*', end='')\n    else:\n        print('#', end='')",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 1; i <= n; i++) {\n            if (i % 2 == 1) {\n                System.out.print(\"*\");\n            } else {\n                System.out.print(\"#\");\n            }\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const n = parseInt(input);\n    let output = '';\n    for (let i = 1; i <= n; i++) {\n        if (i % 2 === 1) {\n            output += '*';\n        } else {\n            output += '#';\n        }\n    }\n    console.log(output);\n    readline.close();\n});",
    "c++": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        if (i % 2 == 1) {\n            cout << \"*\";\n        } else {\n            cout << \"#\";\n        }\n    }\n    return 0;\n}"
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