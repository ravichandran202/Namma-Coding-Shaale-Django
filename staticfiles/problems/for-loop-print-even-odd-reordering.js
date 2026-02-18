 module.exports = {
  "title": "Even-Odd Character Reordering",
  "difficulty": "hard",
  "acceptance": "84%",

  "description": `
    <p>Rearrange the characters of a string by printing all characters at even indices first, followed by characters at odd indices.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input</li>
      <li>Print characters at even indices (0, 2, 4, ...)</li>
      <li>Then print characters at odd indices (1, 3, 5, ...)</li>
      <li>Output should be a single continuous string with no spaces</li>
    </ul>

    <p>This problem teaches index-based grouping and string manipulation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: qwerty
Output: qetwry</pre>
    <p><b>Explanation:</b> Even indices -> q,e,t ; Odd indices -> w,r,y</p>

    <h3>Example 2</h3>
    <pre class="constraints">Input: abcdef
Output: acebdf</pre>
    <p><b>Explanation:</b> Even: a,c,e ; Odd: b,d,f</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "qetwry", "stdinput": "qwerty" },
    { "id": 2, "input": [], "expected": "acebdf", "stdinput": "abcdef" },
    { "id": 3, "input": [], "expected": "Hloel", "stdinput": "Hello" },
    { "id": 4, "input": [], "expected": "A", "stdinput": "A" },
    { "id": 5, "input": [], "expected": "1324", "stdinput": "1234" },
    { "id": 6, "input": [], "expected": "1357924680", "stdinput": "1234567890" }
  ],

  "templates": {
    "python": "s = input()\nevens = ''.join(s[i] for i in range(0, len(s), 2))\nodds = ''.join(s[i] for i in range(1, len(s), 2))\nprint(evens + odds)",
    
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        StringBuilder evens = new StringBuilder();\n        StringBuilder odds = new StringBuilder();\n        for (int i = 0; i < s.length(); i++) {\n            if (i % 2 == 0) evens.append(s.charAt(i));\n            else odds.append(s.charAt(i));\n        }\n        System.out.print(evens.toString() + odds.toString());\n    }\n}",
    
    "javascript": "const readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nreadline.question('', (input) => {\n  let evens = '';\n  let odds = '';\n  for (let i = 0; i < input.length; i++) {\n    if (i % 2 === 0) evens += input[i];\n    else odds += input[i];\n  }\n  console.log(evens + odds);\n  readline.close();\n});",
    
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    string evens = \"\", odds = \"\";\n    for (int i = 0; i < s.length(); i++) {\n        if (i % 2 == 0) evens += s[i];\n        else odds += s[i];\n    }\n    cout << evens + odds;\n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\nevens = ''.join(s[i] for i in range(0, len(s), 2))\nodds = ''.join(s[i] for i in range(1, len(s), 2))\nprint(evens + odds)",
    
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        StringBuilder evens = new StringBuilder();\n        StringBuilder odds = new StringBuilder();\n        for (int i = 0; i < s.length(); i++) {\n            if (i % 2 == 0) evens.append(s.charAt(i));\n            else odds.append(s.charAt(i));\n        }\n        System.out.print(evens.toString() + odds.toString());\n    }\n}",
    
    "javascript": "const readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nreadline.question('', (input) => {\n  let evens = '';\n  let odds = '';\n  for (let i = 0; i < input.length; i++) {\n    if (i % 2 === 0) evens += input[i];\n    else odds += input[i];\n  }\n  console.log(evens + odds);\n  readline.close();\n});",
    
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    string evens = \"\", odds = \"\";\n    for (int i = 0; i < s.length(); i++) {\n        if (i % 2 == 0) evens += s[i];\n        else odds += s[i];\n    }\n    cout << evens + odds;\n    return 0;\n}"
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
