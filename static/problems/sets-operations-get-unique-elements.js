module.exports = {
    "title": "Unique Items – Distinct Elements",
    "difficulty": "easy",
    "acceptance": "94%",
  
    "description": `
      <p>Given a list of items, print all the <b>distinct items</b> in <b>sorted alphabetical order</b>.</p>
      <p><b>Key Concepts:</b></p>
      <ul>
        <li>If an item appears <b>multiple times</b> in the input, it should appear <b>only once</b> in the output</li>
        <li>The output shows <b>one copy</b> of each different item from the input</li>
        <li>Items should appear in <b>alphabetical (lexicographical) order</b></li>
        <li>This is like creating a sorted catalog of all different items in your collection</li>
      </ul>
      <p><b>Important Notes:</b></p>
      <ul>
        <li>The first number <code>n</code> tells how many items are in the list</li>
        <li>Items are <b>case-sensitive</b>: "Apple" comes before "apple" in alphabetical order</li>
        <li>Uppercase letters come before lowercase letters in alphabetical order</li>
        <li>The output should be a sorted list showing only distinct items</li>
      </ul>
      <p>Think of this like finding all the different types of items and then arranging them in dictionary order.</p>
    `,
  
    "examples": `
      <h3>Example 1</h3>
      <pre class="constraints">Input:
5
apple banana apple milk milk
Output:
['apple', 'banana', 'milk']</pre>
      <p><b>Explanation:</b> 
      <ul>
        <li>Distinct items are: <code>"apple"</code>, <code>"banana"</code>, <code>"milk"</code></li>
        <li>Sorted order: <code>"apple"</code> (a), then <code>"banana"</code> (b), then <code>"milk"</code> (m)</li>
      </ul>
      All three different items are shown in alphabetical order.</p>
      
      <h3>Example 2</h3>
      <pre class="constraints">Input:
6
cat dog cat fish bird bird
Output:
['bird', 'cat', 'dog', 'fish']</pre>
      <p><b>Explanation:</b> 
      <ul>
        <li>Distinct items are: <code>"cat"</code>, <code>"dog"</code>, <code>"fish"</code>, <code>"bird"</code></li>
        <li>Sorted order: <code>"bird"</code> (b), <code>"cat"</code> (c), <code>"dog"</code> (d), <code>"fish"</code> (f)</li>
      </ul>
      Four different animals are shown in alphabetical order.</p>
    `,
  
    "testCases": [
      { "id": 1, "input": [], "expected": "['apple', 'banana', 'milk']", "stdinput": "5\napple banana apple milk milk" },
      { "id": 2, "input": [], "expected": "['bird', 'cat', 'dog', 'fish']", "stdinput": "6\ncat dog cat fish bird bird" },
      { "id": 3, "input": [], "expected": "['hello', 'world']", "stdinput": "4\nhello world hello world" },
      { "id": 4, "input": [], "expected": "['a', 'b', 'c']", "stdinput": "3\na b c" },
      { "id": 5, "input": [], "expected": "['one', 'two']", "stdinput": "4\none one two two" },
    ],
  
    "templates": {
      "python": "n = int(input())\nitems = input().split()\nunique_sorted = sorted(set(items))\nprint(unique_sorted)",
      "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] items = scanner.nextLine().split(\" \");\n        Set<String> uniqueItems = new TreeSet<>();\n        \n        for (String item : items) {\n            uniqueItems.add(item);\n        }\n        \n        System.out.println(uniqueItems);\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const items = lines[1].split(' ');\n        const uniqueItems = [...new Set(items)].sort();\n        \n        console.log(JSON.stringify(uniqueItems));\n        readline.close();\n    }\n});",
      "c++": "#include <iostream>\n#include <set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<string> items(n);\n    for (int i = 0; i < n; i++) {\n        cin >> items[i];\n    }\n    \n    set<string> uniqueItems;\n    \n    for (const string& item : items) {\n        uniqueItems.insert(item);\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& item : uniqueItems) {\n        if (!first) cout << \", \";\n        cout << \"'\" << item << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
    },

  
    "solutions": {
      "python": "n = int(input())\nitems = input().split()\nunique_sorted = sorted(set(items))\nprint(unique_sorted)",
      "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        String[] items = scanner.nextLine().split(\" \");\n        Set<String> uniqueItems = new TreeSet<>();\n        \n        for (String item : items) {\n            uniqueItems.add(item);\n        }\n        \n        System.out.println(uniqueItems);\n    }\n}",
      "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const items = lines[1].split(' ');\n        const uniqueItems = [...new Set(items)].sort();\n        \n        console.log(JSON.stringify(uniqueItems));\n        readline.close();\n    }\n});",
      "c++": "#include <iostream>\n#include <set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    vector<string> items(n);\n    for (int i = 0; i < n; i++) {\n        cin >> items[i];\n    }\n    \n    set<string> uniqueItems;\n    \n    for (const string& item : items) {\n        uniqueItems.insert(item);\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& item : uniqueItems) {\n        if (!first) cout << \", \";\n        cout << \"'\" << item << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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