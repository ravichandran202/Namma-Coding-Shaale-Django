module.exports = {
  "title": "Remove Key With Maximum Value",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>Remove the key-value pair that has the maximum value from a dictionary, then print the updated dictionary.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>A single line with space-separated <code>key=value</code> pairs</li>
      <li>All values will be integers</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the dictionary data from input</li>
      <li>Convert string values to integers for comparison</li>
      <li>Find the key with the highest value</li>
      <li>Remove that key-value pair from the dictionary</li>
      <li>Print the updated dictionary</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
a=10 b=50 c=30
Output:
{'a': '10', 'c': '30'}</pre>
    <p><b>Step:</b> Remove b=50 (maximum), keep a=10 and c=30</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
x=100 y=75 z=25
Output:
{'y': '75', 'z': '25'}</pre>
    <p><b>Step:</b> Remove x=100 (maximum), keep y=75 and z=25</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'a': '10', 'c': '30'}", 
      "stdinput": "a=10 b=50 c=30",
      "explanation": "Remove b=50 (max), keep a and c" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'y': '75', 'z': '25'}", 
      "stdinput": "x=100 y=75 z=25",
      "explanation": "Remove x=100 (max), keep y and z" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "single=100",
      "explanation": "Remove only key, dictionary becomes empty" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'banana': '80', 'orange': '120'}", 
      "stdinput": "apple=150 banana=80 orange=120",
      "explanation": "Remove apple=150 (max), keep banana and orange" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'green': '128', 'blue': '64'}", 
      "stdinput": "red=255 green=128 blue=64",
      "explanation": "Remove red=255 (max), keep green and blue" 
    },
    { 
      "id": 8, 
      "input": [], 
      "expected": "{'b': '5', 'c': '3'}", 
      "stdinput": "a=5 b=5 c=3",
      "explanation": "Remove a=5 (one of the max values), keep b and c" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'first': '1', 'middle': '2'}", 
      "stdinput": "first=1 middle=2 last=3",
      "explanation": "Remove last=3 (max), keep first and middle" 
    }
  ],

  "templates": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nmax_key = \"\"\nmax_value = float('-inf')\n\nfor k in data:\n    value = int(data[k])\n    if value > max_value:\n        max_value = value\n        max_key = k\n\ndel data[max_key]\nprint(data)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        String[] pairs = input.split(\" \");\n        for (String pair : pairs) {\n            String[] keyValue = pair.split(\"=\");\n            data.put(keyValue[0], keyValue[1]);\n        }\n        \n        String maxKey = \"\";\n        int maxValue = Integer.MIN_VALUE;\n        \n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            int value = Integer.parseInt(entry.getValue());\n            if (value > maxValue) {\n                maxValue = value;\n                maxKey = entry.getKey();\n            }\n        }\n        \n        data.remove(maxKey);\n        System.out.println(data);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    const pairs = input.split(' ');\n    for (const pair of pairs) {\n        const [key, value] = pair.split('=');\n        data[key] = value;\n    }\n    \n    let maxKey = '';\n    let maxValue = -Infinity;\n    \n    for (const [key, value] of Object.entries(data)) {\n        const numValue = parseInt(value);\n        if (numValue > maxValue) {\n            maxValue = numValue;\n            maxKey = key;\n        }\n    }\n    \n    delete data[maxKey];\n    console.log(JSON.stringify(data).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    string maxKey;\n    int maxValue = INT_MIN;\n    \n    for (const auto& entry : data) {\n        int value = stoi(entry.second);\n        if (value > maxValue) {\n            maxValue = value;\n            maxKey = entry.first;\n        }\n    }\n    \n    data.erase(maxKey);\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : data) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nmax_key = \"\"\nmax_value = float('-inf')\n\nfor k in data:\n    value = int(data[k])\n    if value > max_value:\n        max_value = value\n        max_key = k\n\ndel data[max_key]\nprint(data)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        String[] pairs = input.split(\" \");\n        for (String pair : pairs) {\n            String[] keyValue = pair.split(\"=\");\n            data.put(keyValue[0], keyValue[1]);\n        }\n        \n        String maxKey = \"\";\n        int maxValue = Integer.MIN_VALUE;\n        \n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            int value = Integer.parseInt(entry.getValue());\n            if (value > maxValue) {\n                maxValue = value;\n                maxKey = entry.getKey();\n            }\n        }\n        \n        data.remove(maxKey);\n        System.out.println(data);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    const pairs = input.split(' ');\n    for (const pair of pairs) {\n        const [key, value] = pair.split('=');\n        data[key] = value;\n    }\n    \n    let maxKey = '';\n    let maxValue = -Infinity;\n    \n    for (const [key, value] of Object.entries(data)) {\n        const numValue = parseInt(value);\n        if (numValue > maxValue) {\n            maxValue = numValue;\n            maxKey = key;\n        }\n    }\n    \n    delete data[maxKey];\n    console.log(JSON.stringify(data).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    string maxKey;\n    int maxValue = INT_MIN;\n    \n    for (const auto& entry : data) {\n        int value = stoi(entry.second);\n        if (value > maxValue) {\n            maxValue = value;\n            maxKey = entry.first;\n        }\n    }\n    \n    data.erase(maxKey);\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : data) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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