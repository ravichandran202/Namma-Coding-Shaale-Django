module.exports = {
    "title": "Sentence to CamelCase Converter",
    "difficulty": "Hard",
    "acceptance": "55%",
  
    "description": `
      <p>You have a sentence consisting of words separated by spaces. Your task is to convert it into <b>camelCase</b> format.</p>
      <p><b>camelCase</b> is a naming convention where the first word is lowercase, and every subsequent word starts with an uppercase letter, with no spaces in between.</p>
      <p><b>Pattern Details:</b></p>
      <ul>
        <li><b>Input:</b> A string of words separated by spaces.</li>
        <li><b>Logic:</b> Split the string. Lowercase the first word. Capitalize the first letter of all subsequent words. Join them together.</li>
        <li><b>Output Format:</b> A single string in camelCase.</li>
      </ul>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input: 
hello world
Output: helloWorld</pre>
      <p><b>Explanation:</b> "hello" stays lowercase. "world" becomes "World". Joined: "helloWorld".</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input: 
coding is fun
Output: codingIsFun</pre>
  
      <h3>Example 3</h3>
      <pre class="constraints">Input: 
User name
Output: userName</pre>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "helloWorld", "stdinput": "hello world" },
      { "id": 2, "input": [], "expected": "codingIsFun", "stdinput": "coding is fun" },
      { "id": 3, "input": [], "expected": "userName", "stdinput": "User name" },
      { "id": 4, "input": [], "expected": "simple", "stdinput": "simple" },
      { "id": 5, "input": [], "expected": "makeMeCamelCase", "stdinput": "make me camel case" },
      { "id": 6, "input": [], "expected": "javaScript", "stdinput": "java script" },
      { "id": 7, "input": [], "expected": "iLovePython", "stdinput": "i love python" }
    ],
  
    "templates": {
      "python": "s = input().split()\nif not s:\n    print(\"\")\nelse:\n    # First word lowercase, others capitalized\n    res = s[0].lower() + \"\".join(word.capitalize() for word in s[1:])\n    print(res)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (scanner.hasNextLine()) {\n            String[] parts = scanner.nextLine().split(\"\\\\s+\");\n            StringBuilder res = new StringBuilder();\n            for (int i = 0; i < parts.length; i++) {\n                if (i == 0) {\n                    res.append(parts[i].toLowerCase());\n                } else {\n                    res.append(parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1).toLowerCase());\n                }\n            }\n            System.out.println(res.toString());\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    const parts = line.split(' ');\n    const res = parts.map((word, index) => {\n        if (index === 0) return word.toLowerCase();\n        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n    }).join('');\n    console.log(res);\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string line, word;\n    getline(cin, line);\n    stringstream ss(line);\n    string res = \"\";\n    int index = 0;\n    \n    while (ss >> word) {\n        // Lowercase the whole word first to normalize\n        for(auto &c : word) c = tolower(c);\n        \n        if (index > 0) {\n            word[0] = toupper(word[0]);\n        }\n        res += word;\n        index++;\n    }\n    cout << res << endl;\n    return 0;\n}"
    },

  
    "solutions": {
      "python": "s = input().split()\nif not s:\n    print(\"\")\nelse:\n    # First word lowercase, others capitalized\n    res = s[0].lower() + \"\".join(word.capitalize() for word in s[1:])\n    print(res)",
      "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        if (scanner.hasNextLine()) {\n            String[] parts = scanner.nextLine().split(\"\\\\s+\");\n            StringBuilder res = new StringBuilder();\n            for (int i = 0; i < parts.length; i++) {\n                if (i == 0) {\n                    res.append(parts[i].toLowerCase());\n                } else {\n                    res.append(parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1).toLowerCase());\n                }\n            }\n            System.out.println(res.toString());\n        }\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.on('line', (line) => {\n    const parts = line.split(' ');\n    const res = parts.map((word, index) => {\n        if (index === 0) return word.toLowerCase();\n        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n    }).join('');\n    console.log(res);\n    readline.close();\n});",
      "c++": "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string line, word;\n    getline(cin, line);\n    stringstream ss(line);\n    string res = \"\";\n    int index = 0;\n    \n    while (ss >> word) {\n        // Lowercase the whole word first to normalize\n        for(auto &c : word) c = tolower(c);\n        \n        if (index > 0) {\n            word[0] = toupper(word[0]);\n        }\n        res += word;\n        index++;\n    }\n    cout << res << endl;\n    return 0;\n}"
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