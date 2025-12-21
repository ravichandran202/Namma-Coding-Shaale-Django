module.exports ={
  "title": "Space Counter",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Count spaces in the given sentence.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a sentence as input</li>
      <li>Use for loop to iterate through each character</li>
      <li>Count space characters (' ')</li>
      <li>Print the total number of spaces</li>
    </ul>

    <p>This problem teaches character counting and string iteration.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: I am learning Python
Output: 3</pre>
    <p><b>Explanation:</b> Spaces between: I|am|learning|Python (3 spaces)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Hello World
Output: 1</pre>
    <p><b>Explanation:</b> One space between Hello and World</p>
    
  `,


  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "I am learning Python" },
    { "id": 2, "input": [], "expected": "1", "stdinput": "Hello World" },
    { "id": 3, "input": [], "expected": "0", "stdinput": "NoSpacesHere" },
    { "id": 4, "input": [], "expected": "3", "stdinput": "This is a test" },
    { "id": 5, "input": [], "expected": "2", "stdinput": "Multiple  spaces" },
    { "id": 6, "input": [], "expected": "1", "stdinput": " " }
  ],

  "templates": {
    "python": "s = input()\ncount = 0\nfor ch in s:\n    if ch == ' ':\n        count += 1\nprint(count)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        int count = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (s.charAt(i) == ' ') {\n                count++;\n            }\n        }\n        System.out.println(count);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let count = 0;\n    for (let i = 0; i < input.length; i++) {\n        if (input[i] === ' ') {\n            count++;\n        }\n    }\n    console.log(count);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    int count = 0;\n    for (char ch : s) {\n        if (ch == ' ') {\n            count++;\n        }\n    }\n    cout << count << endl;\n    return 0;\n}"
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