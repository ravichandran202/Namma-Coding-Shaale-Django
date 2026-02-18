module.exports = {
    "title": "Middle Segment Reversal",
    "difficulty": "Medium",
    "acceptance": "65%",
  
    "description": `
      <p>You have a string of characters. Your task is to reverse the "middle" segment of the string, keeping the first and last characters in their original positions.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A single string.</li>
        <li><b>Logic:</b> Keep the character at index <code>0</code> and the last index fixed. Reverse the substring between them.</li>
        <li><b>Output Format:</b> The modified string.</li>
      </ul>
      <p>If the string has fewer than 3 characters, it should remain unchanged.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
abcdef
Output: aedcbf</pre>
      <p><b>Explanation:</b> First char 'a' and last char 'f' stay. 'bcde' is reversed to 'edcb'. Result: a-edcb-f.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
XYZ
Output: XYZ</pre>
      <p><b>Explanation:</b> Middle is 'Y'. Reversing 'Y' is still 'Y'.</p>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
radar
Output: radar</pre>
      <p><b>Explanation:</b> 'ada' reversed is still 'ada'.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "aedcbf", "stdinput": "abcdef" },
      { "id": 2, "input": [], "expected": "XYZ", "stdinput": "XYZ" },
      { "id": 3, "input": [], "expected": "radar", "stdinput": "radar" },
      { "id": 4, "input": [], "expected": "14321", "stdinput": "12341" },
      { "id": 5, "input": [], "expected": "ab", "stdinput": "ab" },
      { "id": 6, "input": [], "expected": "A", "stdinput": "A" },
      { "id": 7, "input": [], "expected": "hlleo", "stdinput": "hello" }
    ],
  
    "templates": {
      "python": "s = input()\nif len(s) < 3:\n    print(s)\nelse:\n    # first + reversed(middle) + last\n    print(s[0] + s[1:-1][::-1] + s[-1])",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        if (s.length() < 3) {\n            System.out.println(s);\n        } else {\n            String middle = new StringBuilder(s.substring(1, s.length() - 1)).reverse().toString();\n            System.out.println(s.charAt(0) + middle + s.charAt(s.length() - 1));\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (s) => {\n    if (s.length < 3) {\n        console.log(s);\n    } else {\n        const middle = s.substring(1, s.length - 1).split('').reverse().join('');\n        console.log(s[0] + middle + s[s.length - 1]);\n    }\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    if (s.length() < 3) {\n        cout << s << endl;\n    } else {\n        string middle = s.substr(1, s.length() - 2);\n        reverse(middle.begin(), middle.end());\n        cout << s.front() << middle << s.back() << endl;\n    }\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "s = input()\nif len(s) < 3:\n    print(s)\nelse:\n    # first + reversed(middle) + last\n    print(s[0] + s[1:-1][::-1] + s[-1])",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String s = scanner.nextLine();\n        if (s.length() < 3) {\n            System.out.println(s);\n        } else {\n            String middle = new StringBuilder(s.substring(1, s.length() - 1)).reverse().toString();\n            System.out.println(s.charAt(0) + middle + s.charAt(s.length() - 1));\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (s) => {\n    if (s.length < 3) {\n        console.log(s);\n    } else {\n        const middle = s.substring(1, s.length - 1).split('').reverse().join('');\n        console.log(s[0] + middle + s[s.length - 1]);\n    }\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    if (s.length() < 3) {\n        cout << s << endl;\n    } else {\n        string middle = s.substr(1, s.length() - 2);\n        reverse(middle.begin(), middle.end());\n        cout << s.front() << middle << s.back() << endl;\n    }\n    return 0;\n}"
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