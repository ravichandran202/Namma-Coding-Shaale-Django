module.exports = {
  "title": "Reverse String – Recursive",
  "difficulty": "easy",
  "acceptance": "95%",

  "description": `
    <p>Create a recursive function to reverse a string.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create a recursive function called <code>reverse_string(s)</code></li>
      <li>The function should return the reversed string</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello
Output:
olleh</pre>
    <p><b>Explanation:</b> Reverse of "hello" is "olleh"</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
abc
Output:
cba</pre>
    <p><b>Explanation:</b> Reverse of "abc" is "cba"</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "olleh", 
      "stdinput": "hello",
      "explanation": "Reverse of 'hello'" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "cba", 
      "stdinput": "abc",
      "explanation": "Reverse of 'abc'" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "",
      "explanation": "Empty string reversed is empty" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "a", 
      "stdinput": "a",
      "explanation": "Single character reversed is same" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "54321", 
      "stdinput": "12345",
      "explanation": "Reverse of numbers" 
    }
  ],

  "templates": {
    "python": "def reverse_string(s):\n    if len(s) == 0:\n        return \"\"\n    return reverse_string(s[1:]) + s[0]\n\n# main code\ns = input()\nprint(reverse_string(s))",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static String reverse_string(String s) {\n        if (s.length() == 0) {\n            return \"\";\n        }\n        return reverse_string(s.substring(1)) + s.charAt(0);\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        System.out.println(reverse_string(s));\n    }\n}",
    "javascript": "function reverse_string(s) {\n    if (s.length === 0) {\n        return \"\";\n    }\n    return reverse_string(s.substring(1)) + s[0];\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (s) => {\n    console.log(reverse_string(s));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstring reverse_string(string s) {\n    if (s.length() == 0) {\n        return \"\";\n    }\n    return reverse_string(s.substr(1)) + s[0];\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << reverse_string(s) << endl;\n    return 0;\n}"
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