module.exports = {
  "title": "Print All Keys",
  "difficulty": "easy",
  "acceptance": "98%",

  "description": `
    <p>Retrieve and print all the keys from a dictionary. The keys are returned as a list, which shows all the dictionary's keys in insertion order.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">data = {"name": "Ravi", "age": 20}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>No input is required for this problem</li>
    </ul>
    <p><b>Output:</b> Print a list containing all the dictionary keys.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
(no input)

Output:
['name', 'age']</pre>
    <p><b>Explanation:</b> The dictionary has two keys: "name" and "age".</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['name', 'age']", "stdinput": "" },
  ],

  "templates": {
    "python": "data = {\"name\": \"Ravi\", \"age\": 20}\nprint(list(data.keys()))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> data = new LinkedHashMap<>();\n        data.put(\"name\", 20);\n        data.put(\"age\", 20);\n        \n        System.out.println(new ArrayList<>(data.keySet()));\n    }\n}",
    "javascript": "const data = {\"name\": \"Ravi\", \"age\": 20};\nconsole.log(JSON.stringify(Object.keys(data)));",
    "c++": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<string> keys;\n    keys.push_back(\"name\");\n    keys.push_back(\"age\");\n    \n    cout << \"[\";\n    for (size_t i = 0; i < keys.size(); i++) {\n        if (i > 0) cout << \", \";\n        cout << \"'\" << keys[i] << \"'\";\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "data = {\"name\": \"Ravi\", \"age\": 20}\nprint(list(data.keys()))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> data = new LinkedHashMap<>();\n        data.put(\"name\", 20);\n        data.put(\"age\", 20);\n        \n        System.out.println(new ArrayList<>(data.keySet()));\n    }\n}",
    "javascript": "const data = {\"name\": \"Ravi\", \"age\": 20};\nconsole.log(JSON.stringify(Object.keys(data)));",
    "c++": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<string> keys;\n    keys.push_back(\"name\");\n    keys.push_back(\"age\");\n    \n    cout << \"[\";\n    for (size_t i = 0; i < keys.size(); i++) {\n        if (i > 0) cout << \", \";\n        cout << \"'\" << keys[i] << \"'\";\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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