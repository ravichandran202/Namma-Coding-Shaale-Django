module.exports = {
  "title": "Common Friends Count",
  "difficulty": "easy",
  "acceptance": "93%",

  "description": `
    <p>You are given two lists of friends. Find how many friends are common to both lists.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n1</code> - the count of friends in the first list</li>
      <li>Next, you receive <code>n1</code> friend names</li>
      <li>Then, you receive a number <code>n2</code> - the count of friends in the second list</li>
      <li>Finally, you receive <code>n2</code> friend names</li>
      <li>Print the count of friends who appear in <b>both lists</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Friend names are <b>case-sensitive</b>: "Ram" and "ram" are different people</li>
      <li>Count only <b>exact matches</b> - friends with the same name in both lists</li>
      <li>Output is a single number - the count of common friends</li>
      <li>If no friends are common, print <code>0</code></li>
    </ul>
    <p>This is like finding mutual friends between two people's friend lists.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
ram sam john sita
3
sam arun john
Output:
2</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>ram, sam, john, sita</code></li>
      <li>Second list: <code>sam, arun, john</code></li>
      <li>Common friends: <code>sam</code> and <code>john</code></li>
      <li>Count: <code>2</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
alice bob charlie
2
david eve
Output:
0</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>alice, bob, charlie</code></li>
      <li>Second list: <code>david, eve</code></li>
      <li>No common friends</li>
      <li>Count: <code>0</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "2", "stdinput": "4\nram sam john sita\n3\nsam arun john" },
    { "id": 2, "input": [], "expected": "0", "stdinput": "3\nalice bob charlie\n2\ndavid eve" },
    { "id": 3, "input": [], "expected": "3", "stdinput": "5\nA B C D E\n4\nA C E F" },
    { "id": 4, "input": [], "expected": "1", "stdinput": "3\ncat dog fish\n4\nbird dog monkey tiger" },
    { "id": 5, "input": [], "expected": "0", "stdinput": "2\nred blue\n3\ngreen yellow purple" },
  ],

  "templates": {
    "python": "n1 = int(input())\na = set(input().split())\nn2 = int(input())\nb = set(input().split())\nprint(len(a & b))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n1 = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        Set<String> setA = new HashSet<>();\n        String[] friendsA = scanner.nextLine().split(\" \");\n        for (String friend : friendsA) {\n            setA.add(friend);\n        }\n        \n        int n2 = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        Set<String> setB = new HashSet<>();\n        String[] friendsB = scanner.nextLine().split(\" \");\n        for (String friend : friendsB) {\n            setB.add(friend);\n        }\n        \n        setA.retainAll(setB);\n        System.out.println(setA.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n1 = parseInt(lines[0]);\n        const setA = new Set(lines[1].split(' '));\n        const n2 = parseInt(lines[2]);\n        const setB = new Set(lines[3].split(' '));\n        \n        let count = 0;\n        for (const item of setA) {\n            if (setB.has(item)) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n1, n2;\n    cin >> n1;\n    \n    unordered_set<string> setA;\n    for (int i = 0; i < n1; i++) {\n        string name;\n        cin >> name;\n        setA.insert(name);\n    }\n    \n    cin >> n2;\n    unordered_set<string> setB;\n    for (int i = 0; i < n2; i++) {\n        string name;\n        cin >> name;\n        setB.insert(name);\n    }\n    \n    int count = 0;\n    for (const string& name : setA) {\n        if (setB.find(name) != setB.end()) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n1 = int(input())\na = set(input().split())\nn2 = int(input())\nb = set(input().split())\nprint(len(a & b))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n1 = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        Set<String> setA = new HashSet<>();\n        String[] friendsA = scanner.nextLine().split(\" \");\n        for (String friend : friendsA) {\n            setA.add(friend);\n        }\n        \n        int n2 = scanner.nextInt();\n        scanner.nextLine();  // consume newline\n        \n        Set<String> setB = new HashSet<>();\n        String[] friendsB = scanner.nextLine().split(\" \");\n        for (String friend : friendsB) {\n            setB.add(friend);\n        }\n        \n        setA.retainAll(setB);\n        System.out.println(setA.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n1 = parseInt(lines[0]);\n        const setA = new Set(lines[1].split(' '));\n        const n2 = parseInt(lines[2]);\n        const setB = new Set(lines[3].split(' '));\n        \n        let count = 0;\n        for (const item of setA) {\n            if (setB.has(item)) {\n                count++;\n            }\n        }\n        \n        console.log(count);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n1, n2;\n    cin >> n1;\n    \n    unordered_set<string> setA;\n    for (int i = 0; i < n1; i++) {\n        string name;\n        cin >> name;\n        setA.insert(name);\n    }\n    \n    cin >> n2;\n    unordered_set<string> setB;\n    for (int i = 0; i < n2; i++) {\n        string name;\n        cin >> name;\n        setB.insert(name);\n    }\n    \n    int count = 0;\n    for (const string& name : setA) {\n        if (setB.find(name) != setB.end()) {\n            count++;\n        }\n    }\n    \n    cout << count << endl;\n    \n    return 0;\n}"
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