module.exports = {
  "title": "Length of Dictionary – Item Count",
  "difficulty": "very-easy",
  "acceptance": "99%",

  "description": `
    <p>Find and print the number of key-value pairs (items) in a dictionary. This counts how many entries are stored in the dictionary.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">person = {"name": "Ravi", "age": 21, "city": "Mysore"}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>No input is required for this problem</li>
    </ul>
    <p><b>Output:</b> Print a single integer representing the number of items in the dictionary.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
(no input)
Output:
3</pre>
    <p><b>Explanation:</b> The dictionary has 3 key-value pairs: name, age, and city.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "3", "stdinput": "" },
    { "id": 2, "input": [], "expected": "3", "stdinput": "" }
  ],

  "templates": {
    "python": "person = {\"name\": \"Ravi\", \"age\": 21, \"city\": \"Mysore\"}\nprint(len(person))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Object> person = new HashMap<>();\n        person.put(\"name\", \"Ravi\");\n        person.put(\"age\", 21);\n        person.put(\"city\", \"Mysore\");\n        \n        System.out.println(person.size());\n    }\n}",
    "javascript": "const person = {\"name\": \"Ravi\", \"age\": 21, \"city\": \"Mysore\"};\nconsole.log(Object.keys(person).length);",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> person;\n    person[\"name\"] = \"Ravi\";\n    person[\"age\"] = \"21\";\n    person[\"city\"] = \"Mysore\";\n    \n    cout << person.size() << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "person = {\"name\": \"Ravi\", \"age\": 21, \"city\": \"Mysore\"}\nprint(len(person))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Object> person = new HashMap<>();\n        person.put(\"name\", \"Ravi\");\n        person.put(\"age\", 21);\n        person.put(\"city\", \"Mysore\");\n        \n        System.out.println(person.size());\n    }\n}",
    "javascript": "const person = {\"name\": \"Ravi\", \"age\": 21, \"city\": \"Mysore\"};\nconsole.log(Object.keys(person).length);",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, string> person;\n    person[\"name\"] = \"Ravi\";\n    person[\"age\"] = \"21\";\n    person[\"city\"] = \"Mysore\";\n    \n    cout << person.size() << endl;\n    \n    return 0;\n}"
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