module.exports = {
  "title": "Print IDs Appearing More Than Twice",
  "difficulty": "hard",
  "acceptance": "85%",

  "description": `
    <p>Given a list of login attempt IDs, return a sorted list of IDs that appear at least 3 times.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of login attempts</li>
      <li>Read <code>n</code> strings - the IDs of each login attempt</li>
      <li>Return a sorted list of IDs that appear 3 or more times in the list</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>IDs are case-sensitive strings</li>
      <li>Return the result in sorted order</li>
      <li>Each ID appears only once in the result</li>
      <li>If no ID appears at least 3 times, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
8
10 20 10 30 20 20 40 50
Output:
['20']</pre>
    <p><b>Explanation:</b> ID '20' appears 3 times, which is at least 3. ID '10' appears only 2 times, so it's not included.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
6
A A A B B B
Output:
['A', 'B']</pre>
    <p><b>Explanation:</b> Both 'A' and 'B' appear 3 times each.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['20']", "stdinput": "8\n10 20 10 30 20 20 40 50" },
    { "id": 2, "input": [], "expected": "['A', 'B']", "stdinput": "6\nA A A B B B" },
    { "id": 3, "input": [], "expected": "[]", "stdinput": "5\n1 2 3 4 5" },
    { "id": 4, "input": [], "expected": "['spam']", "stdinput": "7\nspam spam normal spam user spam test" },
    { "id": 5, "input": [], "expected": "['cat', 'dog']", "stdinput": "8\ncat dog cat bird dog cat dog mouse" },
    { "id": 6, "input": [], "expected": "['x']", "stdinput": "10\nx x x y y z z x x w" }
  ],

  "templates": {
    "python": "n = int(input())\nids = input().split()\n\nseen = {}\nrepeat = set()\n\nfor x in ids:\n    if x not in seen:\n        seen[x] = 1\n    else:\n        seen[x] += 1\n        if seen[x] >= 3:\n            repeat.add(x)\n\nresult = sorted(repeat)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        String[] ids = scanner.nextLine().split(\" \");\n        Map<String, Integer> seen = new HashMap<>();\n        Set<String> repeat = new HashSet<>();\n        \n        for (String id : ids) {\n            seen.put(id, seen.getOrDefault(id, 0) + 1);\n            if (seen.get(id) >= 3) {\n                repeat.add(id);\n            }\n        }\n        \n        Set<String> sortedRepeat = new TreeSet<>(repeat);\n        System.out.println(sortedRepeat);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const ids = lines[1].split(' ');\n        \n        const seen = new Map();\n        const repeat = new Set();\n        \n        for (const id of ids) {\n            const count = (seen.get(id) || 0) + 1;\n            seen.set(id, count);\n            if (count >= 3) {\n                repeat.add(id);\n            }\n        }\n        \n        const result = Array.from(repeat).sort();\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<string> ids(n);\n    for (int i = 0; i < n; i++) {\n        cin >> ids[i];\n    }\n    \n    unordered_map<string, int> seen;\n    set<string> repeat;\n    \n    for (const string& id : ids) {\n        seen[id]++;\n        if (seen[id] >= 3) {\n            repeat.insert(id);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& id : repeat) {\n        if (!first) cout << \", \";\n        cout << \"'\" << id << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nids = input().split()\n\nseen = {}\nrepeat = set()\n\nfor x in ids:\n    if x not in seen:\n        seen[x] = 1\n    else:\n        seen[x] += 1\n        if seen[x] >= 3:\n            repeat.add(x)\n\nresult = sorted(repeat)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        String[] ids = scanner.nextLine().split(\" \");\n        Map<String, Integer> seen = new HashMap<>();\n        Set<String> repeat = new HashSet<>();\n        \n        for (String id : ids) {\n            seen.put(id, seen.getOrDefault(id, 0) + 1);\n            if (seen.get(id) >= 3) {\n                repeat.add(id);\n            }\n        }\n        \n        Set<String> sortedRepeat = new TreeSet<>(repeat);\n        System.out.println(sortedRepeat);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const ids = lines[1].split(' ');\n        \n        const seen = new Map();\n        const repeat = new Set();\n        \n        for (const id of ids) {\n            const count = (seen.get(id) || 0) + 1;\n            seen.set(id, count);\n            if (count >= 3) {\n                repeat.add(id);\n            }\n        }\n        \n        const result = Array.from(repeat).sort();\n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_map>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<string> ids(n);\n    for (int i = 0; i < n; i++) {\n        cin >> ids[i];\n    }\n    \n    unordered_map<string, int> seen;\n    set<string> repeat;\n    \n    for (const string& id : ids) {\n        seen[id]++;\n        if (seen[id] >= 3) {\n            repeat.insert(id);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& id : repeat) {\n        if (!first) cout << \", \";\n        cout << \"'\" << id << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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