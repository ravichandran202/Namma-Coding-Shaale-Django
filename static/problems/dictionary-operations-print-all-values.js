module.exports = {
  "title": "Print All Values",
  "difficulty": "very-easy",
  "acceptance": "98%",

  "description": `
    <p>Print all the values from a dictionary as a list.</p>
    <p><b>Input:</b> No input required</p>
    <p><b>Output:</b> Print a list containing all dictionary values</p>
    <p><b>Example:</b></p>
    <p>For dictionary: <code>data = {"name": "Ravi", "age": 20}</code></p>
    <p>Output should be: <code>['Ravi', 20]</code></p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
(no input)

Output:
['Ravi', 20]</pre>
    <p>The dictionary has two values: "Ravi" (string) and 20 (integer).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['Ravi', 20]", "stdinput": "" }
  ],

  "templates": {
    "python": "data = {\"name\": \"Ravi\", \"age\": 20}\nprint(list(data.values()))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Object> data = new LinkedHashMap<>();\n        data.put(\"name\", \"Ravi\");\n        data.put(\"age\", 20);\n        \n        System.out.println(new ArrayList<>(data.values()));\n    }\n}",
    "javascript": "const data = {\"name\": \"Ravi\", \"age\": 20};\nconsole.log(JSON.stringify(Object.values(data)));",
    "c++": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> values;\n    values.push_back(\"Ravi\");\n    values.push_back(\"20\");\n    \n    cout << \"[\";\n    for (size_t i = 0; i < values.size(); i++) {\n        if (i > 0) cout << \", \";\n        cout << \"'\" << values[i] << \"'\";\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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