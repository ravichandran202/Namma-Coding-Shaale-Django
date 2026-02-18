module.exports = module.exports = {
  "title": "Attendance Check",
  "difficulty": "easy",
  "acceptance": "97%",

  "description": `
    <p>You are given a list of student IDs and need to check if a particular student is present.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of student IDs</li>
      <li>Next, you receive <code>n</code> student IDs</li>
      <li>Finally, you receive one student ID to check</li>
      <li>Print <code>True</code> if the student ID exists in the list</li>
      <li>Print <code>False</code> if the student ID does not exist in the list</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Student IDs are <b>case-sensitive</b></li>
      <li>The check is <b>exact match</b> - no partial matching</li>
      <li>Always output exactly <code>True</code> or <code>False</code> (capital T and F)</li>
      <li>This is like checking attendance - seeing if a particular student is in class</li>
    </ul>
    <p>This problem helps practice membership testing in collections.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
S001 S002 S003 S004 S005
S003
Output:
True</pre>
    <p><b>Explanation:</b> Student ID <code>S003</code> is in the list, so the answer is <code>True</code>.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
101 102 103 104
105
Output:
False</pre>
    <p><b>Explanation:</b> Student ID <code>105</code> is not in the list, so the answer is <code>False</code>.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\nS001 S002 S003 S004 S005\nS003" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "4\n101 102 103 104\n105" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "3\nA B C\nB" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "6\n1 2 3 4 5 6\n7" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "1\nSTU123\nSTU123" }
  ],

  "templates": {
    "python": "n = int(input())\nids = set(input().split())\nx = input()\nif x in ids:\n    print(True)\nelse:\n    print(False)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] idArray = scanner.nextLine().split(\" \");\n        Set<String> studentIds = new HashSet<>();\n        for (String id : idArray) {\n            studentIds.add(id);\n        }\n        \n        String checkId = scanner.nextLine();\n        \n        if (studentIds.contains(checkId)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 3) {\n        const n = parseInt(lines[0]);\n        const ids = new Set(lines[1].split(' '));\n        const checkId = lines[2];\n        \n        console.log(ids.has(checkId));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    unordered_set<string> studentIds;\n    for (int i = 0; i < n; i++) {\n        string id;\n        cin >> id;\n        studentIds.insert(id);\n    }\n    \n    string checkId;\n    cin >> checkId;\n    \n    if (studentIds.find(checkId) != studentIds.end()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nids = set(input().split())\nx = input()\nif x in ids:\n    print(True)\nelse:\n    print(False)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] idArray = scanner.nextLine().split(\" \");\n        Set<String> studentIds = new HashSet<>();\n        for (String id : idArray) {\n            studentIds.add(id);\n        }\n        \n        String checkId = scanner.nextLine();\n        \n        if (studentIds.contains(checkId)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 3) {\n        const n = parseInt(lines[0]);\n        const ids = new Set(lines[1].split(' '));\n        const checkId = lines[2];\n        \n        console.log(ids.has(checkId));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    unordered_set<string> studentIds;\n    for (int i = 0; i < n; i++) {\n        string id;\n        cin >> id;\n        studentIds.insert(id);\n    }\n    \n    string checkId;\n    cin >> checkId;\n    \n    if (studentIds.find(checkId) != studentIds.end()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    \n    return 0;\n}"
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