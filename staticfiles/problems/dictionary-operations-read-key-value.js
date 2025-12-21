module.exports = {
  "title": "Create a Dictionary",
  "difficulty": "very-easy",
  "acceptance": "98%",

  "description": `
    <p>Create a dictionary by reading key-value pairs from input. A dictionary stores data as <b>key-value pairs</b>, where each key is unique and maps to a value.</p>
    <p><b>Input:</b></p>
    <ul>
      <li>First line: an integer <code>n</code> representing how many key-value pairs you need to read</li>
      <li>Next <code>n</code> lines: each line contains a <b>key</b> and its corresponding <b>value</b>, separated by a single space</li>
    </ul>
    <p><b>Output:</b> Print the complete dictionary containing all the key-value pairs.</p>
    <p><b>Example Walkthrough:</b></p>
    <p>For the input:</p>
    <pre class="constraints">3
name Ravi
age 21
city Mysore</pre>
    <ol>
      <li>First line <code>3</code> tells you to read 3 key-value pairs</li>
      <li>First pair: key is <code>"name"</code>, value is <code>"Ravi"</code></li>
      <li>Second pair: key is <code>"age"</code>, value is <code>"21"</code></li>
      <li>Third pair: key is <code>"city"</code>, value is <code>"Mysore"</code></li>
      <li>Final dictionary: <code>{'name': 'Ravi', 'age': '21', 'city': 'Mysore'}</code></li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
name Ravi
age 21
city Mysore

Output:
{'name': 'Ravi', 'age': '21', 'city': 'Mysore'}</pre>
    <p><b>Explanation:</b> The dictionary contains three entries. Key <code>'name'</code> maps to <code>'Ravi'</code>, <code>'age'</code> maps to <code>'21'</code>, and <code>'city'</code> maps to <code>'Mysore'</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
fruit apple
color red

Output:
{'fruit': 'apple', 'color': 'red'}</pre>
    <p><b>Explanation:</b> A dictionary with two key-value pairs describing a fruit's type and color.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "{'name': 'Ravi', 'age': '21', 'city': 'Mysore'}", "stdinput": "3\nname Ravi\nage 21\ncity Mysore" },
    { "id": 2, "input": [], "expected": "{'fruit': 'apple', 'color': 'red'}", "stdinput": "2\nfruit apple\ncolor red" },
    { "id": 3, "input": [], "expected": "{}", "stdinput": "0" },
    { "id": 4, "input": [], "expected": "{'a': '1', 'b': '2', 'c': '3'}", "stdinput": "3\na 1\nb 2\nc 3" },
    { "id": 5, "input": [], "expected": "{'key1': 'value1'}", "stdinput": "1\nkey1 value1" },
    { "id": 6, "input": [], "expected": "{'jan': 'january', 'feb': 'february', 'mar': 'march'}", "stdinput": "3\njan january\nfeb february\nmar march" },
    { "id": 7, "input": [], "expected": "{'python': '3.9', 'java': '11', 'c++': '17'}", "stdinput": "3\npython 3.9\njava 11\nc++ 17" },
    { "id": 8, "input": [], "expected": "{'red': '#FF0000', 'green': '#00FF00', 'blue': '#0000FF'}", "stdinput": "3\nred #FF0000\ngreen #00FF00\nblue #0000FF" },
    { "id": 9, "input": [], "expected": "{'cat': 'animal', 'rose': 'flower', 'gold': 'metal'}", "stdinput": "3\ncat animal\nrose flower\ngold metal" }
  ],

  "templates": {
    "python": "count = int(input())\ndata = {}\n\nfor i in range(count):\n    key, value = input().split()\n    data[key] = value\n\nprint(data)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Map<String, String> data = new LinkedHashMap<>();\n        \n        for (int i = 0; i < n; i++) {\n            String line = scanner.nextLine();\n            String[] parts = line.split(\" \");\n            data.put(parts[0], parts[1]);\n        }\n        \n        System.out.println(data);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === parseInt(lines[0]) + 1) {\n        const n = parseInt(lines[0]);\n        const data = {};\n        \n        for (let i = 1; i <= n; i++) {\n            const [key, value] = lines[i].split(' ');\n            data[key] = value;\n        }\n        \n        console.log(JSON.stringify(data).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    map<string, string> data;\n    \n    for (int i = 0; i < n; i++) {\n        string key, value;\n        cin >> key >> value;\n        data[key] = value;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : data) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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