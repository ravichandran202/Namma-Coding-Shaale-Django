module.exports = {
  "title": "Word Count",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>Read words and count how many times each word appears.</p>
    <p><b>Input:</b> A single line with space-separated words</p>
    <p><b>Output:</b> Print a dictionary with word counts</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello world hello hi

Output:
{'hello': 2, 'world': 1, 'hi': 1}</pre>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
apple banana apple apple orange

Output:
{'apple': 3, 'banana': 1, 'orange': 1}</pre>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "{'hello': 2, 'world': 1, 'hi': 1}", "stdinput": "hello world hello hi" },
    { "id": 2, "input": [], "expected": "{'apple': 3, 'banana': 1, 'orange': 1}", "stdinput": "apple banana apple apple orange" },
    { "id": 3, "input": [], "expected": "{}", "stdinput": "" },
    { "id": 4, "input": [], "expected": "{'a': 3, 'b': 2, 'c': 1}", "stdinput": "a b a c b a" },
    { "id": 5, "input": [], "expected": "{'the': 2, 'cat': 1, 'and': 1, 'dog': 1}", "stdinput": "the cat and the dog" }
  ],

  "templates": {
    "python": "words = input().split()\n\nresult = {}\n\nfor w in words:\n    if w in result:\n        result[w] = result[w] + 1\n    else:\n        result[w] = 1\n\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        Map<String, Integer> result = new HashMap<>();\n        if (!input.trim().isEmpty()) {\n            String[] words = input.split(\" \");\n            for (String w : words) {\n                result.put(w, result.getOrDefault(w, 0) + 1);\n            }\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const result = {};\n    if (input.trim()) {\n        const words = input.split(' ');\n        for (const w of words) {\n            result[w] = (result[w] || 0) + 1;\n        }\n    }\n    \n    console.log(JSON.stringify(result).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string input;\n    getline(cin, input);\n    \n    map<string, int> result;\n    stringstream ss(input);\n    string word;\n    \n    while (ss >> word) {\n        result[word]++;\n    }\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': \" << pair.second;\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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