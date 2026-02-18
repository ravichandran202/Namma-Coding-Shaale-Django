module.exports = {
  "title": "Key With Maximum Value – Dictionary Max Value",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>Find and print the key that has the maximum value in a dictionary.</p>
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
      <li>Print only that key (as a string)</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
a=10 b=50 c=30

Output:
b</pre>
    <p><b>Reason:</b> b=50 is the maximum value (50 > 30 > 10)</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
x=100 y=75 z=25

Output:
x</pre>
    <p><b>Reason:</b> x=100 is the maximum value</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "b", 
      "stdinput": "a=10 b=50 c=30",
      "explanation": "b=50 is maximum" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "x", 
      "stdinput": "x=100 y=75 z=25",
      "explanation": "x=100 is maximum" 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "max", 
      "stdinput": "min=10 avg=50 max=100",
      "explanation": "max=100 is highest" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "a", 
      "stdinput": "a=999 b=1 c=2",
      "explanation": "a=999 is much larger" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "z", 
      "stdinput": "x=0 y=0 z=1",
      "explanation": "z=1 is maximum (others are 0)" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "apple", 
      "stdinput": "apple=150 banana=80 orange=120",
      "explanation": "apple=150 > orange=120 > banana=80" 
    }
  ],

  "templates": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nmax_key = \"\"\nmax_value = float('-inf')\n\nfor k in data:\n    value = int(data[k])\n    if value > max_value:\n        max_value = value\n        max_key = k\n\nprint(max_key)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        String[] pairs = input.split(\" \");\n        for (String pair : pairs) {\n            String[] keyValue = pair.split(\"=\");\n            data.put(keyValue[0], keyValue[1]);\n        }\n        \n        String maxKey = \"\";\n        int maxValue = Integer.MIN_VALUE;\n        \n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            int value = Integer.parseInt(entry.getValue());\n            if (value > maxValue) {\n                maxValue = value;\n                maxKey = entry.getKey();\n            }\n        }\n        \n        System.out.println(maxKey);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    const pairs = input.split(' ');\n    for (const pair of pairs) {\n        const [key, value] = pair.split('=');\n        data[key] = value;\n    }\n    \n    let maxKey = '';\n    let maxValue = -Infinity;\n    \n    for (const [key, value] of Object.entries(data)) {\n        const numValue = parseInt(value);\n        if (numValue > maxValue) {\n            maxValue = numValue;\n            maxKey = key;\n        }\n    }\n    \n    console.log(maxKey);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    string maxKey;\n    int maxValue = INT_MIN;\n    \n    for (const auto& entry : data) {\n        int value = stoi(entry.second);\n        if (value > maxValue) {\n            maxValue = value;\n            maxKey = entry.first;\n        }\n    }\n    \n    cout << maxKey << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nmax_key = \"\"\nmax_value = float('-inf')\n\nfor k in data:\n    value = int(data[k])\n    if value > max_value:\n        max_value = value\n        max_key = k\n\nprint(max_key)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        String[] pairs = input.split(\" \");\n        for (String pair : pairs) {\n            String[] keyValue = pair.split(\"=\");\n            data.put(keyValue[0], keyValue[1]);\n        }\n        \n        String maxKey = \"\";\n        int maxValue = Integer.MIN_VALUE;\n        \n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            int value = Integer.parseInt(entry.getValue());\n            if (value > maxValue) {\n                maxValue = value;\n                maxKey = entry.getKey();\n            }\n        }\n        \n        System.out.println(maxKey);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    const pairs = input.split(' ');\n    for (const pair of pairs) {\n        const [key, value] = pair.split('=');\n        data[key] = value;\n    }\n    \n    let maxKey = '';\n    let maxValue = -Infinity;\n    \n    for (const [key, value] of Object.entries(data)) {\n        const numValue = parseInt(value);\n        if (numValue > maxValue) {\n            maxValue = numValue;\n            maxKey = key;\n        }\n    }\n    \n    console.log(maxKey);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    string maxKey;\n    int maxValue = INT_MIN;\n    \n    for (const auto& entry : data) {\n        int value = stoi(entry.second);\n        if (value > maxValue) {\n            maxValue = value;\n            maxKey = entry.first;\n        }\n    }\n    \n    cout << maxKey << endl;\n    \n    return 0;\n}"
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