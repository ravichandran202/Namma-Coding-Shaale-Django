module.exports = {
  "title": "Return Reverse String",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Create a function that takes a string as input and returns its reverse.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create a function called <code>get_reverse</code> that takes one parameter</li>
      <li>The function should reverse the string and return it</li>
      <li>Call the function with the input string and print the returned value</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input can be any string (letters, numbers, spaces, symbols)</li>
      <li>Function must <b>return</b> the reversed string, not print it</li>
      <li>Function must be named exactly <code>get_reverse</code></li>
      <li>Empty string should return as empty string</li>
      <li>Main code should call the function and print the result</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello
Output:
olleh</pre>
    <p><b>Explanation:</b> Function returns reverse of "hello" which is "olleh"</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Python
Output:
nohtyP</pre>
    <p><b>Explanation:</b> Function returns reverse of "Python" which is "nohtyP"</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "olleh", 
      "stdinput": "hello",
      "explanation": "Returns reverse of 'hello'" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "nohtyP", 
      "stdinput": "Python",
      "explanation": "Returns reverse of 'Python'" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "", 
      "stdinput": "",
      "explanation": "Returns empty string" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "54321", 
      "stdinput": "12345",
      "explanation": "Returns reverse of '12345'" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "a", 
      "stdinput": "a",
      "explanation": "Returns same single character" 
    }
  ],

  "templates": {
    "python": "def get_reverse(s):\n    return s[::-1]\n\n# Main code\ntext = input()\nresult = get_reverse(text)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static String get_reverse(String s) {\n        StringBuilder sb = new StringBuilder(s);\n        return sb.reverse().toString();\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        String result = get_reverse(text);\n        System.out.println(result);\n    }\n}",
    "javascript": "function get_reverse(s) {\n    return s.split('').reverse().join('');\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    const result = get_reverse(text);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nstring get_reverse(string s) {\n    reverse(s.begin(), s.end());\n    return s;\n}\n\nint main() {\n    string text;\n    getline(cin, text);\n    string result = get_reverse(text);\n    cout << result << endl;\n    return 0;\n}"
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