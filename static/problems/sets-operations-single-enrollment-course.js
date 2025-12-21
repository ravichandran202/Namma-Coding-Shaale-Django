module.exports = {
  "title": "Find Students Enrolled in Exactly One Course – Symmetric Difference",
  "difficulty": "hard",
  "acceptance": "88%",

  "description": `
    <p>Given two lists of students enrolled in Course A and Course B, return a sorted list of students who are enrolled in exactly one course (not both).</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of students in Course A</li>
      <li>Read <code>n</code> strings - the names of students in Course A</li>
      <li>Read an integer <code>m</code> - the number of students in Course B</li>
      <li>Read <code>m</code> strings - the names of students in Course B</li>
      <li>Return a sorted list of students who are in either Course A or Course B, but not in both</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Student names are case-sensitive</li>
      <li>Names are unique within each list</li>
      <li>Return the result in sorted order</li>
      <li>If no students meet the criteria, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
ram sam john arun
3
sam john vishal
Output:
['arun', 'ram', 'vishal']</pre>
    <p><b>Explanation:</b> Students 'ram' and 'arun' are only in Course A. Student 'vishal' is only in Course B. Students 'sam' and 'john' are in both courses, so they are excluded.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
alice bob charlie
2
alice bob
Output:
['charlie']</pre>
    <p><b>Explanation:</b> Only 'charlie' is in exactly one course (Course A).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['arun', 'ram', 'vishal']", "stdinput": "4\nram sam john arun\n3\nsam john vishal" },
    { "id": 2, "input": [], "expected": "['charlie']", "stdinput": "3\nalice bob charlie\n2\nalice bob" },
    { "id": 3, "input": [], "expected": "[]", "stdinput": "3\nx y z\n3\nx y z" },
    { "id": 4, "input": [], "expected": "['A', 'B', 'D', 'E']", "stdinput": "3\nA B C\n3\nC D E" },
    { "id": 6, "input": [], "expected": "['dog', 'fish', 'rabbit']", "stdinput": "4\ncat dog bird fish\n3\ncat bird rabbit" },
    { "id": 8, "input": [], "expected": "['user1', 'user4']", "stdinput": "3\nuser1 user2 user3\n3\nuser2 user3 user4" },
    { "id": 9, "input": [], "expected": "['apple', 'cherry', 'grape', 'orange']", "stdinput": "3\napple banana cherry\n3\nbanana orange grape" }
  ],

  "templates": {
    "python": "n = int(input())\na = set(input().split())\nm = int(input())\nb = set(input().split())\nresult = sorted(a ^ b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> courseA = new HashSet<>();\n        String[] studentsA = scanner.nextLine().split(\" \");\n        for (String student : studentsA) {\n            courseA.add(student);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> courseB = new HashSet<>();\n        String[] studentsB = scanner.nextLine().split(\" \");\n        for (String student : studentsB) {\n            courseB.add(student);\n        }\n        \n        Set<String> symmetricDiff = new TreeSet<>(courseA);\n        symmetricDiff.addAll(courseB);\n        \n        Set<String> intersection = new HashSet<>(courseA);\n        intersection.retainAll(courseB);\n        \n        symmetricDiff.removeAll(intersection);\n        \n        System.out.println(symmetricDiff);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const courseA = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const courseB = new Set(lines[3].split(' '));\n        \n        const symmetricDiff = new Set([\n            ...[...courseA].filter(x => !courseB.has(x)),\n            ...[...courseB].filter(x => !courseA.has(x))\n        ]);\n        \n        const result = Array.from(symmetricDiff).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> courseA;\n    for (int i = 0; i < n; i++) {\n        string student;\n        cin >> student;\n        courseA.insert(student);\n    }\n    \n    cin >> m;\n    unordered_set<string> courseB;\n    for (int i = 0; i < m; i++) {\n        string student;\n        cin >> student;\n        courseB.insert(student);\n    }\n    \n    set<string> symmetricDiff;\n    \n    for (const string& student : courseA) {\n        if (courseB.find(student) == courseB.end()) {\n            symmetricDiff.insert(student);\n        }\n    }\n    \n    for (const string& student : courseB) {\n        if (courseA.find(student) == courseA.end()) {\n            symmetricDiff.insert(student);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& student : symmetricDiff) {\n        if (!first) cout << \", \";\n        cout << \"'\" << student << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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