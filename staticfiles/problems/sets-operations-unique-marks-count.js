module.exports = {
  "title": "Unique Marks Count – Distinct Values",
  "difficulty": "medium",
  "acceptance": "95%",

  "description": `
    <p>You are given a list of marks (scores). Count how many <b>different marks</b> appear in the list.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, read a number <code>n</code> - the count of marks</li>
      <li>Next, read list of <code>n</code> marks</li>
      <li>Count how many <b>different</b> (unique) marks are in the list</li>
      <li>Print the count as a single number</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>If the same mark appears multiple times, it's counted only once</li>
      <li>Marks are treated as <b>strings</b>, not numbers</li>
      <li>Marks are <b>case-sensitive</b>: "A" and "a" are different marks</li>
      <li>The output is just a number - no additional text</li>
      <li>If the list is empty, print <code>0</code></li>
    </ul>
    <p>This is like counting how many different grades were given in a class.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
7
A B A C B A D
Output:
4</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All marks: <code>A, B, A, C, B, A, D</code></li>
      <li>Different marks: <code>A, B, C, D</code></li>
      <li>Count: <code>4</code></li>
      <li>Note: <code>A</code> appears 3 times but counted once</li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
5
90 85 90 85 90
Output:
2</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>All marks: <code>90, 85, 90, 85, 90</code></li>
      <li>Different marks: <code>90, 85</code></li>
      <li>Count: <code>2</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "4", "stdinput": "7\nA B A C B A D" },
    { "id": 2, "input": [], "expected": "2", "stdinput": "5\n90 85 90 85 90" },
    { "id": 3, "input": [], "expected": "1", "stdinput": "4\n100 100 100 100" },
    { "id": 4, "input": [], "expected": "6", "stdinput": "8\n1 2 3 4 5 6 1 2" },
    { "id": 5, "input": [], "expected": "4", "stdinput": "5\nA+ A B+ B B" }
  ],

  "templates": {
    "python": "n = int(input())\nmarks = input().split()\nprint(len(set(marks)))",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        if (n == 0) {\n            System.out.println(0);\n            return;\n        }\n        \n        String[] marks = scanner.nextLine().split(\" \");\n        Set<String> uniqueMarks = new HashSet<>();\n        \n        for (String mark : marks) {\n            uniqueMarks.add(mark);\n        }\n        \n        System.out.println(uniqueMarks.size());\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const n = parseInt(lines[0]);\n        const marks = lines[1].split(' ').filter(mark => mark.length > 0);\n        \n        if (marks.length === 0) {\n            console.log(0);\n            readline.close();\n            return;\n        }\n        \n        const uniqueMarks = new Set(marks);\n        console.log(uniqueMarks.size);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    if (n == 0) {\n        cout << 0 << endl;\n        return 0;\n    }\n    \n    vector<string> marks(n);\n    for (int i = 0; i < n; i++) {\n        cin >> marks[i];\n    }\n    \n    unordered_set<string> uniqueMarks;\n    for (const string& mark : marks) {\n        uniqueMarks.insert(mark);\n    }\n    \n    cout << uniqueMarks.size() << endl;\n    \n    return 0;\n}"
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