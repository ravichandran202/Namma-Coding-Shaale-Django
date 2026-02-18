module.exports = {
  "title": "Palindrome Checker",
  "difficulty": "hard",
  "acceptance": "92%",

  "description": `
    <p>Create a recursive function to check whether a given string is a palindrome.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string (may contain letters, digits, or other characters)</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create a recursive function called <code>is_palindrome(s)</code></li>
      <li>The function should return <code>True</code> if the string reads the same forwards and backwards</li>
      <li>Return <code>False</code> otherwise</li>
      <li>Use recursion to compare characters from both ends moving toward the center</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
madam
Output:
YES</pre>
    <p><b>Explanation:</b> Reads the same forwards and backwards: <b>m</b>ada<b>m</b> → <b>m</b> matches <b>m</b>, <b>a</b>da → <b>a</b> matches <b>a</b>, <b>d</b> → single character</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
hello
Output:
NO</pre>
    <p><b>Explanation:</b> First character <b>h</b> doesn't match last character <b>o</b>, so not a palindrome</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "YES", 
      "stdinput": "madam",
      "explanation": "Classic palindrome example" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "NO", 
      "stdinput": "hello",
      "explanation": "Not a palindrome - first and last characters differ" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "YES", 
      "stdinput": "a",
      "explanation": "Single character is always palindrome" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "YES", 
      "stdinput": "racecar",
      "explanation": "Common palindrome word" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "YES", 
      "stdinput": "",
      "explanation": "Empty string is palindrome" 
    }
  ],

  "templates": {
    "python": "def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])\n\n# main code\ns = input().strip()\nprint(\"YES\" if is_palindrome(s) else \"NO\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean is_palindrome(String s) {\n        if (s.length() <= 1) {\n            return true;\n        }\n        if (s.charAt(0) != s.charAt(s.length() - 1)) {\n            return false;\n        }\n        return is_palindrome(s.substring(1, s.length() - 1));\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        System.out.println(is_palindrome(s) ? \"YES\" : \"NO\");\n    }\n}",
    "javascript": "function is_palindrome(s) {\n    if (s.length <= 1) {\n        return true;\n    }\n    if (s[0] !== s[s.length - 1]) {\n        return false;\n    }\n    return is_palindrome(s.substring(1, s.length - 1));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const s = input.trim();\n    console.log(is_palindrome(s) ? \"YES\" : \"NO\");\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nbool is_palindrome(string s) {\n    if (s.length() <= 1) {\n        return true;\n    }\n    if (s[0] != s[s.length() - 1]) {\n        return false;\n    }\n    return is_palindrome(s.substr(1, s.length() - 2));\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << (is_palindrome(s) ? \"YES\" : \"NO\") << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])\n\n# main code\ns = input().strip()\nprint(\"YES\" if is_palindrome(s) else \"NO\")",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static boolean is_palindrome(String s) {\n        if (s.length() <= 1) {\n            return true;\n        }\n        if (s.charAt(0) != s.charAt(s.length() - 1)) {\n            return false;\n        }\n        return is_palindrome(s.substring(1, s.length() - 1));\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        System.out.println(is_palindrome(s) ? \"YES\" : \"NO\");\n    }\n}",
    "javascript": "function is_palindrome(s) {\n    if (s.length <= 1) {\n        return true;\n    }\n    if (s[0] !== s[s.length - 1]) {\n        return false;\n    }\n    return is_palindrome(s.substring(1, s.length - 1));\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const s = input.trim();\n    console.log(is_palindrome(s) ? \"YES\" : \"NO\");\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nbool is_palindrome(string s) {\n    if (s.length() <= 1) {\n        return true;\n    }\n    if (s[0] != s[s.length() - 1]) {\n        return false;\n    }\n    return is_palindrome(s.substr(1, s.length() - 2));\n}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << (is_palindrome(s) ? \"YES\" : \"NO\") << endl;\n    return 0;\n}"
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