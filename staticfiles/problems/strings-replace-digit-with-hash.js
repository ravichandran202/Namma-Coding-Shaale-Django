module.exports = {
    "title": "Replace Digits with #",
    "difficulty": "Medium",
    "acceptance": "70%",
  
    "description": `
      <p>You have a string that may contain numbers (digits 0-9). Your task is to mask these digits by replacing every numeric character with a hash symbol (<code>#</code>).</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A string containing text and numbers.</li>
        <li><b>Logic:</b> Check each character. If it is a digit, replace it with '#'. Otherwise, keep it as is.</li>
        <li><b>Output Format:</b> The masked string.</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
User123
Output: User###</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
Phone: 98765
Output: Phone: #####</pre>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
NoDigitsHere
Output: NoDigitsHere</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "User###", "stdinput": "User123" },
      { "id": 2, "input": [], "expected": "Phone: #####", "stdinput": "Phone: 98765" },
      { "id": 3, "input": [], "expected": "NoDigitsHere", "stdinput": "NoDigitsHere" },
      { "id": 4, "input": [], "expected": "###", "stdinput": "123" },
      { "id": 5, "input": [], "expected": "A#B#C", "stdinput": "A1B2C" },
      { "id": 6, "input": [], "expected": "####", "stdinput": "2024" },
      { "id": 7, "input": [], "expected": "Pass#word", "stdinput": "Pass1word" }
    ],
  
    "templates": {
      "python": "s = input()\nresult = \"\"\nfor char in s:\n    if char.isdigit():\n        result += \"#\"\n    else:\n        result += char\nprint(result)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        // Replace all regex matches for digits (\\\\d)\n        System.out.println(s.replaceAll(\"\\\\d\", \"#\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Use regex /\\d/g to find all digits\n    console.log(line.replace(/\\d/g, '#'));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    for(int i = 0; i < s.length(); i++) {\n        if(isdigit(s[i])) {\n            s[i] = '#';\n        }\n    }\n    cout << s << endl;\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "s = input()\nresult = \"\"\nfor char in s:\n    if char.isdigit():\n        result += \"#\"\n    else:\n        result += char\nprint(result)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        // Replace all regex matches for digits (\\\\d)\n        System.out.println(s.replaceAll(\"\\\\d\", \"#\"));\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    // Use regex /\\d/g to find all digits\n    console.log(line.replace(/\\d/g, '#'));\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    for(int i = 0; i < s.length(); i++) {\n        if(isdigit(s[i])) {\n            s[i] = '#';\n        }\n    }\n    cout << s << endl;\n    return 0;\n}"
    },
  
    "wrapCode": function(lang, userCode, input) {
      switch(lang) {
        case 'python': return `${userCode}`;
        case 'java': return userCode;
        case 'javascript': return `${userCode}`;
        case 'c++': return userCode;
        default: return userCode;
      }
    }
  }