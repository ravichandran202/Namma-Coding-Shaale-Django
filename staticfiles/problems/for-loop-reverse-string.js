module.exports = {
  "title": "Reverse String",
  "difficulty": "medium",
  "acceptance": "85%",

  "description": `
    <p>Read a string and print it in reverse order using a for loop.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a string as input</li>
      <li>Use for loop to iterate through each character</li>
      <li>Build reversed string by prepending each character</li>
      <li>Print the final reversed string</li>
    </ul>
    <p><b>String Reversal Concept:</b></p>
    <ul>
      <li>Start with empty reversed string</li>
      <li>For each character in original string, prepend it to reversed string</li>
      <li>Example: <code>"hello" → "o" + "" → "l" + "o" → "e" + "lo" → "l" + "elo" → "h" + "lleho"</code></li>
      <li>Alternative: Iterate from end to start using negative indexing</li>
    </ul>
    <p>This problem teaches string manipulation and reversal algorithms.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: hello
Output: olleh</pre>
    <p><b>Explanation:</b> "hello" reversed is "olleh"</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: Python
Output: nohtyP</pre>
    <p><b>Explanation:</b> "Python" reversed is "nohtyP"</p>
  `,

  "conditions": `
    <ul>
      <li>Build reversed string manually (no built-in reverse function)</li>
      <li>Print the reversed string</li>
    </ul>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "olleh", "stdinput": "hello" },
    { "id": 2, "input": [], "expected": "nohtyP", "stdinput": "Python" },
    { "id": 3, "input": [], "expected": "a", "stdinput": "a" },
    { "id": 4, "input": [], "expected": "54321", "stdinput": "12345" },
    { "id": 5, "input": [], "expected": "!dlroW olleH", "stdinput": "Hello World!" },
  ],

  "templates": {
    "python": "s = input()\nrev = \"\"\nfor ch in s:\n    rev = ch + rev\nprint(rev)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        String rev = \"\";\n        for (int i = 0; i < s.length(); i++) {\n            rev = s.charAt(i) + rev;\n        }\n        System.out.println(rev);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let rev = \"\";\n    for (let i = 0; i < input.length; i++) {\n        rev = input[i] + rev;\n    }\n    console.log(rev);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    string rev = \"\";\n    for (char ch : s) {\n        rev = ch + rev;\n    }\n    cout << rev << endl;\n    return 0;\n}"
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