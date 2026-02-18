module.exports = {
  "title": "Filter Items Greater Than Number",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>You are given a dictionary and a number. Filter the dictionary to keep only those key-value pairs where the value (converted to integer) is <b>strictly greater than</b> the given number.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: An integer number (the threshold)</li>
      <li>Second line: Space-separated <code>key=value</code> pairs representing the dictionary</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the threshold number from first input line</li>
      <li>Read the dictionary data from second input line</li>
      <li>Convert the string values to integers for comparison</li>
      <li>Keep only entries where value > threshold</li>
      <li>Print the filtered dictionary</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
10
a=10 b=25 c=5

Output:
{'b': '25'}</pre>
    <p><b>Step-by-step:</b></p>
    <ul>
      <li>Threshold = 10</li>
      <li>Dictionary: a=10, b=25, c=5</li>
      <li>Compare: 10 > 10? <b>False</b> (remove 'a')</li>
      <li>Compare: 25 > 10? <b>True</b> (keep 'b')</li>
      <li>Compare: 5 > 10? <b>False</b> (remove 'c')</li>
      <li>Result: Only 'b': '25'</li>
    </ul>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
50
x=100 y=75 z=25
Output:
{'x': '100', 'y': '75'}</pre>
    <p><b>Step-by-step:</b></p>
    <ol>
      <li>Threshold = 50</li>
      <li>Compare values: 100 > 50 (keep 'x'), 75 > 50 (keep 'y'), 25 > 50 (remove 'z')</li>
    </ol>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'b': '25'}", 
      "stdinput": "10\na=10 b=25 c=5",
      "explanation": "Only b=25 > 10." 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'x': '100', 'y': '75'}", 
      "stdinput": "50\nx=100 y=75 z=25",
      "explanation": "x=100 and y=75 > 50, z=25 is not." 
    },
    { 
      "id": 3, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "0\na=0 b=-5 c=-10",
      "explanation": "No values > 0 (all are ≤ 0)." 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'all': '100'}", 
      "stdinput": "99\nall=100 none=50",
      "explanation": "Only 'all'=100 > 99." 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'apple': '150', 'orange': '120'}", 
      "stdinput": "100\napple=150 banana=80 orange=120",
      "explanation": "Apple (150) and orange (120) > 100, banana (80) is not." 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{}", 
      "stdinput": "200\nred=100 green=150 blue=180",
      "explanation": "All values ≤ 200." 
    }
  ],

  "templates": {
    "python": "limit = int(input())\ns = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nnew_dict = {}\nfor k in data:\n    if int(data[k]) > limit:\n        new_dict[k] = data[k]\n\nprint(new_dict)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int limit = Integer.parseInt(scanner.nextLine());\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> newDict = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            if (Integer.parseInt(entry.getValue()) > limit) {\n                newDict.put(entry.getKey(), entry.getValue());\n            }\n        }\n        \n        System.out.println(newDict);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const limit = parseInt(lines[0]);\n        const input = lines[1];\n        \n        const data = {};\n        if (input.trim()) {\n            const pairs = input.split(' ');\n            for (const pair of pairs) {\n                const [key, value] = pair.split('=');\n                data[key] = value;\n            }\n        }\n        \n        const newDict = {};\n        for (const [key, value] of Object.entries(data)) {\n            if (parseInt(value) > limit) {\n                newDict[key] = value;\n            }\n        }\n        \n        console.log(JSON.stringify(newDict).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int limit;\n    cin >> limit;\n    cin.ignore();  // ignore newline\n    \n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> newDict;\n    for (const auto& entry : data) {\n        if (stoi(entry.second) > limit) {\n            newDict[entry.first] = entry.second;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : newDict) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "limit = int(input())\ns = input()\ndata = dict(item.split(\"=\") for item in s.split())\n\nnew_dict = {}\nfor k in data:\n    if int(data[k]) > limit:\n        new_dict[k] = data[k]\n\nprint(new_dict)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int limit = Integer.parseInt(scanner.nextLine());\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        Map<String, String> newDict = new LinkedHashMap<>();\n        for (Map.Entry<String, String> entry : data.entrySet()) {\n            if (Integer.parseInt(entry.getValue()) > limit) {\n                newDict.put(entry.getKey(), entry.getValue());\n            }\n        }\n        \n        System.out.println(newDict);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const limit = parseInt(lines[0]);\n        const input = lines[1];\n        \n        const data = {};\n        if (input.trim()) {\n            const pairs = input.split(' ');\n            for (const pair of pairs) {\n                const [key, value] = pair.split('=');\n                data[key] = value;\n            }\n        }\n        \n        const newDict = {};\n        for (const [key, value] of Object.entries(data)) {\n            if (parseInt(value) > limit) {\n                newDict[key] = value;\n            }\n        }\n        \n        console.log(JSON.stringify(newDict).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int limit;\n    cin >> limit;\n    cin.ignore();  // ignore newline\n    \n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    map<string, string> newDict;\n    for (const auto& entry : data) {\n        if (stoi(entry.second) > limit) {\n            newDict[entry.first] = entry.second;\n        }\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& entry : newDict) {\n        if (!first) cout << \", \";\n        cout << \"'\" << entry.first << \"': '\" << entry.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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