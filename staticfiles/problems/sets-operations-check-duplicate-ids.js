module.exports = {
  "title": "Check Duplicate IDs – Duplicate Detection",
  "difficulty": "easy",
  "acceptance": "94%",

  "description": `
    <p>You are given a list of IDs. Check if there are any duplicate IDs in the list.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, read a number <code>n</code> - the count of IDs</li>
      <li>Next, read <code>n</code> IDs</li>
      <li>If <b>all IDs are unique</b> (no duplicates), print <code>"NO DUPLICATE"</code></li>
      <li>If there is <b>at least one duplicate</b>, print <code>"DUPLICATE"</code></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>IDs are <b>case-sensitive</b></li>
      <li>A duplicate means the same ID appears <b>two or more times</b></li>
      <li>Output is exactly <code>"No DUPLICATE"</code> or <code>"DUPLICATE"</code> (with this exact capitalization)</li>
      <li>If the list is empty or has only one ID, it's considered "NO DUPLICATE"</li>
    </ul>
    <p>This is like checking if any student ID appears more than once in an attendance list.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
101 102 103 104 105
Output:
NO DUPLICATE</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All 5 IDs are different</li>
      <li>No ID appears more than once</li>
      <li>Output: <code>No DUPLICATE</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
6
A B C A D E
Output:
DUPLICATE</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>ID <code>A</code> appears twice (positions 1 and 4)</li>
      <li>There is at least one duplicate</li>
      <li>Output: <code>DUPLICATE</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "NO DUPLICATE", "stdinput": "5\n101 102 103 104 105" },
    { "id": 2, "input": [], "expected": "DUPLICATE", "stdinput": "6\nA B C A D E" },
    { "id": 3, "input": [], "expected": "NO DUPLICATE", "stdinput": "1\n123" },
    { "id": 4, "input": [], "expected": "DUPLICATE", "stdinput": "4\napple apple banana cherry" },
    { "id": 6, "input": [], "expected": "DUPLICATE", "stdinput": "7\n1 2 3 4 5 6 1" },
    { "id": 7, "input": [], "expected": "NO DUPLICATE", "stdinput": "3\nabc def ghi" },
    { "id": 8, "input": [], "expected": "DUPLICATE", "stdinput": "5\nred blue green blue yellow" },
    { "id": 9, "input": [], "expected": "NO DUPLICATE", "stdinput": "8\njan feb mar apr may jun jul aug" }
  ],

  "templates": {
    "python": "n = int(input())\nids = input().split()\nif len(ids) == len(set(ids)):\n    print(\"NO DUPLICATE\")\nelse:\n    print(\"DUPLICATE\")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        if (n == 0) {\n            System.out.println(\"No DUPLICATE\");\n            return;\n        }\n        \n        String[] ids = scanner.nextLine().split(\" \");\n        Set<String> uniqueIds = new HashSet<>();\n        \n        for (String id : ids) {\n            uniqueIds.add(id);\n        }\n        \n        if (ids.length == uniqueIds.size()) {\n            System.out.println(\"No DUPLICATE\");\n        } else {\n            System.out.println(\"DUPLICATE\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const ids = lines[1].split(' ').filter(id => id.length > 0);\n        \n        if (ids.length === 0) {\n            console.log(\"No DUPLICATE\");\n            readline.close();\n            return;\n        }\n        \n        const uniqueIds = new Set(ids);\n        \n        if (ids.length === uniqueIds.size) {\n            console.log(\"No DUPLICATE\");\n        } else {\n            console.log(\"DUPLICATE\");\n        }\n        \n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    if (n == 0) {\n        cout << \"No DUPLICATE\" << endl;\n        return 0;\n    }\n    \n    vector<string> ids(n);\n    for (int i = 0; i < n; i++) {\n        cin >> ids[i];\n    }\n    \n    unordered_set<string> uniqueIds;\n    bool hasDuplicate = false;\n    \n    for (const string& id : ids) {\n        if (uniqueIds.find(id) != uniqueIds.end()) {\n            hasDuplicate = true;\n            break;\n        }\n        uniqueIds.insert(id);\n    }\n    \n    if (hasDuplicate) {\n        cout << \"DUPLICATE\" << endl;\n    } else {\n        cout << \"No DUPLICATE\" << endl;\n    }\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nids = input().split()\nif len(ids) == len(set(ids)):\n    print(\"NO DUPLICATE\")\nelse:\n    print(\"DUPLICATE\")",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        if (n == 0) {\n            System.out.println(\"No DUPLICATE\");\n            return;\n        }\n        \n        String[] ids = scanner.nextLine().split(\" \");\n        Set<String> uniqueIds = new HashSet<>();\n        \n        for (String id : ids) {\n            uniqueIds.add(id);\n        }\n        \n        if (ids.length == uniqueIds.size()) {\n            System.out.println(\"No DUPLICATE\");\n        } else {\n            System.out.println(\"DUPLICATE\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const ids = lines[1].split(' ').filter(id => id.length > 0);\n        \n        if (ids.length === 0) {\n            console.log(\"No DUPLICATE\");\n            readline.close();\n            return;\n        }\n        \n        const uniqueIds = new Set(ids);\n        \n        if (ids.length === uniqueIds.size) {\n            console.log(\"No DUPLICATE\");\n        } else {\n            console.log(\"DUPLICATE\");\n        }\n        \n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    if (n == 0) {\n        cout << \"No DUPLICATE\" << endl;\n        return 0;\n    }\n    \n    vector<string> ids(n);\n    for (int i = 0; i < n; i++) {\n        cin >> ids[i];\n    }\n    \n    unordered_set<string> uniqueIds;\n    bool hasDuplicate = false;\n    \n    for (const string& id : ids) {\n        if (uniqueIds.find(id) != uniqueIds.end()) {\n            hasDuplicate = true;\n            break;\n        }\n        uniqueIds.insert(id);\n    }\n    \n    if (hasDuplicate) {\n        cout << \"DUPLICATE\" << endl;\n    } else {\n        cout << \"No DUPLICATE\" << endl;\n    }\n    \n    return 0;\n}"
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