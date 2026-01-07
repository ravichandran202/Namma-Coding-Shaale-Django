module.exports = {
    "title": "Toggle Case",
    "difficulty": "Hard",
    "acceptance": "60%",
  
    "description": `
      <p>You have a string of mixed uppercase and lowercase characters. Your task is to <b>toggle the case</b> of each character.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A string containing uppercase and lowercase letters.</li>
        <li><b>Logic:</b> Convert every uppercase letter to lowercase and every lowercase letter to uppercase. Non-alphabetic characters remain unchanged.</li>
        <li><b>Output Format:</b> The modified string.</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
Hello
Output: hELLO</pre>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
PyThOn
Output: pYtHoN</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "hELLO", "stdinput": "Hello" },
      { "id": 2, "input": [], "expected": "pYtHoN", "stdinput": "PyThOn" },
      { "id": 3, "input": [], "expected": "abc-DEF", "stdinput": "ABC-def" },
      { "id": 4, "input": [], "expected": "LOWER", "stdinput": "lower" },
      { "id": 5, "input": [], "expected": "upper", "stdinput": "UPPER" },
      { "id": 6, "input": [], "expected": "123!@#", "stdinput": "123!@#" },
      { "id": 7, "input": [], "expected": "tOGGLE mE", "stdinput": "Toggle Me" }
    ],
  
    "templates": {
      "python": "s = input()\n# swapcase() is a built-in method for this exact purpose\nprint(s.swapcase())",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        StringBuilder sb = new StringBuilder();\n        for (char c : s.toCharArray()) {\n            if (Character.isUpperCase(c)) {\n                sb.append(Character.toLowerCase(c));\n            } else if (Character.isLowerCase(c)) {\n                sb.append(Character.toUpperCase(c));\n            } else {\n                sb.append(c);\n            }\n        }\n        System.out.println(sb.toString());\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    let res = '';\n    for (let char of line) {\n        if (char === char.toUpperCase()) {\n            res += char.toLowerCase();\n        } else {\n            res += char.toUpperCase();\n        }\n    }\n    console.log(res);\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    for (int i = 0; i < s.length(); i++) {\n        if (isupper(s[i])) {\n            s[i] = tolower(s[i]);\n        } else if (islower(s[i])) {\n            s[i] = toupper(s[i]);\n        }\n    }\n    cout << s << endl;\n    return 0;\n}"
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