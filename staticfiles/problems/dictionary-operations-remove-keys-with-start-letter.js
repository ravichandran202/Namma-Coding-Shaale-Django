module.exports = {
  "title": "Remove Keys Starting With a Letter",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>Remove dictionary keys that start with a given letter.</p>
    <p><b>Input:</b> First line: read a letter. Second line: <code>key=value</code> pairs</p>
    <p><b>Output:</b> Print dictionary with filtered keys : remove all the keys from given dictionary which starts with letter given in the input</p>
    <p><b>Note:</b> Case-sensitive comparison.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
a
apple=1 age=2 ball=3

Output:
{'ball': '3'}</pre>
    <p>Remove keys starting with 'a' ("apple" and "age"), keep "ball".</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
b
apple=1 banana=2 berry=3 cherry=4

Output:
{'apple': '1', 'cherry': '4'}</pre>
    <p>Remove keys starting with 'b' ("banana" and "berry"), keep others.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'ball': '3'}", 
      "stdinput": "a\napple=1 age=2 ball=3",
      "explanation": "Remove keys starting with 'a', keep 'ball'." 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'apple': '1', 'cherry': '4'}", 
      "stdinput": "b\napple=1 banana=2 berry=3 cherry=4",
      "explanation": "Remove keys starting with 'b', keep 'apple' and 'cherry'." 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "a\napple=1 age=2",
      "explanation": "All keys start with 'a', so dictionary becomes empty." 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'cat': 'animal', 'dog': 'animal'}", 
      "stdinput": "b\ncat=animal dog=animal",
      "explanation": "No keys start with 'b', keep all." 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'banana': 'fruit', 'berry': 'fruit'}", 
      "stdinput": "a\napple=fruit banana=fruit berry=fruit",
      "explanation": "Remove 'apple' (starts with 'a'), keep others." 
    }
  ],

  "templates": {
    "python": "letter = input()\ns = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nnew_data = {}\nfor k in data:\n    if not k.startswith(letter):\n        new_data[k] = data[k]\n\nprint(new_data)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String letter = scanner.nextLine();\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> newData = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            if (!entry.getKey().startsWith(letter)) {\n                newData.put(entry.getKey(), entry.getValue());\n            }\n        }\n        \n        System.out.println(newData);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const letter = lines[0];\n        const input = lines[1];\n        \n        const data = {};\n        if (input.trim()) {\n            const pairs = input.split(' ');\n            for (const pair of pairs) {\n                const [key, value] = pair.split('=');\n                data[key] = value;\n            }\n        }\n        \n        const newData = {};\n        for (const [key, value] of Object.entries(data)) {\n            if (!key.startsWith(letter)) {\n                newData[key] = value;\n            }\n        }\n        \n        console.log(JSON.stringify(newData).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string letter, input;\n    getline(cin, letter);\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> newData;\n    for (const auto& entry : data) {\n        if (entry.first.find(letter) != 0) {  // check if starts with letter\n            newData[entry.first] = entry.second;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : newData) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "letter = input()\ns = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nnew_data = {}\nfor k in data:\n    if not k.startswith(letter):\n        new_data[k] = data[k]\n\nprint(new_data)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String letter = scanner.nextLine();\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> newData = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            if (!entry.getKey().startsWith(letter)) {\n                newData.put(entry.getKey(), entry.getValue());\n            }\n        }\n        \n        System.out.println(newData);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const letter = lines[0];\n        const input = lines[1];\n        \n        const data = {};\n        if (input.trim()) {\n            const pairs = input.split(' ');\n            for (const pair of pairs) {\n                const [key, value] = pair.split('=');\n                data[key] = value;\n            }\n        }\n        \n        const newData = {};\n        for (const [key, value] of Object.entries(data)) {\n            if (!key.startsWith(letter)) {\n                newData[key] = value;\n            }\n        }\n        \n        console.log(JSON.stringify(newData).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string letter, input;\n    getline(cin, letter);\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> newData;\n    for (const auto& entry : data) {\n        if (entry.first.find(letter) != 0) {  // check if starts with letter\n            newData[entry.first] = entry.second;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : newData) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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