module.exports = module.exports = {
  "title": "Common Skills – Set Intersection",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>Two people list their skills. Find which skills they have in common.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>Read the list of first person's skills</li>
      <li>Read the list of second person's skills</li>
      <li>Find all skills that appear in <b>both lists</b></li>
      <li>Print these common skills in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Only skills that appear in <b>both lists</b> are included</li>
      <li>Skills are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical order</b></li>
      <li>If no common skills exist, print an empty list</li>
      <li>Each skill appears only once in output</li>
    </ul>
    <p>This is like finding overlapping expertise between two job candidates or team members.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
python java c++ javascript
java python ruby php
Output:
['java', 'python']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First person: <code>python, java, c++, javascript</code></li>
      <li>Second person: <code>java, python, ruby, php</code></li>
      <li>Common skills: <code>java</code> and <code>python</code></li>
      <li>Sorted: <code>java, python</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
design marketing writing
coding data analysis
Output:
[]</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First person: <code>design, marketing, writing</code></li>
      <li>Second person: <code>coding, data, analysis</code></li>
      <li>No common skills</li>
      <li>Output: empty list</li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['java', 'python']", "stdinput": "python java c++ javascript\njava python ruby php" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "design marketing writing\ncoding data analysis" },
    { "id": 3, "input": [], "expected": "['cooking', 'painting']", "stdinput": "cooking painting gardening\npainting cooking singing" },
    { "id": 4, "input": [], "expected": "['math', 'science']", "stdinput": "math science history\nscience math geography" },
    { "id": 5, "input": [], "expected": "['red']", "stdinput": "red blue green\nred yellow purple" }
  ],

  "templates": {
    "python": "a = set(input().split())\nb = set(input().split())\nresult = sorted(a & b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        Set<String> setA = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        Set<String> setB = new HashSet<>(Arrays.asList(scanner.nextLine().split(\" \")));\n        \n        Set<String> intersection = new TreeSet<>(setA);\n        intersection.retainAll(setB);\n        \n        System.out.println(intersection);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 2) {\n        const setA = new Set(lines[0].split(' '));\n        const setB = new Set(lines[1].split(' '));\n        \n        const intersection = new Set([...setA].filter(x => setB.has(x)));\n        const result = Array.from(intersection).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    string line1, line2;\n    getline(cin, line1);\n    getline(cin, line2);\n    \n    set<string> setA, setB;\n    stringstream ss1(line1), ss2(line2);\n    string skill;\n    \n    while (ss1 >> skill) setA.insert(skill);\n    while (ss2 >> skill) setB.insert(skill);\n    \n    set<string> intersection;\n    for (const string& skill : setA) {\n        if (setB.find(skill) != setB.end()) {\n            intersection.insert(skill);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& skill : intersection) {\n        if (!first) cout << \", \";\n        cout << \"'\" << skill << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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