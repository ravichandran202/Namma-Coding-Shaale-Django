module.exports = {
  "title": "Check Subset – Subset Verification",
  "difficulty": "medium",
  "acceptance": "92%",

  "description": `
    <p>You have two sets of items. Check if all items in the second set are also present in the first set.</p>
    <p><b>How it works:</b></p>
    <ul>
      <li>First, read a number <code>n</code> - the count of items you have</li>
      <li>Next, read <code>n</code> items from the input</li>
      <li>Then, read a number <code>m</code> - the count of items you need</li>
      <li>Finally, read <code>m</code> items from the input</li>
      <li>Print <code>True</code> if <b>all</b> needed items are present in what you have</li>
      <li>Print <code>False</code> if <b>any</b> needed item is missing from what you have</li>
    </ul>
    <p><b>Important Notes:</b></p>
    <ul>
      <li>Check if <b>every</b> item in the "need" set is also in the "have" set</li>
      <li>Items are <b>case-sensitive</b></li>
      <li>Output is exactly <code>True</code> or <code>False</code> (capital T and F)</li>
      <li>If the "need" set is empty, it's always a subset (print <code>True</code>)</li>
      <li>The "have" set can have extra items not in the "need" set</li>
    </ul>
    <p>This is like checking if you have all the required ingredients for a recipe.</p>
  `,

  "examples": `
    <h3>Example 1</h3>
    <pre class="constraints">Input:
5
apple banana cherry date fig
3
banana date apple
Output:
True</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Have: <code>apple, banana, cherry, date, fig</code></li>
      <li>Need: <code>banana, date, apple</code></li>
      <li>All needed items (banana, date, apple) are in the have set</li>
      <li>Output: <code>True</code></li>
    </ul>
    </p>
    
    <h3>Example 2</h3>
    <pre class="constraints">Input:
4
red blue green yellow
3
red blue purple
Output:
False</pre>
    <p><b>Explanation:</b> 
    <ul>
      <li>Have: <code>red, blue, green, yellow</code></li>
      <li>Need: <code>red, blue, purple</code></li>
      <li><code>purple</code> is needed but not in have set</li>
      <li>Output: <code>False</code></li>
    </ul>
    </p>
  `,

  "testCases": [
    { "id": 1, "input": [], "expected": "True", "stdinput": "5\napple banana cherry date fig\n3\nbanana date apple" },
    { "id": 2, "input": [], "expected": "False", "stdinput": "4\nred blue green yellow\n3\nred blue purple" },
    { "id": 3, "input": [], "expected": "True", "stdinput": "6\n1 2 3 4 5 6\n3\n2 4 6" },
    { "id": 4, "input": [], "expected": "False", "stdinput": "4\ncat dog bird fish\n3\ncat dog rabbit" },
    { "id": 5, "input": [], "expected": "True", "stdinput": "1\npython\n1\npython" },
    { "id": 6, "input": [], "expected": "False", "stdinput": "5\njan feb mar apr may\n3\njan feb jun" }
  ],

  "templates": {
    "python": "n = int(input())\nhave = set(input().split())\nm = int(input())\nneed = set(input().split())\nif need.issubset(have):\n    print(True)\nelse:\n    print(False)",
    "java": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> haveSet = new HashSet<>();\n        String[] haveArray = scanner.nextLine().split(\" \");\n        for (String item : haveArray) {\n            haveSet.add(item);\n        }\n        \n        int m = scanner.nextInt();\n        scanner.nextLine();\n        \n        Set<String> needSet = new HashSet<>();\n        if (m > 0) {\n            String[] needArray = scanner.nextLine().split(\" \");\n            for (String item : needArray) {\n                needSet.add(item);\n            }\n        }\n        \n        if (haveSet.containsAll(needSet)) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
    "javascript": "const readline = require('readline').createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nlet lines = [];\nreadline.on('line', (line) => {\n    lines.push(line);\n    if (lines.length === 4) {\n        const n = parseInt(lines[0]);\n        const haveSet = new Set(lines[1].split(' '));\n        const m = parseInt(lines[2]);\n        const needSet = new Set(lines[3].split(' ').filter(x => x.length > 0));\n        \n        let isSubset = true;\n        for (const item of needSet) {\n            if (!haveSet.has(item)) {\n                isSubset = false;\n                break;\n            }\n        }\n        \n        console.log(isSubset);\n        readline.close();\n    }\n});",
    "c++": "#include <iostream>\n#include <unordered_set>\n#include <string>\nusing namespace std;\n\nint main() {\n    int n, m;\n    cin >> n;\n    \n    unordered_set<string> haveSet;\n    for (int i = 0; i < n; i++) {\n        string item;\n        cin >> item;\n        haveSet.insert(item);\n    }\n    \n    cin >> m;\n    unordered_set<string> needSet;\n    for (int i = 0; i < m; i++) {\n        string item;\n        cin >> item;\n        needSet.insert(item);\n    }\n    \n    bool isSubset = true;\n    for (const string& item : needSet) {\n        if (haveSet.find(item) == haveSet.end()) {\n            isSubset = false;\n            break;\n        }\n    }\n    \n    if (isSubset) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    \n    return 0;\n}"
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