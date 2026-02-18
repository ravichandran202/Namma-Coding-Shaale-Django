module.exports = {
  "title": "Find Longest Key",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>Find and print the dictionary key that has the maximum length (most characters).</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing the number of key-value pairs</li>
      <li>Next <code>n</code> lines: each line contains a key (string) and a value (string) separated by a space</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the number of key-value pairs from the first input line</li>
      <li>For each following line, read the key and value and store them in a dictionary</li>
      <li>Find the key that has the greatest number of characters</li>
      <li>Print only that key</li>
    </ol>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Keys and values are both strings</li>
      <li>Count the number of characters in each key</li>
      <li>If multiple keys have the same maximum length, print the first one encountered</li>
      <li>Keys are guaranteed to be non-empty</li>
      <li>Output should be only the key with maximum length</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
name Ravi
location Mysore
age 20

Output:
location</pre>
    <p><b>Explanation:</b> Key lengths: <code>name</code> (4), <code>location</code> (8), <code>age</code> (3). <code>location</code> has the most characters (8).</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
short 1
longer 2

Output:
longer</pre>
    <p><b>Explanation:</b> Key lengths: <code>short</code> (5), <code>longer</code> (6). <code>longer</code> has the most characters.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "location", 
      "stdinput": "3\nname Ravi\nlocation Mysore\nage 20",
      "explanation": "Longest key: location (8 characters)" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "longer", 
      "stdinput": "2\nshort 1\nlonger 2",
      "explanation": "Longest key: longer (6 characters)" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "elephant", 
      "stdinput": "5\ncat animal\ndog animal\nelephant animal\nlion animal\ntiger animal",
      "explanation": "Longest key: elephant (8 characters)" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "verylongkeyname", 
      "stdinput": "3\nshort x\nmedium y\nverylongkeyname z",
      "explanation": "Longest key: verylongkeyname (15 characters)" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "yellow", 
      "stdinput": "6\nred color\nblue color\ngreen color\nyellow color\norange color\npurple color",
      "explanation": "Longest key among equal lengths: yellow (first with 6 characters)" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "m", 
      "stdinput": "1\nm value",
      "explanation": "Only one key: 'm' (1 character)" 
    }
  ],

  "templates": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nbig = \"\"\nfor x in d:\n    if len(x) > len(big):\n        big = x\n\nprint(big)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        String big = \"\";\n        for (String key : d.keySet()) {\n            if (key.length() > big.length()) {\n                big = key;\n            }\n        }\n        \n        System.out.println(big);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0])) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        let big = \"\";\n        for (const key in d) {\n            if (key.length > big.length) {\n                big = key;\n            }\n        }\n        \n        console.log(big);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    string big = \"\";\n    for (const auto& entry : d) {\n        if (entry.first.length() > big.length()) {\n            big = entry.first;\n        }\n    }\n    \n    cout << big << endl;\n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nd = {}\n\nfor i in range(n):\n    k, v = input().split()\n    d[k] = v\n\nbig = \"\"\nfor x in d:\n    if len(x) > len(big):\n        big = x\n\nprint(big)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = Integer.parseInt(scanner.nextLine());\n        \n        Map<String, String> d = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            d.put(parts[0], parts[1]);\n        }\n        \n        String big = \"\";\n        for (String key : d.keySet()) {\n            if (key.length() > big.length()) {\n                big = key;\n            }\n        }\n        \n        System.out.println(big);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nlet lineCount = 0;\n\nreadline.on('line', (line) => {\n    lines.push(line);\n    lineCount++;\n    \n    if (lineCount > parseInt(lines[0])) {\n        const n = parseInt(lines[0]);\n        const d = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            d[key] = value;\n        }\n        \n        let big = \"\";\n        for (const key in d) {\n            if (key.length > big.length) {\n                big = key;\n            }\n        }\n        \n        console.log(big);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cin.ignore();\n    \n    map<string, string> d;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        d[key] = value;\n    }\n    \n    string big = \"\";\n    for (const auto& entry : d) {\n        if (entry.first.length() > big.length()) {\n            big = entry.first;\n        }\n    }\n    \n    cout << big << endl;\n    return 0;\n}"
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