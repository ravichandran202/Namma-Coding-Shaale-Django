module.exports = module.exports = {
  "title": "Unique Visitors in 3 Days – Three-Set Union",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>A website tracks visitors over three days. Count how many <b>different visitors</b> came on any of these three days.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n1</code> - visitors on day 1</li>
      <li>Next, you receive <code>n1</code> visitor IDs for day 1</li>
      <li>Then, you receive a number <code>n2</code> - visitors on day 2</li>
      <li>Next, you receive <code>n2</code> visitor IDs for day 2</li>
      <li>Then, you receive a number <code>n3</code> - visitors on day 3</li>
      <li>Finally, you receive <code>n3</code> visitor IDs for day 3</li>
      <li>Print the count of <b>different visitors</b> across all three days</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>A visitor who came on multiple days is counted <b>only once</b></li>
      <li>We want the total number of <b>different people</b> who visited</li>
      <li>Visitor IDs are <b>case-sensitive</b></li>
      <li>The output is just a number - the count of unique visitors</li>
      <li>If no visitors on any day, print <code>0</code></li>
    </ul>
    <p>This calculates the website's reach - how many different people visited over a 3-day period.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
A101 B202 C303
4
B202 D404 E505 F606
2
A101 G707
Output:
6</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Day 1: <code>A101, B202, C303</code></li>
      <li>Day 2: <code>B202, D404, E505, F606</code></li>
      <li>Day 3: <code>A101, G707</code></li>
      <li>Different visitors: <code>A101, B202, C303, D404, E505, F606, G707</code></li>
      <li>Count: <code>7</code> visitors (Note: A101 and B202 appear multiple days but counted once)</li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
user1 user2
3
user1 user3 user4
1
user1
Output:
4</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Day 1: <code>user1, user2</code></li>
      <li>Day 2: <code>user1, user3, user4</code></li>
      <li>Day 3: <code>user1</code></li>
      <li>Different visitors: <code>user1, user2, user3, user4</code></li>
      <li>Count: <code>4</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "7", "stdinput": "3\nA101 B202 C303\n4\nB202 D404 E505 F606\n2\nA101 G707" },
    { "id": 2, "input": [], "expected": "4", "stdinput": "2\nuser1 user2\n3\nuser1 user3 user4\n1\nuser1" },
    { "id": 4, "input": [], "expected": "5", "stdinput": "3\n1 2 3\n3\n2 3 4\n2\n4 5" },
    { "id": 5, "input": [], "expected": "1", "stdinput": "1\njohn\n1\njohn\n1\njohn" },
    { "id": 6, "input": [], "expected": "9", "stdinput": "3\nA B C\n3\nD E F\n3\nG H I" },
    { "id": 7, "input": [], "expected": "3", "stdinput": "2\nred blue\n1\nred\n2\nblue green" },
    { "id": 8, "input": [], "expected": "7", "stdinput": "4\njan feb mar apr\n3\nmay jun jan\n2\nfeb jul" },
    { "id": 9, "input": [], "expected": "8", "stdinput": "5\n1 2 3 4 5\n4\n3 4 5 6\n3\n5 6 7 8" }
  ],

  "templates": {
    "python": "n1 = int(input())\na = set(input().split())\nn2 = int(input())\nb = set(input().split())\nn3 = int(input())\nc = set(input().split())\nprint(len(a | b | c))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        int n1 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day1 = new HashSet<>();\n        if (n1 > 0) {\n            String[] visitors1 = scanner.nextLine().split(\" \");\n            for (String v : visitors1) {\n                day1.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        int n2 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day2 = new HashSet<>();\n        if (n2 > 0) {\n            String[] visitors2 = scanner.nextLine().split(\" \");\n            for (String v : visitors2) {\n                day2.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        int n3 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day3 = new HashSet<>();\n        if (n3 > 0) {\n            String[] visitors3 = scanner.nextLine().split(\" \");\n            for (String v : visitors3) {\n                day3.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        Set<String> allVisitors = new HashSet<>(day1);\n        allVisitors.addAll(day2);\n        allVisitors.addAll(day3);\n        \n        System.out.println(allVisitors.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 6) {\n        const n1 = parseInt(lines[0]);\n        const set1 = new Set(lines[1].split(' ').filter(x => x.length > 0));\n        const n2 = parseInt(lines[2]);\n        const set2 = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        const n3 = parseInt(lines[4]);\n        const set3 = new Set(lines[5].split(' ').filter(x => x.length > 0));\n        \n        const allVisitors = new Set([...set1, ...set2, ...set3]);\n        console.log(allVisitors.size);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n1, n2, n3;\n    \n    cin >> n1;\n    unordered_set<string> allVisitors;\n    for (int i = 0; i < n1; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cin >> n2;\n    for (int i = 0; i < n2; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cin >> n3;\n    for (int i = 0; i < n3; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cout << allVisitors.size() << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "n1 = int(input())\na = set(input().split())\nn2 = int(input())\nb = set(input().split())\nn3 = int(input())\nc = set(input().split())\nprint(len(a | b | c))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        int n1 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day1 = new HashSet<>();\n        if (n1 > 0) {\n            String[] visitors1 = scanner.nextLine().split(\" \");\n            for (String v : visitors1) {\n                day1.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        int n2 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day2 = new HashSet<>();\n        if (n2 > 0) {\n            String[] visitors2 = scanner.nextLine().split(\" \");\n            for (String v : visitors2) {\n                day2.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        int n3 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> day3 = new HashSet<>();\n        if (n3 > 0) {\n            String[] visitors3 = scanner.nextLine().split(\" \");\n            for (String v : visitors3) {\n                day3.add(v);\n            }\n        } else {\n            scanner.nextLine();\n        }\n        \n        Set<String> allVisitors = new HashSet<>(day1);\n        allVisitors.addAll(day2);\n        allVisitors.addAll(day3);\n        \n        System.out.println(allVisitors.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 6) {\n        const n1 = parseInt(lines[0]);\n        const set1 = new Set(lines[1].split(' ').filter(x => x.length > 0));\n        const n2 = parseInt(lines[2]);\n        const set2 = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        const n3 = parseInt(lines[4]);\n        const set3 = new Set(lines[5].split(' ').filter(x => x.length > 0));\n        \n        const allVisitors = new Set([...set1, ...set2, ...set3]);\n        console.log(allVisitors.size);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n1, n2, n3;\n    \n    cin >> n1;\n    unordered_set<string> allVisitors;\n    for (int i = 0; i < n1; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cin >> n2;\n    for (int i = 0; i < n2; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cin >> n3;\n    for (int i = 0; i < n3; i++) {\n        string visitor;\n        cin >> visitor;\n        allVisitors.insert(visitor);\n    }\n    \n    cout << allVisitors.size() << endl;\n    \n    return 0;\n}"
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