module.exports = {
  "title": "Check If Empty – Dictionary Empty Check",
  "difficulty": "easy",
  "acceptance": "99%",

  "description": `
    <p>Read key-value pairs and check if the dictionary is empty.</p>
    <p><b>Input:</b> A single line with space-separated <code>key=value</code> pairs (can be empty)</p>
    <p><b>Output:</b> Print True if dictionary is empty, False otherwise</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
(empty line)
Output:
True</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
name=Ravi age=21
Output:
False</pre>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "name=Ravi age=21" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "" },
    { "id": 4, "input": [], "expected": "True", "stdinput": "" },
    { "id": 5, "input": [], "expected": "False", "stdinput": "fruit=apple color=red" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "x=10 y=20 z=30" },
    { "id": 7, "input": [], "expected": "True", "stdinput": "" }
  ],

  "templates": {
    "python": "s = input()\ndata = dict(item.split(\"=\") for item in s.split())\nprint(len(data) == 0)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, String> data = new HashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] pairs = input.split(\" \");\n            for (String pair : pairs) {\n                String[] keyValue = pair.split(\"=\");\n                data.put(keyValue[0], keyValue[1]);\n            }\n        }\n        \n        System.out.println(data.isEmpty());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const data = {};\n    if (input.trim()) {\n        const pairs = input.split(' ');\n        for (const pair of pairs) {\n            const [key, value] = pair.split('=');\n            data[key] = value;\n        }\n    }\n    \n    console.log(Object.keys(data).length === 0);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, string> data;\n    stringstream ss(input);\n    string pair;\n    \n    while (ss >> pair) {\n        size_t pos = pair.find('=');\n        if (pos != string::npos) {\n            string key = pair.substr(0, pos);\n            string value = pair.substr(pos + 1);\n            data[key] = value;\n        }\n    }\n    \n    cout << (data.empty() ? \"True\" : \"False\") << endl;\n    \n    return 0;\n}"
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