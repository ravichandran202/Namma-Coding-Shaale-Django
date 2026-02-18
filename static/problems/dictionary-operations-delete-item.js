module.exports = {
  "title": "Delete a Key",
  "difficulty": "easy",
  "acceptance": "96%",

  "description": `
    <p>Remove a key-value pair from a dictionary. You will read a key, then delete that key and its value from a pre-defined dictionary.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">student = {"name": "Ravi", "age": "21"}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>A single line containing a string representing the <b>key</b> to remove</li>
    </ul>
    <p><b>Output:</b> Print the dictionary after removing the specified key-value pair.</p>
    <p><b>Example Walkthrough:</b></p>
    <p>Starting with: <code>student = {"name": "Ravi", "age": "21"}</code></p>
    <p>If input is:</p>
    <pre class="constraints">age</pre>
    <ol>
      <li>The input <code>"age"</code> is the key to remove</li>
      <li>Remove the key-value pair <code>"age": "21"</code> from the dictionary</li>
      <li>Remaining dictionary: <code>{"name": "Ravi"}</code></li>
    </ol>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
age
Output:
{'name': 'Ravi'}</pre>
    <p><b>Explanation:</b> The "age" key and its value "21" are removed, leaving only the "name" key.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "{'name': 'Ravi', 'class': '12th'}", "stdinput": "age" },
    { "id": 2, "input": [], "expected": "{'age': '21', 'class': '12th'}", "stdinput": "name" },
    { "id": 3, "input": [], "expected": "{'name': 'Ravi', 'age': '21'}", "stdinput": "class" }
  ],

  "templates": {
    "python": "student = {\"name\": \"Ravi\", \"age\": \"21\", \"class\": \"12th\"}\n\nremove_key = input()\ndel student[remove_key]\n\nprint(student)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, String> student = new LinkedHashMap<>();\n        student.put(\"name\", \"Ravi\");\n        student.put(\"age\", \"21\");\n        \n        String removeKey = scanner.nextLine();\n        student.remove(removeKey);\n        \n        System.out.println(student);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (removeKey) => {\n    const student = {name: \"Ravi\", age: \"21\"};\n    \n    delete student[removeKey];\n    \n    console.log(JSON.stringify(student).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> student;\n    student[\"name\"] = \"Ravi\";\n    student[\"age\"] = \"21\";\n    \n    string removeKey;\n    getline(cin, removeKey);\n    \n    student.erase(removeKey);\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : student) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "student = {\"name\": \"Ravi\", \"age\": \"21\", \"class\": \"12th\"}\n\nremove_key = input()\ndel student[remove_key]\n\nprint(student)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, String> student = new LinkedHashMap<>();\n        student.put(\"name\", \"Ravi\");\n        student.put(\"age\", \"21\");\n        \n        String removeKey = scanner.nextLine();\n        student.remove(removeKey);\n        \n        System.out.println(student);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (removeKey) => {\n    const student = {name: \"Ravi\", age: \"21\"};\n    \n    delete student[removeKey];\n    \n    console.log(JSON.stringify(student).replace(/\"/g, \"'\"));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> student;\n    student[\"name\"] = \"Ravi\";\n    student[\"age\"] = \"21\";\n    \n    string removeKey;\n    getline(cin, removeKey);\n    \n    student.erase(removeKey);\n    \n    cout << \"{\";\n    bool first = true;\n    for (const auto& pair : student) {\n        if (!first) cout << \", \";\n        cout << \"'\" << pair.first << \"': '\" << pair.second << \"'\";\n        first = false;\n    }\n    cout << \"}\" << endl;\n    \n    return 0;\n}"
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