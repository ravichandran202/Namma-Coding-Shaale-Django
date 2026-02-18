module.exports = {
  "title": "Swap Keys and Values",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>Swap keys and values in a dictionary.</p>
    <p><b>Input:</b> A single line with space-separated <code>key=value</code> pairs</p>
    <p><b>Output:</b> Print dictionary with values as keys and keys as values</p>
    <p><b>Note:</b> All values must be unique for this operation.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
name=Ravi city=Mysore
Output:
{'Ravi': 'name', 'Mysore': 'city'}</pre>
    <p>Keys "name" and "city" become values, values "Ravi" and "Mysore" become keys.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
a=1 b=2 c=3
Output:
{'1': 'a', '2': 'b', '3': 'c'}</pre>
    <p>Keys a, b, c become values; values 1, 2, 3 become keys.</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'Ravi': 'name', 'Mysore': 'city'}", 
      "stdinput": "name=Ravi city=Mysore",
      "explanation": "Swapped keys and values." 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'1': 'a', '2': 'b', '3': 'c'}", 
      "stdinput": "a=1 b=2 c=3",
      "explanation": "Numeric values become string keys." 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "",
      "explanation": "Empty input gives empty dictionary." 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'apple': 'fruit', 'red': 'color'}", 
      "stdinput": "fruit=apple color=red",
      "explanation": "Values become keys, keys become values." 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'python': 'language', '3.9': 'version'}", 
      "stdinput": "language=python version=3.9",
      "explanation": "String values with dots can be keys." 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'january': 'jan', 'february': 'feb'}", 
      "stdinput": "jan=january feb=february",
      "explanation": "Full month names become keys, abbreviations become values." 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "{'true': 'yes', 'false': 'no'}", 
      "stdinput": "yes=true no=false",
      "explanation": "Boolean strings become keys." 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "{'#FF0000': 'red', '#00FF00': 'green'}", 
      "stdinput": "red=#FF0000 green=#00FF00",
      "explanation": "Hex color codes become keys." 
    },
    { 
      "id": 9, 
      "input": [], 
      "expected": "{'cat': 'animal', 'rose': 'plant'}", 
      "stdinput": "animal=cat plant=rose",
      "explanation": "Swapped category and example." 
    }
  ],

  "templates": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nswapped = {}\nfor k in data:\n    v = data[k]\n    swapped[v] = k\n\nprint(swapped)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> swapped = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            swapped.put(entry.getValue(), entry.getKey());\n        }\n        \n        System.out.println(swapped);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            data[key] = value;\n        }\n    }\n    \n    const swapped = {};\n    for (const [key, value] of Object.entries(data)) {\n        swapped[value] = key;\n    }\n    \n    console.log(JSON.stringify(swapped).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> swapped;\n    for (const auto& entry : data) {\n        swapped[entry.second] = entry.first;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : swapped) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nswapped = {}\nfor k in data:\n    v = data[k]\n    swapped[v] = k\n\nprint(swapped)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> swapped = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            swapped.put(entry.getValue(), entry.getKey());\n        }\n        \n        System.out.println(swapped);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            data[key] = value;\n        }\n    }\n    \n    const swapped = {};\n    for (const [key, value] of Object.entries(data)) {\n        swapped[value] = key;\n    }\n    \n    console.log(JSON.stringify(swapped).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> swapped;\n    for (const auto& entry : data) {\n        swapped[entry.second] = entry.first;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : swapped) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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