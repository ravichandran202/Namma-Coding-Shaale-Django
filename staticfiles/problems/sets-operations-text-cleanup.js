module.exports = {
  "title": "Text Cleaning",
  "difficulty": "hard",
  "acceptance": "80%",

  "description": `
    <p>Given a text and a list of stopwords, return the text with all stopwords removed, sorted alphabetically.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read an integer <code>n</code> - the number of words in the text</li>
      <li>Read <code>n</code> strings - the words in the text</li>
      <li>Read an integer <code>m</code> - the number of stopwords</li>
      <li>Read <code>m</code> strings - the stopwords to remove</li>
      <li>Return a sorted list of words from the text that are not in the stopwords list</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Words are case-sensitive strings</li>
      <li>Return the result in sorted alphabetical order</li>
      <li>Each word appears only once in the result</li>
      <li>If all words are stopwords, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
6
i love to eat ice cream
3
to i the
Output:
['cream', 'eat', 'ice', 'love']</pre>
    <p><b>Explanation:</b> Stopwords 'i' and 'to' are removed. Words 'love', 'eat', 'ice', 'cream' remain and are sorted.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
the quick brown fox
2
the fox
Output:
['brown', 'quick']</pre>
    <p><b>Explanation:</b> Stopwords 'the' and 'fox' are removed. Words 'quick' and 'brown' remain and are sorted.</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['cream', 'eat', 'ice', 'love']", "stdinput": "6\ni love to eat ice cream\n3\nto i the" },
    { "id": 2, "input": [], "expected": "['brown', 'quick']", "stdinput": "4\nthe quick brown fox\n2\nthe fox" },
    { "id": 3, "input": [], "expected": "[]", "stdinput": "3\nand or the\n3\nand or the" },
    { "id": 4, "input": [], "expected": "['coding', 'fun', 'is', 'python']", "stdinput": "4\npython is fun coding\n1\nthe" },
    { "id": 5, "input": [], "expected": "['1', '2', '4', '5']", "stdinput": "5\n1 2 3 4 5\n1\n3" }
  ],

  "templates": {
    "python": "n = int(input())\ntext = set(input().split())\nm = int(input())\nstop = set(input().split())\nresult = sorted(text - stop)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> text = new HashSet<>();\n        String[] textArray = scanner.nextLine().split(\" \");\n        for (String word : textArray) {\n            text.add(word);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> stopwords = new HashSet<>();\n        String[] stopArray = scanner.nextLine().split(\" \");\n        for (String word : stopArray) {\n            stopwords.add(word);\n        }\n        \n        Set<String> result = new TreeSet<>(text);\n        result.removeAll(stopwords);\n        \n        System.out.println(result);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const text = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const stopwords = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        const result = new Set([...text].filter(word => !stopwords.has(word)));\n        const sortedResult = Array.from(result).sort();\n        \n        console.log(JSON.stringify(sortedResult));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> text;\n    for (int i = 0; i < n; i++) {\n        string word;\n        cin >> word;\n        text.insert(word);\n    }\n    \n    cin >> m;\n    unordered_set<string> stopwords;\n    for (int i = 0; i < m; i++) {\n        string word;\n        cin >> word;\n        stopwords.insert(word);\n    }\n    \n    set<string> result;\n    for (const string& word : text) {\n        if (stopwords.find(word) == stopwords.end()) {\n            result.insert(word);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& word : result) {\n        if (!first) cout << \", \";\n        cout << \"'\" << word << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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