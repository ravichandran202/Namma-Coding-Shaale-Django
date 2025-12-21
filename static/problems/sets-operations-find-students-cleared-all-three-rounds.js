module.exports = {
  "title": "Students Who Cleared All 3 Rounds – Three-Set Intersection",
  "difficulty": "hard",
  "acceptance": "74%",

  "description": `
    <p>Given three lists of students who cleared each of three rounds, return a sorted list of students who cleared all three rounds.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n1</code> - the number of students who cleared Round 1</li>
      <li>Read  the names of students who cleared Round 1</li>
      <li>Read an integer <code>n2</code> - the number of students who cleared Round 2</li>
      <li>Read the names of students who cleared Round 2</li>
      <li>Read an integer <code>n3</code> - the number of students who cleared Round 3</li>
      <li>Read the names of students who cleared Round 3</li>
      <li>Return a sorted list of student names that appear in all three lists</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Student names are case-sensitive strings</li>
      <li>Return the result in sorted order</li>
      <li>Each name appears only once in the result</li>
      <li>If no student cleared all three rounds, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
3
a b c
3
b c d
3
c d e
Output:
['c']</pre>
    <p><b>Explanation:</b> Only student 'c' appears in all three rounds.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
2
john mary
2
mary david
2
david lisa
Output:
[]</pre>
    <p><b>Explanation:</b> No student appears in all three rounds.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['c']", "stdinput": "3\na b c\n3\nb c d\n3\nc d e" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "2\njohn mary\n2\nmary david\n2\ndavid lisa" },
    { "id": 3, "input": [], "expected": "['champion']", "stdinput": "3\nchampion runner participant\n3\nwinner champion achiever\n3\nstar champion hero" },
    { "id": 4, "input": [], "expected": "['A', 'C']", "stdinput": "4\nA B C D\n4\nA C E F\n4\nA C G H" },
    { "id": 5, "input": [], "expected": "[]", "stdinput": "3\n1 2 3\n3\n4 5 6\n3\n7 8 9" },
    { "id": 6, "input": [], "expected": "['python']", "stdinput": "3\npython java c++\n3\npython ruby swift\n3\npython go rust" }
  ],

  "templates": {
    "python": "n1 = int(input())\nr1 = set(input().split())\nn2 = int(input())\nr2 = set(input().split())\nn3 = int(input())\nr3 = set(input().split())\nresult = sorted(r1 & r2 & r3)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        int n1 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> round1 = new HashSet<>();\n        String[] round1Array = scanner.nextLine().split(\" \");\n        for (String student : round1Array) {\n            round1.add(student);\n        }\n        \n        int n2 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> round2 = new HashSet<>();\n        String[] round2Array = scanner.nextLine().split(\" \");\n        for (String student : round2Array) {\n            round2.add(student);\n        }\n        \n        int n3 = scanner.nextInt();\n        scanner.nextLine();\n        Set<String> round3 = new HashSet<>();\n        String[] round3Array = scanner.nextLine().split(\" \");\n        for (String student : round3Array) {\n            round3.add(student);\n        }\n        \n        Set<String> intersection = new TreeSet<>(round1);\n        intersection.retainAll(round2);\n        intersection.retainAll(round3);\n        \n        System.out.println(intersection);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 6) {\n        const n1 = parseInt(lines[0]);\n        const round1 = new Set(lines[1].split(' '));\n        const n2 = parseInt(lines[2]);\n        const round2 = new Set(lines[3].split(' '));\n        const n3 = parseInt(lines[4]);\n        const round3 = new Set(lines[5].split(' '));\n        \n        const intersection = new Set([...round1].filter(x => round2.has(x) && round3.has(x)));\n        const result = Array.from(intersection).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n1, n2, n3;\n    \n    cin >> n1;\n    unordered_set<string> round1;\n    for (int i = 0; i < n1; i++) {\n        string student;\n        cin >> student;\n        round1.insert(student);\n    }\n    \n    cin >> n2;\n    unordered_set<string> round2;\n    for (int i = 0; i < n2; i++) {\n        string student;\n        cin >> student;\n        round2.insert(student);\n    }\n    \n    cin >> n3;\n    unordered_set<string> round3;\n    for (int i = 0; i < n3; i++) {\n        string student;\n        cin >> student;\n        round3.insert(student);\n    }\n    \n    set<string> intersection;\n    for (const string& student : round1) {\n        if (round2.find(student) != round2.end() && round3.find(student) != round3.end()) {\n            intersection.insert(student);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& student : intersection) {\n        if (!first) cout << \", \";\n        cout << \"'\" << student << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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