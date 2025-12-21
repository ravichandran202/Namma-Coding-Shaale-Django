module.exports = {
  "title": "Sum Digits (string)",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Read a numeric string (e.g., "1234") and print sum of its digits.</p>
    <p><b>Requirements:</b></p>
    <ul>
      <li>Read a numeric string as input</li>
      <li>get total sum</li>
      <li>Print the final sum</li>
    </ul>
    <p><b>Digit Summation Methods:</b></p>
    <ul>
      <li><b>Method 1:</b> Use int() to convert character to integer</li>
      <li><b>Method 2:</b> Use ASCII conversion</li>
      <li>Both methods give the same result</li>
      <li>Example: "1234" → 1+2+3+4 = 10</li>
    </ul>
    <p>This problem teaches character-to-integer conversion and digit summation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input: 1234
Output: 10</pre>
    <p><b>Explanation:</b> 1+2+3+4 = 10</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input: 567
Output: 18</pre>
    <p><b>Explanation:</b> 5+6+7 = 18</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input: 100
Output: 1</pre>
    <p><b>Explanation:</b> 1+0+0 = 1</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "10", "stdinput": "1234" },
    { "id": 2, "input": [], "expected": "18", "stdinput": "567" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "100" },
    { "id": 4, "input": [], "expected": "45", "stdinput": "123456789" },
    { "id": 5, "input": [], "expected": "3", "stdinput": "111" },
    { "id": 6, "input": [], "expected": "15", "stdinput": "555" },
    { "id": 7, "input": [], "expected": "21", "stdinput": "678" },
    { "id": 8, "input": [], "expected": "0", "stdinput": "000" }
  ],

  "templates": {
    "python": "s = input()\ntotal = 0\nfor ch in s:\n    total += int(ch)\nprint(total)",
    "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.next();\n        int total = 0;\n        for (int i = 0; i < s.length(); i++) {\n            total += Character.getNumericValue(s.charAt(i));\n        }\n        System.out.println(total);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    let total = 0;\n    for (let i = 0; i < input.length; i++) {\n        total += parseInt(input[i]);\n    }\n    console.log(total);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    int total = 0;\n    for (char ch : s) {\n        total += ch - '0';\n    }\n    cout << total << endl;\n    return 0;\n}"
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