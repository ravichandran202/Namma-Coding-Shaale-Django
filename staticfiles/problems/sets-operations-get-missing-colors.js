module.exports = module.exports = {
  "title": "Missing Colors",
  "difficulty": "medium",
  "acceptance": "93%",

  "description": `
    <p>You have two sets of colors. Find which colors from the first set are <b>not present</b> in the second set.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, you receive a number <code>n</code> - the count of colors in the first set</li>
      <li>Next, you receive <code>n</code> colors</li>
      <li>Then, you receive a number <code>m</code> - the count of colors in the second set</li>
      <li>Finally, you receive <code>m</code> colors</li>
      <li>Print all colors from the <b>first set</b> that are <b>not in the second set</b>, in <b>sorted order</b></li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Only colors from the <b>first set</b> are considered</li>
      <li>A color is included in output only if it's in the first set but <b>not</b> in the second set</li>
      <li>Colors are <b>case-sensitive</b></li>
      <li>Output is in <b>sorted alphabetical order</b></li>
      <li>If all colors from first set are in second set, output is an empty list</li>
    </ul>
    <p>This is like finding which colors from your collection are missing from your friend's collection.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
4
red blue green yellow
3
blue yellow orange
Output:
['green', 'red']</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First set: <code>red, blue, green, yellow</code></li>
      <li>Second set: <code>blue, yellow, orange</code></li>
      <li>Colors in first but not in second: <code>red, green</code></li>
      <li>Sorted: <code>green, red</code></li>
      <li>Note: <code>orange</code> is not in first set, so not considered</li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
3
apple banana cherry
4
apple banana cherry date
Output:
[]</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>First set: <code>apple, banana, cherry</code></li>
      <li>Second set: <code>apple, banana, cherry, date</code></li>
      <li>All colors from first set are in second set</li>
      <li>Output: empty list</li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "['green', 'red']", "stdinput": "4\nred blue green yellow\n3\nblue yellow orange" },
    { "id": 2, "input": [], "expected": "[]", "stdinput": "3\napple banana cherry\n4\napple banana cherry date" },
    { "id": 3, "input": [], "expected": "['cat', 'dog']", "stdinput": "4\ncat dog fish bird\n3\nfish bird rabbit" },
    { "id": 4, "input": [], "expected": "['1', '3', '5']", "stdinput": "5\n1 2 3 4 5\n3\n2 4 6" },
    { "id": 5, "input": [], "expected": "['a', 'c', 'e']", "stdinput": "5\na b c d e\n3\nb d f" }
  ],

  "templates": {
    "python": "n = int(input())\na = set(input().split())\nm = int(input())\nb = set(input().split())\nresult = sorted(a - b)\nprint(result)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setA = new HashSet<>();\n        String[] colorsA = scanner.nextLine().split(\" \");\n        for (String color : colorsA) {\n            setA.add(color);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> setB = new HashSet<>();\n        String[] colorsB = scanner.nextLine().split(\" \");\n        for (String color : colorsB) {\n            setB.add(color);\n        }\n        \n        Set<String> difference = new TreeSet<>(setA);\n        difference.removeAll(setB);\n        \n        System.out.println(difference);\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const setA = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const setB = new Set(lines[3].split(' '));\n        \n        const difference = new Set([...setA].filter(x => !setB.has(x)));\n        const result = Array.from(difference).sort();\n        \n        console.log(JSON.stringify(result));\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <set>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    set<string> setA;\n    for (int i = 0; i < n; i++) {\n        string color;\n        cin >> color;\n        setA.insert(color);\n    }\n    \n    cin >> m;\n    set<string> setB;\n    for (int i = 0; i < m; i++) {\n        string color;\n        cin >> color;\n        setB.insert(color);\n    }\n    \n    set<string> difference;\n    for (const string& color : setA) {\n        if (setB.find(color) == setB.end()) {\n            difference.insert(color);\n        }\n    }\n    \n    cout << \"[\";\n    bool first = true;\n    for (const string& color : difference) {\n        if (!first) cout << \", \";\n        cout << \"'\" << color << \"'\";\n        first = false;\n    }\n    cout << \"]\" << endl;\n    \n    return 0;\n}"
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