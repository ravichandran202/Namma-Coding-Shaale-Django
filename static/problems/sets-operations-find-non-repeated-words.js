module.exports = {
  "title": "Find Non-Repeated Words",
  "difficulty": "hard",
  "acceptance": "77%",

  "description": `
    <p>Given a sentence, return a sorted list of words that appear exactly once.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read a string containing words separated by spaces</li>
      <li>Return a sorted list of words that appear exactly once in the sentence</li>
    </ul>
    <p><b>Constraints:</b></p>
    <ul>
      <li>Words are case-sensitive strings</li>
      <li>Return the result in sorted alphabetical order</li>
      <li>Each word appears only once in the result</li>
      <li>If all words are repeated, return an empty list</li>
    </ul>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
hello world hello python code world hi
Output:
['code', 'hi', 'python']</pre>
    <p><b>Explanation:</b> Words 'hello' and 'world' appear twice, so they're excluded. Words 'python', 'code', and 'hi' appear once.</p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
apple apple apple
Output:
[]</pre>
    <p><b>Explanation:</b> All words are repeated (appear more than once).</p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['code', 'hi', 'python']", "stdinput": "hello world hello python code world hi" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "apple apple apple" },
    { "id": 3, "input": [], "expected": "['a', 'b', 'c', 'd', 'e']", "stdinput": "a b c d e" },
    { "id": 4, "input": [], "expected": "['unique']", "stdinput": "unique repeat repeat repeat" },
    { "id": 5, "input": [], "expected": "['cat', 'fish', 'rabbit']", "stdinput": "cat dog dog fish bird bird rabbit" }
  ],

  "templates": {
    "python": "words = input().split()\nseen = {}\nunique = set()\n\nfor w in words:\n    if w not in seen:\n        seen[w] = 1\n    else:\n        seen[w] += 1\n\nfor w in seen:\n    if seen[w] == 1:\n        unique.add(w)\n\nresult = sorted(unique)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String line = scanner.nextLine();\n        \n        if (line.trim().isEmpty()) {\n            System.out.println(\"[]\");\n            return;\n        }\n        \n        String[] words = line.split(\" \");\n        Map<String, Integer> seen = new HashMap<>();\n        \n        for (String word : words) {\n            seen.put(word, seen.getOrDefault(word, 0) + 1);\n        }\n        \n        Set<String> unique = new HashSet<>();\n        for (String word : seen.keySet()) {\n            if (seen.get(word) == 1) {\n                unique.add(word);\n            }\n        }\n        \n        Set<String> sortedUnique = new TreeSet<>(unique);\n        System.out.println(sortedUnique);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ').filter(word => word.length > 0);\n    const seen = new Map();\n    \n    for (const word of words) {\n        seen.set(word, (seen.get(word) || 0) + 1);\n    }\n    \n    const unique = new Set();\n    for (const [word, count] of seen.entries()) {\n        if (count === 1) {\n            unique.add(word);\n        }\n    }\n    \n    const result = Array.from(unique).sort();\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    \n    if (line.empty()) {\n        cout << \"[]\" << endl;\n        return 0;\n    }\n    \n    stringstream ss(line);\n    string word;\n    unordered_map<string, int> seen;\n    \n    while (ss >> word) {\n        seen[word]++;\n    }\n    \n    set<string> unique;\n    for (const auto& entry : seen) {\n        if (entry.second == 1) {\n            unique.insert(entry.first);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& word : unique) {\n        if (!first) cout << \", \";\n        cout << \"'\" << word << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "words = input().split()\nseen = {}\nunique = set()\n\nfor w in words:\n    if w not in seen:\n        seen[w] = 1\n    else:\n        seen[w] += 1\n\nfor w in seen:\n    if seen[w] == 1:\n        unique.add(w)\n\nresult = sorted(unique)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String line = scanner.nextLine();\n        \n        if (line.trim().isEmpty()) {\n            System.out.println(\"[]\");\n            return;\n        }\n        \n        String[] words = line.split(\" \");\n        Map<String, Integer> seen = new HashMap<>();\n        \n        for (String word : words) {\n            seen.put(word, seen.getOrDefault(word, 0) + 1);\n        }\n        \n        Set<String> unique = new HashSet<>();\n        for (String word : seen.keySet()) {\n            if (seen.get(word) == 1) {\n                unique.add(word);\n            }\n        }\n        \n        Set<String> sortedUnique = new TreeSet<>(unique);\n        System.out.println(sortedUnique);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nreadline.question('', (input) => {\n    const words = input.split(' ').filter(word => word.length > 0);\n    const seen = new Map();\n    \n    for (const word of words) {\n        seen.set(word, (seen.get(word) || 0) + 1);\n    }\n    \n    const unique = new Set();\n    for (const [word, count] of seen.entries()) {\n        if (count === 1) {\n            unique.add(word);\n        }\n    }\n    \n    const result = Array.from(unique).sort();\n    console.log(JSON.stringify(result));\n    readline.close();\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <unordered_map>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    \n    if (line.empty()) {\n        cout << \"[]\" << endl;\n        return 0;\n    }\n    \n    stringstream ss(line);\n    string word;\n    unordered_map<string, int> seen;\n    \n    while (ss >> word) {\n        seen[word]++;\n    }\n    \n    set<string> unique;\n    for (const auto& entry : seen) {\n        if (entry.second == 1) {\n            unique.insert(entry.first);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& word : unique) {\n        if (!first) cout << \", \";\n        cout << \"'\" << word << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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