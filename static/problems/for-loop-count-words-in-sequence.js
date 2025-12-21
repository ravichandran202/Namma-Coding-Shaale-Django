module.exports = {
  "title": "Word Counter",
  "difficulty": "medium",
  "acceptance": "86%",

  "description": `
    <p>Count the number of words in a sentence (separated by spaces).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a sentence as input</li>
      <li>Print total number of words in given sequence</li>
    </ul>

    <p>This problem teaches string processing and word counting logic.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: I love Python programming
Output: 4</pre>
    <p><b>Explanation:</b> Words: I, love, Python, programming (4 words)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Hello World
Output: 2</pre>
    <p><b>Explanation:</b> Words: Hello, World (2 words)</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "I love Python programming" },
    { "id": 2, "input": [], "expected": "2", "stdinput": "Hello World" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "SingleWord" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "One Two Three" },
    { "id": 5, "input": [], "expected": "5", "stdinput": "This is a test sentence" },
    { "id": 6, "input": [], "expected": "0", "stdinput": " " }
  ],

  "templates": {
    "python": "s = input().strip()\ncount = 1\nfor ch in s:\n    if ch == ' ':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine().trim();\n        int count = 1;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == ' ') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const s = input.trim();\n    let count = 1;\n    for (let i = 0; i < s.length; i++) {\n        if (s[i] === ' ') {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int count = 1;\n    for (char ch : s) {\n        if (ch == ' ') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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