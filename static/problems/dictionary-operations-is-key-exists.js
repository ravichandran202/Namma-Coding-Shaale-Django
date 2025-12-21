module.exports = {
  "title": "Check if Key Exists – Dictionary Membership",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>Check whether a given key exists in a dictionary. You will read a key, then check if it exists in a pre-defined dictionary and print <code>True</code> or <code>False</code>.</p>
    <p><b>Pre-defined Dictionary:</b></p>
    <pre class="constraints">student = {"name": "Ravi", "age": 21}</pre>
    <p><b>Input:</b></p>
    <ul>
      <li>A single line containing a string representing the <b>key</b> to check</li>
    </ul>
    <p><b>Output:</b> Print <code>True</code> if the key exists in the dictionary, <code>False</code> if it does not exist.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
age

Output:
True</pre>
    <p><b>Explanation:</b> The key "age" exists in the dictionary, so output is <code>True</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
city

Output:
False</pre>
    <p><b>Explanation:</b> The key "city" does not exist in the dictionary, so output is <code>False</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "age" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "city" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "name" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "grade" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "age" }
  ],

  "templates": {
    "python": "student = {\"name\": \"Ravi\", \"age\": 21}\n\nsearch_key = input()\nprint(search_key in student)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Map<String, Integer> student = new HashMap<>();\n        student.put(\"name\", 21);  // Note: In Java, we need to store values\n        student.put(\"age\", 21);\n        \n        String searchKey = scanner.nextLine();\n        System.out.println(student.containsKey(searchKey));\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (searchKey) => {\n    const student = {\"name\": \"Ravi\", \"age\": 21};\n    \n    console.log(searchKey in student);\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> student;\n    student[\"name\"] = 21;\n    student[\"age\"] = 21;\n    \n    string searchKey;\n    getline(cin, searchKey);\n    \n    if (student.find(searchKey) != student.end()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    \n    return 0;\n}"
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