module.exports = {
  "title": "Convert to Uppercase – String Transformation Function",
  "difficulty": "easy",
  "acceptance": "99%",

  "description": `
    <p>Create a function that takes a string as input and returns its uppercase version.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create a function called <code>to_uppercase</code> that takes one parameter</li>
      <li>The function should convert the string to uppercase letters</li>
      <li>The function should return the uppercase string</li>
      <li>Call the function with the input string and print the returned value</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello world
Output:
HELLO WORLD</pre>
    <p><b>Explanation:</b> Function returns uppercase version of "hello world"</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
Python 3.9
Output:
PYTHON 3.9</pre>
    <p><b>Explanation:</b> Function returns uppercase version of "Python 3.9" (numbers and punctuation unchanged)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "HELLO WORLD", 
      "stdinput": "hello world",
      "explanation": "Returns uppercase: HELLO WORLD" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "PYTHON 3.9", 
      "stdinput": "Python 3.9",
      "explanation": "Returns uppercase: PYTHON 3.9" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "123ABC", 
      "stdinput": "123abc",
      "explanation": "Returns uppercase: 123ABC" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "", 
      "stdinput": "",
      "explanation": "Returns empty string unchanged" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "A", 
      "stdinput": "a",
      "explanation": "Returns uppercase: A" 
    }
  ],

  "templates": {
    "python": "def to_uppercase(s):\n    return s.upper()\n\n# Main code\ntext = input()\nresult = to_uppercase(text)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static String to_uppercase(String s) {\n        return s.toUpperCase();\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        String result = to_uppercase(text);\n        System.out.println(result);\n    }\n}",
    "javascript": "function to_uppercase(s) {\n    return s.toUpperCase();\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    const result = to_uppercase(text);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nstring to_uppercase(string s) {\n    transform(s.begin(), s.end(), s.begin(), ::toupper);\n    return s;\n}\n\nint main() {\n    string text;\n    getline(cin, text);\n    string result = to_uppercase(text);\n    cout << result << endl;\n    return 0;\n}"
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