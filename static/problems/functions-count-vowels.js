module.exports = {
  "title": "Return Vowels Count",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>Create a function that takes a string as input and returns the number of vowels it contains.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line containing a string</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read a string from input</li>
      <li>Create a function called <code>count_vowels</code> that takes one parameter</li>
      <li>The function should count how many vowels (a, e, i, o, u) are in the string</li>
      <li>Count both uppercase and lowercase vowels</li>
      <li>The function should return the count</li>
      <li>Call the function with the input string and print the returned value</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>The input can be any string</li>
      <li>Vowels include both lowercase (a, e, i, o, u) and uppercase (A, E, I, O, U)</li>
      <li>Function must <b>return</b> the count, not print it</li>
      <li>Function must be named exactly <code>count_vowels</code></li>
      <li>Empty string returns 0</li>
      <li>Main code should call the function and print the result</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
programming
Output:
3</pre>
    <p><b>Explanation:</b> Function returns 3 (vowels: o, a, i)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
AEIOU
Output:
5</pre>
    <p><b>Explanation:</b> Function returns 5 (all uppercase vowels)</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "3", 
      "stdinput": "programming",
      "explanation": "Returns 3 vowels" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "5", 
      "stdinput": "AEIOU",
      "explanation": "Returns 5 vowels" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "0", 
      "stdinput": "",
      "explanation": "Returns 0 for empty string" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "0", 
      "stdinput": "xyz123",
      "explanation": "Returns 0 (no vowels)" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "5", 
      "stdinput": "aeiou",
      "explanation": "Returns 5 vowels" 
    }
  ],

  "templates": {
    "python": "def count_vowels(s):\n    count = 0\n    vowels = \"aeiouAEIOU\"\n    for char in s:\n        if char in vowels:\n            count += 1\n    return count\n\n# Main code\ntext = input()\nresult = count_vowels(text)\nprint(result)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static int count_vowels(String s) {\n        int count = 0;\n        String vowels = \"aeiouAEIOU\";\n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (vowels.indexOf(ch) != -1) {\n                count++;\n            }\n        }\n        return count;\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        int result = count_vowels(text);\n        System.out.println(result);\n    }\n}",
    "javascript": "function count_vowels(s) {\n    let count = 0;\n    const vowels = \"aeiouAEIOU\";\n    for (let i = 0; i < s.length; i++) {\n        if (vowels.includes(s[i])) {\n            count++;\n        }\n    }\n    return count;\n}\n\nconst readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (text) => {\n    const result = count_vowels(text);\n    console.log(result);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint count_vowels(string s) {\n    int count = 0;\n    string vowels = \"aeiouAEIOU\";\n    for (char ch : s) {\n        if (vowels.find(ch) != string::npos) {\n            count++;\n        }\n    }\n    return count;\n}\n\nint main() {\n    string text;\n    getline(cin, text);\n    int result = count_vowels(text);\n    cout << result << endl;\n    return 0;\n}"
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