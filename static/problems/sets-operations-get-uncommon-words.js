module.exports = {
  "title": "Uncommon Words – Symmetric Difference",
  "difficulty": "medium",
  "acceptance": "91%",

  "description": `
    <p>You are given two lists of words. Find all words that appear in <b>only one</b> of the lists, not in both.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>The first line contains the first list of words</li>
      <li>The second line contains the second list of words</li>
      <li>Find all words that are in <b>either the first list OR the second list, but NOT in both</b></li>
      <li>Print these uncommon words in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Words that appear in <b>both lists</b> are <b>not included</b> in the output</li>
      <li>Words that appear in <b>only one list</b> (either first or second) are included</li>
      <li>Words are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical order</b></li>
      <li>Each word appears only once in output, even if repeated in its original list</li>
    </ul>
    <p>This finds words that are unique to each list - the words that make each list different from the other.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
apple banana cherry
banana date fig
Output:
['apple', 'cherry', 'date', 'fig']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>apple, banana, cherry</code></li>
      <li>Second list: <code>banana, date, fig</code></li>
      <li><code>banana</code> is in both → excluded</li>
      <li>Uncommon words: <code>apple, cherry, date, fig</code></li>
      <li>Sorted: <code>apple, cherry, date, fig</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
cat dog fish
dog fish bird
Output:
['bird', 'cat']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First list: <code>cat, dog, fish</code></li>
      <li>Second list: <code>dog, fish, bird</code></li>
      <li><code>dog</code> and <code>fish</code> are in both → excluded</li>
      <li>Uncommon words: <code>cat</code> (only in first), <code>bird</code> (only in second)</li>
      <li>Sorted: <code>bird, cat</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['apple', 'cherry', 'date', 'fig']", "stdinput": "apple banana cherry\nbanana date fig" },
    { "id": 2, "input": [], "expected": "['bird', 'cat']", "stdinput": "cat dog fish\ndog fish bird" },
    { "id": 3, "input": [], "expected": "['blue', 'green', 'red', 'yellow']", "stdinput": "red blue\ngreen yellow" },
    { "id": 5, "input": [], "expected": "['a', 'd', 'e', 'f']", "stdinput": "a b c\nb c d e f" },
    { "id": 7, "input": [], "expected": "['java', 'python', 'ruby', 'swift']", "stdinput": "python java\nruby swift" },
    { "id": 8, "input": [], "expected": "[]", "stdinput": "same same same\nsame same same" },
    { "id": 9, "input": [], "expected": "['john', 'lisa', 'mark', 'sara']", "stdinput": "john mary peter\nmary peter sara lisa mark" }
  ],

  "templates": {
    "python": "a = set(input().split())\nb = set(input().split())\nresult = sorted(a ^ b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Set<String> setA = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        Set<String> setB = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        \n        Set<String> symmetricDiff = new TreeSet<>(setA);\n        symmetricDiff.addAll(setB);\n        \n        Set<String> intersection = new HashSet<>(setA);\n        intersection.retainAll(setB);\n        \n        symmetricDiff.removeAll(intersection);\n        \n        System.out.println(symmetricDiff);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const setA = new Set(lines[0].split(' '));\n        const setB = new Set(lines[1].split(' '));\n        \n        const symmetricDiff = new Set([\n            ...[...setA].filter(x => !setB.has(x)),\n            ...[...setB].filter(x => !setA.has(x))\n        ]);\n        \n        const result = Array.from(symmetricDiff).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    set<string> setA, setB;\n    stringstream ss1(line1), ss2(line2);\n    string word;\n    \n    while (ss1 >> word) setA.insert(word);\n    while (ss2 >> word) setB.insert(word);\n    \n    set<string> symmetricDiff;\n    \n    for (const string& w : setA) {\n        if (setB.find(w) == setB.end()) {\n            symmetricDiff.insert(w);\n        }\n    }\n    \n    for (const string& w : setB) {\n        if (setA.find(w) == setA.end()) {\n            symmetricDiff.insert(w);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& w : symmetricDiff) {\n        if (!first) cout << \", \";\n        cout << \"'\" << w << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
  },


  "solutions": {
    "python": "a = set(input().split())\nb = set(input().split())\nresult = sorted(a ^ b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Set<String> setA = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        Set<String> setB = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        \n        Set<String> symmetricDiff = new TreeSet<>(setA);\n        symmetricDiff.addAll(setB);\n        \n        Set<String> intersection = new HashSet<>(setA);\n        intersection.retainAll(setB);\n        \n        symmetricDiff.removeAll(intersection);\n        \n        System.out.println(symmetricDiff);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const setA = new Set(lines[0].split(' '));\n        const setB = new Set(lines[1].split(' '));\n        \n        const symmetricDiff = new Set([\n            ...[...setA].filter(x => !setB.has(x)),\n            ...[...setB].filter(x => !setA.has(x))\n        ]);\n        \n        const result = Array.from(symmetricDiff).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    set<string> setA, setB;\n    stringstream ss1(line1), ss2(line2);\n    string word;\n    \n    while (ss1 >> word) setA.insert(word);\n    while (ss2 >> word) setB.insert(word);\n    \n    set<string> symmetricDiff;\n    \n    for (const string& w : setA) {\n        if (setB.find(w) == setB.end()) {\n            symmetricDiff.insert(w);\n        }\n    }\n    \n    for (const string& w : setB) {\n        if (setA.find(w) == setA.end()) {\n            symmetricDiff.insert(w);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& w : symmetricDiff) {\n        if (!first) cout << \", \";\n        cout << \"'\" << w << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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