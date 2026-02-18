module.exports = {
  "title": "Merge Contacts With No Duplicates",
  "difficulty": "medium",
  "acceptance": "82%",

  "description": `
    <p>Given two contact lists, return a sorted list of all unique contacts from both lists.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of contacts in first list</li>
      <li>Read <code>n</code> strings - the contacts in first list</li>
      <li>Read an integer <code>m</code> - the number of contacts in second list</li>
      <li>Read <code>m</code> strings - the contacts in second list</li>
      <li>Return a sorted list of all unique contacts from both lists</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Contact names are case-sensitive strings</li>
      <li>Return the result in sorted alphabetical order</li>
      <li>Each contact appears only once in the result</li>
      <li>If both lists are empty, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
a b c
4
b c d e
Output:
['a', 'b', 'c', 'd', 'e']</pre>
    <p><b>Explanation:</b> All unique contacts from both lists: a, b, c, d, e.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
john mary
1
john
Output:
['john', 'mary']</pre>
    <p><b>Explanation:</b> 'john' appears in both lists but appears only once in result.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['a', 'b', 'c', 'd', 'e']", "stdinput": "3\na b c\n4\nb c d e" },
    { "id": 2, "input": [], "expected": "['john', 'mary']", "stdinput": "2\njohn mary\n1\njohn" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'C', 'D']", "stdinput": "2\nA B\n2\nC D" },
    { "id": 5, "input": [], "expected": "['admin', 'guest', 'root', 'user']", "stdinput": "3\nadmin user guest\n3\nroot guest admin" },
    { "id": 6, "input": [], "expected": "['1', '2', '3', '4', '5', '6']", "stdinput": "3\n1 2 3\n3\n4 5 6" },
    { "id": 7, "input": [], "expected": "['cat', 'dog', 'fish', 'rabbit']", "stdinput": "2\ncat dog\n3\ndog fish rabbit" },
    { "id": 9, "input": [], "expected": "['apple', 'banana', 'cherry', 'date']", "stdinput": "2\napple banana\n3\nbanana cherry date" }
  ],

  "templates": {
    "python": "n = int(input())\nc1 = set(input().split())\nm = int(input())\nc2 = set(input().split())\nresult = sorted(c1 | c2)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> contacts1 = new HashSet<>();\n        String[] contacts1Array = scanner.nextLine().split(\" \");\n        for (String contact : contacts1Array) {\n            contacts1.add(contact);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> contacts2 = new HashSet<>();\n        String[] contacts2Array = scanner.nextLine().split(\" \");\n        for (String contact : contacts2Array) {\n            contacts2.add(contact);\n        }\n        \n        Set<String> union = new TreeSet<>(contacts1);\n        union.addAll(contacts2);\n        \n        System.out.println(union);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const contacts1 = new Set(lines[1].split(' ').filter(x => x.length > 0));\n        const m = parseInt(lines[2]);\n        const contacts2 = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        const union = new Set([...contacts1, ...contacts2]);\n        const result = Array.from(union).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> allContacts;\n    for (int i = 0; i < n; i++) {\n        string contact;\n        cin >> contact;\n        allContacts.insert(contact);\n    }\n    \n    cin >> m;\n    for (int i = 0; i < m; i++) {\n        string contact;\n        cin >> contact;\n        allContacts.insert(contact);\n    }\n    \n    set<string> result(allContacts.begin(), allContacts.end());\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& contact : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << contact << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\nc1 = set(input().split())\nm = int(input())\nc2 = set(input().split())\nresult = sorted(c1 | c2)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> contacts1 = new HashSet<>();\n        String[] contacts1Array = scanner.nextLine().split(\" \");\n        for (String contact : contacts1Array) {\n            contacts1.add(contact);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> contacts2 = new HashSet<>();\n        String[] contacts2Array = scanner.nextLine().split(\" \");\n        for (String contact : contacts2Array) {\n            contacts2.add(contact);\n        }\n        \n        Set<String> union = new TreeSet<>(contacts1);\n        union.addAll(contacts2);\n        \n        System.out.println(union);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const contacts1 = new Set(lines[1].split(' ').filter(x => x.length > 0));\n        const m = parseInt(lines[2]);\n        const contacts2 = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        const union = new Set([...contacts1, ...contacts2]);\n        const result = Array.from(union).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> allContacts;\n    for (int i = 0; i < n; i++) {\n        string contact;\n        cin >> contact;\n        allContacts.insert(contact);\n    }\n    \n    cin >> m;\n    for (int i = 0; i < m; i++) {\n        string contact;\n        cin >> contact;\n        allContacts.insert(contact);\n    }\n    \n    set<string> result(allContacts.begin(), allContacts.end());\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& contact : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << contact << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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