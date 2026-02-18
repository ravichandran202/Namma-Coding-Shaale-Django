module.exports = {
  "title": "Word Length",
  "difficulty": "Easy",
  "acceptance": "97%",

  "description": `
    <p>Read a word and count characters using a for loop (do not use len()).</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string (word) as input</li>
      <li>Use for loop to iterate through characters</li>
      <li>Count characters using a counter variable</li>
      <li>Print the final count</li>
    </ul>
    <p>This problem teaches manual counting and string iteration.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: Python
Output: 6</pre>
    <p><b>Explanation:</b> "Python" has 6 characters</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Hello
Output: 5</pre>
    <p><b>Explanation:</b> "Hello" has 5 characters</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "6", "stdinput": "Python" },
    { "id": 2, "input": [], "expected": "5", "stdinput": "Hello" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "A" },
    { "id": 4, "input": [], "expected": "11", "stdinput": "Programming" },
    { "id": 5, "input": [], "expected": "3", "stdinput": "123" }
  ],

  "templates": {
    "python": "word = input()\ncount = 0\nfor _ in word:\n    count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next();\n        int count = 0;\n        for (int i = 0; i < word.length(); i++) {\n            count++;\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        count++;\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    int count = 0;\n    for (char ch : word) {\n        count++;\n    }\n    cout << count << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "word = input()\ncount = 0\nfor _ in word:\n    count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String word = scanner.next();\n        int count = 0;\n        for (int i = 0; i < word.length(); i++) {\n            count++;\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        count++;\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    int count = 0;\n    for (char ch : word) {\n        count++;\n    }\n    cout << count << endl;\n    return 0;\n}"
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