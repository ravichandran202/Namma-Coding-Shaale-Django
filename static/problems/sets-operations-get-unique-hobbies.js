module.exports = module.exports = {
  "title": "Union of Hobbies",
  "difficulty": "medium",
  "acceptance": "94%",

  "description": `
    <p>You are given two lists of hobbies. Find all the <b>different hobbies</b> that appear in <b>either or both</b> lists.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of hobbies in the first list</li>
      <li>Next, you receive <code>n</code> hobbies</li>
      <li>Then, you receive a number <code>m</code> - the count of hobbies in the second list</li>
      <li>Finally, you receive <code>m</code> hobbies</li>
      <li>Print all <b>different hobbies</b> from <b>both lists combined</b> in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>If a hobby appears in <b>both lists</b>, it appears <b>only once</b> in the output</li>
      <li>If a hobby appears in <b>only one list</b>, it appears in the output</li>
      <li>Hobbies are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical order</b></li>
      <li>This combines all unique hobbies from both lists</li>
    </ul>
    <p>This is like creating a combined list of all different hobbies that anyone in two friend groups enjoys.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
reading swimming painting
2
swimming gardening
Output:
['gardening', 'painting', 'reading', 'swimming']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>reading, swimming, painting</code></li>
      <li>Second list: <code>swimming, gardening</code></li>
      <li>All different hobbies: <code>reading, swimming, painting, gardening</code></li>
      <li>Sorted: <code>gardening, painting, reading, swimming</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
chess football
3
basketball tennis chess
Output:
['basketball', 'chess', 'football', 'tennis']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>chess, football</code></li>
      <li>Second list: <code>basketball, tennis, chess</code></li>
      <li>All different hobbies: <code>chess, football, basketball, tennis</code></li>
      <li>Sorted: <code>basketball, chess, football, tennis</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['gardening', 'painting', 'reading', 'swimming']", "stdinput": "3\nreading swimming painting\n2\nswimming gardening" },
    { "id": 2, "input": [], "expected": "['basketball', 'chess', 'football', 'tennis']", "stdinput": "2\nchess football\n3\nbasketball tennis chess" },
    { "id": 3, "input": [], "expected": "['coding', 'gaming', 'music', 'sports']", "stdinput": "2\ncoding gaming\n3\nmusic sports coding" },
    { "id": 4, "input": [], "expected": "['a', 'b', 'c', 'd', 'e']", "stdinput": "3\na b c\n3\nd e b" },
    { "id": 5, "input": [], "expected": "['apple', 'banana', 'cherry', 'date']", "stdinput": "2\napple banana\n3\ncherry date apple" },
  ],

  "templates": {
    "python": "n = int(input())\na = set(input().split())\nm = int(input())\nb = set(input().split())\nresult = sorted(a | b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setA = new HashSet<>();\n        String[] hobbiesA = scanner.nextLine().split(\" \");\n        for (String hobby : hobbiesA) {\n            setA.add(hobby);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setB = new HashSet<>();\n        String[] hobbiesB = scanner.nextLine().split(\" \");\n        for (String hobby : hobbiesB) {\n            setB.add(hobby);\n        }\n        \n        Set<String> union = new TreeSet<>(setA);\n        union.addAll(setB);\n        \n        System.out.println(union);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const setA = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const setB = new Set(lines[3].split(' '));\n        \n        const union = new Set([...setA, ...setB]);\n        const result = Array.from(union).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<string> unionSet;\n    for (int i = 0; i < n; i++) {\n        string hobby;\n        cin >> hobby;\n        unionSet.insert(hobby);\n    }\n    \n    cin >> m;\n    for (int i = 0; i < m; i++) {\n        string hobby;\n        cin >> hobby;\n        unionSet.insert(hobby);\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& hobby : unionSet) {\n        if (!first) cout << \", \";\n        cout << \"'\" << hobby << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n = int(input())\na = set(input().split())\nm = int(input())\nb = set(input().split())\nresult = sorted(a | b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setA = new HashSet<>();\n        String[] hobbiesA = scanner.nextLine().split(\" \");\n        for (String hobby : hobbiesA) {\n            setA.add(hobby);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setB = new HashSet<>();\n        String[] hobbiesB = scanner.nextLine().split(\" \");\n        for (String hobby : hobbiesB) {\n            setB.add(hobby);\n        }\n        \n        Set<String> union = new TreeSet<>(setA);\n        union.addAll(setB);\n        \n        System.out.println(union);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const setA = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const setB = new Set(lines[3].split(' '));\n        \n        const union = new Set([...setA, ...setB]);\n        const result = Array.from(union).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<string> unionSet;\n    for (int i = 0; i < n; i++) {\n        string hobby;\n        cin >> hobby;\n        unionSet.insert(hobby);\n    }\n    \n    cin >> m;\n    for (int i = 0; i < m; i++) {\n        string hobby;\n        cin >> hobby;\n        unionSet.insert(hobby);\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& hobby : unionSet) {\n        if (!first) cout << \", \";\n        cout << \"'\" << hobby << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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