module.exports = {
  "title": "Update a Value – Dictionary Modification",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Update the value of an existing key in a dictionary. You will read a key and a new value, then update that key's value in a pre-defined dictionary.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">student = {"name": "Ravi", "age": "21"}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>First line: a string representing the <b>key</b> to update (must exist in dictionary)</li>
      <li>Second line: a string representing the <b>new value</b> for that key</li>
    </ul>
    <p><b>Output:</b> Print the updated dictionary with the modified value.</p>
    <p><b>Example Walkthrough:</b></p>
    <p>Starting with: <code>student = {"name": "Ravi", "age": "21"}</code></p>
    <p>If input is:</p>
    <pre class="constraints">age
22</pre>
    <ol>
      <li>First line <code>"age"</code> is the key to update</li>
      <li>Second line <code>"22"</code> is the new value for the "age" key</li>
      <li>Update <code>"age"</code> from <code>"21"</code> to <code>"22"</code></li>
      <li>Updated dictionary: <code>{"name": "Ravi", "age": "22"}</code></li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
age
22
Output:
{'name': 'Ravi', 'age': '22'}</pre>
    <p><b>Explanation:</b> The age is updated from "21" to "22". The "name" key remains unchanged.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
name
Raj
Output:
{'name': 'Raj', 'age': '21'}</pre>
    <p><b>Explanation:</b> The name is updated from "Ravi" to "Raj". The "age" key remains unchanged.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "{'name': 'Ravi', 'age': '22'}", "stdinput": "age\n22" },
    { "id": 2, "input": [], "expected": "{'name': 'Raj', 'age': '21'}", "stdinput": "name\nRaj" },
    { "id": 3, "input": [], "expected": "{'name': 'Ravi', 'age': '25'}", "stdinput": "age\n25" },
    { "id": 4, "input": [], "expected": "{'name': 'Ravi', 'age': '21', 'city': 'Bangalore'}", "stdinput": "city\nBangalore" },
    { "id": 5, "input": [], "expected": "{'name': 'Kumar', 'age': '21'}", "stdinput": "name\nKumar" }
  ],

  "templates": {
    "python": "student = {\"name\": \"Ravi\", \"age\": \"21\"}\n\nupdate_key = input()\nupdate_value = input()\n\nstudent[update_key] = update_value\nprint(student)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, String> student = new LinkedHashMap<>();\n        student.put(\"name\", \"Ravi\");\n        student.put(\"age\", \"21\");\n        \n        String updateKey = scanner.nextLine();\n        String updateValue = scanner.nextLine();\n        \n        student.put(updateKey, updateValue);\n        \n        System.out.println(student);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const student = {name: \"Ravi\", age: \"21\"};\n        const updateKey = lines[0];\n        const updateValue = lines[1];\n        \n        student[updateKey] = updateValue;\n        \n        console.log(JSON.stringify(student).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> student;\n    student[\"name\"] = \"Ravi\";\n    student[\"age\"] = \"21\";\n    \n    string updateKey, updateValue;\n    getline(cin, updateKey);\n    getline(cin, updateValue);\n    \n    student[updateKey] = updateValue;\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : student) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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