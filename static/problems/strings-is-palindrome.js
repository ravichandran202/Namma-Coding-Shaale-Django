module.exports = {
    "title": "Palindrome String Validator",
    "difficulty": "medium",
    "acceptance": "78%",
  
    "description": `
      <p>You have a string of characters. Your task is to determine if the string is a <b>Palindrome</b>.</p>
      <p>A <b>Palindrome</b> is a word, phrase, or sequence that reads the same backward as forward.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A single line containing a string (text or numbers).</li>
        <li><b>Logic:</b> Compare the original string with its reverse. (Case-sensitive).</li>
        <li><b>Output Format:</b> Display "True" if it is a palindrome, otherwise display "False".</li>
      </ul>
      <p>This problem helps practice string reversal techniques and conditional logic.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
madam
Output: True</pre>
      <p><b>Explanation:</b> "madam" read backwards is also "madam".</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
hello
Output: False</pre>
      <p><b>Explanation:</b> "hello" read backwards is "olleh", which does not match.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "True", "stdinput": "madam" },
      { "id": 2, "input": [], "expected": "False", "stdinput": "hello" },
      { "id": 3, "input": [], "expected": "True", "stdinput": "racecar" },
      { "id": 4, "input": [], "expected": "True", "stdinput": "12321" },
      { "id": 5, "input": [], "expected": "False", "stdinput": "Python" },
      { "id": 6, "input": [], "expected": "True", "stdinput": "level" },
      { "id": 7, "input": [], "expected": "False", "stdinput": "ab" },
      { "id": 8, "input": [], "expected": "True", "stdinput": "a" },
      { "id": 9, "input": [], "expected": "False", "stdinput": "12345" }
    ],
  
    "templates": {
      "python": "s = input()\n# Check if string equals its reverse\nif s == s[::-1]:\n    print(\"True\")\nelse:\n    print(\"False\")",
      
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        \n        // Create reversed version\n        String reversed = new StringBuilder(s).reverse().toString();\n        \n        if (s.equals(reversed)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
      
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Split, Reverse, Join to get reversed string\n    const reversed = line.split('').reverse().join('');\n    \n    if (line === reversed) {\n        console.log(\"True\");\n    } else {\n        console.log(\"False\");\n    }\n    readline.close();\n});",
      
      "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    \n    string reversed_s = s;\n    reverse(reversed_s.begin(), reversed_s.end());\n    \n    if (s == reversed_s) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    return 0;\n}"
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