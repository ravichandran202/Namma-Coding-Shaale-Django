module.exports = {
  "title": "Print All Key-Value Pairs",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Read key-value pairs, create a dictionary, and print all items as a list of tuples.</p>
    <p><b>Input:</b> A single line with space-separated <code>key=value</code> pairs</p>
    <p><b>Output:</b> Print a list of (key, value) tuples</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
name=Ravi age=20
Output:
[('name', 'Ravi'), ('age', '20')]</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
color=red size=large price=100
Output:
[('color', 'red'), ('size', 'large'), ('price', '100')]</pre>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "[('name', 'Ravi'), ('age', '20')]", "stdinput": "name=Ravi age=20" },
    { "id": 2, "input": [], "expected": "[('color', 'red'), ('size', 'large'), ('price', '100')]", "stdinput": "color=red size=large price=100" },
    { "id": 3, "input": [], "expected": "[]", "stdinput": "" },
    { "id": 4, "input": [], "expected": "[('a', '1'), ('b', '2'), ('c', '3')]", "stdinput": "a=1 b=2 c=3" },
    { "id": 5, "input": [], "expected": "[('fruit', 'apple')]", "stdinput": "fruit=apple" }
  ],

  "templates": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\nprint(list(data.items()))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        System.out.println(new ArrayList<>(data.entrySet()));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            data[key] = value;\n        }\n    }\n    \n    const items = Object.entries(data);\n    console.log(JSON.stringify(items).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <vector>\n#include <utility>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    vector<pair<string, string>> items;\n    for (const auto& entry : data) {\n        items.push_back(make_pair(entry.first, entry.second));\n    }\n    \n    cout << \"[\";\n    for (size_t i = 0; i < items.size(); i++) {\n        if (i > 0) cout << \", \";\n        cout << \"('\" << items[i].first << \"', '\" << items[i].second << \"')\";\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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