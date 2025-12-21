module.exports = {
  "title": "Repeated Login Attempts – Find Duplicates",
  "difficulty": "medium",
  "acceptance": "90%",

  "description": `
    <p>You are given login attempt records. Find all user IDs that attempted to login <b>more than once</b>.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, read a number <code>n</code> - the count of login attempts</li>
      <li>Next, read list of <code>n</code> user IDs from login attempts</li>
      <li>Find all user IDs that appear <b>two or more times</b> in the list</li>
      <li>Print these duplicate IDs in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Only include IDs that appear <b>at least twice</b></li>
      <li>IDs that appear only once are <b>not included</b></li>
      <li>IDs are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical/numerical order</b></li>
      <li>If no duplicates exist, print an empty list</li>
      <li>Each duplicate ID appears only once in output</li>
    </ul>
    <p>This helps identify users who made multiple login attempts, which could indicate password issues or suspicious activity.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
8
user1 user2 user1 user3 user2 user1 user4 user3
Output:
['user1', 'user2', 'user3']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Login attempts: <code>user1, user2, user1, user3, user2, user1, user4, user3</code></li>
      <li><code>user1</code> appears 3 times</li>
      <li><code>user2</code> appears 2 times</li>
      <li><code>user3</code> appears 2 times</li>
      <li><code>user4</code> appears 1 time → not included</li>
      <li>Duplicates: <code>user1, user2, user3</code></li>
      <li>Sorted: <code>user1, user2, user3</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
A B C D E
Output:
[]</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All IDs appear only once</li>
      <li>No duplicates</li>
      <li>Output: empty list</li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['user1', 'user2', 'user3']", "stdinput": "8\nuser1 user2 user1 user3 user2 user1 user4 user3" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "5\nA B C D E" },
    { "id": 3, "input": [], "expected": "['spammer']", "stdinput": "4\nspammer normal spammer user" },
    { "id": 4, "input": [], "expected": "['1', '3', '5']", "stdinput": "7\n1 2 3 1 4 5 3 5" },
    { "id": 5, "input": [], "expected": "['repeat']", "stdinput": "3\nrepeat repeat repeat" },
    { "id": 6, "input": [], "expected": "['cat', 'dog']", "stdinput": "6\ncat dog cat bird dog fish" }
  ],

  "templates": {
    "python": "n = int(input())\nids = input().split()\nseen = set()\ndup = set()\n\nfor x in ids:\n    if x in seen:\n        dup.add(x)\n    else:\n        seen.add(x)\n\nresult = sorted(dup)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        if (n == 0) {\n            System.out.println(\"[]\");\n            return;\n        }\n        \n        String[] attempts = scanner.nextLine().split(\" \");\n        Set<String> seen = new HashSet<>();\n        Set<String> duplicates = new HashSet<>();\n        \n        for (String id : attempts) {\n            if (seen.contains(id)) {\n                duplicates.add(id);\n            } else {\n                seen.add(id);\n            }\n        }\n        \n        Set<String> sortedDuplicates = new TreeSet<>(duplicates);\n        System.out.println(sortedDuplicates);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const ids = lines[1].split(' ').filter(id => id.length > 0);\n        \n        const seen = new Set();\n        const duplicates = new Set();\n        \n        for (const id of ids) {\n            if (seen.has(id)) {\n                duplicates.add(id);\n            } else {\n                seen.add(id);\n            }\n        }\n        \n        const result = Array.from(duplicates).sort();\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    if (n == 0) {\n        cout << \"[]\" << endl;\n        return 0;\n    }\n    \n    vector<string> ids(n);\n    for (int i = 0; i < n; i++) {\n        cin >> ids[i];\n    }\n    \n    unordered_set<string> seen;\n    set<string> duplicates;\n    \n    for (const string& id : ids) {\n        if (seen.find(id) != seen.end()) {\n            duplicates.insert(id);\n        } else {\n            seen.insert(id);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& dup : duplicates) {\n        if (!first) cout << \", \";\n        cout << \"'\" << dup << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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