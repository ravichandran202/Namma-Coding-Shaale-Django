module.exports = {
  "title": "Add a New Key",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Add a new key-value pair to an existing dictionary. You will read a new key and its value, then insert this pair into a pre-defined dictionary.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">student = {"name": "Ravi"}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>First line: a string representing the <b>new key</b> to add</li>
      <li>Second line: a string representing the <b>value</b> for the new key</li>
    </ul>
    <p><b>Output:</b> Print the updated dictionary containing both the original and new key-value pair.</p>
    <p><b>Example Walkthrough:</b></p>
    <p>Starting with: <code>student = {"name": "Ravi"}</code></p>
    <p>If input is:</p>
    <pre class="constraints">city
Mysore</pre>
    <ol>
      <li>First line <code>"city"</code> is the new key</li>
      <li>Second line <code>"Mysore"</code> is the value for the new key</li>
      <li>Add <code>"city": "Mysore"</code> to the dictionary</li>
      <li>Updated dictionary: <code>{"name": "Ravi", "city": "Mysore"}</code></li>
    </ol>
    <p><b>Key Concepts:</b></p>
    <ul>
      <li>Use <code>dictionary[key] = value</code> to add new key-value pairs</li>
      <li>If the key already exists, its value will be <b>updated</b> (overwritten)</li>
      <li>Dictionary keys must be <b>hashable</b> (strings, numbers, tuples)</li>
      <li>The new pair is added at the end of the dictionary</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
city
Mysore

Output:
{'name': 'Ravi', 'city': 'Mysore'}</pre>
    <p><b>Explanation:</b> The dictionary starts with <code>{'name': 'Ravi'}</code>. After adding <code>'city': 'Mysore'</code>, both pairs are in the output.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
age
21

Output:
{'name': 'Ravi', 'age': '21'}</pre>
    <p><b>Explanation:</b> Adding age information to the student dictionary.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "{'name': 'Ravi', 'city': 'Mysore'}", "stdinput": "city\nMysore" },
    { "id": 2, "input": [], "expected": "{'name': 'Ravi', 'age': '21'}", "stdinput": "age\n21" },
    { "id": 3, "input": [], "expected": "{'name': 'Ravi', 'grade': 'A'}", "stdinput": "grade\nA" },
    { "id": 5, "input": [], "expected": "{'name': 'Ravi', 'phone': '9876543210'}", "stdinput": "phone\n9876543210" },
    { "id": 6, "input": [], "expected": "{'name': 'Ravi', 'country': 'India'}", "stdinput": "country\nIndia" }
  ],

  "templates": {
    "python": "student = {\"name\": \"Ravi\"}\n\nnew_key = input()\nnew_value = input()\n\nstudent[new_key] = new_value\nprint(student)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, String> student = new LinkedHashMap<>();\n        student.put(\"name\", \"Ravi\");\n        \n        String newKey = scanner.nextLine();\n        String newValue = scanner.nextLine();\n        \n        student.put(newKey, newValue);\n        \n        System.out.println(student);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const student = {name: \"Ravi\"};\n        const newKey = lines[0];\n        const newValue = lines[1];\n        \n        student[newKey] = newValue;\n        \n        console.log(JSON.stringify(student).replace(/\"/g, \"'\"));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> student;\n    student[\"name\"] = \"Ravi\";\n    \n    string newKey, newValue;\n    getline(cin, newKey);\n    getline(cin, newValue);\n    \n    student[newKey] = newValue;\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : student) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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