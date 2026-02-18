module.exports = {
  "title": "Remove Blacklisted Users – Set Difference",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>You have a list of users and a blacklist. Remove all blacklisted users from the user list and print the remaining users.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of users</li>
      <li>Next, you receive <code>n</code> user IDs</li>
      <li>Then, you receive a number <code>m</code> - the count of blacklisted users</li>
      <li>Finally, you receive <code>m</code> blacklisted user IDs</li>
      <li>Print all users who are <b>not blacklisted</b>, in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Remove any user that appears in the blacklist</li>
      <li>Keep users that are not in the blacklist</li>
      <li>User IDs are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical/numerical order</b></li>
      <li>Each user appears only once in output</li>
    </ul>
    <p>This is like filtering out unwanted users from a system while keeping the legitimate ones.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
u1 u2 u3 u4 u5
2
u2 u4
Output:
['u1', 'u3', 'u5']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All users: <code>u1, u2, u3, u4, u5</code></li>
      <li>Blacklisted: <code>u2, u4</code></li>
      <li>Remaining: <code>u1, u3, u5</code></li>
      <li>Sorted: <code>u1, u3, u5</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
john mary david lisa
1
david
Output:
['john', 'lisa', 'mary']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All users: <code>john, mary, david, lisa</code></li>
      <li>Blacklisted: <code>david</code></li>
      <li>Remaining: <code>john, mary, lisa</code></li>
      <li>Sorted: <code>john, lisa, mary</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['u1', 'u3', 'u5']", "stdinput": "5\nu1 u2 u3 u4 u5\n2\nu2 u4" },
    { "id": 2, "input": [], "expected": "['john', 'lisa', 'mary']", "stdinput": "4\njohn mary david lisa\n1\ndavid" },
    { "id": 3, "input": [], "expected": "['A', 'B', 'E', 'F']", "stdinput": "6\nA B C D E F\n2\nC D" },
    { "id": 4, "input": [], "expected": "['cat', 'dog', 'rabbit']", "stdinput": "5\ncat dog fish bird rabbit\n2\nfish bird" },
    { "id": 5, "input": [], "expected": "[]", "stdinput": "3\nspam1 spam2 spam3\n3\nspam1 spam2 spam3" },
    { "id": 6, "input": [], "expected": "['active1', 'active2']", "stdinput": "4\nactive1 active2 banned1 banned2\n2\nbanned1 banned2" },
    { "id": 7, "input": [], "expected": "['user100', 'user200']", "stdinput": "3\nuser100 user200 user300\n1\nuser300" }
  ],

  "templates": {
    "python": "n = int(input())\nusers = set(input().split())\nm = int(input())\nblack = set(input().split())\nresult = sorted(users - black)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> users = new HashSet<>();\n        String[] userArray = scanner.nextLine().split(\" \");\n        for (String user : userArray) {\n            users.add(user);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> blacklist = new HashSet<>();\n        String[] blackArray = scanner.nextLine().split(\" \");\n        for (String blackUser : blackArray) {\n            blacklist.add(blackUser);\n        }\n        \n        Set<String> result = new TreeSet<>(users);\n        result.removeAll(blacklist);\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const users = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const blacklist = new Set(lines[3].split(' '));\n        \n        const result = new Set([...users].filter(user => !blacklist.has(user)));\n        const sortedResult = Array.from(result).sort();\n        \n        console.log(JSON.stringify(sortedResult));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<string> users;\n    for (int i = 0; i < n; i++) {\n        string user;\n        cin >> user;\n        users.insert(user);\n    }\n    \n    cin >> m;\n    set<string> blacklist;\n    for (int i = 0; i < m; i++) {\n        string blackUser;\n        cin >> blackUser;\n        blacklist.insert(blackUser);\n    }\n    \n    set<string> result;\n    for (const string& user : users) {\n        if (blacklist.find(user) == blacklist.end()) {\n            result.insert(user);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& user : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << user << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nusers = set(input().split())\nm = int(input())\nblack = set(input().split())\nresult = sorted(users - black)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> users = new HashSet<>();\n        String[] userArray = scanner.nextLine().split(\" \");\n        for (String user : userArray) {\n            users.add(user);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> blacklist = new HashSet<>();\n        String[] blackArray = scanner.nextLine().split(\" \");\n        for (String blackUser : blackArray) {\n            blacklist.add(blackUser);\n        }\n        \n        Set<String> result = new TreeSet<>(users);\n        result.removeAll(blacklist);\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const users = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const blacklist = new Set(lines[3].split(' '));\n        \n        const result = new Set([...users].filter(user => !blacklist.has(user)));\n        const sortedResult = Array.from(result).sort();\n        \n        console.log(JSON.stringify(sortedResult));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<string> users;\n    for (int i = 0; i < n; i++) {\n        string user;\n        cin >> user;\n        users.insert(user);\n    }\n    \n    cin >> m;\n    set<string> blacklist;\n    for (int i = 0; i < m; i++) {\n        string blackUser;\n        cin >> blackUser;\n        blacklist.insert(blackUser);\n    }\n    \n    set<string> result;\n    for (const string& user : users) {\n        if (blacklist.find(user) == blacklist.end()) {\n            result.insert(user);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& user : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << user << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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