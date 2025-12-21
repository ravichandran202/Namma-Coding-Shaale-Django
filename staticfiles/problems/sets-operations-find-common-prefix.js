module.exports = {
  "title": "Find Common Starting Letters",
  "difficulty": "hard",
  "acceptance": "75%",

  "description": `
    <p>Given two lists of names, return a sorted list of first letters that appear in both lists.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of names in first list</li>
      <li>Read <code>n</code> strings - the names in first list</li>
      <li>Read an integer <code>m</code> - the number of names in second list</li>
      <li>Read <code>m</code> strings - the names in second list</li>
      <li>Return a sorted list of first letters that appear in names from both lists</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Names are case-sensitive strings</li>
      <li>Consider only the first character of each name</li>
      <li>Return the result in sorted order</li>
      <li>Each letter appears only once in the result</li>
      <li>If no common first letters exist, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
ram raj ravi
3
rakesh rohit rahul
Output:
['r']</pre>
    <p><b>Explanation:</b> All names in both lists start with 'r'.</p>

    <h3>Example 3</h3>
    <pre class="constraints">Input:
3
123 234 345
2
111 222
Output:
['1', '2']</pre>
    <p><b>Explanation:</b> First list numbers start with '1', '2', '3'. Second list numbers start with '1', '2'. Common starting digits are '1' and '2'.</p>
    
    <h3>Example 3</h3>
    <pre class="constraints">Input:
2
Alice Bob
3
Charlie David Eve
Output:
[]</pre>
    <p><b>Explanation:</b> First list names start with 'A' and 'B'. Second list names start with 'C', 'D', 'E'. No common letters.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['r']", "stdinput": "3\nram raj ravi\n3\nrakesh rohit rahul" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "2\nAlice Bob\n3\nCharlie David Eve" },
    { "id": 3, "input": [], "expected": "['1', '2']", "stdinput": "3\n123 234 345\n2\n111 222" },
    { "id": 4, "input": [], "expected": "['c']", "stdinput": "2\ncat cow\n3\ncar cup camel" },
    { "id": 5, "input": [], "expected": "['p']", "stdinput": "2\npython program\n3\nprint process package" },
    { "id": 6, "input": [], "expected": "[]", "stdinput": "2\nAA BB\n2\nCC DD" },
    { "id": 7, "input": [], "expected": "['s']", "stdinput": "3\nsun star sky\n2\nsea sand" },
    { "id": 8, "input": [], "expected": "['a', 'b']", "stdinput": "3\napple banana apricot\n3\napricot berry avocado" }
  ],

  "templates": {
    "python": "n = int(input())\na = input().split()\nm = int(input())\nb = input().split()\n\ns1 = set()\ns2 = set()\n\nfor x in a:\n    s1.add(x[0])\n\nfor x in b:\n    s2.add(x[0])\n\nresult = sorted(s1 & s2)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<Character> letters1 = new HashSet<>();\n        String[] names1 = scanner.nextLine().split(\" \");\n        for (String name : names1) {\n            if (!name.isEmpty()) {\n                letters1.add(name.charAt(0));\n            }\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<Character> letters2 = new HashSet<>();\n        String[] names2 = scanner.nextLine().split(\" \");\n        for (String name : names2) {\n            if (!name.isEmpty()) {\n                letters2.add(name.charAt(0));\n            }\n        }\n        \n        Set<Character> intersection = new TreeSet<>(letters1);\n        intersection.retainAll(letters2);\n        \n        List<String> result = new ArrayList<>();\n        for (char c : intersection) {\n            result.add(String.valueOf(c));\n        }\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const names1 = lines[1].split(' ');\n        const m = parseInt(lines[2]);\n        const names2 = lines[3].split(' ');\n        \n        const letters1 = new Set();\n        for (const name of names1) {\n            if (name.length > 0) {\n                letters1.add(name[0]);\n            }\n        }\n        \n        const letters2 = new Set();\n        for (const name of names2) {\n            if (name.length > 0) {\n                letters2.add(name[0]);\n            }\n        }\n        \n        const intersection = new Set([...letters1].filter(letter => letters2.has(letter)));\n        const result = Array.from(intersection).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<char> letters1;\n    for (int i = 0; i < n; i++) {\n        string name;\n        cin >> name;\n        if (!name.empty()) {\n            letters1.insert(name[0]);\n        }\n    }\n    \n    cin >> m;\n    set<char> letters2;\n    for (int i = 0; i < m; i++) {\n        string name;\n        cin >> name;\n        if (!name.empty()) {\n            letters2.insert(name[0]);\n        }\n    }\n    \n    set<char> intersection;\n    for (char c : letters1) {\n        if (letters2.find(c) != letters2.end()) {\n            intersection.insert(c);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (char c : intersection) {\n        if (!first) cout << \", \";\n        cout << \"'\" << c << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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