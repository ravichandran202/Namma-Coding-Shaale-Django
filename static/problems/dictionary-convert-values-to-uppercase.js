module.exports = {
  "title": "Convert All Values to Uppercase",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Convert all string values in a dictionary to uppercase letters.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of key-value pairs</li>
      <li>Next <code>n</code> lines: each line contains a key (string) and a value (string) separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of key-value pairs from the first input line</li>
      <li>For each following line, read the key and value and store them in a dictionary</li>
      <li>Convert every value in the dictionary to uppercase letters</li>
      <li>Print the modified dictionary</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
a red
b blue
c green

Output:
{'a': 'RED', 'b': 'BLUE', 'c': 'GREEN'}</pre>
    <p><b>Explanation:</b> Values <code>red</code>, <code>blue</code>, <code>green</code> are converted to uppercase: <code>RED</code>, <code>BLUE</code>, <code>GREEN</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
name Alice
city Boston

Output:
{'name': 'ALICE', 'city': 'BOSTON'}</pre>
    <p><b>Explanation:</b> Values <code>Alice</code> and <code>Boston</code> are converted to uppercase: <code>ALICE</code> and <code>BOSTON</code>.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'a': 'RED', 'b': 'BLUE', 'c': 'GREEN'}", 
      "stdinput": "3\na red\nb blue\nc green",
      "explanation": "Values converted to uppercase" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'name': 'ALICE', 'city': 'BOSTON'}", 
      "stdinput": "2\nname Alice\ncity Boston",
      "explanation": "Values converted to uppercase" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{'x': 'HELLO', 'y': 'WORLD123'}", 
      "stdinput": "2\nx Hello\ny World123",
      "explanation": "Mixed case and numbers: Hello→HELLO, World123→WORLD123" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'a': 'APPLE', 'b': 'BANANA', 'c': 'CHERRY'}", 
      "stdinput": "3\na apple\nb Banana\nc Cherry",
      "explanation": "Different original cases all become uppercase" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'color1': 'RED', 'color2': 'GREEN', 'color3': 'BLUE'}", 
      "stdinput": "3\ncolor1 Red\ncolor2 GREEN\ncolor3 Blue",
      "explanation": "Mixed original cases all become uppercase" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'test': 'UPPERCASE', 'sample': 'LOWERCASE'}", 
      "stdinput": "2\ntest UPPERCASE\nsample lowercase",
      "explanation": "Already uppercase stays uppercase, lowercase becomes uppercase" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "{'fruit': 'APPLE-ORANGE', 'drink': 'JUICE123'}", 
      "stdinput": "2\nfruit Apple-Orange\ndrink Juice123",
      "explanation": "Hyphens and numbers remain, letters become uppercase" 
    }
  ],

  "templates": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nfor k in d:\n    d[k] = d[k].upper()\n\nprint(d)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        for (Map.Entry<String, String> entry : d.entrySet()) {\n            d.put(entry.getKey(), entry.getValue().toUpperCase());\n        }\n        \n        System.out.println(d);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0])) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        for (const key in d) {\n            d[key] = d[key].toUpperCase();\n        }\n        \n        console.log(JSON.stringify(d).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    for (auto& entry : d) {\n        string& value = entry.second;\n        transform(value.begin(), value.end(), value.begin(), ::toupper);\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : d) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nfor k in d:\n    d[k] = d[k].upper()\n\nprint(d)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        for (Map.Entry<String, String> entry : d.entrySet()) {\n            d.put(entry.getKey(), entry.getValue().toUpperCase());\n        }\n        \n        System.out.println(d);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0])) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        for (const key in d) {\n            d[key] = d[key].toUpperCase();\n        }\n        \n        console.log(JSON.stringify(d).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    for (auto& entry : d) {\n        string& value = entry.second;\n        transform(value.begin(), value.end(), value.begin(), ::toupper);\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : d) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    return 0;\n}"
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