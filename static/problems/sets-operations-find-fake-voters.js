module.exports = {
  "title": "Detect Fake Voters – Set Intersection",
  "difficulty": "hard",
  "acceptance": "76%",

  "description": `
    <p>Given two lists of voters (online and offline), return a sorted list of voters who appear in both lists.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of online voters</li>
      <li>Read <code>n</code> strings - the IDs of online voters</li>
      <li>Read an integer <code>m</code> - the number of offline voters</li>
      <li>Read <code>m</code> strings - the IDs of offline voters</li>
      <li>Return a sorted list of voter IDs that appear in both lists</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Voter IDs are case-sensitive strings</li>
      <li>Return the result in sorted order</li>
      <li>Each ID appears only once in the result</li>
      <li>If no voter appears in both lists, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
a b c d e
4
c e f g
Output:
['c', 'e']</pre>
    <p><b>Explanation:</b> Voters 'c' and 'e' appear in both online and offline voting lists.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
john mary david
2
alice bob
Output:
[]</pre>
    <p><b>Explanation:</b> No voter appears in both lists.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['c', 'e']", "stdinput": "5\na b c d e\n4\nc e f g" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "3\njohn mary david\n2\nalice bob" },
    { "id": 3, "input": [], "expected": "['100', '200', '300']", "stdinput": "5\n100 200 300 400 500\n4\n300 200 100 600" },
    { "id": 4, "input": [], "expected": "['admin']", "stdinput": "3\nadmin user guest\n2\nadmin root" },
    { "id": 5, "input": [], "expected": "['cat', 'dog']", "stdinput": "4\ncat dog bird fish\n3\ndog cat rabbit" }
  ],

  "templates": {
    "python": "n = int(input())\nonline = set(input().split())\nm = int(input())\noffline = set(input().split())\nresult = sorted(online & offline)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> onlineVoters = new HashSet<>();\n        String[] onlineArray = scanner.nextLine().split(\" \");\n        for (String voter : onlineArray) {\n            onlineVoters.add(voter);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> offlineVoters = new HashSet<>();\n        String[] offlineArray = scanner.nextLine().split(\" \");\n        for (String voter : offlineArray) {\n            offlineVoters.add(voter);\n        }\n        \n        Set<String> intersection = new TreeSet<>(onlineVoters);\n        intersection.retainAll(offlineVoters);\n        \n        System.out.println(intersection);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const online = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const offline = new Set(lines[3].split(' '));\n        \n        const intersection = new Set([...online].filter(x => offline.has(x)));\n        const result = Array.from(intersection).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> online;\n    for (int i = 0; i < n; i++) {\n        string voter;\n        cin >> voter;\n        online.insert(voter);\n    }\n    \n    cin >> m;\n    unordered_set<string> offline;\n    for (int i = 0; i < m; i++) {\n        string voter;\n        cin >> voter;\n        offline.insert(voter);\n    }\n    \n    set<string> intersection;\n    for (const string& voter : online) {\n        if (offline.find(voter) != offline.end()) {\n            intersection.insert(voter);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& voter : intersection) {\n        if (!first) cout << \", \";\n        cout << \"'\" << voter << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nonline = set(input().split())\nm = int(input())\noffline = set(input().split())\nresult = sorted(online & offline)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> onlineVoters = new HashSet<>();\n        String[] onlineArray = scanner.nextLine().split(\" \");\n        for (String voter : onlineArray) {\n            onlineVoters.add(voter);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> offlineVoters = new HashSet<>();\n        String[] offlineArray = scanner.nextLine().split(\" \");\n        for (String voter : offlineArray) {\n            offlineVoters.add(voter);\n        }\n        \n        Set<String> intersection = new TreeSet<>(onlineVoters);\n        intersection.retainAll(offlineVoters);\n        \n        System.out.println(intersection);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const online = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const offline = new Set(lines[3].split(' '));\n        \n        const intersection = new Set([...online].filter(x => offline.has(x)));\n        const result = Array.from(intersection).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> online;\n    for (int i = 0; i < n; i++) {\n        string voter;\n        cin >> voter;\n        online.insert(voter);\n    }\n    \n    cin >> m;\n    unordered_set<string> offline;\n    for (int i = 0; i < m; i++) {\n        string voter;\n        cin >> voter;\n        offline.insert(voter);\n    }\n    \n    set<string> intersection;\n    for (const string& voter : online) {\n        if (offline.find(voter) != offline.end()) {\n            intersection.insert(voter);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& voter : intersection) {\n        if (!first) cout << \", \";\n        cout << \"'\" << voter << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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