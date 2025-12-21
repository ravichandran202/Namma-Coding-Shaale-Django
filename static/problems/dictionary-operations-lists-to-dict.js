module.exports = {
  "title": "Convert Two Lists to Dictionary",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Convert two lists into a dictionary, using the first list as keys and the second list as values.</p>
    <p><b>Input Format:</b></p>
    <ul>
      <li>First line: Space-separated keys</li>
      <li>Second line: Space-separated values</li>
      <li>Both lists will have the same length</li>
    </ul>
    <p><b>What you need to do:</b></p>
    <ol>
      <li>Read the first line and split into keys list</li>
      <li>Read the second line and split into values list</li>
      <li>Create a dictionary pairing each key with its corresponding value</li>
      <li>Print the resulting dictionary</li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
a b c
10 20 30

Output:
{'a': '10', 'b': '20', 'c': '30'}</pre>
    <p><b>Pairing:</b> a→10, b→20, c→30</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
name age city
Ravi 21 Mysore

Output:
{'name': 'Ravi', 'age': '21', 'city': 'Mysore'}</pre>
    <p><b>Pairing:</b> name→Ravi, age→21, city→Mysore</p>
  `,

  "testCases": [
    { 
      "id": 1, 
      "input": [], 
      "expected": "{'a': '10', 'b': '20', 'c': '30'}", 
      "stdinput": "a b c\n10 20 30",
      "explanation": "Pair a=10, b=20, c=30" 
    },
    { 
      "id": 2, 
      "input": [], 
      "expected": "{'name': 'Ravi', 'age': '21', 'city': 'Mysore'}", 
      "stdinput": "name age city\nRavi 21 Mysore",
      "explanation": "Pair name=Ravi, age=21, city=Mysore" 
    },
    { 
      "id": 4, 
      "input": [], 
      "expected": "{'x': '100', 'y': '200'}", 
      "stdinput": "x y\n100 200",
      "explanation": "Pair x=100, y=200" 
    },
    { 
      "id": 5, 
      "input": [], 
      "expected": "{'fruit': 'apple', 'color': 'red', 'price': '50'}", 
      "stdinput": "fruit color price\napple red 50",
      "explanation": "Pair fruit=apple, color=red, price=50" 
    },
    { 
      "id": 6, 
      "input": [], 
      "expected": "{'jan': 'January', 'feb': 'February', 'mar': 'March'}", 
      "stdinput": "jan feb mar\nJanuary February March",
      "explanation": "Pair month abbreviations with full names" 
    },
    { 
      "id": 7, 
      "input": [], 
      "expected": "{'1': 'one', '2': 'two', '3': 'three'}", 
      "stdinput": "1 2 3\none two three",
      "explanation": "Pair digits with number words" 
    }
  ],

  "templates": {
    "python": "keys = input().split()\nvalues = input().split()\n\nresult = {}\n\ni = 0\nwhile i < len(keys):\n    result[keys[i]] = values[i]\n    i = i + 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        String[] keys = scanner.nextLine().split(\" \");\n        String[] values = scanner.nextLine().split(\" \");\n        \n        Map<String, String> result = new LinkedHashMap<>();\n        for (int i = 0; i < keys.length; i++) {\n            result.put(keys[i], values[i]);\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const keys = lines[0].split(' ').filter(k => k.length > 0);\n        const values = lines[1].split(' ').filter(v => v.length > 0);\n        \n        const result = {};\n        for (let i = 0; i < keys.length; i++) {\n            result[keys[i]] = values[i];\n        }\n        \n        console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <vector>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string keysLine, valuesLine;\n    getline(cin, keysLine);\n    getline(cin, valuesLine);\n    \n    vector<string> keys;\n    vector<string> values;\n    \n    stringstream keysStream(keysLine);\n    stringstream valuesStream(valuesLine);\n    string key, value;\n    \n    while (keysStream >> key) {\n        keys.push_back(key);\n    }\n    while (valuesStream >> value) {\n        values.push_back(value);\n    }\n    \n    map<string, string> result;\n    for (size_t i = 0; i < keys.size(); i++) {\n        result[keys[i]] = values[i];\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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