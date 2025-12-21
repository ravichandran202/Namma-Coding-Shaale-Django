module.exports = {
  "title": "Find Missing and Extra Items – Compare Lists",
  "difficulty": "hard",
  "acceptance": "72%",

  "description": `
    <p>Given two lists (warehouse inventory and store inventory), return two sorted lists: items missing from the store and extra items in the store.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of items in warehouse</li>
      <li>Read <code>n</code> strings - the warehouse items</li>
      <li>Read an integer <code>m</code> - the number of items in store</li>
      <li>Read <code>m</code> strings - the store items</li>
      <li>Return two lists: first list contains items in warehouse but not in store (missing), second list contains items in store but not in warehouse (extra)</li>
      <li>Both lists should be sorted</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Item names are case-sensitive strings</li>
      <li>Return both lists in sorted order</li>
      <li>Each item appears only once in each result list</li>
      <li>If a list is empty, return an empty list</li>
      <li>Output format: Missing: ['item1', 'item2'] Extra: ['item3', 'item4']</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
a b c d
4
a c e f
Output:
Missing: ['b', 'd']
Extra: ['e', 'f']</pre>
    <p><b>Explanation:</b> Items 'b' and 'd' are in warehouse but not in store. Items 'e' and 'f' are in store but not in warehouse.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
apple banana cherry
3
apple banana cherry
Output:
Missing: []
Extra: []</pre>
    <p><b>Explanation:</b> Both lists are identical, so no missing or extra items.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "Missing: ['b', 'd']\nExtra: ['e', 'f']", "stdinput": "4\na b c d\n4\na c e f" },
    { "id": 2, "input": [], "expected": "Missing: []\nExtra: []", "stdinput": "3\napple banana cherry\n3\napple banana cherry" },
    { "id": 4, "input": [], "expected": "Missing: []\nExtra: ['new', 'products']", "stdinput": "0\n\n2\nnew products" },
    { "id": 5, "input": [], "expected": "Missing: ['cat', 'dog']\nExtra: ['bird', 'fish']", "stdinput": "2\ncat dog\n2\nbird fish" },
    { "id": 6, "input": [], "expected": "Missing: ['red']\nExtra: ['blue', 'green']", "stdinput": "2\nred yellow\n3\nyellow blue green" }
  ],

  "templates": {
    "python": "n = int(input())\nwarehouse = set(input().split())\nm = int(input())\nstore = set(input().split())\n\nmissing = sorted(warehouse - store)\nextra = sorted(store - warehouse)\n\nprint(\"Missing:\", missing)\nprint(\"Extra:\", extra)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> warehouse = new HashSet<>();\n        String[] warehouseArray = scanner.nextLine().split(\" \");\n        for (String item : warehouseArray) {\n            warehouse.add(item);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> store = new HashSet<>();\n        String[] storeArray = scanner.nextLine().split(\" \");\n        for (String item : storeArray) {\n            store.add(item);\n        }\n        \n        Set<String> missing = new TreeSet<>(warehouse);\n        missing.removeAll(store);\n        \n        Set<String> extra = new TreeSet<>(store);\n        extra.removeAll(warehouse);\n        \n        System.out.println(\"Missing: \" + missing);\n        System.out.println(\"Extra: \" + extra);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const warehouse = new Set(lines[1].split(' ').filter(x => x.length > 0));\n        const m = parseInt(lines[2]);\n        const store = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        const missing = new Set([...warehouse].filter(x => !store.has(x)));\n        const extra = new Set([...store].filter(x => !warehouse.has(x)));\n        \n        const missingSorted = Array.from(missing).sort();\n        const extraSorted = Array.from(extra).sort();\n        \n        console.log(`Missing: ${JSON.stringify(missingSorted)} Extra: ${JSON.stringify(extraSorted)}`);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> warehouse;\n    for (int i = 0; i < n; i++) {\n        string item;\n        cin >> item;\n        warehouse.insert(item);\n    }\n    \n    cin >> m;\n    unordered_set<string> store;\n    for (int i = 0; i < m; i++) {\n        string item;\n        cin >> item;\n        store.insert(item);\n    }\n    \n    set<string> missing, extra;\n    \n    for (const string& item : warehouse) {\n        if (store.find(item) == store.end()) {\n            missing.insert(item);\n        }\n    }\n    \n    for (const string& item : store) {\n        if (warehouse.find(item) == warehouse.end()) {\n            extra.insert(item);\n        }\n    }\n    \n    cout << \"Missing: [\";\n    bool first = true;\n    for (const string& item : missing) {\n        if (!first) cout << \", \";\n        cout << \"'\" << item << \"'\";\n        first = false;\n    }\n    cout << \"] Extra: [\";\n    \n    first = true;\n    for (const string& item : extra) {\n        if (!first) cout << \", \";\n        cout << \"'\" << item << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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